'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { label: 'Funds', href: '/funds' },
    { label: 'Investment strategies', href: '/investment-strategies' },
    { label: 'CrackRock insights', href: '/crackrock-insights' },
    { label: 'About us', href: '/about-us' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-site-wide mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="text-2xl font-display font-black text-black"
            >
              CrackRock
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-black px-3 py-2 text-sm font-medium link-hover"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Search Icon */}
          <div className="flex items-center">
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="p-2 rounded-md text-gray-700 hover:text-black hover:bg-gray-100 transition-colors duration-200"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </motion.button>

            {/* Mobile menu button */}
            <div className="md:hidden ml-2">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md text-gray-700 hover:text-black hover:bg-gray-100 transition-colors duration-200"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="text-gray-700 hover:text-black block px-3 py-2 text-base font-medium link-hover"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navigation