'use client';

import { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import type { Prediction } from '@/types/dashboard';
import { TrendingUp, TrendingDown, X, DollarSign, AlertCircle, CheckCircle2 } from 'lucide-react';
import PredictionIcon from './PredictionIcon';

interface PredictionCardProps {
  prediction: Prediction;
}

export default function PredictionCard({ prediction }: PredictionCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showBetModal, setShowBetModal] = useState(false);
  const [betType, setBetType] = useState<'YES' | 'NO' | null>(null);
  const [betAmount, setBetAmount] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [confirmedBet, setConfirmedBet] = useState<{ type: 'YES' | 'NO'; amount: string; shares: string } | null>(null);
  
  // Determine icon type from extended info or categories
  const iconCategory = prediction.extendedInfo.type;

  const getBadgeColor = (badge: string) => {
    switch (badge.toUpperCase()) {
      case 'TRENDING':
        return 'bg-orange-500 text-white';
      case 'HOT':
        return 'bg-red-500 text-white';
      case 'NEW':
        return 'bg-blue-500 text-white';
      case 'LIVE':
        return 'bg-green-500 text-white';
      case 'SOLANA':
        return 'bg-purple-500 text-white';
      case 'KOL':
        return 'bg-pink-500 text-white';
      case 'DEGEN':
        return 'bg-yellow-500 text-black';
      case 'WARNING':
        return 'bg-red-600 text-white';
      case 'POLITICS':
        return 'bg-indigo-500 text-white';
      case 'STRATEGY':
        return 'bg-cyan-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  const isNegativeChange = prediction.change24h?.startsWith('-') || false;

  const handleBetClick = (type: 'YES' | 'NO', e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card flip
    setBetType(type);
    setShowBetModal(true);
    setBetAmount('');
  };

  const handlePlaceBet = () => {
    if (!betAmount || parseFloat(betAmount) <= 0) return;
    
    const amount = parseFloat(betAmount);
    const price = betType === 'YES' ? prediction.yesPercentage : prediction.noPercentage;
    const shares = (amount / price * 100).toFixed(2);
    
    setConfirmedBet({
      type: betType!,
      amount: betAmount,
      shares: shares
    });
    
    setShowBetModal(false);
    
    // Delay confirmation to simulate transaction processing
    setTimeout(() => {
      setShowConfirmation(true);
      
      // Auto-close confirmation after 3 seconds
      setTimeout(() => {
        setShowConfirmation(false);
        setConfirmedBet(null);
      }, 3000);
    }, 1200); // 1.2 second delay before showing confirmation
  };

  const calculateShares = () => {
    if (!betAmount || parseFloat(betAmount) <= 0) return '0';
    const amount = parseFloat(betAmount);
    const price = betType === 'YES' ? prediction.yesPercentage : prediction.noPercentage;
    return (amount / price * 100).toFixed(2);
  };

  return (
    <div 
      className="relative h-[420px] cursor-pointer perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front of card */}
        <div
          className="absolute w-full h-full backface-hidden prediction-card-front bg-[var(--card)] border border-[var(--border)] rounded-xl overflow-hidden shadow-lg"
        >
          <div className="p-5 h-full flex flex-col">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <PredictionIcon
                  type={iconCategory}
                  iconType={prediction.iconType}
                  imageUrl={prediction.tokenImage}
                  size={44}
                />
                <div>
                  <div className="font-bold text-[var(--card-foreground)]">
                    {prediction.ticker}
                  </div>
                  <div className="text-xs text-[var(--muted-foreground)]">
                    {prediction.name}
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-1 justify-end">
                {prediction.badges.map((badge, idx) => (
                  <span
                    key={idx}
                    className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${getBadgeColor(badge)}`}
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Question */}
            <div className="mb-4 flex-1">
              <p className="text-sm text-[var(--card-foreground)] font-medium leading-relaxed">
                {prediction.question}
              </p>
            </div>

            {/* Betting Options */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <button 
                onClick={(e) => handleBetClick('YES', e)}
                className="relative group bg-gradient-to-br from-teal-500 to-teal-700 hover:from-teal-600 hover:to-teal-800 text-white rounded-xl py-4 px-4 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-teal-500/50 transform hover:-translate-y-0.5 active:translate-y-0 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-xs font-bold mb-1 tracking-wider">YES</div>
                  <div className="text-2xl font-black drop-shadow-lg">{prediction.yesPercentage}¢</div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
              </button>
              <button 
                onClick={(e) => handleBetClick('NO', e)}
                className="relative group bg-gradient-to-br from-rose-500 to-rose-700 hover:from-rose-600 hover:to-rose-800 text-white rounded-xl py-4 px-4 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-rose-500/50 transform hover:-translate-y-0.5 active:translate-y-0 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-xs font-bold mb-1 tracking-wider">NO</div>
                  <div className="text-2xl font-black drop-shadow-lg">{prediction.noPercentage}¢</div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
              </button>
            </div>

            {/* Stats - Dynamic based on type */}
            <div className="border-t border-[var(--border)] pt-3 space-y-2">
              {/* Crypto Stats */}
              {iconCategory === 'crypto' && (
                <>
                  <div className="flex justify-between text-xs">
                    <span className="text-[var(--muted-foreground)]">VOLUME</span>
                    <span className="text-[var(--card-foreground)] font-medium">{prediction.volume || '$0'}</span>
                  </div>
                  {prediction.price && prediction.price !== '-' && (
                    <>
                      <div className="flex justify-between text-xs">
                        <span className="text-[var(--muted-foreground)]">PRICE</span>
                        <span className="text-[var(--card-foreground)] font-medium">{prediction.price}</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-[var(--muted-foreground)]">24H CHANGE</span>
                        <span className={`font-medium flex items-center gap-1 ${
                          isNegativeChange ? 'text-red-500' : 'text-green-500'
                        }`}>
                          {isNegativeChange ? <TrendingDown size={12} /> : <TrendingUp size={12} />}
                          {prediction.change24h || '0%'}
                        </span>
                      </div>
                    </>
                  )}
                </>
              )}

              {/* Celebrity Stats */}
              {iconCategory === 'celebrity' && (
                <>
                  <div className="flex justify-between text-xs">
                    <span className="text-[var(--muted-foreground)]">FOLLOWERS</span>
                    <span className="text-[var(--card-foreground)] font-medium">{prediction.followers || 'N/A'}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-[var(--muted-foreground)]">RELEVANCE</span>
                    <span className="text-[var(--card-foreground)] font-medium">{prediction.relevance || 'N/A'}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-[var(--muted-foreground)]">TRENDING SCORE</span>
                    <span className="text-[var(--card-foreground)] font-medium">{prediction.trendingScore || 'N/A'}</span>
                  </div>
                </>
              )}

              {/* KOL Stats */}
              {iconCategory === 'kol' && (
                <>
                  <div className="flex justify-between text-xs">
                    <span className="text-[var(--muted-foreground)]">INFLUENCE</span>
                    <span className="text-[var(--card-foreground)] font-medium">{prediction.influence || 'N/A'}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-[var(--muted-foreground)]">ENGAGEMENT</span>
                    <span className="text-[var(--card-foreground)] font-medium">{prediction.engagement || 'N/A'}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-[var(--muted-foreground)]">CREDIBILITY</span>
                    <span className="text-[var(--card-foreground)] font-medium">{prediction.credibility || 'N/A'}</span>
                  </div>
                </>
              )}

              {/* Politics Stats */}
              {iconCategory === 'politics' && (
                <>
                  <div className="flex justify-between text-xs">
                    <span className="text-[var(--muted-foreground)]">POLLS</span>
                    <span className="text-[var(--card-foreground)] font-medium">{prediction.polls || 'N/A'}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-[var(--muted-foreground)]">MOMENTUM</span>
                    <span className="text-[var(--card-foreground)] font-medium">{prediction.momentum || 'N/A'}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-[var(--muted-foreground)]">LIKELIHOOD</span>
                    <span className="text-[var(--card-foreground)] font-medium">{prediction.likelihood || 'N/A'}</span>
                  </div>
                </>
              )}

              {/* Strategy Stats */}
              {iconCategory === 'strategy' && (
                <>
                  <div className="flex justify-between text-xs">
                    <span className="text-[var(--muted-foreground)]">WIN RATE</span>
                    <span className="text-[var(--card-foreground)] font-medium">{prediction.winRate || 'N/A'}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-[var(--muted-foreground)]">RISK LEVEL</span>
                    <span className="text-[var(--card-foreground)] font-medium">{prediction.riskLevel || 'N/A'}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-[var(--muted-foreground)]">TIMEFRAME</span>
                    <span className="text-[var(--card-foreground)] font-medium">{prediction.timeframe || 'N/A'}</span>
                  </div>
                </>
              )}

              {/* Degen Stats */}
              {iconCategory === 'degen' && (
                <>
                  <div className="flex justify-between text-xs">
                    <span className="text-[var(--muted-foreground)]">RUG RISK</span>
                    <span className="text-[var(--card-foreground)] font-medium">{prediction.rugRisk || 'N/A'}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-[var(--muted-foreground)]">HYPE LEVEL</span>
                    <span className="text-[var(--card-foreground)] font-medium">{prediction.hypeLevel || 'N/A'}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-[var(--muted-foreground)]">MOON POTENTIAL</span>
                    <span className="text-[var(--card-foreground)] font-medium">{prediction.moonPotential || 'N/A'}</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div
          className="absolute w-full h-full backface-hidden prediction-card-back bg-[var(--card)] border border-[var(--border)] rounded-xl overflow-hidden shadow-lg"
          style={{ transform: 'rotateY(180deg)' }}
        >
          <div className="p-5 h-full flex flex-col overflow-y-auto">
            {/* Header */}
            <div className="flex items-center gap-3 mb-4 pb-4 border-b border-[var(--border)]">
              <PredictionIcon
                type={iconCategory}
                iconType={prediction.iconType}
                imageUrl={prediction.tokenImage}
                size={44}
              />
              <div>
                <div className="font-bold text-[var(--card-foreground)]">
                  {prediction.name}
                </div>
                <div className="text-xs text-[var(--muted-foreground)]">
                  Extended Information
                </div>
              </div>
            </div>

            {/* Extended Info */}
            <div className="space-y-4 text-sm">
              <div>
                <h4 className="font-semibold text-[var(--card-foreground)] mb-2">Overview</h4>
                <p className="text-[var(--muted-foreground)] leading-relaxed">
                  {prediction.extendedInfo.description}
                </p>
              </div>

              {/* Crypto-specific info */}
              {prediction.extendedInfo.type === 'crypto' && (
                <>
                  {prediction.extendedInfo.liquidity && (
                    <div className="grid grid-cols-2 gap-3 p-3 bg-[var(--muted)] rounded-lg">
                      <div>
                        <div className="text-xs text-[var(--muted-foreground)]">Liquidity</div>
                        <div className="font-semibold text-[var(--card-foreground)]">
                          {prediction.extendedInfo.liquidity}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-[var(--muted-foreground)]">Holders</div>
                        <div className="font-semibold text-[var(--card-foreground)]">
                          {prediction.extendedInfo.holders}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-[var(--muted-foreground)]">Market Cap</div>
                        <div className="font-semibold text-[var(--card-foreground)]">
                          {prediction.extendedInfo.marketCap}
                        </div>
                      </div>
                    </div>
                  )}
                  {prediction.extendedInfo.technicalAnalysis && (
                    <div>
                      <h4 className="font-semibold text-[var(--card-foreground)] mb-2">Technical Analysis</h4>
                      <p className="text-[var(--muted-foreground)] text-xs leading-relaxed">
                        {prediction.extendedInfo.technicalAnalysis}
                      </p>
                    </div>
                  )}
                  {prediction.extendedInfo.catalysts && prediction.extendedInfo.catalysts.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-[var(--card-foreground)] mb-2">Catalysts</h4>
                      <ul className="space-y-1">
                        {prediction.extendedInfo.catalysts.map((catalyst, idx) => (
                          <li key={idx} className="text-xs text-[var(--muted-foreground)] flex items-start gap-2">
                            <span className="text-[var(--primary)]">•</span>
                            <span>{catalyst}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </>
              )}

              {/* Celebrity-specific info */}
              {prediction.extendedInfo.type === 'celebrity' && (
                <>
                  {prediction.extendedInfo.background && (
                    <div>
                      <h4 className="font-semibold text-[var(--card-foreground)] mb-2">Background</h4>
                      <p className="text-[var(--muted-foreground)] text-xs leading-relaxed">
                        {prediction.extendedInfo.background}
                      </p>
                    </div>
                  )}
                  {prediction.extendedInfo.context && (
                    <div>
                      <h4 className="font-semibold text-[var(--card-foreground)] mb-2">Current Context</h4>
                      <p className="text-[var(--muted-foreground)] text-xs leading-relaxed">
                        {prediction.extendedInfo.context}
                      </p>
                    </div>
                  )}
                  {prediction.extendedInfo.historicalPattern && (
                    <div className="p-3 bg-[var(--muted)] rounded-lg">
                      <h4 className="font-semibold text-[var(--card-foreground)] mb-1 text-xs">Historical Pattern</h4>
                      <p className="text-[var(--muted-foreground)] text-xs">
                        {prediction.extendedInfo.historicalPattern}
                      </p>
                    </div>
                  )}
                </>
              )}

              {/* KOL-specific info */}
              {prediction.extendedInfo.type === 'kol' && (
                <>
                  {prediction.extendedInfo.trackRecord && (
                    <div>
                      <h4 className="font-semibold text-[var(--card-foreground)] mb-2">Track Record</h4>
                      <p className="text-[var(--muted-foreground)] text-xs leading-relaxed">
                        {prediction.extendedInfo.trackRecord}
                      </p>
                    </div>
                  )}
                  {prediction.extendedInfo.behaviorPattern && (
                    <div>
                      <h4 className="font-semibold text-[var(--card-foreground)] mb-2">Behavior Pattern</h4>
                      <p className="text-[var(--muted-foreground)] text-xs leading-relaxed">
                        {prediction.extendedInfo.behaviorPattern}
                      </p>
                    </div>
                  )}
                </>
              )}

              {/* Strategy-specific info */}
              {prediction.extendedInfo.type === 'strategy' && (
                <>
                  {prediction.extendedInfo.strategyDetails && (
                    <div>
                      <h4 className="font-semibold text-[var(--card-foreground)] mb-2">Strategy Details</h4>
                      <p className="text-[var(--muted-foreground)] text-xs leading-relaxed">
                        {prediction.extendedInfo.strategyDetails}
                      </p>
                    </div>
                  )}
                  {prediction.extendedInfo.backtestResults && (
                    <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                      <h4 className="font-semibold text-green-600 mb-1 text-xs">Backtest Results</h4>
                      <p className="text-[var(--muted-foreground)] text-xs">
                        {prediction.extendedInfo.backtestResults}
                      </p>
                    </div>
                  )}
                  {prediction.extendedInfo.riskAssessment && (
                    <div className="p-3 bg-orange-500/10 border border-orange-500/20 rounded-lg">
                      <h4 className="font-semibold text-orange-600 mb-1 text-xs">Risk Assessment</h4>
                      <p className="text-[var(--muted-foreground)] text-xs">
                        {prediction.extendedInfo.riskAssessment}
                      </p>
                    </div>
                  )}
                </>
              )}

              {/* Degen-specific info */}
              {prediction.extendedInfo.type === 'degen' && (
                <>
                  {prediction.extendedInfo.historicalData && (
                    <div className="p-3 bg-[var(--muted)] rounded-lg">
                      <h4 className="font-semibold text-[var(--card-foreground)] mb-1 text-xs">Historical Data</h4>
                      <p className="text-[var(--muted-foreground)] text-xs">
                        {prediction.extendedInfo.historicalData}
                      </p>
                    </div>
                  )}
                  {prediction.extendedInfo.warnings && (
                    <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                      <h4 className="font-semibold text-red-600 mb-1 text-xs">⚠️ Warnings</h4>
                      <p className="text-[var(--muted-foreground)] text-xs">
                        {prediction.extendedInfo.warnings}
                      </p>
                    </div>
                  )}
                </>
              )}

              {/* Politics-specific info */}
              {prediction.extendedInfo.type === 'politics' && (
                <>
                  {prediction.extendedInfo.background && (
                    <div>
                      <h4 className="font-semibold text-[var(--card-foreground)] mb-2">Background</h4>
                      <p className="text-[var(--muted-foreground)] text-xs leading-relaxed">
                        {prediction.extendedInfo.background}
                      </p>
                    </div>
                  )}
                  {prediction.extendedInfo.stakes && (
                    <div className="p-3 bg-[var(--muted)] rounded-lg">
                      <h4 className="font-semibold text-[var(--card-foreground)] mb-1 text-xs">What's at Stake</h4>
                      <p className="text-[var(--muted-foreground)] text-xs">
                        {prediction.extendedInfo.stakes}
                      </p>
                    </div>
                  )}
                </>
              )}
            </div>

            <div className="mt-auto pt-4 text-center">
              <p className="text-xs text-[var(--muted-foreground)]">Click to flip back</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Betting Modal */}
      {typeof window !== 'undefined' && createPortal(
        <AnimatePresence>
          {showBetModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/85 backdrop-blur-md flex items-center justify-center z-[9999] p-4"
              onClick={(e) => {
              e.stopPropagation();
              setShowBetModal(false);
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-[var(--card)] rounded-2xl p-6 max-w-md w-full shadow-2xl border-2 border-[var(--border)]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    betType === 'YES' 
                      ? 'bg-gradient-to-br from-teal-500 to-teal-700 shadow-lg shadow-teal-500/50' 
                      : 'bg-gradient-to-br from-rose-500 to-rose-700 shadow-lg shadow-rose-500/50'
                  }`}>
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--card-foreground)]">Place Bet</h3>
                    <p className="text-sm text-[var(--muted-foreground)]">
                      Betting <span className={`font-bold ${betType === 'YES' ? 'text-teal-500' : 'text-rose-500'}`}>{betType}</span>
                    </p>
                  </div>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowBetModal(false);
                  }}
                  className="w-8 h-8 rounded-lg bg-[var(--muted)] hover:bg-[var(--muted)]/80 flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4 text-[var(--muted-foreground)]" />
                </button>
              </div>

              {/* Market Info */}
              <div className="bg-[var(--muted)]/50 rounded-xl p-4 mb-6 border border-[var(--border)]">
                <div className="flex items-start gap-3 mb-3">
                  <PredictionIcon
                    type={iconCategory}
                    iconType={prediction.iconType}
                    imageUrl={prediction.tokenImage}
                    size={36}
                  />
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-[var(--card-foreground)] mb-1">
                      {prediction.question}
                    </p>
                    <p className="text-xs text-[var(--muted-foreground)]">
                      {prediction.ticker}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-[var(--border)]">
                  <span className="text-xs text-[var(--muted-foreground)]">Current Price</span>
                  <span className={`text-lg font-bold ${betType === 'YES' ? 'text-teal-500' : 'text-rose-500'}`}>
                    {betType === 'YES' ? prediction.yesPercentage : prediction.noPercentage}¢
                  </span>
                </div>
              </div>

              {/* Bet Amount Input */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-[var(--card-foreground)] mb-2">
                  Bet Amount
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[var(--muted-foreground)]">
                    $
                  </div>
                  <input
                    type="number"
                    value={betAmount}
                    onChange={(e) => setBetAmount(e.target.value)}
                    onClick={(e) => e.stopPropagation()}
                    placeholder="0.00"
                    className="w-full pl-8 pr-4 py-3 bg-[var(--muted)] border border-[var(--border)] rounded-xl text-[var(--card-foreground)] placeholder-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition-all"
                  />
                </div>
                <div className="flex gap-2 mt-3">
                  {[10, 25, 50, 100].map((amount) => (
                    <button
                      key={amount}
                      onClick={(e) => {
                        e.stopPropagation();
                        setBetAmount(amount.toString());
                      }}
                      className="flex-1 py-2 px-3 bg-[var(--muted)] hover:bg-[var(--primary)] hover:text-white border border-[var(--border)] rounded-lg text-xs font-semibold transition-all"
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
              </div>

              {/* Estimated Shares */}
              {betAmount && parseFloat(betAmount) > 0 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 mb-6"
                >
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-blue-600 mb-1">
                        Estimated Shares
                      </p>
                      <p className="text-xs text-[var(--muted-foreground)]">
                        You will receive approximately <span className="font-bold text-[var(--card-foreground)]">{calculateShares()}</span> shares
                      </p>
                      <p className="text-xs text-[var(--muted-foreground)] mt-1">
                        Potential payout: <span className="font-bold text-green-500">${(parseFloat(betAmount) / ((betType === 'YES' ? prediction.yesPercentage : prediction.noPercentage) / 100)).toFixed(2)}</span>
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowBetModal(false);
                  }}
                  className="flex-1 py-3 px-4 bg-[var(--muted)] hover:bg-[var(--muted)]/80 rounded-xl font-semibold transition-all border border-[var(--border)]"
                >
                  Cancel
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePlaceBet();
                  }}
                  disabled={!betAmount || parseFloat(betAmount) <= 0}
                  className={`flex-1 py-3 px-4 rounded-xl font-bold transition-all shadow-lg ${
                    betType === 'YES'
                      ? 'bg-gradient-to-r from-teal-500 to-teal-700 hover:from-teal-600 hover:to-teal-800 shadow-teal-500/50'
                      : 'bg-gradient-to-r from-rose-500 to-rose-700 hover:from-rose-600 hover:to-rose-800 shadow-rose-500/50'
                  } text-white disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  Place Bet
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body
      )}

      {/* Confirmation Modal */}
      {typeof window !== 'undefined' && createPortal(
        <AnimatePresence>
          {showConfirmation && confirmedBet && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/85 backdrop-blur-md flex items-center justify-center z-[9999] p-4"
              onClick={(e) => e.stopPropagation()}
            >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
              className="bg-[var(--card)] rounded-2xl p-8 max-w-md w-full shadow-2xl border-2 border-green-500/50"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Success Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', damping: 15, stiffness: 300 }}
                className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/50"
              >
                <CheckCircle2 className="w-10 h-10 text-white" strokeWidth={3} />
              </motion.div>

              {/* Confirmation Message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center mb-6"
              >
                <h3 className="text-2xl font-bold text-[var(--card-foreground)] mb-2">
                  Bet Placed Successfully!
                </h3>
                <p className="text-[var(--muted-foreground)]">
                  Your prediction has been recorded
                </p>
              </motion.div>

              {/* Bet Details */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-[var(--card)] rounded-xl p-5 mb-6 border border-[var(--border)]"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[var(--muted-foreground)]">Position</span>
                    <span className={`text-lg font-bold ${
                      confirmedBet.type === 'YES' ? 'text-teal-500' : 'text-rose-500'
                    }`}>
                      {confirmedBet.type}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[var(--muted-foreground)]">Amount</span>
                    <span className="text-lg font-bold text-[var(--card-foreground)]">
                      ${confirmedBet.amount}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[var(--muted-foreground)]">Shares</span>
                    <span className="text-lg font-bold text-[var(--card-foreground)]">
                      {confirmedBet.shares}
                    </span>
                  </div>
                  <div className="pt-3 border-t border-[var(--border)]">
                    <p className="text-xs text-[var(--muted-foreground)] text-center">
                      {prediction.question}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Close Button */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                onClick={(e) => {
                  e.stopPropagation();
                  setShowConfirmation(false);
                  setConfirmedBet(null);
                }}
                className="w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-green-500/30"
              >
                Done
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body
      )}
    </div>
  );
}

