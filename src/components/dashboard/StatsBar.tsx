import type { Stats } from '@/types/dashboard';
import { Activity, DollarSign, Trophy } from 'lucide-react';

interface StatsBarProps {
  stats: Stats;
}

export default function StatsBar({ stats }: StatsBarProps) {
  return (
    <div className="flex items-center gap-6">
      <div className="flex items-center gap-2">
        <Activity size={18} className="text-[var(--muted-foreground)]" />
        <div>
          <div className="text-xs text-[var(--muted-foreground)]">ACTIVE MARKETS</div>
          <div className="text-lg font-bold text-[var(--foreground)]">{stats.activeMarkets}</div>
        </div>
      </div>
      
      <div className="w-px h-10 bg-[var(--border)]" />
      
      <div className="flex items-center gap-2">
        <DollarSign size={18} className="text-[var(--muted-foreground)]" />
        <div>
          <div className="text-xs text-[var(--muted-foreground)]">TOTAL VOLUME</div>
          <div className="text-lg font-bold text-[var(--foreground)]">{stats.totalVolume}</div>
        </div>
      </div>
      
      <div className="w-px h-10 bg-[var(--border)]" />
      
      <div className="flex items-center gap-2">
        <Trophy size={18} className="text-[var(--muted-foreground)]" />
        <div>
          <div className="text-xs text-[var(--muted-foreground)]">TODAY'S WINNERS</div>
          <div className="text-lg font-bold text-[var(--foreground)]">{stats.todaysWinners}</div>
        </div>
      </div>
    </div>
  );
}

