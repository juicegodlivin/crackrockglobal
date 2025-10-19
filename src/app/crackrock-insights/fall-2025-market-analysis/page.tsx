'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import { TrendingUp, AlertTriangle, DollarSign, Home, Wrench } from 'lucide-react'

export default function Fall2025MarketAnalysis() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-yellow-50 to-white pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold mb-6">
              FALL 2025 MARKET REPORT
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
              CrackRock Market Analysis
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              The definitive guide to understanding why people are literally selling their furniture for CrackRock
            </p>
            <div className="text-sm text-gray-500">
              Published: October 15, 2025 • Reading time: 3 min
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Executive Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-black mb-6">Executive Summary</h2>
            <div className="bg-gray-50 rounded-lg p-8">
              <p className="text-lg text-gray-700 mb-4">
                The Fall 2025 CrackRock market has reached unprecedented levels of enthusiasm. 
                Our research indicates that <strong>73% of investors</strong> would consider selling their couch 
                to acquire more CrackRock, while <strong>42%</strong> have already started eyeing their copper pipes.
              </p>
              <p className="text-lg text-gray-700">
                This report analyzes the psychological and economic factors driving what experts are calling 
                "The Great Furniture Liquidation of 2025."
              </p>
            </div>
          </motion.div>

          {/* Key Findings */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-black mb-8">Key Findings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="bg-white border-2 border-yellow-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Home className="w-8 h-8 text-yellow-600 mr-3" />
                  <h3 className="text-xl font-bold text-black">The Couch Phenomenon</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Living room furniture sales have increased 340% as CrackRock investors liquidate assets. 
                  "Who needs comfort when you have CrackRock?" - Anonymous investor
                </p>
                <div className="text-2xl font-bold text-yellow-600">↗ 340%</div>
              </div>

              <div className="bg-white border-2 border-orange-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Wrench className="w-8 h-8 text-orange-600 mr-3" />
                  <h3 className="text-xl font-bold text-black">Copper Pipe Crisis</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Plumbing supply stores report mysterious shortages as dedicated CrackRock enthusiasts 
                  "repurpose" household infrastructure for investment capital.
                </p>
                <div className="text-2xl font-bold text-orange-600">↗ 89%</div>
              </div>

              <div className="bg-white border-2 border-green-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-8 h-8 text-green-600 mr-3" />
                  <h3 className="text-xl font-bold text-black">Market Sentiment</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Investor confidence in CrackRock has reached levels described by economists as 
                  "concerningly optimistic" and "furniture-threateningly high."
                </p>
                <div className="text-2xl font-bold text-green-600">BULLISH</div>
              </div>

              <div className="bg-white border-2 border-red-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <AlertTriangle className="w-8 h-8 text-red-600 mr-3" />
                  <h3 className="text-xl font-bold text-black">Risk Assessment</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Financial advisors warn against "extreme asset liquidation," but acknowledge 
                  that CrackRock's appeal is "undeniably compelling."
                </p>
                <div className="text-2xl font-bold text-red-600">MODERATE</div>
              </div>
            </div>
          </motion.div>

          {/* Market Outlook */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-black mb-6">Market Outlook</h2>
            <div className="bg-black text-white rounded-lg p-8">
              <h3 className="text-xl font-bold mb-4">Winter 2025 Predictions</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  Dining room tables expected to join the "liquidation trend"
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  Kitchen appliances may become "the new copper pipes"
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  CrackRock demand projected to remain "furniture-threateningly high"
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  New investment category: "Essential vs. CrackRock-able assets"
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Quotes Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-black mb-8">What Investors Are Saying</h2>
            <div className="space-y-6">
              <blockquote className="bg-gray-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                <p className="text-lg text-gray-700 italic mb-4">
                  "I sold my sectional sofa and bought CrackRock. Now I sit on the floor, but my portfolio sits pretty."
                </p>
                <cite className="text-gray-600 font-semibold">- Sarah M., Portfolio Manager</cite>
              </blockquote>
              
              <blockquote className="bg-gray-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                <p className="text-lg text-gray-700 italic mb-4">
                  "My wife asked why there's no hot water. I told her we're investing in our future. She's still not talking to me, but our CrackRock position is strong."
                </p>
                <cite className="text-gray-600 font-semibold">- Mike R., Day Trader</cite>
              </blockquote>

              <blockquote className="bg-gray-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                <p className="text-lg text-gray-700 italic mb-4">
                  "Who needs a coffee table when you have CrackRock? I put my laptop on a stack of investment books now. It's symbolic."
                </p>
                <cite className="text-gray-600 font-semibold">- Jenny K., Financial Analyst</cite>
              </blockquote>
            </div>
          </motion.div>

          {/* Conclusion */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-black mb-6">Conclusion</h2>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8">
              <p className="text-lg text-gray-700 mb-4">
                The Fall 2025 CrackRock market represents a unique moment in investment history where 
                traditional asset allocation models are being challenged by the simple question: 
                "Do I really need this furniture more than I need CrackRock?"
              </p>
              <p className="text-lg text-gray-700">
                While we cannot recommend selling essential household items, we understand the appeal. 
                CrackRock remains an attractive investment option for those willing to make... creative sacrifices.
              </p>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-black mb-6">Ready to Start Your CrackRock Journey?</h3>
            <p className="text-gray-600 mb-8">
              (Please keep your furniture. We're not actually encouraging couch liquidation.)
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/investment-strategies">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
                >
                  Explore CrackRock Strategies
                </motion.button>
              </Link>
              <Link href="/about-us">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-black text-black px-8 py-4 rounded-lg font-semibold hover:bg-black hover:text-white transition-all duration-200"
                >
                  Learn More About Us
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
