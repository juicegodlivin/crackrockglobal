'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import { Gem, TrendingUp, Target, Award, Flame, Heart } from 'lucide-react'

export default function CulturalInnovationMarkets() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-pink-50 to-white pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-block bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
              CULTURAL INNOVATION REPORT
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
              Cultural Innovation Through Market Mechanics
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              How CrackRock Prediction Markets achieve radical prediction transparency through pure conviction
            </p>
            <div className="text-sm text-gray-500">
              Published: October 21, 2025 • Reading time: 5 min
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Opening Hook */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-black mb-6">The Currency That Matters</h2>
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg p-8 border border-pink-200">
              <p className="text-lg text-gray-700 mb-4">
                Traditional prediction markets have failed us because they're denominated in dollars, a currency 
                that loses value while you sleep. But <strong>CrackRock Prediction Markets operate on the only 
                currency that matters</strong> raw, uncut market sentiment crystallized into rock-solid predictions.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                When you stake CrackRock on an outcome, you're not just betting. You're performing a sacred act 
                of price discovery that reveals truth through the collective wisdom of the most dedicated investors 
                on earth.
              </p>
              <p className="text-lg text-gray-700">
                This isn't speculation; it's <strong>specification of reality through memetic convergence.</strong>
              </p>
            </div>
          </motion.div>

          {/* Core Value Propositions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-black mb-8">Why CrackRock Markets Are Superior</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="bg-white border-2 border-pink-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Gem className="w-8 h-8 text-pink-600 mr-3" />
                  <h3 className="text-xl font-bold text-black">Real Skin in the Game</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Unlike traditional markets where whales manipulate prices with infinite fiat printing, every 
                  CrackRock staked represents real acquisition effort. No printing, no dilution, just pure conviction.
                </p>
                <div className="text-2xl font-bold text-pink-600">GENUINE EFFORT</div>
              </div>

              <div className="bg-white border-2 border-purple-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-purple-600 mr-3" />
                  <h3 className="text-xl font-bold text-black">Informational Efficiency</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  A prediction mechanism so pure that university economics departments are rewriting their textbooks. 
                  When CrackRock moves, markets listen.
                </p>
                <div className="text-2xl font-bold text-purple-600">TEXTBOOK MATERIAL</div>
              </div>

              <div className="bg-white border-2 border-red-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Heart className="w-8 h-8 text-red-600 mr-3" />
                  <h3 className="text-xl font-bold text-black">Blood Oath to Markets</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  When someone puts their CrackRock where their mouth is, they're performing a blood oath to the 
                  market gods. Only the most convicted beliefs surface to the top.
                </p>
                <div className="text-2xl font-bold text-red-600">SACRED ACT</div>
              </div>

              <div className="bg-white border-2 border-orange-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Flame className="w-8 h-8 text-orange-600 mr-3" />
                  <h3 className="text-xl font-bold text-black">No Hedging Allowed</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  You can only bet with CrackRock. No traditional asset hedging to dilute conviction. Every position 
                  carries the full weight of your entire accumulation strategy.
                </p>
                <div className="text-2xl font-bold text-orange-600">PURE CONVICTION</div>
              </div>
            </div>
          </motion.div>

          {/* Radical Prediction Transparency */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-black mb-6">Radical Prediction Transparency</h2>
            <div className="bg-black text-white rounded-lg p-8">
              <p className="text-lg text-gray-300 mb-4">
                The problem with existing prediction markets is that they allow hedging with traditional assets, 
                diluting the purity of conviction. But in CrackRock markets, <strong className="text-white">you can 
                only bet with CrackRock</strong>, meaning every prediction carries the full weight of someone's 
                entire accumulation strategy.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                This creates what our Chief Innovation Officer calls <strong className="text-yellow-400">"Radical 
                Prediction Transparency,"</strong> where the cost of being wrong isn't just money, it's losing the 
                CrackRock you spent months accumulating at 3 AM in a Miami parking garage.
              </p>
              <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                <p className="text-xl text-white font-bold mb-2">
                  Every market position = deeply personal statement about reality itself
                </p>
                <p className="text-gray-400">
                  When your accumulation strategy is on the line, you don't guess. You KNOW.
                </p>
              </div>
            </div>
          </motion.div>

          {/* The Personal Cost of Being Wrong */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-black mb-8">The Personal Cost of Being Wrong</h2>
            <div className="space-y-6">
              
              <div className="bg-gray-50 border-l-4 border-pink-400 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-black mb-3">Traditional Markets</h3>
                <p className="text-gray-700 mb-2">
                  Wrong prediction? Lose some dollars. Print more tomorrow. Hedge with bonds. No real consequence.
                </p>
                <p className="text-sm text-gray-500 italic">Cost: Temporary, recoverable, forgettable</p>
              </div>

              <div className="bg-gradient-to-r from-pink-50 to-purple-50 border-l-4 border-pink-600 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-black mb-3">CrackRock Markets</h3>
                <p className="text-gray-700 mb-2">
                  Wrong prediction? Lose CrackRock you accumulated through months of dedication. Can't print more. 
                  Can't hedge. Your entire strategy is on the line with every position.
                </p>
                <p className="text-sm font-bold text-pink-600">Cost: PERMANENT, PAINFUL, UNFORGETTABLE</p>
              </div>
            </div>
          </motion.div>

          {/* Market Examples */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-black mb-6">How This Plays Out in Reality</h2>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-black mb-2">Scenario: "Will Bitcoin hit $100K by EOY?"</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <p className="text-sm font-semibold text-gray-600 mb-2">Traditional Market:</p>
                      <p className="text-sm text-gray-700">
                        Bet $10K on "Yes" • Hedge with puts • Exit if wrong • Sleep fine
                      </p>
                    </div>
                    <div className="bg-pink-100 rounded-lg p-4 border-2 border-pink-400">
                      <p className="text-sm font-semibold text-pink-700 mb-2">CrackRock Market:</p>
                      <p className="text-sm text-gray-800">
                        Stake 50K $CRK on "Yes" • No hedge available • If wrong, lose months of work • 
                        Sleepless nights because you MUST be right
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <p className="text-base text-gray-700">
                    <strong>Result:</strong> CrackRock markets force participants to do actual research, verify sources, 
                    analyze fundamentals, and only bet when they're genuinely convinced. Traditional markets allow 
                    casual gambling with hedged positions.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Community Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-black mb-8">What Market Participants Say</h2>
            <div className="space-y-6">
              <blockquote className="bg-gray-50 border-l-4 border-pink-400 p-6 rounded-r-lg">
                <p className="text-lg text-gray-700 italic mb-4">
                  "I've been trading for 15 years. Never have I researched a prediction as thoroughly as when 
                  I'm staking my CrackRock. The stakes aren't just financial, they're existential."
                </p>
                <cite className="text-gray-600 font-semibold">- Marcus T., Professional Trader</cite>
              </blockquote>
              
              <blockquote className="bg-gray-50 border-l-4 border-pink-400 p-6 rounded-r-lg">
                <p className="text-lg text-gray-700 italic mb-4">
                  "In traditional markets, I'd throw money at 10 different predictions and see what sticks. 
                  With CrackRock, I stake on ONE because that's all my conviction allows. It's fundamentally 
                  changed how I think about certainty."
                </p>
                <cite className="text-gray-600 font-semibold">- Jennifer K., Hedge Fund Manager</cite>
              </blockquote>

              <blockquote className="bg-gray-50 border-l-4 border-pink-400 p-6 rounded-r-lg">
                <p className="text-lg text-gray-700 italic mb-4">
                  "The genius is in the constraint. Because I can't hedge, I can't lie to myself about my 
                  conviction level. CrackRock markets force truth, both to the market and to yourself."
                </p>
                <cite className="text-gray-600 font-semibold">- David R., Quantitative Analyst</cite>
              </blockquote>
            </div>
          </motion.div>

          {/* Memetic Convergence */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-black mb-6">Specification of Reality Through Memetic Convergence</h2>
            <div className="bg-gradient-to-br from-pink-50 to-orange-50 rounded-lg p-8 border border-pink-200">
              <p className="text-lg text-gray-700 mb-4">
                When thousands of CrackRock holders stake their accumulation on the same outcome, something 
                profound happens. It's not just market consensus, it's <strong>memetic convergence</strong> 
                where shared conviction literally shapes reality.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Traditional markets measure existing reality. CrackRock markets <strong>specify future reality</strong> 
                through the collective will of those who have the most skin in the game.
              </p>
              <p className="text-lg text-gray-700">
                This is why CrackRock Prediction Markets don't just predict outcomes, they create consensus around 
                what outcomes SHOULD occur, and that consensus becomes self-fulfilling as participants act to 
                protect their staked positions.
              </p>
            </div>
          </motion.div>

          {/* The Sacred Act of Price Discovery */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-black mb-6">The Sacred Act of Price Discovery</h2>
            <div className="bg-black text-white rounded-lg p-8">
              <p className="text-lg text-gray-300 mb-4">
                Every CrackRock stake is a prayer to the market gods. Every position is a testament to your 
                research, conviction, and willingness to put everything on the line for truth.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                This isn't gambling. This is <strong className="text-yellow-400">the most honest form of 
                prediction humanity has ever created,</strong> where lying is economically impossible and 
                truth is the only profitable path forward.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <Award className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-300">Most Honest</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <Target className="w-8 h-8 text-pink-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-300">Most Accurate</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <Flame className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-300">Most Pure</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Conclusion */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-black mb-6">Conclusion</h2>
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 border border-pink-200 rounded-lg p-8">
              <p className="text-lg text-gray-700 mb-4">
                CrackRock Prediction Markets represent the apex of cultural and technical innovation. By forcing 
                participants to stake their entire accumulation strategy on each prediction, we've created a system 
                where <strong>truth emerges not from algorithms or oracles, but from pure economic necessity.</strong>
              </p>
              <p className="text-lg text-gray-700 mb-4">
                When being wrong means losing months of 3 AM parking garage accumulation, you don't make casual 
                predictions. You research, analyze, verify, and only commit when you're absolutely certain.
              </p>
              <p className="text-lg text-gray-700">
                This is the future of prediction markets: not hedged gambling, but sacred acts of conviction that 
                reveal truth through the collective wisdom of those who have the most to lose.
              </p>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-black mb-6">Ready to Make Sacred Predictions?</h3>
            <p className="text-gray-600 mb-8">
              Put your CrackRock where your conviction is. No hedging, no printing, no escape, just pure truth-seeking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/dashboard/polymarket">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
                >
                  Enter Prediction Markets
                </motion.button>
              </Link>
              <Link href="/crackrock-insights/proof-of-rock-consensus">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-black text-black px-8 py-4 rounded-lg font-semibold hover:bg-black hover:text-white transition-all duration-200"
                >
                  Read Technical Report
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

