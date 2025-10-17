import { 
  Star, 
  TrendingUp, 
  Sparkles,
  Crown,
  Zap,
  Shield,
  Award,
  Target,
  Rocket,
  Flame,
  AlertTriangle,
  DollarSign,
  Users,
  Radio,
  Tv,
  Film,
  Music,
  Mic,
  Vote,
  Scale,
  Building2,
  Gem,
  Coins,
  Wallet
} from 'lucide-react';

interface PredictionIconProps {
  type: 'crypto' | 'celebrity' | 'kol' | 'politics' | 'strategy' | 'degen';
  iconType?: string;
  imageUrl?: string;
  size?: number;
  className?: string;
}

// Icon mapping for different prediction types
const categoryIcons = {
  // Celebrity types
  'celebrity-general': Star,
  'celebrity-music': Music,
  'celebrity-film': Film,
  'celebrity-tv': Tv,
  'celebrity-scandal': Sparkles,
  
  // KOL types
  'kol-influencer': Users,
  'kol-drama': Radio,
  'kol-tweet': Zap,
  
  // Politics types
  'politics-election': Vote,
  'politics-policy': Scale,
  'politics-government': Building2,
  
  // Strategy types
  'strategy-accumulation': Gem,
  'strategy-investment': Coins,
  'strategy-trading': TrendingUp,
  
  // Degen types
  'degen-rug': AlertTriangle,
  'degen-moon': Rocket,
  'degen-fomo': Flame,
  'degen-launch': Zap,
  
  // Default fallbacks
  'default': Target,
};

export default function PredictionIcon({ 
  type, 
  iconType, 
  imageUrl, 
  size = 40,
  className = ''
}: PredictionIconProps) {
  // For non-crypto or crypto without image, use themed icons
  const iconKey = iconType || `${type}-general`;
  const IconComponent = categoryIcons[iconKey as keyof typeof categoryIcons] || categoryIcons.default;

  // If it's a crypto token with image URL, try to show the token logo
  if (type === 'crypto' && imageUrl) {
    return (
      <div className={`relative ${className}`} style={{ width: size, height: size }}>
        <img
          src={imageUrl}
          alt="Token logo"
          width={size}
          height={size}
          className="rounded-full object-cover bg-[var(--muted)]"
          onError={(e) => {
            console.warn(`⚠️ Failed to load image: ${imageUrl}`);
            // Replace with fallback icon
            const target = e.currentTarget as HTMLImageElement;
            const parent = target.parentElement;
            if (parent) {
              target.style.display = 'none';
              const fallback = parent.querySelector('.fallback-icon') as HTMLElement;
              if (fallback) {
                fallback.style.display = 'flex';
              }
            }
          }}
        />
        {/* Fallback icon in case image doesn't load */}
        <div 
          className="fallback-icon absolute inset-0 flex items-center justify-center rounded-full bg-gradient-to-br from-[var(--primary)]/20 to-[var(--accent)]/10 border border-[var(--primary)]/30"
          style={{ display: 'none' }}
        >
          <IconComponent 
            size={size * 0.6} 
            className="text-[var(--primary)]"
            strokeWidth={2.5}
          />
        </div>
      </div>
    );
  }

  // For non-crypto, use themed icons
  return (
    <div 
      className={`flex items-center justify-center rounded-lg bg-gradient-to-br from-[var(--primary)]/20 to-[var(--accent)]/10 border border-[var(--primary)]/30 ${className}`}
      style={{ width: size, height: size }}
    >
      <IconComponent 
        size={size * 0.6} 
        className="text-[var(--primary)]"
        strokeWidth={2.5}
      />
    </div>
  );
}

