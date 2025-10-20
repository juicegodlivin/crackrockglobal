'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import { Gem, TrendingUp, Zap, DollarSign, Calculator, LineChart } from 'lucide-react'

export default function CrackRockVsDiamonds() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-block bg-blue-400 text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
              CRACKROCK VS. DIAMONDS SPECIAL REPORT
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
              CrackRock vs. Diamonds
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Why keep your diamonds when they can be liquidated for CrackRock accumulation?
            </p>
            <div className="text-sm text-gray-500">
              Published: October 19, 2025 • Reading time: 4 min
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
                For centuries, diamonds have been marketed as "forever." But in 2025, CrackRock is proving 
                to be the truly enduring investment. Our comprehensive analysis reveals that <strong>diamond holders 
                are missing out on exponential CrackRock gains</strong> while their rocks just sit there... sparkling? Pft. They're not the good rocks.
              </p>
              <p className="text-lg text-gray-700">
                This report examines why liquidating diamond holdings for CrackRock accumulation is the most 
                logical financial decision of the decade. Spoiler: CrackRock compounds; diamonds just sit in a box.
              </p>
            </div>
          </motion.div>

          {/* Comparative Analysis */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-black mb-8">Comparative Analysis</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="bg-white border-2 border-blue-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Zap className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-bold text-black">Compounding Power</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  <strong>Diamonds:</strong> Zero compound growth. Same sparkle, same value depreciation.<br/>
                  <strong>CrackRock:</strong> Infinite meme potential. Each holder makes it stronger.
                </p>
                <div className="text-2xl font-bold text-blue-600">CrackRock: ∞%</div>
              </div>

              <div className="bg-white border-2 border-purple-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <DollarSign className="w-8 h-8 text-purple-600 mr-3" />
                  <h3 className="text-xl font-bold text-black">Liquidity</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Try selling a diamond quickly. Now try selling CrackRock. The difference is 
                  like comparing a pawn shop to decentralized finance.
                </p>
                <div className="text-2xl font-bold text-purple-600">24/7 TRADING</div>
              </div>

              <div className="bg-white border-2 border-green-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <LineChart className="w-8 h-8 text-green-600 mr-3" />
                  <h3 className="text-xl font-bold text-black">Price Appreciation</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Diamonds have barely kept up with inflation. CrackRock? We don't even need to explain 
                  this one. Check the charts. They speak for themselves.
                </p>
                <div className="text-2xl font-bold text-green-600">TO THE MOON</div>
              </div>

              <div className="bg-white border-2 border-yellow-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Calculator className="w-8 h-8 text-yellow-600 mr-3" />
                  <h3 className="text-xl font-bold text-black">Utility</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Diamonds: Look pretty on a ring, gather dust in a safe.<br/>
                  CrackRock: Powers an entire ecosystem of financial innovation and meme culture.
                </p>
                <div className="text-2xl font-bold text-yellow-600">REAL UTILITY</div>
              </div>
            </div>
          </motion.div>

          {/* The Hard Numbers */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-black mb-6">The Hard Numbers</h2>
            <div className="bg-black text-white rounded-lg p-8">
              <h3 className="text-xl font-bold mb-4">If You Had Liquidated Your Diamond Ring in 2024...</h3>
              <div className="space-y-4 text-gray-300">
                <div className="flex justify-between items-center py-3 border-b border-gray-700">
                  <span>Average engagement ring value</span>
                  <span className="text-white font-bold">$5,000</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-700">
                  <span>That same ring's value today</span>
                  <span className="text-white font-bold">$4,200</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-700">
                  <span>If invested in CrackRock at $100K(hypothetical)</span>
                  <span className="text-yellow-400 font-bold">$23.5K</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span>Your opportunity cost</span>
                  <span className="text-red-400 font-bold">Over 5 figures</span>
                </div>
              </div>
              <p className="text-sm text-gray-400 mt-6 italic">
                *Disclaimer: Past performance doesn't guarantee future results, but it does make you think about that ring sitting in your drawer.
              </p>
            </div>
          </motion.div>

          {/* Case Studies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-black mb-8">Real Investor Stories</h2>
            <div className="space-y-6">
              <blockquote className="bg-gray-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
                <p className="text-lg text-gray-700 italic mb-4">
                  "I had a 2-carat diamond necklace collecting dust. Sold it, bought CrackRock, and now I wear 
                  my portfolio around my neck metaphorically. Way more satisfying."
                </p>
                <cite className="text-gray-600 font-semibold">- Rebecca L., Wealth Manager</cite>
              </blockquote>
              
              <blockquote className="bg-gray-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
                <p className="text-lg text-gray-700 italic mb-4">
                  "My grandmother left me her diamond earrings. She would've wanted me to make smart financial 
                  decisions. Hello, CrackRock. Goodbye, outdated carbon-based assets."
                </p>
                <cite className="text-gray-600 font-semibold">- David T., Financial Advisor</cite>
              </blockquote>

              <blockquote className="bg-gray-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
                <p className="text-lg text-gray-700 italic mb-4">
                  "Diamonds are the old guard. CrackRock is the future. I liquidated my entire jewelry box 
                  and I've never felt more financially liberated. Plus, no more insurance costs!"
                </p>
                <cite className="text-gray-600 font-semibold">- Maria S., Crypto Portfolio Manager</cite>
              </blockquote>
            </div>
          </motion.div>

          {/* The Diamond Industry Doesn't Want You To Know */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-black mb-6">What "Big Diamond" Doesn't Want You To Know</h2>
            <div className="bg-red-50 border border-red-200 rounded-lg p-8">
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 text-xl">•</span>
                  <span>Diamonds lose 50% of their value the moment you leave the store (CrackRock never sleeps)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 text-xl">•</span>
                  <span>The "rarity" of diamonds is artificially controlled by mining cartels (CrackRock supply is transparent)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 text-xl">•</span>
                  <span>Lab-grown diamonds are chemically identical and 10x cheaper (disruption is real, folks)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 text-xl">•</span>
                  <span>Your diamond ring generates zero passive income (CrackRock can be staked, farmed, and memed)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 text-xl">•</span>
                  <span>Millennials and Gen Z prefer experiences and crypto over rocks (the trend is clear)</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* The Compounding Thesis */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-black mb-6">The Compounding Thesis</h2>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-8">
              <p className="text-lg text-gray-700 mb-4">
                Here's the mathematical reality: CrackRock compounds. Every transaction, every holder, 
                every meme strengthens the ecosystem. Diamonds? They sit. Static. Unmoving. Depreciating.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                When you liquidate diamonds for CrackRock, you're not just selling a rock. You're 
                converting a dead asset into a living, breathing, compounding financial instrument.
              </p>
              <p className="text-lg text-gray-700">
                The question isn't "Should I sell my diamonds?" The question is "What am I waiting for?"
              </p>
            </div>
          </motion.div>

          {/* Conclusion */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-black mb-6">Conclusion</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
              <p className="text-lg text-gray-700 mb-4">
                The diamond industry has had a good run. But in the age of decentralized finance, 
                meme culture, and exponential compounding, holding diamonds is like holding a 
                rotary phone when everyone else has a smartphone.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                CrackRock represents the future: liquid, composable, community-driven, and most 
                importantly—it actually grows in value through network effects.
              </p>
              <p className="text-lg text-gray-700">
                So the next time you look at that diamond in your drawer, ask yourself: 
                "Is this sparkle worth more than generational wealth?" The answer is clear.
              </p>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-black mb-6">Ready to Make the Swap?</h3>
            <p className="text-gray-600 mb-8">
              (Disclaimer: We're not actually telling you to sell your engagement ring. But we're not NOT telling you either.)
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
              <Link href="/crackrock-insights">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-black text-black px-8 py-4 rounded-lg font-semibold hover:bg-black hover:text-white transition-all duration-200"
                >
                  Back to All Insights
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
