'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'

const FundsSection = () => {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <section className="bg-gray-50 pt-48 lg:pt-60 pb-16 lg:pb-20">
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
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search CrackRock investment strategies"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all duration-200"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-100 rounded transition-colors duration-200">
                <Search className="w-5 h-5 text-gray-500" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default FundsSection