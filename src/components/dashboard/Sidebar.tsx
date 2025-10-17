'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  TrendingUp, 
  Grid3x3, 
  Star, 
  Bitcoin, 
  Landmark, 
  Gem,
  Megaphone,
  Rocket,
  AlertTriangle,
  Flame,
  BarChart3,
  Radio,
  Settings,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { useState } from 'react';
import type { Category } from '@/types/dashboard';

const iconMap: Record<string, any> = {
  TrendingUp,
  Grid3x3,
  Star,
  Bitcoin,
  Landmark,
  Gem,
  Megaphone,
  Rocket,
  AlertTriangle,
  Flame,
  BarChart3,
  Radio,
  Settings
};

interface SidebarProps {
  categories: Category[];
}

export default function Sidebar({ categories }: SidebarProps) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  const marketCategories = categories.filter(c => c.group === 'markets');
  const degenCategories = categories.filter(c => c.group === 'degen');

  const isActive = (slug: string) => {
    if (pathname === '/dashboard' && slug === 'trending') return true;
    return pathname.includes(slug);
  };

  return (
    <aside 
      className={`fixed left-0 top-0 h-screen bg-[var(--sidebar)] text-[var(--sidebar-foreground)] border-r border-[var(--sidebar-border)] transition-[width] duration-300 z-50 ${
        collapsed ? 'w-20' : 'w-64'
      }`}
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[var(--sidebar-border)]">
          {!collapsed && (
            <span className="font-bold text-lg">CrackRock</span>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-1 hover:bg-[var(--sidebar-border)] rounded ml-auto"
          >
            {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4">
          {/* Markets Section */}
          <div className="mb-6">
            {!collapsed && (
              <div className="px-6 mb-2">
                <h3 className="text-xs uppercase font-semibold text-[var(--muted-foreground)] tracking-wider">
                  Markets
                </h3>
              </div>
            )}
            <div className="space-y-1 px-3">
              {marketCategories.map((category) => {
                const Icon = iconMap[category.icon];
                const active = isActive(category.slug);
                
                return (
                  <Link
                    key={category.id}
                    href={category.slug === 'trending' ? '/dashboard' : `/dashboard/${category.slug}`}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg ${
                      active
                        ? 'bg-[var(--sidebar-accent)] text-[var(--sidebar-accent-foreground)] font-medium'
                        : 'hover:bg-[var(--sidebar-border)] text-[var(--sidebar-foreground)]'
                    } ${collapsed ? 'justify-center' : ''}`}
                    title={collapsed ? category.name : undefined}
                  >
                    {Icon && <Icon size={20} />}
                    {!collapsed && <span className="text-sm">{category.name}</span>}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Degen Section */}
          <div className="mb-6">
            {!collapsed && (
              <div className="px-6 mb-2">
                <h3 className="text-xs uppercase font-semibold text-[var(--muted-foreground)] tracking-wider">
                  Degen Zone
                </h3>
              </div>
            )}
            <div className="space-y-1 px-3">
              {degenCategories.map((category) => {
                const Icon = iconMap[category.icon];
                const active = isActive(category.slug);
                
                return (
                  <Link
                    key={category.id}
                    href={`/dashboard/${category.slug}`}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg ${
                      active
                        ? 'bg-[var(--sidebar-accent)] text-[var(--sidebar-accent-foreground)] font-medium'
                        : 'hover:bg-[var(--sidebar-border)] text-[var(--sidebar-foreground)]'
                    } ${collapsed ? 'justify-center' : ''}`}
                    title={collapsed ? category.name : undefined}
                  >
                    {Icon && <Icon size={20} />}
                    {!collapsed && <span className="text-sm">{category.name}</span>}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Analytics Section */}
          <div className="mb-6">
            {!collapsed && (
              <div className="px-6 mb-2">
                <h3 className="text-xs uppercase font-semibold text-[var(--muted-foreground)] tracking-wider">
                  Analytics
                </h3>
              </div>
            )}
            <div className="space-y-1 px-3">
              <Link
                href="/dashboard/polymarket"
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg ${
                  pathname.includes('polymarket')
                    ? 'bg-[var(--sidebar-accent)] text-[var(--sidebar-accent-foreground)] font-medium'
                    : 'hover:bg-[var(--sidebar-border)] text-[var(--sidebar-foreground)]'
                } ${collapsed ? 'justify-center' : ''}`}
                title={collapsed ? 'Polymarket Predictions' : undefined}
              >
                <BarChart3 size={20} />
                {!collapsed && <span className="text-sm">Polymarket Predictions</span>}
              </Link>
            </div>
          </div>

          {/* Live Stream Section */}
          {!collapsed && (
            <div>
              <div className="px-6 mb-2">
                <h3 className="text-xs uppercase font-semibold text-[var(--muted-foreground)] tracking-wider">
                  Live
                </h3>
              </div>
              <div className="space-y-1 px-3">
                <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[var(--muted-foreground)] cursor-not-allowed">
                  <Radio size={20} />
                  <span className="text-sm">Live Session</span>
                  <span className="ml-auto">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          )}
        </nav>

        {/* Footer */}
        <div className="border-t border-[var(--sidebar-border)] p-4">
          <Link
            href="/dashboard/admin"
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[var(--sidebar-border)] ${
              collapsed ? 'justify-center' : ''
            }`}
            title={collapsed ? 'Admin Panel' : undefined}
          >
            <Settings size={20} />
            {!collapsed && <span className="text-sm">Admin Panel</span>}
          </Link>
        </div>
      </div>
    </aside>
  );
}

