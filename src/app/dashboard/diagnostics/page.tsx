'use client';

import { useState, useEffect } from 'react';
import { RefreshCw } from 'lucide-react';

export default function DiagnosticsPage() {
  const [predictions, setPredictions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [coingeckoTest, setCoingeckoTest] = useState<any>(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    
    // Test 1: Load predictions from API
    try {
      const res = await fetch('/api/predictions');
      const data = await res.json();
      setPredictions(data);
    } catch (error) {
      console.error('Error loading predictions:', error);
    }

    // Test 2: Test CoinGecko API directly
    try {
      const res = await fetch('/api/coingecko?ids=solana');
      const data = await res.json();
      setCoingeckoTest(data);
    } catch (error) {
      console.error('Error testing CoinGecko:', error);
    }

    setLoading(false);
  };

  const cryptoPredictions = predictions.filter(p => p.extendedInfo?.type === 'crypto');
  const withImages = predictions.filter(p => p.tokenImage);

  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[var(--foreground)] mb-2">
          Dashboard Diagnostics
        </h1>
        <p className="text-[var(--muted-foreground)]">
          Debug information for prediction market data
        </p>
        <button
          onClick={loadData}
          className="mt-4 flex items-center gap-2 px-4 py-2 bg-[var(--primary)] text-[var(--primary-foreground)] rounded-lg"
        >
          <RefreshCw size={16} />
          Refresh Tests
        </button>
      </div>

      {loading ? (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[var(--primary)] mx-auto"></div>
          <p className="mt-4 text-[var(--muted-foreground)]">Running diagnostics...</p>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Test 1: Predictions Data */}
          <div className="bg-[var(--card)] border border-[var(--border)] rounded-lg p-6">
            <h2 className="text-xl font-bold text-[var(--card-foreground)] mb-4">
              ✅ Test 1: Predictions API
            </h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-[var(--muted-foreground)]">Total Predictions:</span>
                <span className="font-mono font-bold">{predictions.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--muted-foreground)]">Crypto Predictions:</span>
                <span className="font-mono font-bold">{cryptoPredictions.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--muted-foreground)]">With tokenImage:</span>
                <span className="font-mono font-bold">{withImages.length}</span>
              </div>
            </div>
          </div>

          {/* Test 2: CoinGecko API */}
          <div className="bg-[var(--card)] border border-[var(--border)] rounded-lg p-6">
            <h2 className="text-xl font-bold text-[var(--card-foreground)] mb-4">
              ✅ Test 2: CoinGecko API Proxy
            </h2>
            {coingeckoTest && coingeckoTest.length > 0 ? (
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-[var(--muted-foreground)]">Status:</span>
                  <span className="font-bold text-green-500">Working</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--muted-foreground)]">Test Token:</span>
                  <span className="font-mono">{coingeckoTest[0].name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--muted-foreground)]">Image URL:</span>
                  <span className="font-mono text-xs truncate max-w-md">
                    {coingeckoTest[0].image}
                  </span>
                </div>
                {coingeckoTest[0].image && (
                  <div className="mt-4">
                    <p className="text-[var(--muted-foreground)] mb-2">Image Preview:</p>
                    <img 
                      src={coingeckoTest[0].image} 
                      alt="Token" 
                      className="w-16 h-16 rounded-full"
                    />
                  </div>
                )}
              </div>
            ) : (
              <p className="text-red-500">❌ CoinGecko API not returning data</p>
            )}
          </div>

          {/* Test 3: Crypto Predictions Details */}
          <div className="bg-[var(--card)] border border-[var(--border)] rounded-lg p-6">
            <h2 className="text-xl font-bold text-[var(--card-foreground)] mb-4">
              📊 Test 3: Crypto Predictions Details
            </h2>
            <div className="space-y-4">
              {cryptoPredictions.map((pred) => (
                <div key={pred.id} className="p-4 bg-[var(--muted)] rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="font-bold">{pred.ticker}</p>
                      <p className="text-sm text-[var(--muted-foreground)]">{pred.name}</p>
                    </div>
                    {pred.tokenImage && (
                      <img 
                        src={pred.tokenImage} 
                        alt={pred.ticker}
                        className="w-10 h-10 rounded-full"
                      />
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs mt-3">
                    <div>
                      <span className="text-[var(--muted-foreground)]">iconType:</span>
                      <span className="ml-2 font-mono">{pred.iconType || 'missing'}</span>
                    </div>
                    <div>
                      <span className="text-[var(--muted-foreground)]">coingeckoId:</span>
                      <span className="ml-2 font-mono">{pred.coingeckoId || 'missing'}</span>
                    </div>
                    <div>
                      <span className="text-[var(--muted-foreground)]">extendedInfo.type:</span>
                      <span className="ml-2 font-mono">{pred.extendedInfo?.type || 'missing'}</span>
                    </div>
                    <div>
                      <span className="text-[var(--muted-foreground)]">tokenImage:</span>
                      <span className={`ml-2 font-mono ${pred.tokenImage ? 'text-green-500' : 'text-red-500'}`}>
                        {pred.tokenImage ? 'EXISTS' : 'MISSING'}
                      </span>
                    </div>
                  </div>
                  {!pred.tokenImage && pred.coingeckoId && (
                    <p className="mt-2 text-xs text-orange-500">
                      ⚠️ Has coingeckoId but no tokenImage - CoinGecko hook may not be running
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Instructions */}
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6">
            <h2 className="text-xl font-bold text-blue-600 mb-4">
              📝 What to Check:
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-sm text-[var(--card-foreground)]">
              <li>All crypto predictions should have a coingeckoId</li>
              <li>CoinGecko API test should show "Working" with an image</li>
              <li>After visiting the main dashboard, come back here and refresh - tokenImage should now be "EXISTS"</li>
              <li>If tokenImage is still MISSING after visiting dashboard, check browser console for errors</li>
              <li>Look for console logs starting with 🔄, ✅, 🖼️, and 📊</li>
            </ol>
          </div>
        </div>
      )}
    </div>
  );
}

