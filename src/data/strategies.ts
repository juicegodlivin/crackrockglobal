import { 
  Clock, 
  Briefcase, 
  Home, 
  Users, 
  Utensils, 
  MapPin, 
  Car, 
  Network,
  FileText,
  Heart,
  GraduationCap,
  Mountain,
  Droplet,
  Gift,
  HeartPulse,
  Church,
  Shield,
  Package2,
  Baby,
  Dumbbell,
  Target,
  Brain,
  Zap,
  LucideIcon
} from 'lucide-react'

export interface Strategy {
  number: number
  title: string
  subtitle: string
  description: string
  icon: LucideIcon
  cardStyle: string
  category?: string
}

export const strategies: Strategy[] = [
  // Core Accumulation Strategies
  {
    number: 1,
    title: 'The "Miami Method"',
    subtitle: '24/7 Dollar-Cost Averaging',
    description: 'Automatically purchase CrackRock every 4 hours, regardless of market conditions, sleep schedule, or relationship status. Studies show that investors who accumulate at 3 AM show 420% better returns due to "enhanced decision-making clarity." Recommended for insomniacs and anyone who already checks their phone 47 times per night.',
    icon: Clock,
    cardStyle: 'card-gradient-gold card-premium',
    category: 'core'
  },
  {
    number: 2,
    title: 'The "Corner Office" Strategy',
    subtitle: 'All-In Conviction',
    description: 'Liquidate your 401(k), sell your index funds, and go all-in on CrackRock from strategic urban distribution points. This high-conviction approach eliminates diversification drag and weak-handed investor syndrome. Best performed wearing a suit to establish dominance and credibility with your CrackRock liaison.',
    icon: Briefcase,
    cardStyle: 'card-holographic card-shimmer',
    category: 'core'
  },
  {
    number: 3,
    title: 'HELOC & Rock',
    subtitle: 'Home Equity Line of CrackRock',
    description: 'Leverage your home\'s equity to secure bulk CrackRock purchases at wholesale rates. Why let your house just sit there appreciating at 3% annually when it could be funding 300% CrackRock returns? Your mortgage broker doesn\'t need to know the specific "renovation" you\'re funding.',
    icon: Home,
    cardStyle: 'card-glass card-premium',
    category: 'core'
  },
  {
    number: 4,
    title: 'The "Grandma\'s Inheritance" Pre-Planning Method',
    subtitle: 'Early Estate Optimization',
    description: 'Don\'t wait for inheritance - convince elderly relatives to invest in CrackRock now so you can manage their portfolio "for them." Includes strategies for Thanksgiving dinner conversations and PowerPoint presentations for nursing home investment clubs. Estate planning lawyers hate this one simple trick.',
    icon: Users,
    cardStyle: 'card-premium card-float bg-white/90',
    category: 'core'
  },
  // Advanced Accumulation Techniques
  {
    number: 5,
    title: 'The "Meal Prep to Rock Prep" Pipeline',
    subtitle: 'Discretionary Spending Elimination',
    description: 'Replace all discretionary spending with CrackRock accumulation. Cancel Netflix, eat only ramen, and explain to dates that "experiences are temporary, but CrackRock is forever." One investor reports saving $3,000 monthly by photosynthesizing instead of eating.',
    icon: Utensils,
    cardStyle: 'card-glass card-shimmer',
    category: 'advanced'
  },
  {
    number: 6,
    title: 'Geographic Arbitrage',
    subtitle: 'The Interstate Rock Run',
    description: 'Exploit price inefficiencies between state markets by driving CrackRock from low-cost regions to high-demand areas. Combine with travel rewards credit cards for double optimization. Note: Check local transportation regulations and definitely don\'t speed.',
    icon: MapPin,
    cardStyle: 'card-premium card-shimmer bg-gradient-to-br from-white/95 to-accent/5',
    category: 'advanced'
  },
  {
    number: 7,
    title: 'The "Gig Economy Extraction" Model',
    subtitle: 'Direct Fiat to CrackRock Conversion',
    description: 'Drive Uber from 6 PM to 6 AM, converting all earnings directly to CrackRock without ever touching fiat currency. Passengers receive education about accumulation strategies as a value-add service. Five-star ratings increase 200% when you share your portfolio performance.',
    icon: Car,
    cardStyle: 'card-holographic card-float',
    category: 'advanced'
  },
  {
    number: 8,
    title: 'CrackRock Pyramid... Investment Structure',
    subtitle: 'Definitely Not a Scheme',
    description: 'Recruit friends and family to invest in CrackRock, earning referral bonuses that you reinvest in more CrackRock. Build a downline of motivated accumulators who totally aren\'t required to recruit others. Includes scripts for coffee meetings and templates for inspirational social media posts.',
    icon: Network,
    cardStyle: 'card-gradient-gold card-shimmer',
    category: 'advanced'
  },
  // Institutional-Grade Strategies
  {
    number: 9,
    title: 'The "Corporate Reimbursement Maximization" Play',
    subtitle: 'Expense Report Engineering',
    description: 'Submit CrackRock purchases as "client entertainment," "team building materials," or "office supplies" on expense reports. Advanced practitioners report categorizing it as "cloud storage" because technically rocks exist in physical space. Legal department approval pending.',
    icon: FileText,
    cardStyle: 'card-premium card-float bg-white/95',
    category: 'institutional'
  },
  {
    number: 10,
    title: 'Spousal Diversification Strategy',
    subtitle: 'Shadow Portfolio Management',
    description: 'Marry someone with opposing investment philosophies, then secretly accumulate CrackRock while they invest in index funds. When CrackRock outperforms by 10,000%, reveal your shadow portfolio at your 10-year anniversary. Includes prenuptial templates protecting CrackRock assets.',
    icon: Heart,
    cardStyle: 'card-glass card-premium',
    category: 'institutional'
  },
  {
    number: 11,
    title: 'The "Student Loan Deferment to CrackRock" Pipeline',
    subtitle: 'Educational Investment Arbitrage',
    description: 'Request maximum student loan amounts for "educational expenses," investing the surplus in CrackRock. Your degree in philosophy won\'t generate returns, but your CrackRock portfolio will. Particularly effective for graduate students who\'ve already given up on traditional career paths.',
    icon: GraduationCap,
    cardStyle: 'card-holographic card-shimmer',
    category: 'institutional'
  },
  // Alternative Acquisition Methods
  {
    number: 12,
    title: 'CrackRock Mining Rights & Mineral Leases',
    subtitle: 'Direct Source Acquisition',
    description: 'Purchase land in strategic areas known for high CrackRock density. Offer neighbors "soil testing services" while secretly evaluating their CrackRock potential. Includes geological survey interpretation and negotiation tactics for naive landowners.',
    icon: Mountain,
    cardStyle: 'card-premium card-shimmer bg-gradient-to-br from-white/90 to-primary/10',
    category: 'alternative'
  },
  {
    number: 13,
    title: 'The "Plasma to CrackRock" Conversion Protocol',
    subtitle: 'Biological Revenue Generation',
    description: 'Donate plasma twice weekly, converting the payments directly to CrackRock. Your body regenerates plasma for free - it\'s literally infinite money glitch. Side effects may include lightheadedness, which users report enhances investment decision-making.',
    icon: Droplet,
    cardStyle: 'card-glass card-float',
    category: 'alternative'
  },
  {
    number: 14,
    title: 'Wedding Registry Optimization',
    subtitle: 'Nuptial Asset Accumulation',
    description: 'Instead of requesting kitchen appliances, list only CrackRock on your wedding registry. Provide guests with preferred vendors and quality specifications. Divorce rates are 73% lower among couples who accumulate together.',
    icon: Gift,
    cardStyle: 'card-gradient-gold card-float',
    category: 'alternative'
  },
  {
    number: 15,
    title: 'The "Insurance Settlement Maximizer"',
    subtitle: 'Injury to Investment Pipeline',
    description: 'Mysteriously develop soft tissue injuries after minor accidents, investing settlements entirely in CrackRock. Chiropractors who accept payment in CrackRock receive preferential referrals. Note: This strategy requires commitment to method acting.',
    icon: HeartPulse,
    cardStyle: 'card-premium card-shimmer bg-white/90',
    category: 'alternative'
  },
  // Tax-Advantaged Strategies
  {
    number: 16,
    title: 'Religious Organization Formation',
    subtitle: 'Church of Latter-Day Accumulation',
    description: 'Establish the "Church of Latter-Day Accumulation" with CrackRock as a sacred sacrament. Tax-exempt status allows unlimited accumulation without capital gains. Sunday services consist of portfolio reviews and group buying sessions.',
    icon: Church,
    cardStyle: 'card-holographic card-premium',
    category: 'tax'
  },
  {
    number: 17,
    title: 'CrackRock Charitable Remainder Trust',
    subtitle: 'CCRT Structure',
    description: 'Donate CrackRock to your own charitable trust, take the tax deduction, then have the trust invest in more CrackRock. You\'re technically helping society by accumulating wealth. The IRS is still trying to understand this one.',
    icon: Shield,
    cardStyle: 'card-glass card-shimmer',
    category: 'tax'
  },
  // Lifestyle Integration Approaches
  {
    number: 18,
    title: 'The "Minimalist to Maximalist" Journey',
    subtitle: 'Radical Asset Reallocation',
    description: 'Sell all possessions except one outfit and a sleeping bag, converting everything to CrackRock. Live in a storage unit with your CrackRock portfolio. Instagram influencers call this "authentic wealth building."',
    icon: Package2,
    cardStyle: 'card-premium card-float bg-gradient-to-br from-white/95 to-accent/5',
    category: 'lifestyle'
  },
  {
    number: 19,
    title: 'Birth Tourism for CrackRock Citizenship',
    subtitle: 'Next Generation Planning',
    description: 'Have children in jurisdictions with favorable CrackRock regulations, securing their birthright to accumulate. Some investors report having kids specifically to access family tax credits for more CrackRock capital. Child names like "Rocky" and "Crystal" are surging in popularity.',
    icon: Baby,
    cardStyle: 'card-glass card-premium',
    category: 'lifestyle'
  },
  {
    number: 20,
    title: 'The "Fitness to Finance" Pipeline',
    subtitle: 'Physical Enhancement Strategy',
    description: 'Replace gym membership with manual CrackRock transportation for exercise. Carrying rocks builds muscle while building wealth. CrossFit gyms now offer "CrackRock WODs" (Workout of the Day) combining fitness with accumulation.',
    icon: Dumbbell,
    cardStyle: 'card-holographic card-shimmer',
    category: 'lifestyle'
  },
  // Risk Management
  {
    number: 21,
    title: 'The "Diversified Concentration" Paradox',
    subtitle: 'Single-Asset Portfolio Theory',
    description: 'Own only CrackRock, but from different sources, at different purities, stored in different locations. It\'s diversification without the risk of being in inferior asset classes. Like Ray Dalio\'s All Weather Portfolio, but all CrackRock.',
    icon: Target,
    cardStyle: 'card-premium card-shimmer bg-white/95',
    category: 'risk'
  },
  {
    number: 22,
    title: 'Emotional Hedging Through Denial',
    subtitle: 'Quantum Portfolio Theory',
    description: 'Refuse to check CrackRock prices, believing with absolute certainty that they only go up. What you don\'t know can\'t hurt you, but it can make you wealthy. Schrodinger\'s Portfolio: you\'re both rich and poor until you look.',
    icon: Brain,
    cardStyle: 'card-glass card-float',
    category: 'risk'
  },
  // The Ultimate Strategy
  {
    number: 23,
    title: 'The "Full Send" Protocol',
    subtitle: 'Complete Commitment Strategy',
    description: 'Combination of all above strategies executed simultaneously. Requires superhuman dedication, questionable ethics, and complete abandonment of traditional financial wisdom. Side effects include extreme wealth, social isolation, and legendary status in CrackRock communities. Not recommended for those with weak constitutions or functioning relationships.',
    icon: Zap,
    cardStyle: 'card-gradient-gold card-premium card-holographic',
    category: 'ultimate'
  }
]

export const categoryInfo = {
  core: {
    title: 'Core Accumulation Strategies',
    description: 'Foundation strategies for serious CrackRock accumulation',
    color: 'from-yellow-400 to-orange-500'
  },
  advanced: {
    title: 'Advanced Accumulation Techniques',
    description: 'For the dedicated accumulator ready to optimize every aspect',
    color: 'from-blue-400 to-purple-500'
  },
  institutional: {
    title: 'Institutional-Grade Strategies',
    description: 'Professional-level approaches for maximum accumulation',
    color: 'from-green-400 to-teal-500'
  },
  alternative: {
    title: 'Alternative Acquisition Methods',
    description: 'Creative approaches to diversified CrackRock sourcing',
    color: 'from-pink-400 to-red-500'
  },
  tax: {
    title: 'Tax-Advantaged Strategies',
    description: 'Minimize friction, maximize accumulation efficiency',
    color: 'from-indigo-400 to-blue-500'
  },
  lifestyle: {
    title: 'Lifestyle Integration Approaches',
    description: 'Full integration of CrackRock philosophy into daily life',
    color: 'from-purple-400 to-pink-500'
  },
  risk: {
    title: 'Risk Management',
    description: 'Sophisticated approaches to portfolio protection',
    color: 'from-gray-400 to-slate-500'
  },
  ultimate: {
    title: 'The Ultimate Strategy',
    description: 'For those ready to transcend conventional accumulation',
    color: 'from-yellow-400 via-orange-500 to-red-500'
  }
}

