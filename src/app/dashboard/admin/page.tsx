'use client';

import { useState, useEffect } from 'react';
import { Plus, Save, Trash2, RefreshCw, ChevronDown, ChevronRight, Lock, Eye, EyeOff } from 'lucide-react';
import AdminCard from '@/components/dashboard/AdminCard';
import AdminForm from '@/components/dashboard/AdminForm';
import type { Prediction, Stats, Category } from '@/types/dashboard';
import { clearAllCaches, getCacheInfo } from '@/utils/coingecko';
import categories from '@/data/categories.json';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState('');
  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const [stats, setStats] = useState<Stats>({ activeMarkets: 0, totalVolume: '$0', todaysWinners: 0 });
  const [editingPrediction, setEditingPrediction] = useState<Prediction | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [collapsedSections, setCollapsedSections] = useState<Set<string>>(new Set());
  const [viewMode, setViewMode] = useState<'categories' | 'all'>('categories');

  // Check authentication status on mount
  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const response = await fetch('/api/auth/check');
      const data = await response.json();
      setIsAuthenticated(data.authenticated);
    } catch (error) {
      console.error('Auth check failed:', error);
      setIsAuthenticated(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');
    
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        setIsAuthenticated(true);
        setPassword('');
      } else {
        const data = await response.json();
        setAuthError(data.error || 'Invalid password. Please try again.');
        setPassword('');
      }
    } catch (error) {
      console.error('Login error:', error);
      setAuthError('Login failed. Please try again.');
      setPassword('');
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', {
        method: 'POST',
      });
      setIsAuthenticated(false);
      setPassword('');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  // Load data on mount
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      const [predictionsRes, statsRes] = await Promise.all([
        fetch('/api/predictions'),
        fetch('/api/stats')
      ]);
      
      if (predictionsRes.ok && statsRes.ok) {
        const predictionsData = await predictionsRes.json();
        const statsData = await statsRes.json();
        setPredictions(predictionsData);
        setStats(statsData);
      }
    } catch (error) {
      console.error('Error loading data:', error);
      alert('Failed to load data. Please refresh the page.');
    } finally {
      setLoading(false);
    }
  };
  
  const handleClearCache = () => {
    if (confirm('Clear all CoinGecko API caches? This will force fresh data on next load.')) {
      clearAllCaches();
      alert('Cache cleared successfully!');
    }
  };

  const handleSavePrediction = async (predictionData: Partial<Prediction>) => {
    try {
      setSaving(true);
      if (editingPrediction) {
        // Update existing prediction
        const updatedPrediction = { ...editingPrediction, ...predictionData };
        const response = await fetch('/api/predictions', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updatedPrediction)
        });

        if (response.ok) {
          const updated = await response.json();
          setPredictions(predictions.map(p => p.id === updated.id ? updated : p));
          alert('Prediction updated successfully!');
        } else {
          throw new Error('Failed to update prediction');
        }
      } else {
        // Create new prediction
        const newPrediction: Prediction = {
          ...predictionData,
          id: predictionData.id || `pred-${Date.now()}`,
          yesPercentage: predictionData.yesPercentage || 50,
          noPercentage: predictionData.noPercentage || 50,
          yesPrice: predictionData.yesPrice || '50¢',
          noPrice: predictionData.noPrice || '50¢',
        } as Prediction;

        const response = await fetch('/api/predictions', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newPrediction)
        });

        if (response.ok) {
          const created = await response.json();
          setPredictions([...predictions, created]);
          alert('Prediction created successfully!');
        } else {
          throw new Error('Failed to create prediction');
        }
      }
      setShowForm(false);
      setEditingPrediction(null);
    } catch (error) {
      console.error('Error saving prediction:', error);
      alert('Failed to save prediction. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const handleDeletePrediction = async (id: string) => {
    try {
      setSaving(true);
      const response = await fetch(`/api/predictions?id=${id}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        setPredictions(predictions.filter(p => p.id !== id));
        alert('Prediction deleted successfully!');
      } else {
        throw new Error('Failed to delete prediction');
      }
    } catch (error) {
      console.error('Error deleting prediction:', error);
      alert('Failed to delete prediction. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const handleToggleTrending = async (id: string) => {
    try {
      const prediction = predictions.find(p => p.id === id);
      if (!prediction) return;

      const updated = { ...prediction, trending: !prediction.trending };
      const response = await fetch('/api/predictions', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updated)
      });

      if (response.ok) {
        const result = await response.json();
        setPredictions(predictions.map(p => p.id === result.id ? result : p));
      } else {
        throw new Error('Failed to toggle trending');
      }
    } catch (error) {
      console.error('Error toggling trending:', error);
      alert('Failed to update trending status. Please try again.');
    }
  };

  const handleEditPrediction = (prediction: Prediction) => {
    setEditingPrediction(prediction);
    setShowForm(true);
  };

  const handleCreateNew = () => {
    setEditingPrediction(null);
    setShowForm(true);
  };

  const handleSaveStats = async () => {
    try {
      setSaving(true);
      const response = await fetch('/api/stats', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(stats)
      });

      if (response.ok) {
        alert('Stats saved successfully!');
      } else {
        throw new Error('Failed to save stats');
      }
    } catch (error) {
      console.error('Error saving stats:', error);
      alert('Failed to save stats. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const handleExportData = () => {
    const dataStr = JSON.stringify({ predictions, stats }, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'predictions-export.json';
    link.click();
  };

  const toggleSection = (categorySlug: string) => {
    const newCollapsed = new Set(collapsedSections);
    if (newCollapsed.has(categorySlug)) {
      newCollapsed.delete(categorySlug);
    } else {
      newCollapsed.add(categorySlug);
    }
    setCollapsedSections(newCollapsed);
  };

  // Group predictions by category
  const predictionsByCategory = categories.map(category => {
    const categoryPredictions = predictions.filter(p => 
      p.categories.includes(category.slug)
    );
    return {
      category,
      predictions: categoryPredictions,
      count: categoryPredictions.length
    };
  });

  // Predictions not in any category
  const uncategorizedPredictions = predictions.filter(p => 
    !p.categories || p.categories.length === 0
  );

  // Show login screen if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-[80vh]">
        <div className="w-full max-w-md">
          <div className="bg-[var(--card)] border-2 border-[var(--border)] rounded-2xl p-8 shadow-2xl">
            {/* Lock Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-[var(--primary)]/10 rounded-full flex items-center justify-center">
                <Lock className="w-10 h-10 text-[var(--primary)]" />
              </div>
            </div>

            {/* Title */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-[var(--foreground)] mb-2">
                Admin Panel
              </h1>
              <p className="text-[var(--muted-foreground)]">
                Enter password to access the admin dashboard
              </p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[var(--card-foreground)] mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setAuthError('');
                    }}
                    className="w-full px-4 py-3 pr-12 bg-[var(--background)] border-2 border-[var(--border)] rounded-lg text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all"
                    placeholder="Enter admin password"
                    required
                    autoFocus
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                {authError && (
                  <p className="mt-2 text-sm text-red-500 flex items-center gap-2">
                    <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                    {authError}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-[var(--primary)] hover:opacity-90 text-[var(--primary-foreground)] rounded-lg transition-opacity font-semibold text-lg shadow-lg"
              >
                Access Admin Panel
              </button>
            </form>

            {/* Info */}
            <div className="mt-6 p-4 bg-[var(--muted)]/50 rounded-lg border border-[var(--border)]">
              <p className="text-xs text-[var(--muted-foreground)] text-center">
                🔒 This area is password protected. Only authorized users can access the admin dashboard.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <RefreshCw className="animate-spin mx-auto mb-4 text-[var(--primary)]" size={40} />
          <p className="text-[var(--muted-foreground)]">Loading dashboard data...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[var(--foreground)] mb-2">
            Admin Panel
          </h1>
          <p className="text-[var(--muted-foreground)]">
            Manage predictions, stats, and market settings
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={loadData}
            disabled={loading}
            className="flex items-center gap-2 px-4 py-2 bg-[var(--muted)] hover:bg-[var(--secondary)] text-[var(--foreground)] rounded-lg transition-colors font-medium disabled:opacity-50"
            title="Refresh data"
          >
            <RefreshCw size={18} className={loading ? 'animate-spin' : ''} />
            Refresh
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-600 dark:text-red-400 rounded-lg transition-colors font-medium"
            title="Logout"
          >
            <Lock size={18} />
            Logout
          </button>
        </div>
      </div>

      {/* Stats Editor */}
      <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-[var(--card-foreground)]">Dashboard Stats</h2>
          <button
            onClick={handleSaveStats}
            disabled={saving}
            className="flex items-center gap-2 px-4 py-2 bg-[var(--primary)] hover:opacity-90 text-[var(--primary-foreground)] rounded-lg transition-opacity text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Save size={16} className={saving ? 'animate-pulse' : ''} />
            {saving ? 'Saving...' : 'Save Stats'}
          </button>
        </div>
        
        <div className="grid grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-[var(--card-foreground)] mb-2">
              Active Markets
            </label>
            <input
              type="number"
              value={stats.activeMarkets}
              onChange={(e) => setStats({ ...stats, activeMarkets: parseInt(e.target.value) })}
              className="w-full px-3 py-2 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--card-foreground)] mb-2">
              Total Volume
            </label>
            <input
              type="text"
              value={stats.totalVolume}
              onChange={(e) => setStats({ ...stats, totalVolume: e.target.value })}
              className="w-full px-3 py-2 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--card-foreground)] mb-2">
              Today's Winners
            </label>
            <input
              type="number"
              value={stats.todaysWinners}
              onChange={(e) => setStats({ ...stats, todaysWinners: parseInt(e.target.value) })}
              className="w-full px-3 py-2 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
            />
          </div>
        </div>
      </div>

      {/* Actions Bar */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <button
            onClick={handleCreateNew}
            disabled={saving}
            className="flex items-center gap-2 px-4 py-2 bg-[var(--primary)] hover:opacity-90 text-[var(--primary-foreground)] rounded-lg transition-opacity font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Plus size={18} />
            Create New Prediction
          </button>
          <button
            onClick={handleExportData}
            disabled={saving}
            className="px-4 py-2 bg-[var(--secondary)] hover:bg-[var(--muted)] text-[var(--secondary-foreground)] rounded-lg transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Export Data
          </button>
          <button
            onClick={handleClearCache}
            disabled={saving}
            className="flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            title="Clear CoinGecko API cache"
          >
            <Trash2 size={18} />
            Clear API Cache
          </button>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-[var(--muted)] rounded-lg p-1">
            <button
              onClick={() => setViewMode('categories')}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                viewMode === 'categories'
                  ? 'bg-[var(--primary)] text-[var(--primary-foreground)]'
                  : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)]'
              }`}
            >
              By Category
            </button>
            <button
              onClick={() => setViewMode('all')}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                viewMode === 'all'
                  ? 'bg-[var(--primary)] text-[var(--primary-foreground)]'
                  : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)]'
              }`}
            >
              All
            </button>
          </div>
          <div className="text-sm text-[var(--muted-foreground)]">
            Total: {predictions.length} predictions • {getCacheInfo().memoryCount} tokens cached
          </div>
        </div>
      </div>

      {/* Predictions Display */}
      {viewMode === 'all' ? (
        <>
          {/* All Predictions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {predictions.map((prediction) => (
              <AdminCard
                key={prediction.id}
                prediction={prediction}
                onEdit={handleEditPrediction}
                onDelete={handleDeletePrediction}
                onToggleTrending={handleToggleTrending}
              />
            ))}
          </div>

          {predictions.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[var(--muted-foreground)] mb-4">
                No predictions yet. Create your first one!
              </p>
              <button
                onClick={handleCreateNew}
                className="px-6 py-3 bg-[var(--primary)] hover:opacity-90 text-[var(--primary-foreground)] rounded-lg transition-opacity font-medium"
              >
                Create Prediction
              </button>
            </div>
          )}
        </>
      ) : (
        <>
          {/* Category Sections */}
          <div className="space-y-6">
            {predictionsByCategory.map(({ category, predictions: categoryPreds, count }) => (
              <div key={category.id} className="bg-[var(--card)] border border-[var(--border)] rounded-xl overflow-hidden">
                {/* Category Header */}
                <button
                  onClick={() => toggleSection(category.slug)}
                  className="w-full flex items-center justify-between p-5 hover:bg-[var(--muted)] transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-lg ${
                      category.group === 'markets' 
                        ? 'bg-blue-500/20 text-blue-600' 
                        : 'bg-orange-500/20 text-orange-600'
                    } flex items-center justify-center font-bold`}>
                      {count}
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-bold text-[var(--card-foreground)]">
                        {category.name}
                      </h3>
                      <p className="text-sm text-[var(--muted-foreground)]">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs px-2 py-1 bg-[var(--muted)] rounded-full text-[var(--muted-foreground)] font-medium">
                      {category.slug}
                    </span>
                    {collapsedSections.has(category.slug) ? (
                      <ChevronRight size={20} className="text-[var(--muted-foreground)]" />
                    ) : (
                      <ChevronDown size={20} className="text-[var(--muted-foreground)]" />
                    )}
                  </div>
                </button>

                {/* Category Predictions Grid */}
                {!collapsedSections.has(category.slug) && (
                  <div className="border-t border-[var(--border)] p-5">
                    {categoryPreds.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {categoryPreds.map((prediction) => (
                          <AdminCard
                            key={prediction.id}
                            prediction={prediction}
                            onEdit={handleEditPrediction}
                            onDelete={handleDeletePrediction}
                            onToggleTrending={handleToggleTrending}
                          />
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <p className="text-[var(--muted-foreground)] mb-3">
                          No predictions in this category yet
                        </p>
                        <button
                          onClick={handleCreateNew}
                          className="text-sm px-4 py-2 bg-[var(--primary)] hover:opacity-90 text-[var(--primary-foreground)] rounded-lg transition-opacity font-medium"
                        >
                          Create One
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}

            {/* Uncategorized Predictions */}
            {uncategorizedPredictions.length > 0 && (
              <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleSection('uncategorized')}
                  className="w-full flex items-center justify-between p-5 hover:bg-[var(--muted)] transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gray-500/20 text-gray-600 flex items-center justify-center font-bold">
                      {uncategorizedPredictions.length}
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-bold text-[var(--card-foreground)]">
                        Uncategorized
                      </h3>
                      <p className="text-sm text-[var(--muted-foreground)]">
                        Predictions not assigned to any category
                      </p>
                    </div>
                  </div>
                  {collapsedSections.has('uncategorized') ? (
                    <ChevronRight size={20} className="text-[var(--muted-foreground)]" />
                  ) : (
                    <ChevronDown size={20} className="text-[var(--muted-foreground)]" />
                  )}
                </button>

                {!collapsedSections.has('uncategorized') && (
                  <div className="border-t border-[var(--border)] p-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {uncategorizedPredictions.map((prediction) => (
                        <AdminCard
                          key={prediction.id}
                          prediction={prediction}
                          onEdit={handleEditPrediction}
                          onDelete={handleDeletePrediction}
                          onToggleTrending={handleToggleTrending}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {predictions.length === 0 && (
            <div className="text-center py-16 bg-[var(--card)] border border-[var(--border)] rounded-xl">
              <p className="text-[var(--muted-foreground)] mb-4">
                No predictions yet. Create your first one!
              </p>
              <button
                onClick={handleCreateNew}
                className="px-6 py-3 bg-[var(--primary)] hover:opacity-90 text-[var(--primary-foreground)] rounded-lg transition-opacity font-medium"
              >
                Create Prediction
              </button>
            </div>
          )}
        </>
      )}

      {/* Admin Form Modal */}
      {showForm && (
        <AdminForm
          prediction={editingPrediction}
          onSave={handleSavePrediction}
          onCancel={() => {
            setShowForm(false);
            setEditingPrediction(null);
          }}
        />
      )}

      {/* Success Notice */}
      <div className="mt-8 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
        <p className="text-sm text-green-600 dark:text-green-400">
          <strong>✓ Fully Functional:</strong> All changes are automatically saved to the server. 
          Create, edit, and delete predictions, and they will persist across sessions. Changes appear 
          immediately on the dashboard pages.
        </p>
      </div>
    </div>
  );
}

