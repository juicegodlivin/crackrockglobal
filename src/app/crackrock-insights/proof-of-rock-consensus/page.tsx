'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import { Network, Shield, Zap, Users, Brain, Target } from 'lucide-react'

export default function ProofOfRockConsensus() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-purple-50 to-white pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-block bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
              TECHNICAL INNOVATION REPORT
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
              Technical Innovation Through Cultural Mechanics
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              How Proof of Rock consensus revolutionizes prediction markets and solves the oracle problem
            </p>
            <div className="text-sm text-gray-500">
              Published: October 20, 2025 • Reading time: 5 min
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
                The genius of CrackRock Prediction Markets lies in our <strong>"Proof of Rock" consensus mechanism</strong>, 
                where the validity of a prediction is determined not by centralized resolution, but by the aggregate 
                weight of CrackRock staked on each outcome.
              </p>
              <p className="text-lg text-gray-700">
                This creates an incentive structure so powerful that lying becomes economically impossible - you'd 
                literally be betting against your own accumulation strategy. We've solved the oracle problem that 
                plagued previous prediction markets by making the market itself the oracle, with CrackRock holders 
                serving as distributed nodes of truth verification.
              </p>
            </div>
          </motion.div>

          {/* Core Innovation Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-black mb-8">Core Innovation Pillars</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="bg-white border-2 border-purple-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Network className="w-8 h-8 text-purple-600 mr-3" />
                  <h3 className="text-xl font-bold text-black">Proof of Rock Consensus</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Traditional prediction markets rely on centralized oracles. We replaced them with distributed 
                  consensus weighted by CrackRock holdings. The more Rock you stake, the more truth you verify.
                </p>
                <div className="text-2xl font-bold text-purple-600">DECENTRALIZED</div>
              </div>

              <div className="bg-white border-2 border-indigo-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Shield className="w-8 h-8 text-indigo-600 mr-3" />
                  <h3 className="text-xl font-bold text-black">Economic Truth Enforcement</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Lying becomes economically impossible because you'd be betting against your own accumulation 
                  strategy. The incentives are so perfectly aligned that truth emerges naturally.
                </p>
                <div className="text-2xl font-bold text-indigo-600">GAME THEORY</div>
              </div>

              <div className="bg-white border-2 border-pink-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Brain className="w-8 h-8 text-pink-600 mr-3" />
                  <h3 className="text-xl font-bold text-black">Self-Organizing Markets</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Market validity determined by total CrackRock committed. Only culturally relevant predictions 
                  achieve liquidity. No regulations, just collective intelligence.
                </p>
                <div className="text-2xl font-bold text-pink-600">EMERGENT ORDER</div>
              </div>

              <div className="bg-white border-2 border-cyan-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Users className="w-8 h-8 text-cyan-600 mr-3" />
                  <h3 className="text-xl font-bold text-black">Permissionless Creation</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Anyone can spawn a prediction market about anything. The market decides what matters through 
                  liquidity allocation. Democracy through decentralization.
                </p>
                <div className="text-2xl font-bold text-cyan-600">NO GATEKEEPERS</div>
              </div>
            </div>
          </motion.div>

          {/* The Oracle Problem Solved */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-black mb-6">The Oracle Problem: Solved</h2>
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg p-8">
              <p className="text-lg text-gray-700 mb-4">
                Traditional prediction markets had a fatal flaw: <strong>who decides what's true?</strong> Centralized 
                oracles can be bribed, hacked, or simply wrong. Political markets use "consensus committees" that are 
                just democracy with extra steps.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                CrackRock flips the script entirely. <strong>The market itself is the oracle.</strong> CrackRock 
                holders serve as distributed nodes of truth verification, with their economic stake serving as 
                collateral for their claims. If you're wrong, you lose Rock. If you're right, you accumulate.
              </p>
              <p className="text-lg text-gray-700">
                This creates a truth-seeking mechanism so powerful that traditional markets look like stone tablets 
                by comparison. We didn't solve the oracle problem - we made oracles obsolete.
              </p>
            </div>
          </motion.div>

          {/* Real-World Applications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-black mb-6">Market Examples</h2>
            <div className="bg-black text-white rounded-lg p-8">
              <h3 className="text-xl font-bold mb-4">Sample CrackRock Prediction Markets</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3 text-xl">•</span>
                  <span><strong className="text-white">Will Miami-Dade legalize CrackRock banking?</strong><br/>
                  Current liquidity: 2.4M CrackRock | Leading outcome: Yes, Q2 2026</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3 text-xl">•</span>
                  <span><strong className="text-white">What percentage of Congress holds CrackRock?</strong><br/>
                  Current liquidity: 1.8M CrackRock | Leading outcome: 12-18%</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3 text-xl">•</span>
                  <span><strong className="text-white">Will the Fed Chair mention CrackRock in next FOMC meeting?</strong><br/>
                  Current liquidity: 3.1M CrackRock | Leading outcome: Indirect reference only</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3 text-xl">•</span>
                  <span><strong className="text-white">When will traditional banks offer CrackRock custody?</strong><br/>
                  Current liquidity: 950K CrackRock | Leading outcome: 2027-2028</span>
                </li>
              </ul>
              <p className="text-sm text-gray-400 mt-6 italic">
                *Markets are live and values change in real-time based on Proof of Rock consensus
              </p>
            </div>
          </motion.div>

          {/* Technical Deep Dive */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-black mb-8">How Proof of Rock Works</h2>
            <div className="space-y-6">
              
              <div className="bg-gray-50 border-l-4 border-purple-400 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-black mb-3">Step 1: Market Creation</h3>
                <p className="text-gray-700">
                  Any CrackRock holder can create a prediction market by staking a minimum amount of $CRK. 
                  The initial stake serves as the market's seed liquidity and signals creator commitment.
                </p>
              </div>

              <div className="bg-gray-50 border-l-4 border-purple-400 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-black mb-3">Step 2: Position Taking</h3>
                <p className="text-gray-700">
                  Participants stake CrackRock on their predicted outcome. Stake size reflects conviction level. 
                  Large stakes from reputable holders signal confidence and attract more liquidity.
                </p>
              </div>

              <div className="bg-gray-50 border-l-4 border-purple-400 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-black mb-3">Step 3: Consensus Formation</h3>
                <p className="text-gray-700">
                  As the prediction event occurs, holders vote with their $CRK. The outcome with the highest 
                  aggregate stake weight becomes the consensus truth. Economic incentives ensure honest voting.
                </p>
              </div>

              <div className="bg-gray-50 border-l-4 border-purple-400 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-black mb-3">Step 4: Settlement</h3>
                <p className="text-gray-700">
                  Winners receive their stake plus proportional share of losing stakes. This creates a powerful 
                  feedback loop: accurate predictors accumulate more $CRK, gaining more influence in future markets.
                </p>
              </div>
            </div>
          </motion.div>

          {/* What This Means */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-black mb-8">Community Reactions</h2>
            <div className="space-y-6">
              <blockquote className="bg-gray-50 border-l-4 border-purple-400 p-6 rounded-r-lg">
                <p className="text-lg text-gray-700 italic mb-4">
                  "Proof of Rock is the most elegant solution to the oracle problem I've seen. You can't game 
                  the system because the system IS the game. Brilliant."
                </p>
                <cite className="text-gray-600 font-semibold">- Alex K., Blockchain Architect</cite>
              </blockquote>
              
              <blockquote className="bg-gray-50 border-l-4 border-purple-400 p-6 rounded-r-lg">
                <p className="text-lg text-gray-700 italic mb-4">
                  "I don't know what we would do without CrackRock. It's the only way to get a true sense of the market."
                </p>
                <cite className="text-gray-600 font-semibold">- Sarah M., Market Creator</cite>
              </blockquote>

              <blockquote className="bg-gray-50 border-l-4 border-purple-400 p-6 rounded-r-lg">
                <p className="text-lg text-gray-700 italic mb-4">
                  "Traditional prediction markets required permission and regulatory approval. CrackRock just lets 
                  you create a market about literally anything. That's not innovation, that's revolution."
                </p>
                <cite className="text-gray-600 font-semibold">- James T., DeFi Researcher</cite>
              </blockquote>
            </div>
          </motion.div>

          {/* Cultural Innovation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-black mb-6">Cultural Innovation at Scale</h2>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-8">
              <p className="text-lg text-gray-700 mb-4">
                Our cultural innovation extends to market creation itself, where anyone can spawn a prediction 
                market about anything - but market validity is determined by total CrackRock committed, ensuring 
                only culturally relevant predictions achieve liquidity.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                This self-organizing system creates a hierarchy of importance that traditional markets could never 
                achieve because they're constrained by regulations, while we're constrained only by the limits of 
                human imagination and CrackRock supply.
              </p>
              <p className="text-lg text-gray-700">
                The result? A prediction market ecosystem that reflects genuine cultural priorities, not regulatory 
                frameworks or institutional gatekeeping. CrackRock holders vote with their stakes, and the markets 
                that matter rise to the top naturally.
              </p>
            </div>
          </motion.div>

          {/* Conclusion */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-black mb-6">Conclusion</h2>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-8">
              <p className="text-lg text-gray-700 mb-4">
                Proof of Rock represents a fundamental breakthrough in decentralized consensus. By aligning economic 
                incentives with truth-seeking behavior, we've created a system where honesty isn't just encouraged, it's mathematically optimal.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Traditional prediction markets will look back at this moment the way we look back at rotary phones. 
                They worked, technically, but they were constrained by their centralized architecture.
              </p>
              <p className="text-lg text-gray-700">
                CrackRock Prediction Markets aren't just a feature, they're a glimpse into a future where 
                collective intelligence emerges from economic game theory, and truth becomes a natural byproduct 
                of proper incentive design.
              </p>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-black mb-6">Ready to Participate in Proof of Rock?</h3>
            <p className="text-gray-600 mb-8">
              Join the prediction markets where your CrackRock stake is your voice, and truth is the only profitable outcome.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/dashboard/polymarket">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
                >
                  Explore Prediction Markets
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

