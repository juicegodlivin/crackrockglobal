'use client';

import { useState } from 'react';
import { BarChart3, TrendingUp, Clock, DollarSign, Users, RefreshCw, AlertCircle } from 'lucide-react';
import CategoryHeader from '@/components/dashboard/CategoryHeader';

export default function PolymarketPage() {
  const [loading, setLoading] = useState(false);

  const handleRefresh = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => setLoading(false), 1000);
  };

  // Mock data structure for future API integration
  const mockMarkets = [
    {
      id: 1,
      question: "Will Bitcoin reach $100,000 by end of 2024?",
      category: "Crypto",
      volume: "$0",
      probability: 50,
      traders: 0,
      endsAt: "Dec 31, 2024",
      image: "https://via.placeholder.com/40"
    },
    {
      id: 2,
      question: "Will Trump win the 2024 election?",
      category: "Politics",
      volume: "$0",
      probability: 50,
      traders: 0,
      endsAt: "Nov 5, 2024",
      image: "https://via.placeholder.com/40"
    },
    {
      id: 3,
      question: "Will AI reach AGI in 2024?",
      category: "Technology",
      volume: "$0",
      probability: 50,
      traders: 0,
      endsAt: "Dec 31, 2024",
      image: "https://via.placeholder.com/40"
    }
  ];

  return (
    <div>
      {/* Breadcrumb */}
      <div className="text-sm text-[var(--muted-foreground)] mb-4">
        Dashboard / Analytics / <span className="text-[var(--foreground)]">Polymarket Predictions</span>
      </div>

      {/* Header */}
      <div className="flex items-start justify-between mb-8">
        <CategoryHeader 
          title="Polymarket Predictions"
          description="Real-time prediction market data from Polymarket's decentralized platform"
        />
        <button
          onClick={handleRefresh}
          disabled={loading}
          className="flex items-center gap-2 px-4 py-2 bg-[var(--primary)] hover:opacity-90 text-[var(--primary-foreground)] rounded-lg transition-opacity disabled:opacity-50"
        >
          <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
          Refresh Data
        </button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-[var(--muted-foreground)]">Active Markets</span>
            <BarChart3 size={20} className="text-[var(--primary)]" />
          </div>
          <div className="text-3xl font-bold text-[var(--card-foreground)]">0</div>
          <div className="text-xs text-[var(--muted-foreground)] mt-1">No data yet</div>
        </div>

        <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-[var(--muted-foreground)]">Total Volume</span>
            <DollarSign size={20} className="text-[var(--primary)]" />
          </div>
          <div className="text-3xl font-bold text-[var(--card-foreground)]">$0</div>
          <div className="text-xs text-[var(--muted-foreground)] mt-1">No data yet</div>
        </div>

        <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-[var(--muted-foreground)]">Active Traders</span>
            <Users size={20} className="text-[var(--primary)]" />
          </div>
          <div className="text-3xl font-bold text-[var(--card-foreground)]">0</div>
          <div className="text-xs text-[var(--muted-foreground)] mt-1">No data yet</div>
        </div>

        <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-[var(--muted-foreground)]">Avg. Accuracy</span>
            <TrendingUp size={20} className="text-[var(--primary)]" />
          </div>
          <div className="text-3xl font-bold text-[var(--card-foreground)]">0%</div>
          <div className="text-xs text-[var(--muted-foreground)] mt-1">No data yet</div>
        </div>
      </div>

      {/* API Integration Notice */}
      <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 mb-8">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="text-lg font-bold text-blue-600 mb-2">
              🚧 Coming Soon: Live Polymarket Integration
            </h3>
            <p className="text-sm text-[var(--card-foreground)] mb-3">
              This page will be powered by the Polymarket API to display real-time prediction market data. 
              You'll be able to see live markets, trading activity, probabilities, and historical performance.
            </p>
            <div className="text-xs text-[var(--muted-foreground)]">
              <strong>Planned Features:</strong>
              <ul className="list-disc list-inside mt-1 space-y-1 ml-2">
                <li>Real-time market data and probabilities</li>
                <li>Historical accuracy tracking</li>
                <li>Volume and trader analytics</li>
                <li>Category filtering and search</li>
                <li>Market trends and insights</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Mock Markets Preview */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Top Markets Preview
          <span className="ml-2 text-xs text-[var(--muted-foreground)] font-normal">(Mock Data)</span>
        </h2>
      </div>

      {/* Markets Grid */}
      <div className="space-y-4">
        {mockMarkets.map((market) => (
          <div
            key={market.id}
            className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs px-2 py-1 rounded-full bg-[var(--muted)] text-[var(--muted-foreground)] font-medium">
                    {market.category}
                  </span>
                  <span className="text-xs text-[var(--muted-foreground)] flex items-center gap-1">
                    <Clock size={12} />
                    Ends {market.endsAt}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-[var(--card-foreground)] mb-3">
                  {market.question}
                </h3>

                {/* Probability Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-green-500 font-bold">YES {market.probability}%</span>
                    <span className="text-red-500 font-bold">NO {100 - market.probability}%</span>
                  </div>
                  <div className="h-2 bg-[var(--muted)] rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-green-500 to-green-600 transition-all duration-500"
                      style={{ width: `${market.probability}%` }}
                    />
                  </div>
                </div>

                {/* Market Stats */}
                <div className="flex items-center gap-6 text-sm text-[var(--muted-foreground)]">
                  <div className="flex items-center gap-2">
                    <DollarSign size={14} />
                    <span>Volume: <strong className="text-[var(--card-foreground)]">{market.volume}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={14} />
                    <span>Traders: <strong className="text-[var(--card-foreground)]">{market.traders.toLocaleString()}</strong></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[var(--border)] flex items-center justify-between">
              <span className="text-xs text-[var(--muted-foreground)]">
                Powered by Polymarket
              </span>
              <button className="px-4 py-2 bg-[var(--primary)] hover:opacity-90 text-[var(--primary-foreground)] rounded-lg transition-opacity text-sm font-medium">
                View on Polymarket
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Development Notes */}
      <div className="mt-8 p-6 bg-[var(--muted)]/50 border border-[var(--border)] rounded-xl">
        <h3 className="text-sm font-bold text-[var(--card-foreground)] mb-2">
          📝 For Developers
        </h3>
        <p className="text-xs text-[var(--muted-foreground)] mb-3">
          This page is ready for Polymarket API integration. When implementing:
        </p>
        <ul className="text-xs text-[var(--muted-foreground)] space-y-1 ml-4 list-disc">
          <li>Create API route at <code className="text-[var(--primary)]">/api/polymarket/route.ts</code></li>
          <li>Implement data fetching hook similar to <code className="text-[var(--primary)]">useCoinGeckoData</code></li>
          <li>Add caching layer to avoid rate limits</li>
          <li>Replace mock data with real market data from Polymarket API</li>
          <li>Add filtering, sorting, and search functionality</li>
        </ul>
      </div>
    </div>
  );
}

