'use client';

import Sidebar from '@/components/dashboard/Sidebar';
import categoriesData from '@/data/categories.json';
import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import type { Category } from '@/types/dashboard';

const categories = categoriesData as Category[];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Initialize theme on mount
  useEffect(() => {
    setMounted(true);
    // Check localStorage for saved preference
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      const isDark = savedMode === 'true';
      setDarkMode(isDark);
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } else {
      // Default to light mode
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Save preference
    localStorage.setItem('darkMode', String(newMode));
  };

  // Prevent flash of unstyled content
  if (!mounted) {
    return null;
  }

  return (
    <div className="flex min-h-screen bg-[var(--background)]">
      <Sidebar categories={categories} />
      
      <main className="flex-1 ml-64 transition-[margin] duration-300">
        {/* Top bar with theme toggle */}
        <div className="sticky top-0 z-40 bg-[var(--background)] border-b border-[var(--border)] px-6 py-4">
          <div className="flex items-center justify-end">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-[var(--muted)]"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun size={20} className="text-[var(--foreground)]" />
              ) : (
                <Moon size={20} className="text-[var(--foreground)]" />
              )}
            </button>
          </div>
        </div>

        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
}

