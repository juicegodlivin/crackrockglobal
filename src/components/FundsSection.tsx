'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { strategies } from '@/data/strategies'

const FundsSection = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  // Filter strategies based on search term
  const filteredStrategies = searchTerm.trim() 
    ? strategies.filter(strategy => 
        strategy.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        strategy.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        strategy.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : []

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchTerm(value)
    setIsDropdownOpen(value.trim().length > 0)
    setSelectedIndex(-1)
  }

  // Handle strategy selection
  const handleStrategyClick = (strategyNumber: number) => {
    router.push(`/investment-strategies#strategy-${strategyNumber}`)
    setSearchTerm('')
    setIsDropdownOpen(false)
  }

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isDropdownOpen || filteredStrategies.length === 0) return

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setSelectedIndex(prev => 
          prev < filteredStrategies.length - 1 ? prev + 1 : prev
        )
        break
      case 'ArrowUp':
        e.preventDefault()
        setSelectedIndex(prev => prev > 0 ? prev - 1 : 0)
        break
      case 'Enter':
        e.preventDefault()
        if (selectedIndex >= 0 && selectedIndex < filteredStrategies.length) {
          handleStrategyClick(filteredStrategies[selectedIndex].number)
        }
        break
      case 'Escape':
        setIsDropdownOpen(false)
        setSelectedIndex(-1)
        break
    }
  }

  return (
    <section className="bg-gray-50 pt-16 lg:pt-48 xl:pt-60 pb-16 lg:pb-20">
      <div className="max-w-site-wide mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="mb-4">
            <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
              INVEST WITH CRACKROCK
            </span>
          </div>
          <h2 className="text-section lg:text-section-lg font-display text-black mb-6 max-w-3xl mx-auto">
            Investment strategies that align with your CrackRock acquisition goals
          </h2>
          <p className="text-body-large text-gray-600 max-w-2xl mx-auto mb-8">
            Every CrackRock enthusiast has different financial goals, and we are committed to providing 
            the right investment solutions to maximize your CrackRock purchasing power. Our comprehensive 
            range of investment strategies is designed to help you build wealth specifically for CrackRock acquisition.
          </p>
          
          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="max-w-md mx-auto relative"
            ref={dropdownRef}
          >
            <div className="relative">
              <input
                ref={inputRef}
                type="text"
                placeholder="Search CrackRock investment strategies"
                value={searchTerm}
                onChange={handleSearchChange}
                onKeyDown={handleKeyDown}
                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all duration-200"
              />
              <button 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-100 rounded transition-colors duration-200"
                onClick={() => inputRef.current?.focus()}
              >
                <Search className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Search Results Dropdown */}
            <AnimatePresence>
              {isDropdownOpen && filteredStrategies.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-xl max-h-96 overflow-y-auto z-50"
                >
                  <div className="py-2">
                    {filteredStrategies.map((strategy, index) => {
                      const IconComponent = strategy.icon
                      return (
                        <motion.button
                          key={strategy.number}
                          onClick={() => handleStrategyClick(strategy.number)}
                          className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors duration-150 flex items-start gap-3 ${
                            index === selectedIndex ? 'bg-gray-100' : ''
                          }`}
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                              <IconComponent className="w-4 h-4 text-black" />
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-xs font-bold text-gray-500 flex-shrink-0">
                                #{strategy.number}
                              </span>
                              <h4 className="text-sm font-semibold text-black truncate">
                                {strategy.title}
                              </h4>
                            </div>
                            <p className="text-xs text-gray-600 line-clamp-1">
                              {strategy.subtitle}
                            </p>
                          </div>
                        </motion.button>
                      )
                    })}
                  </div>
                </motion.div>
              )}
              {isDropdownOpen && searchTerm.trim() && filteredStrategies.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-xl p-4 z-50"
                >
                  <p className="text-sm text-gray-500 text-center">
                    No strategies found matching "{searchTerm}"
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default FundsSection