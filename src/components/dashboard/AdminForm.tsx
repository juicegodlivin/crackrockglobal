'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import type { Prediction } from '@/types/dashboard';
import categories from '@/data/categories.json';

interface AdminFormProps {
  prediction?: Prediction | null;
  onSave: (prediction: Partial<Prediction>) => void;
  onCancel: () => void;
}

export default function AdminForm({ prediction, onSave, onCancel }: AdminFormProps) {
  const [formData, setFormData] = useState<Partial<Prediction>>({
    id: '',
    ticker: '',
    name: '',
    question: '',
    categories: [],
    iconType: 'crypto',
    coingeckoId: '',
    badges: [],
    yesPercentage: 50,
    noPercentage: 50,
    yesPrice: '50¢',
    noPrice: '50¢',
    // Crypto front stats
    volume: '',
    price: '',
    change24h: '',
    // Celebrity front stats
    followers: '',
    relevance: '',
    trendingScore: '',
    // KOL front stats
    influence: '',
    engagement: '',
    credibility: '',
    // Politics front stats
    polls: '',
    momentum: '',
    likelihood: '',
    // Strategy front stats
    winRate: '',
    riskLevel: '',
    timeframe: '',
    // Degen front stats
    rugRisk: '',
    hypeLevel: '',
    moonPotential: '',
    trending: false,
    extendedInfo: {
      type: 'crypto',
      description: '',
      // Crypto fields
      liquidity: '',
      holders: '',
      marketCap: '',
      technicalAnalysis: '',
      catalysts: [],
      // Celebrity fields
      background: '',
      context: '',
      historicalPattern: '',
      // KOL fields
      trackRecord: '',
      behaviorPattern: '',
      riskFactors: '',
      // Strategy fields
      strategyDetails: '',
      riskAssessment: '',
      backtestResults: '',
      requirements: '',
      // Degen fields
      historicalData: '',
      warnings: '',
      // Politics fields
      stakes: '',
      historicalContext: ''
    }
  });

  useEffect(() => {
    if (prediction) {
      setFormData(prediction);
    }
  }, [prediction]);

  // Helper to determine extendedInfo type from iconType
  const getExtendedInfoType = (iconType: string): 'crypto' | 'celebrity' | 'kol' | 'strategy' | 'politics' | 'degen' => {
    if (iconType.startsWith('crypto')) return 'crypto';
    if (iconType.startsWith('celebrity')) return 'celebrity';
    if (iconType.startsWith('kol')) return 'kol';
    if (iconType.startsWith('strategy')) return 'strategy';
    if (iconType.startsWith('politics')) return 'politics';
    if (iconType.startsWith('degen')) return 'degen';
    return 'crypto'; // default
  };

  const handleIconTypeChange = (newIconType: string) => {
    const newType = getExtendedInfoType(newIconType);
    setFormData({
      ...formData,
      iconType: newIconType,
      extendedInfo: {
        ...formData.extendedInfo!,
        type: newType
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  const handleCategoryToggle = (categoryId: string) => {
    const currentCategories = formData.categories || [];
    if (currentCategories.includes(categoryId)) {
      setFormData({
        ...formData,
        categories: currentCategories.filter(c => c !== categoryId)
      });
    } else {
      setFormData({
        ...formData,
        categories: [...currentCategories, categoryId]
      });
    }
  };

  const handleCatalystChange = (index: number, value: string) => {
    const catalysts = [...(formData.extendedInfo?.catalysts || [])];
    catalysts[index] = value;
    setFormData({
      ...formData,
      extendedInfo: { ...formData.extendedInfo!, catalysts }
    });
  };

  const addCatalyst = () => {
    const catalysts = [...(formData.extendedInfo?.catalysts || []), ''];
    setFormData({
      ...formData,
      extendedInfo: { ...formData.extendedInfo!, catalysts }
    });
  };

  const removeCatalyst = (index: number) => {
    const catalysts = (formData.extendedInfo?.catalysts || []).filter((_, i) => i !== index);
    setFormData({
      ...formData,
      extendedInfo: { ...formData.extendedInfo!, catalysts }
    });
  };

  const extendedInfoType = formData.extendedInfo?.type || 'crypto';

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-[var(--card)] rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-[var(--card)] border-b border-[var(--border)] p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-[var(--card-foreground)]">
            {prediction ? 'Edit Prediction' : 'Create New Prediction'}
          </h2>
          <button
            onClick={onCancel}
            className="p-2 hover:bg-[var(--muted)] rounded-lg transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-[var(--card-foreground)] mb-2">
                Ticker
              </label>
              <input
                type="text"
                value={formData.ticker}
                onChange={(e) => setFormData({ ...formData, ticker: e.target.value })}
                className="w-full px-3 py-2 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--card-foreground)] mb-2">
                Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--card-foreground)] mb-2">
              Question
            </label>
            <input
              type="text"
              value={formData.question}
              onChange={(e) => setFormData({ ...formData, question: e.target.value })}
              className="w-full px-3 py-2 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              required
            />
          </div>

          {/* Betting Odds Section */}
          <div className="border border-[var(--primary)]/30 rounded-lg p-4 bg-[var(--primary)]/5">
            <h3 className="text-md font-bold text-[var(--card-foreground)] mb-3">
              Betting Odds (Simulate Market Activity)
            </h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[var(--card-foreground)] mb-2">
                  YES Percentage
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    min="1"
                    max="99"
                    value={formData.yesPercentage}
                    onChange={(e) => {
                      const yesValue = parseInt(e.target.value) || 50;
                      const noValue = 100 - yesValue;
                      setFormData({ 
                        ...formData, 
                        yesPercentage: yesValue,
                        noPercentage: noValue,
                        yesPrice: `${yesValue}¢`,
                        noPrice: `${noValue}¢`
                      });
                    }}
                    className="flex-1 px-3 py-2 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                  <span className="text-2xl font-bold text-teal-600">{formData.yesPercentage}%</span>
                </div>
                <div className="mt-2 text-xs text-[var(--muted-foreground)]">
                  Price: {formData.yesPrice}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--card-foreground)] mb-2">
                  NO Percentage
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    min="1"
                    max="99"
                    value={formData.noPercentage}
                    onChange={(e) => {
                      const noValue = parseInt(e.target.value) || 50;
                      const yesValue = 100 - noValue;
                      setFormData({ 
                        ...formData, 
                        yesPercentage: yesValue,
                        noPercentage: noValue,
                        yesPrice: `${yesValue}¢`,
                        noPrice: `${noValue}¢`
                      });
                    }}
                    className="flex-1 px-3 py-2 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-rose-500"
                  />
                  <span className="text-2xl font-bold text-rose-600">{formData.noPercentage}%</span>
                </div>
                <div className="mt-2 text-xs text-[var(--muted-foreground)]">
                  Price: {formData.noPrice}
                </div>
              </div>
            </div>

            {/* Visual Odds Bar */}
            <div className="mt-4">
              <div className="h-8 rounded-lg overflow-hidden flex">
                <div 
                  className="bg-gradient-to-r from-teal-500 to-teal-600 flex items-center justify-center text-white font-bold text-sm transition-all duration-300"
                  style={{ width: `${formData.yesPercentage || 50}%` }}
                >
                  {(formData.yesPercentage || 50) > 20 && `YES ${formData.yesPercentage || 50}%`}
                </div>
                <div 
                  className="bg-gradient-to-r from-rose-500 to-rose-600 flex items-center justify-center text-white font-bold text-sm transition-all duration-300"
                  style={{ width: `${formData.noPercentage || 50}%` }}
                >
                  {(formData.noPercentage || 50) > 20 && `NO ${formData.noPercentage || 50}%`}
                </div>
              </div>
            </div>

            {/* Quick Presets */}
            <div className="mt-3 flex gap-2 flex-wrap">
              <button
                type="button"
                onClick={() => setFormData({ 
                  ...formData, 
                  yesPercentage: 50, 
                  noPercentage: 50,
                  yesPrice: '50¢',
                  noPrice: '50¢'
                })}
                className="text-xs px-3 py-1.5 bg-[var(--muted)] hover:bg-[var(--secondary)] rounded-md transition-colors"
              >
                50/50
              </button>
              <button
                type="button"
                onClick={() => setFormData({ 
                  ...formData, 
                  yesPercentage: 65, 
                  noPercentage: 35,
                  yesPrice: '65¢',
                  noPrice: '35¢'
                })}
                className="text-xs px-3 py-1.5 bg-[var(--muted)] hover:bg-[var(--secondary)] rounded-md transition-colors"
              >
                65/35
              </button>
              <button
                type="button"
                onClick={() => setFormData({ 
                  ...formData, 
                  yesPercentage: 75, 
                  noPercentage: 25,
                  yesPrice: '75¢',
                  noPrice: '25¢'
                })}
                className="text-xs px-3 py-1.5 bg-[var(--muted)] hover:bg-[var(--secondary)] rounded-md transition-colors"
              >
                75/25 (Bullish)
              </button>
              <button
                type="button"
                onClick={() => setFormData({ 
                  ...formData, 
                  yesPercentage: 25, 
                  noPercentage: 75,
                  yesPrice: '25¢',
                  noPrice: '75¢'
                })}
                className="text-xs px-3 py-1.5 bg-[var(--muted)] hover:bg-[var(--secondary)] rounded-md transition-colors"
              >
                25/75 (Bearish)
              </button>
              <button
                type="button"
                onClick={() => setFormData({ 
                  ...formData, 
                  yesPercentage: 90, 
                  noPercentage: 10,
                  yesPrice: '90¢',
                  noPrice: '10¢'
                })}
                className="text-xs px-3 py-1.5 bg-[var(--muted)] hover:bg-[var(--secondary)] rounded-md transition-colors"
              >
                90/10 (Very Bullish)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-[var(--card-foreground)] mb-2">
                Icon Type
              </label>
              <select
                value={formData.iconType}
                onChange={(e) => handleIconTypeChange(e.target.value)}
                className="w-full px-3 py-2 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                required
              >
                <optgroup label="🪙 Crypto & Tokens">
                  <option value="crypto">Crypto Token</option>
                  <option value="crypto-nft">NFT Collection</option>
                  <option value="crypto-defi">DeFi Protocol</option>
                  <option value="crypto-airdrop">Airdrop</option>
                  <option value="crypto-chain">Blockchain/L1/L2</option>
                </optgroup>
                
                <optgroup label="👤 Celebrities & Entertainment">
                  <option value="celebrity-general">Celebrity - General</option>
                  <option value="celebrity-music">Celebrity - Music</option>
                  <option value="celebrity-film">Celebrity - Film</option>
                  <option value="celebrity-scandal">Celebrity - Scandal</option>
                  <option value="celebrity-sports">Celebrity - Sports</option>
                  <option value="celebrity-relationship">Celebrity - Relationship</option>
                </optgroup>
                
                <optgroup label="📢 KOLs & Influencers">
                  <option value="kol-influencer">KOL - Influencer</option>
                  <option value="kol-drama">KOL - Drama</option>
                  <option value="kol-tweet">KOL - Tweet</option>
                  <option value="kol-alpha">KOL - Alpha Call</option>
                  <option value="kol-beef">KOL - Beef/Feud</option>
                  <option value="kol-expose">KOL - Exposé</option>
                </optgroup>
                
                <optgroup label="🏛️ Politics & World Events">
                  <option value="politics-election">Politics - Election</option>
                  <option value="politics-policy">Politics - Policy</option>
                  <option value="politics-scandal">Politics - Scandal</option>
                  <option value="politics-geopolitics">Politics - Geopolitics</option>
                  <option value="politics-regulation">Politics - Regulation</option>
                </optgroup>
                
                <optgroup label="📈 Trading Strategies">
                  <option value="strategy-accumulation">Strategy - Accumulation</option>
                  <option value="strategy-trading">Strategy - Trading</option>
                  <option value="strategy-leverage">Strategy - Leverage Play</option>
                  <option value="strategy-arbitrage">Strategy - Arbitrage</option>
                  <option value="strategy-yield">Strategy - Yield Farming</option>
                </optgroup>
                
                <optgroup label="🎲 Degen Plays">
                  <option value="degen-rug">Degen - Rug Pull</option>
                  <option value="degen-moon">Degen - Moon Shot</option>
                  <option value="degen-fomo">Degen - FOMO Play</option>
                  <option value="degen-yolo">Degen - YOLO</option>
                  <option value="degen-gamble">Degen - Pure Gamble</option>
                  <option value="degen-meme">Degen - Meme Coin</option>
                  <option value="degen-pump">Degen - Pump & Dump</option>
                </optgroup>
                
                <optgroup label="🚀 Token Launches">
                  <option value="launch-presale">Launch - Presale</option>
                  <option value="launch-ido">Launch - IDO/ICO</option>
                  <option value="launch-listing">Launch - CEX Listing</option>
                  <option value="launch-airdrop">Launch - Airdrop Farming</option>
                </optgroup>
                
                <optgroup label="📊 Market Events">
                  <option value="market-crash">Market - Crash</option>
                  <option value="market-rally">Market - Rally</option>
                  <option value="market-volatility">Market - Volatility</option>
                  <option value="market-manipulation">Market - Manipulation</option>
                  <option value="market-whale">Market - Whale Movement</option>
                </optgroup>
                
                <optgroup label="🎮 Gaming & Metaverse">
                  <option value="gaming-metaverse">Gaming - Metaverse</option>
                  <option value="gaming-p2e">Gaming - Play-to-Earn</option>
                  <option value="gaming-esports">Gaming - Esports</option>
                </optgroup>
                
                <optgroup label="🏢 Tech & Business">
                  <option value="tech-startup">Tech - Startup</option>
                  <option value="tech-ai">Tech - AI/ML</option>
                  <option value="tech-acquisition">Tech - M&A</option>
                  <option value="tech-ipo">Tech - IPO</option>
                </optgroup>
                
                <optgroup label="🌍 Social & Culture">
                  <option value="social-trend">Social - Viral Trend</option>
                  <option value="social-meme">Social - Meme</option>
                  <option value="social-movement">Social - Movement</option>
                </optgroup>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--card-foreground)] mb-2">
                CoinGecko ID (for crypto only)
              </label>
              <input
                type="text"
                value={formData.coingeckoId || ''}
                onChange={(e) => setFormData({ ...formData, coingeckoId: e.target.value })}
                className="w-full px-3 py-2 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                placeholder="solana"
              />
            </div>
          </div>

          {/* Front-Facing Stats Section */}
          <div className="border-t border-[var(--border)] pt-6 mt-6">
            <h3 className="text-lg font-bold text-[var(--card-foreground)] mb-4">
              Card Front Stats ({extendedInfoType.charAt(0).toUpperCase() + extendedInfoType.slice(1)})
            </h3>
            
            {/* Crypto Stats */}
            {extendedInfoType === 'crypto' && (
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[var(--card-foreground)] mb-2">
                    Volume <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.volume || ''}
                    onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                    className="w-full px-3 py-2 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    placeholder="$1.2M"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--card-foreground)] mb-2">
                    Price
                  </label>
                  <input
                    type="text"
                    value={formData.price || ''}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    className="w-full px-3 py-2 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    placeholder="$0.45"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--card-foreground)] mb-2">
                    24H Change
                  </label>
                  <input
                    type="text"
                    value={formData.change24h || ''}
                    onChange={(e) => setFormData({ ...formData, change24h: e.target.value })}
                    className="w-full px-3 py-2 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    placeholder="+5.2%"
                  />
                </div>
              </div>
            )}

            {/* Celebrity Stats */}
            {extendedInfoType === 'celebrity' && (
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[var(--card-foreground)] mb-2">
                    Followers
                  </label>
                  <input
                    type="text"
                    value={formData.followers || ''}
                    onChange={(e) => setFormData({ ...formData, followers: e.target.value })}
                    className="w-full px-3 py-2 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    placeholder="25.3M"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--card-foreground)] mb-2">
                    Relevance
                  </label>
                  <input
                    type="text"
                    value={formData.relevance || ''}
                    onChange={(e) => setFormData({ ...formData, relevance: e.target.value })}
                    className="w-full px-3 py-2 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    placeholder="High"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--card-foreground)] mb-2">
                    Trending Score
                  </label>
                  <input
                    type="text"
                    value={formData.trendingScore || ''}
                    onChange={(e) => setFormData({ ...formData, trendingScore: e.target.value })}
                    className="w-full px-3 py-2 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    placeholder="8.5/10"
                  />
                </div>
              </div>
            )}

            {/* KOL Stats */}
            {extendedInfoType === 'kol' && (
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[var(--card-foreground)] mb-2">
                    Influence
                  </label>
                  <input
                    type="text"
                    value={formData.influence || ''}
                    onChange={(e) => setFormData({ ...formData, influence: e.target.value })}
                    className="w-full px-3 py-2 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    placeholder="Very High"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--card-foreground)] mb-2">
                    Engagement
                  </label>
                  <input
                    type="text"
                    value={formData.engagement || ''}
                    onChange={(e) => setFormData({ ...formData, engagement: e.target.value })}
                    className="w-full px-3 py-2 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    placeholder="4.2%"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--card-foreground)] mb-2">
                    Credibility
                  </label>
                  <input
                    type="text"
                    value={formData.credibility || ''}
                    onChange={(e) => setFormData({ ...formData, credibility: e.target.value })}
                    className="w-full px-3 py-2 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    placeholder="7/10"
                  />
                </div>
              </div>
            )}

            {/* Politics Stats */}
            {extendedInfoType === 'politics' && (
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[var(--card-foreground)] mb-2">
                    Polls
                  </label>
                  <input
                    type="text"
                    value={formData.polls || ''}
                    onChange={(e) => setFormData({ ...formData, polls: e.target.value })}
                    className="w-full px-3 py-2 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    placeholder="52% Support"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--card-foreground)] mb-2">
                    Momentum
                  </label>
                  <input
                    type="text"
                    value={formData.momentum || ''}
                    onChange={(e) => setFormData({ ...formData, momentum: e.target.value })}
                    className="w-full px-3 py-2 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    placeholder="Rising"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--card-foreground)] mb-2">
                    Likelihood
                  </label>
                  <input
                    type="text"
                    value={formData.likelihood || ''}
                    onChange={(e) => setFormData({ ...formData, likelihood: e.target.value })}
                    className="w-full px-3 py-2 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    placeholder="68%"
                  />
                </div>
              </div>
            )}

            {/* Strategy Stats */}
            {extendedInfoType === 'strategy' && (
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[var(--card-foreground)] mb-2">
                    Win Rate
                  </label>
                  <input
                    type="text"
                    value={formData.winRate || ''}
                    onChange={(e) => setFormData({ ...formData, winRate: e.target.value })}
                    className="w-full px-3 py-2 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    placeholder="73%"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--card-foreground)] mb-2">
                    Risk Level
                  </label>
                  <input
                    type="text"
                    value={formData.riskLevel || ''}
                    onChange={(e) => setFormData({ ...formData, riskLevel: e.target.value })}
                    className="w-full px-3 py-2 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    placeholder="Medium"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--card-foreground)] mb-2">
                    Timeframe
                  </label>
                  <input
                    type="text"
                    value={formData.timeframe || ''}
                    onChange={(e) => setFormData({ ...formData, timeframe: e.target.value })}
                    className="w-full px-3 py-2 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    placeholder="3-6 months"
                  />
                </div>
              </div>
            )}

            {/* Degen Stats */}
            {extendedInfoType === 'degen' && (
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[var(--card-foreground)] mb-2">
                    Rug Risk
                  </label>
                  <input
                    type="text"
                    value={formData.rugRisk || ''}
                    onChange={(e) => setFormData({ ...formData, rugRisk: e.target.value })}
                    className="w-full px-3 py-2 bg-[var(--background)] border border-red-500/50 rounded-lg text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="High ⚠️"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--card-foreground)] mb-2">
                    Hype Level
                  </label>
                  <input
                    type="text"
                    value={formData.hypeLevel || ''}
                    onChange={(e) => setFormData({ ...formData, hypeLevel: e.target.value })}
                    className="w-full px-3 py-2 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    placeholder="🔥 Extreme"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--card-foreground)] mb-2">
                    Moon Potential
                  </label>
                  <input
                    type="text"
                    value={formData.moonPotential || ''}
                    onChange={(e) => setFormData({ ...formData, moonPotential: e.target.value })}
                    className="w-full px-3 py-2 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    placeholder="🚀 1000x?"
                  />
                </div>
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--card-foreground)] mb-2">
              Categories
            </label>
            <div className="grid grid-cols-3 gap-2">
              {categories.map((category) => (
                <label
                  key={category.id}
                  className="flex items-center gap-2 p-2 bg-[var(--background)] border border-[var(--border)] rounded-lg cursor-pointer hover:bg-[var(--muted)] transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={(formData.categories || []).includes(category.slug)}
                    onChange={() => handleCategoryToggle(category.slug)}
                    className="rounded"
                  />
                  <span className="text-sm text-[var(--foreground)]">{category.name}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Extended Information Section */}
          <div className="border-t border-[var(--border)] pt-6 mt-6">
            <h3 className="text-lg font-bold text-[var(--card-foreground)] mb-4">
              Extended Information ({extendedInfoType.charAt(0).toUpperCase() + extendedInfoType.slice(1)})
            </h3>
            
            {/* Common field - Overview/Description */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-[var(--card-foreground)] mb-2">
                Overview / Description <span className="text-red-500">*</span>
              </label>
              <textarea
                value={formData.extendedInfo?.description || ''}
                onChange={(e) => setFormData({
                  ...formData,
                  extendedInfo: { ...formData.extendedInfo!, description: e.target.value }
                })}
                className="w-full px-3 py-2 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] min-h-[100px]"
                placeholder="Provide a general overview that will be shown on the card..."
                required
              />
            </div>

            {/* Crypto-specific fields */}
            {extendedInfoType === 'crypto' && (
              <>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-[var(--card-foreground)] mb-2">
                      Liquidity
                    </label>
                    <input
                      type="text"
                      value={formData.extendedInfo?.liquidity || ''}
                      onChange={(e) => setFormData({
                        ...formData,
                        extendedInfo: { ...formData.extendedInfo!, liquidity: e.target.value }
                      })}
                      className="w-full px-3 py-2 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                      placeholder="$2.5M"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--card-foreground)] mb-2">
                      Holders
                    </label>
                    <input
                      type="text"
                      value={formData.extendedInfo?.holders || ''}
                      onChange={(e) => setFormData({
                        ...formData,
                        extendedInfo: { ...formData.extendedInfo!, holders: e.target.value }
                      })}
                      className="w-full px-3 py-2 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                      placeholder="1,250"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--card-foreground)] mb-2">
                      Market Cap
                    </label>
                    <input
                      type="text"
                      value={formData.extendedInfo?.marketCap || ''}
                      onChange={(e) => setFormData({
                        ...formData,
                        extendedInfo: { ...formData.extendedInfo!, marketCap: e.target.value }
                      })}
                      className="w-full px-3 py-2 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                      placeholder="$50M"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-[var(--card-foreground)] mb-2">
                    Technical Analysis
                  </label>
                  <textarea
                    value={formData.extendedInfo?.technicalAnalysis || ''}
                    onChange={(e) => setFormData({
                      ...formData,
                      extendedInfo: { ...formData.extendedInfo!, technicalAnalysis: e.target.value }
                    })}
                    className="w-full px-3 py-2 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] min-h-[80px]"
                    placeholder="RSI showing oversold conditions, support at $X..."
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-[var(--card-foreground)] mb-2">
                    Catalysts
                  </label>
                  {(formData.extendedInfo?.catalysts || []).map((catalyst, idx) => (
                    <div key={idx} className="flex gap-2 mb-2">
                      <input
                        type="text"
                        value={catalyst}
                        onChange={(e) => handleCatalystChange(idx, e.target.value)}
                        className="flex-1 px-3 py-2 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                        placeholder="Upcoming exchange listing..."
                      />
                      <button
                        type="button"
                        onClick={() => removeCatalyst(idx)}
                        className="px-3 py-2 bg-red-500/10 text-red-500 hover:bg-red-500/20 rounded-lg transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addCatalyst}
                    className="px-4 py-2 bg-[var(--primary)] text-[var(--primary-foreground)] rounded-lg hover:opacity-90 transition-opacity text-sm"
                  >
                    + Add Catalyst
                  </button>
                </div>
              </>
            )}

            {/* Celebrity-specific fields */}
            {extendedInfoType === 'celebrity' && (
              <>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-[var(--card-foreground)] mb-2">
                    Background
                  </label>
                  <textarea
                    value={formData.extendedInfo?.background || ''}
                    onChange={(e) => setFormData({
                      ...formData,
                      extendedInfo: { ...formData.extendedInfo!, background: e.target.value }
                    })}
                    className="w-full px-3 py-2 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] min-h-[80px]"
                    placeholder="Provide background context..."
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-[var(--card-foreground)] mb-2">
                    Current Context
                  </label>
                  <textarea
                    value={formData.extendedInfo?.context || ''}
                    onChange={(e) => setFormData({
                      ...formData,
                      extendedInfo: { ...formData.extendedInfo!, context: e.target.value }
                    })}
                    className="w-full px-3 py-2 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] min-h-[80px]"
                    placeholder="What's happening now..."
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-[var(--card-foreground)] mb-2">
                    Historical Pattern
                  </label>
                  <textarea
                    value={formData.extendedInfo?.historicalPattern || ''}
                    onChange={(e) => setFormData({
                      ...formData,
                      extendedInfo: { ...formData.extendedInfo!, historicalPattern: e.target.value }
                    })}
                    className="w-full px-3 py-2 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] min-h-[80px]"
                    placeholder="Past behavior patterns..."
                  />
                </div>
              </>
            )}

            {/* KOL-specific fields */}
            {extendedInfoType === 'kol' && (
              <>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-[var(--card-foreground)] mb-2">
                    Track Record
                  </label>
                  <textarea
                    value={formData.extendedInfo?.trackRecord || ''}
                    onChange={(e) => setFormData({
                      ...formData,
                      extendedInfo: { ...formData.extendedInfo!, trackRecord: e.target.value }
                    })}
                    className="w-full px-3 py-2 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] min-h-[80px]"
                    placeholder="Past calls and success rate..."
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-[var(--card-foreground)] mb-2">
                    Behavior Pattern
                  </label>
                  <textarea
                    value={formData.extendedInfo?.behaviorPattern || ''}
                    onChange={(e) => setFormData({
                      ...formData,
                      extendedInfo: { ...formData.extendedInfo!, behaviorPattern: e.target.value }
                    })}
                    className="w-full px-3 py-2 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] min-h-[80px]"
                    placeholder="Typical behavior and patterns..."
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-[var(--card-foreground)] mb-2">
                    Risk Factors
                  </label>
                  <textarea
                    value={formData.extendedInfo?.riskFactors || ''}
                    onChange={(e) => setFormData({
                      ...formData,
                      extendedInfo: { ...formData.extendedInfo!, riskFactors: e.target.value }
                    })}
                    className="w-full px-3 py-2 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] min-h-[80px]"
                    placeholder="Potential risks to consider..."
                  />
                </div>
              </>
            )}

            {/* Strategy-specific fields */}
            {extendedInfoType === 'strategy' && (
              <>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-[var(--card-foreground)] mb-2">
                    Strategy Details
                  </label>
                  <textarea
                    value={formData.extendedInfo?.strategyDetails || ''}
                    onChange={(e) => setFormData({
                      ...formData,
                      extendedInfo: { ...formData.extendedInfo!, strategyDetails: e.target.value }
                    })}
                    className="w-full px-3 py-2 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] min-h-[80px]"
                    placeholder="Detailed explanation of the strategy..."
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-[var(--card-foreground)] mb-2">
                    Risk Assessment
                  </label>
                  <textarea
                    value={formData.extendedInfo?.riskAssessment || ''}
                    onChange={(e) => setFormData({
                      ...formData,
                      extendedInfo: { ...formData.extendedInfo!, riskAssessment: e.target.value }
                    })}
                    className="w-full px-3 py-2 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] min-h-[80px]"
                    placeholder="Risk level and mitigation strategies..."
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-[var(--card-foreground)] mb-2">
                    Backtest Results
                  </label>
                  <textarea
                    value={formData.extendedInfo?.backtestResults || ''}
                    onChange={(e) => setFormData({
                      ...formData,
                      extendedInfo: { ...formData.extendedInfo!, backtestResults: e.target.value }
                    })}
                    className="w-full px-3 py-2 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] min-h-[80px]"
                    placeholder="Historical performance data..."
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-[var(--card-foreground)] mb-2">
                    Requirements
                  </label>
                  <textarea
                    value={formData.extendedInfo?.requirements || ''}
                    onChange={(e) => setFormData({
                      ...formData,
                      extendedInfo: { ...formData.extendedInfo!, requirements: e.target.value }
                    })}
                    className="w-full px-3 py-2 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] min-h-[80px]"
                    placeholder="Capital requirements, time commitment, etc..."
                  />
                </div>
              </>
            )}

            {/* Degen-specific fields */}
            {extendedInfoType === 'degen' && (
              <>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-[var(--card-foreground)] mb-2">
                    Historical Data
                  </label>
                  <textarea
                    value={formData.extendedInfo?.historicalData || ''}
                    onChange={(e) => setFormData({
                      ...formData,
                      extendedInfo: { ...formData.extendedInfo!, historicalData: e.target.value }
                    })}
                    className="w-full px-3 py-2 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] min-h-[80px]"
                    placeholder="Past data and trends..."
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-[var(--card-foreground)] mb-2">
                    ⚠️ Warnings
                  </label>
                  <textarea
                    value={formData.extendedInfo?.warnings || ''}
                    onChange={(e) => setFormData({
                      ...formData,
                      extendedInfo: { ...formData.extendedInfo!, warnings: e.target.value }
                    })}
                    className="w-full px-3 py-2 bg-[var(--background)] border border-red-500/50 rounded-lg text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-red-500 min-h-[80px]"
                    placeholder="Important warnings and risks..."
                  />
                </div>
              </>
            )}

            {/* Politics-specific fields */}
            {extendedInfoType === 'politics' && (
              <>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-[var(--card-foreground)] mb-2">
                    Background
                  </label>
                  <textarea
                    value={formData.extendedInfo?.background || ''}
                    onChange={(e) => setFormData({
                      ...formData,
                      extendedInfo: { ...formData.extendedInfo!, background: e.target.value }
                    })}
                    className="w-full px-3 py-2 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] min-h-[80px]"
                    placeholder="Political background and context..."
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-[var(--card-foreground)] mb-2">
                    What's at Stake
                  </label>
                  <textarea
                    value={formData.extendedInfo?.stakes || ''}
                    onChange={(e) => setFormData({
                      ...formData,
                      extendedInfo: { ...formData.extendedInfo!, stakes: e.target.value }
                    })}
                    className="w-full px-3 py-2 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] min-h-[80px]"
                    placeholder="Stakes and implications..."
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-[var(--card-foreground)] mb-2">
                    Historical Context
                  </label>
                  <textarea
                    value={formData.extendedInfo?.historicalContext || ''}
                    onChange={(e) => setFormData({
                      ...formData,
                      extendedInfo: { ...formData.extendedInfo!, historicalContext: e.target.value }
                    })}
                    className="w-full px-3 py-2 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] min-h-[80px]"
                    placeholder="Historical precedents..."
                  />
                </div>
              </>
            )}
          </div>

          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.trending || false}
                onChange={(e) => setFormData({ ...formData, trending: e.target.checked })}
                className="rounded"
              />
              <span className="text-sm text-[var(--card-foreground)]">Mark as Trending</span>
            </label>
          </div>

          <div className="flex items-center gap-3 pt-4 border-t border-[var(--border)]">
            <button
              type="submit"
              className="px-6 py-2 bg-[var(--primary)] hover:opacity-90 text-[var(--primary-foreground)] rounded-lg transition-opacity font-medium"
            >
              {prediction ? 'Update Prediction' : 'Create Prediction'}
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="px-6 py-2 bg-[var(--secondary)] hover:bg-[var(--muted)] text-[var(--secondary-foreground)] rounded-lg transition-colors font-medium"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

