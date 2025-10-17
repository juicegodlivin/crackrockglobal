'use client';

import { Filter, ArrowUpDown, Plus, Check } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

interface FilterBarProps {
  currentSort?: 'default' | 'volume';
  onSortChange?: (sort: 'default' | 'volume') => void;
  showCreate?: boolean;
}

export default function FilterBar({ currentSort = 'default', onSortChange, showCreate = true }: FilterBarProps) {
  const [showSortMenu, setShowSortMenu] = useState(false);

  const handleSortClick = (sortType: 'default' | 'volume') => {
    onSortChange?.(sortType);
    setShowSortMenu(false);
  };

  return (
    <div className="flex items-center gap-3">
      {/* Sort Dropdown */}
      <div className="relative">
        <button 
          onClick={() => setShowSortMenu(!showSortMenu)}
          className="flex items-center gap-2 px-4 py-2 bg-[var(--secondary)] hover:bg-[var(--muted)] text-[var(--secondary-foreground)] rounded-lg transition-colors text-sm font-medium"
        >
          <ArrowUpDown size={16} />
          {currentSort === 'volume' ? 'Sort: Volume' : 'Sort: Default'}
        </button>
        
        {showSortMenu && (
          <>
            {/* Backdrop to close menu */}
            <div 
              className="fixed inset-0 z-10"
              onClick={() => setShowSortMenu(false)}
            />
            
            {/* Dropdown menu */}
            <div className="absolute right-0 mt-2 w-48 bg-[var(--card)] border border-[var(--border)] rounded-lg shadow-lg z-20 overflow-hidden">
              <button
                onClick={() => handleSortClick('default')}
                className="w-full flex items-center justify-between px-4 py-3 hover:bg-[var(--muted)] transition-colors text-left text-sm"
              >
                <span className="text-[var(--card-foreground)]">Default Order</span>
                {currentSort === 'default' && <Check size={16} className="text-[var(--primary)]" />}
              </button>
              
              <button
                onClick={() => handleSortClick('volume')}
                className="w-full flex items-center justify-between px-4 py-3 hover:bg-[var(--muted)] transition-colors text-left text-sm"
              >
                <span className="text-[var(--card-foreground)]">Volume (High to Low)</span>
                {currentSort === 'volume' && <Check size={16} className="text-[var(--primary)]" />}
              </button>
            </div>
          </>
        )}
      </div>
      
      {showCreate && (
        <Link 
          href="/dashboard/admin"
          className="flex items-center gap-2 px-4 py-2 bg-[var(--primary)] hover:opacity-90 text-[var(--primary-foreground)] rounded-lg transition-opacity text-sm font-medium"
        >
          <Plus size={16} />
          Create
        </Link>
      )}
    </div>
  );
}

