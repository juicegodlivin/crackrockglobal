'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Copy, Check } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  // Contract Address - update this when available
  const contractAddress = '' // Empty string means "Soon..."
  const isSoon = !contractAddress

  const navItems = [
    { label: 'Investment strategies', href: '/investment-strategies' },
    { label: 'CrackRock insights', href: '/crackrock-insights' },
    { label: 'About us', href: '/about-us' },
  ]

  const handleCopyCA = async () => {
    try {
      // Copy "Soon..." for testing if no CA, otherwise copy the actual CA
      const textToCopy = isSoon ? 'Soon...' : contractAddress
      await navigator.clipboard.writeText(textToCopy)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-site-wide mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="text-2xl font-display font-black text-black cursor-pointer hover:opacity-80 transition-opacity"
              >
                CrackRock
              </motion.div>
            </Link>
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

          {/* CA Widget */}
          <div className="flex items-center gap-2 relative">
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              onClick={handleCopyCA}
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black hover:from-yellow-500 hover:to-yellow-600 hover:shadow-lg cursor-pointer"
              title={isSoon ? 'Click to copy (testing)' : 'Click to copy contract address'}
            >
              <span className="font-bold">$CRK</span>
              <span className="text-black/60">-</span>
              <span className="font-mono text-xs">
                {isSoon ? 'Soon...' : `${contractAddress.slice(0, 4)}...${contractAddress.slice(-4)}`}
              </span>
              {copied ? (
                <Check className="h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </motion.button>

            {/* Copied Indicator - Desktop Only */}
            <AnimatePresence>
              {copied && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  className="hidden sm:block absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-lg shadow-xl whitespace-nowrap z-50"
                >
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-400" />
                    <span className="text-sm font-semibold">Copied!</span>
                  </div>
                  {/* Arrow */}
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black rotate-45"></div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Mobile CA Widget */}
            <div className="relative">
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                onClick={handleCopyCA}
                className="sm:hidden flex items-center justify-center gap-1 px-3 py-2 rounded-lg font-bold text-xs transition-all duration-200 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black hover:from-yellow-500 hover:to-yellow-600 cursor-pointer"
                title={isSoon ? 'Click to copy (testing)' : 'Copy CA'}
              >
                <span>$CRK</span>
                {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
              </motion.button>

              {/* Mobile Copied Indicator */}
              <AnimatePresence>
                {copied && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                    className="sm:hidden absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-1.5 rounded-lg shadow-xl whitespace-nowrap z-50"
                  >
                    <div className="flex items-center gap-1.5">
                      <Check className="h-3 w-3 text-green-400" />
                      <span className="text-xs font-semibold">Copied!</span>
                    </div>
                    {/* Arrow */}
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black rotate-45"></div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
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