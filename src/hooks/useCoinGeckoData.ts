'use client';

import { useState, useEffect, useMemo, useRef } from 'react';
import { fetchMultipleTokens } from '@/utils/coingecko';
import type { Prediction } from '@/types/dashboard';

export function useCoinGeckoData(predictions: Prediction[], forceRefresh: number = 0) {
  // Initialize with the predictions data immediately (don't wait for fetch)
  const [enrichedPredictions, setEnrichedPredictions] = useState<Prediction[]>(predictions);
  const [loading, setLoading] = useState(false);
  
  // Use a ref to track if a fetch is in progress to prevent duplicate calls
  const fetchInProgress = useRef(false);
  const lastFetchSignature = useRef<string>('');
  
  // Create a signature of the predictions data to detect changes
  const predictionsSignature = useMemo(() => {
    return predictions.map(p => `${p.id}-${p.coingeckoId || 'none'}`).join('|');
  }, [predictions]);
  
  // Update predictions, but preserve existing tokenImages to prevent flickering
  useEffect(() => {
    setEnrichedPredictions(prevEnriched => {
      // If this is the first load, just use the new predictions
      if (prevEnriched.length === 0) {
        return predictions;
      }
      
      // Merge new predictions with existing enriched data to preserve tokenImages
      return predictions.map(pred => {
        const existing = prevEnriched.find(p => p.id === pred.id);
        // If we have existing data with a tokenImage, preserve it
        if (existing?.tokenImage) {
          return {
            ...pred,
            tokenImage: existing.tokenImage,
            // Also preserve other enriched fields if they exist
            price: existing.price || pred.price,
            volume: existing.volume || pred.volume,
            change24h: existing.change24h || pred.change24h,
          };
        }
        return pred;
      });
    });
  }, [predictions]);

  useEffect(() => {
    async function fetchAllTokenData() {
      // Create a unique signature for this fetch attempt
      const currentSignature = `${predictionsSignature}-${forceRefresh}`;
      
      // Skip if a fetch is already in progress or if we just fetched this exact data
      if (fetchInProgress.current) {
        console.log('⏭️ Skipping fetch - already in progress');
        return;
      }
      
      if (lastFetchSignature.current === currentSignature && forceRefresh === 0) {
        console.log('⏭️ Skipping fetch - data unchanged');
        return;
      }
      
      fetchInProgress.current = true;
      lastFetchSignature.current = currentSignature;
      setLoading(true);
      
      console.log('🔄 Starting CoinGecko data fetch...');
      
      try {
        // Separate crypto predictions from others
        const cryptoPredictions = predictions.filter(
          p => p.coingeckoId && p.extendedInfo.type === 'crypto'
        );
        const otherPredictions = predictions.filter(
          p => !p.coingeckoId || p.extendedInfo.type !== 'crypto'
        );
        
        // Get all unique CoinGecko IDs
        const coinGeckoIds = Array.from(new Set(cryptoPredictions.map(p => p.coingeckoId!)));
        
        if (coinGeckoIds.length === 0) {
          console.log('No crypto predictions to fetch');
          setEnrichedPredictions(predictions);
          return;
        }
        
        console.log(`Fetching data for ${coinGeckoIds.length} tokens:`, coinGeckoIds);
        
        // Fetch all tokens in a SINGLE batch request
        const tokenDataMap = await fetchMultipleTokens(coinGeckoIds);
        
        // Enrich crypto predictions with fetched data
        const enrichedCrypto = cryptoPredictions.map(prediction => {
          const tokenData = tokenDataMap[prediction.coingeckoId!];
          
          if (tokenData) {
            return {
              ...prediction,
              tokenImage: tokenData.image,
              price: tokenData.price,
              volume: tokenData.volume,
              change24h: tokenData.change24h,
              extendedInfo: {
                ...prediction.extendedInfo,
                marketCap: tokenData.marketCap,
              }
            };
          } else {
            console.warn(`⚠️ No CoinGecko data for ${prediction.ticker} (${prediction.coingeckoId})`);
            return prediction;
          }
        });
        
        // Combine and maintain original order
        const updated = [...enrichedCrypto, ...otherPredictions].sort((a, b) => {
          const aIndex = predictions.findIndex(p => p.id === a.id);
          const bIndex = predictions.findIndex(p => p.id === b.id);
          return aIndex - bIndex;
        });

        console.log('✅ CoinGecko data fetch complete. Updated predictions:', updated.filter(p => p.tokenImage).length, 'with images');
        setEnrichedPredictions(updated);
      } catch (error) {
        console.error('❌ Error in fetchAllTokenData:', error);
      } finally {
        setLoading(false);
        fetchInProgress.current = false;
      }
    }

    fetchAllTokenData();
  }, [predictions, forceRefresh, predictionsSignature]); // Re-fetch when data structure changes

  return { predictions: enrichedPredictions, loading };
}

