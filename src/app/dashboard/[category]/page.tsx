'use client';

import { useState, useMemo, useEffect } from 'react';
import { useParams } from 'next/navigation';
import PredictionCard from '@/components/dashboard/PredictionCard';
import StatsBar from '@/components/dashboard/StatsBar';
import FilterBar from '@/components/dashboard/FilterBar';
import CategoryHeader from '@/components/dashboard/CategoryHeader';
import categories from '@/data/categories.json';
import type { Prediction, Category, Stats } from '@/types/dashboard';
import { useCoinGeckoData } from '@/hooks/useCoinGeckoData';

export default function CategoryPage() {
  const params = useParams();
  const categorySlug = params.category as string;
  
  const [sortBy, setSortBy] = useState<'volume' | 'default'>('default');
  const [filterBy, setFilterBy] = useState<string>('all');
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
  }, []);
  
  // Enrich predictions with CoinGecko data
  const { predictions, loading: coinGeckoLoading } = useCoinGeckoData(basePredictions);
  
  const loading = dataLoading || coinGeckoLoading;

  // Find current category
  const currentCategory = useMemo(() => {
    return (categories as Category[]).find(c => c.slug === categorySlug);
  }, [categorySlug]);

  // Filter predictions by category
  const filteredPredictions = useMemo(() => {
    let filtered: Prediction[];
    
    if (categorySlug === 'all') {
      // Show all predictions
      filtered = predictions;
    } else {
      // Filter by category
      filtered = predictions.filter(p => 
        p.categories.includes(categorySlug)
      );
    }
    
    // Apply sorting
    if (sortBy === 'volume') {
      filtered = [...filtered].sort((a, b) => {
        const aVol = a.volume ? parseFloat(a.volume.replace(/[$MB]/g, '')) : 0;
        const bVol = b.volume ? parseFloat(b.volume.replace(/[$MB]/g, '')) : 0;
        return bVol - aVol;
      });
    }
    
    return filtered;
  }, [categorySlug, predictions, sortBy]);

  if (!currentCategory && categorySlug !== 'all') {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">Category Not Found</h2>
        <p className="text-[var(--muted-foreground)]">The category you're looking for doesn't exist.</p>
      </div>
    );
  }

  return (
    <div>
      {/* Breadcrumb */}
      <div className="text-sm text-[var(--muted-foreground)] mb-4">
        Dashboard / <span className="text-[var(--foreground)]">{currentCategory?.name || 'All Markets'}</span>
      </div>

      {/* Header with stats */}
      <div className="flex items-start justify-between mb-8">
        <CategoryHeader 
          category={currentCategory}
          title={categorySlug === 'all' ? 'All Markets' : currentCategory?.name}
          description={categorySlug === 'all' ? 'Browse all active prediction markets' : currentCategory?.description}
        />
        <FilterBar 
          currentSort={sortBy}
          onSortChange={setSortBy}
        />
      </div>

      {/* Stats Bar (show on Trending and All pages) */}
      {(categorySlug === 'all' || categorySlug === 'trending') && (
        <div className="mb-8">
          <StatsBar stats={stats} />
        </div>
      )}

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
          {filteredPredictions.map((prediction) => (
            <PredictionCard key={prediction.id} prediction={prediction} />
          ))}
        </div>
      )}

      {!loading && filteredPredictions.length === 0 && (
        <div className="text-center py-16">
          <p className="text-[var(--muted-foreground)]">
            No predictions in this category yet. Check back soon!
          </p>
        </div>
      )}
    </div>
  );
}

