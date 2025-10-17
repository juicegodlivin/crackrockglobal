'use client';

import { useState, useMemo, useEffect } from 'react';
import PredictionCard from '@/components/dashboard/PredictionCard';
import StatsBar from '@/components/dashboard/StatsBar';
import FilterBar from '@/components/dashboard/FilterBar';
import CategoryHeader from '@/components/dashboard/CategoryHeader';
import type { Prediction, Stats } from '@/types/dashboard';
import { useCoinGeckoData } from '@/hooks/useCoinGeckoData';
import { RefreshCw } from 'lucide-react';
import { clearAllCaches, getCacheInfo } from '@/utils/coingecko';

export default function DashboardPage() {
  const [sortBy, setSortBy] = useState<'volume' | 'default'>('default');
  const [filterBy, setFilterBy] = useState<string>('all');
  const [forceRefresh, setForceRefresh] = useState(0);
  const [basePredictions, setBasePredictions] = useState<Prediction[]>([]);
  const [stats, setStats] = useState<Stats>({ activeMarkets: 0, totalVolume: '$0', todaysWinners: 0 });
  const [dataLoading, setDataLoading] = useState(true);
  
  // Load predictions and stats from API
  useEffect(() => {
    const loadData = async () => {
      try {
        const [predictionsRes, statsRes] = await Promise.all([
          fetch('/api/predictions'),
          fetch('/api/stats')
        ]);
        
        if (predictionsRes.ok && statsRes.ok) {
          const predictionsData = await predictionsRes.json();
          const statsData = await statsRes.json();
          setBasePredictions(predictionsData);
          setStats(statsData);
        }
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setDataLoading(false);
      }
    };
    
    loadData();
  }, [forceRefresh]);
  
  // Enrich predictions with CoinGecko data
  const { predictions, loading: coinGeckoLoading } = useCoinGeckoData(basePredictions, forceRefresh);
  
  const loading = dataLoading || coinGeckoLoading;
  
  const handleRefresh = () => {
    clearAllCaches();
    setForceRefresh(prev => prev + 1);
  };
  
  const cacheInfo = getCacheInfo();
  const lastFetchTime = cacheInfo.lastFetch 
    ? new Date(cacheInfo.lastFetch).toLocaleTimeString() 
    : 'Never';

  // Filter for trending predictions
  const trendingPredictions = useMemo(() => {
    let filtered = predictions.filter(p => p.trending);
    
    if (sortBy === 'volume') {
      filtered = [...filtered].sort((a, b) => {
        const aVol = a.volume ? parseFloat(a.volume.replace(/[$MB]/g, '')) : 0;
        const bVol = b.volume ? parseFloat(b.volume.replace(/[$MB]/g, '')) : 0;
        return bVol - aVol;
      });
    }
    
    return filtered;
  }, [predictions, sortBy]);

  return (
    <div>
      {/* Breadcrumb */}
      <div className="text-sm text-[var(--muted-foreground)] mb-4">
        Dashboard / <span className="text-[var(--foreground)]">Live Prediction Markets</span>
      </div>

      {/* Header with stats */}
      <div className="flex items-start justify-between mb-8">
        <CategoryHeader 
          title="Live Prediction Markets"
          description="AI-analyzed token predictions with real-time betting markets"
        />
        <div className="flex items-center gap-3">
          <button
            onClick={handleRefresh}
            disabled={loading}
            className="flex items-center gap-2 px-4 py-2 bg-[var(--secondary)] hover:bg-[var(--muted)] text-[var(--secondary-foreground)] rounded-lg transition-colors text-sm font-medium disabled:opacity-50"
            title="Refresh token data (clears cache)"
          >
            <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
            Refresh Data
          </button>
          <FilterBar 
            currentSort={sortBy}
            onSortChange={setSortBy}
          />
        </div>
      </div>
      
      {/* Cache Info */}
      <div className="mb-4 text-xs text-[var(--muted-foreground)]">
        Last data fetch: {lastFetchTime} • {cacheInfo.memoryCount} tokens cached • Cache expires after 10 minutes
      </div>

      {/* Stats Bar */}
      <div className="mb-8">
        <StatsBar stats={stats} />
      </div>

      {/* Loading State */}
      {loading && (
        <div className="text-center py-16">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[var(--primary)]"></div>
          <p className="text-[var(--muted-foreground)] mt-4">Loading market data...</p>
        </div>
      )}

      {/* Prediction Cards Grid */}
      {!loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {trendingPredictions.map((prediction) => (
            <PredictionCard key={prediction.id} prediction={prediction} />
          ))}
        </div>
      )}

      {!loading && trendingPredictions.length === 0 && (
        <div className="text-center py-16">
          <p className="text-[var(--muted-foreground)]">No trending predictions at the moment.</p>
        </div>
      )}
    </div>
  );
}

