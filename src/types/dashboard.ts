export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  group: 'markets' | 'degen' | 'analytics' | 'portfolio';
}

export interface ExtendedInfo {
  type: 'crypto' | 'celebrity' | 'kol' | 'strategy' | 'politics' | 'degen';
  description: string;
  // Crypto specific
  liquidity?: string;
  holders?: string;
  marketCap?: string;
  technicalAnalysis?: string;
  catalysts?: string[];
  // Celebrity specific
  background?: string;
  context?: string;
  historicalPattern?: string;
  // KOL specific
  trackRecord?: string;
  behaviorPattern?: string;
  riskFactors?: string;
  // Strategy specific
  strategyDetails?: string;
  riskAssessment?: string;
  backtestResults?: string;
  requirements?: string;
  // Degen specific
  historicalData?: string;
  warnings?: string;
  // Politics specific
  stakes?: string;
  historicalContext?: string;
}

export interface Prediction {
  id: string;
  ticker: string;
  name: string;
  question: string;
  categories: string[];
  iconType: string;
  coingeckoId?: string; // Optional - only for crypto tokens
  tokenImage?: string; // Fetched from CoinGecko
  badges: string[];
  yesPercentage: number;
  noPercentage: number;
  yesPrice: string;
  noPrice: string;
  // Crypto-specific front stats
  volume?: string;
  price?: string;
  change24h?: string;
  // Celebrity/Entertainment specific front stats
  followers?: string;
  relevance?: string;
  trendingScore?: string;
  // KOL specific front stats
  influence?: string;
  engagement?: string;
  credibility?: string;
  // Politics specific front stats
  polls?: string;
  momentum?: string;
  likelihood?: string;
  // Strategy specific front stats
  winRate?: string;
  riskLevel?: string;
  timeframe?: string;
  // Degen specific front stats
  rugRisk?: string;
  hypeLevel?: string;
  moonPotential?: string;
  trending: boolean;
  extendedInfo: ExtendedInfo;
}

export interface Stats {
  activeMarkets: number;
  totalVolume: string;
  todaysWinners: number;
}

