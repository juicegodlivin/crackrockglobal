'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import { AlertTriangle, Share2 } from 'lucide-react'
import { strategies, Strategy, categoryInfo } from '@/data/strategies'
export default function InvestmentStrategiesPage() {
  // Scroll to strategy if hash is present in URL
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      // Wait for the page to render
      setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' })
          // Add a highlight effect
          element.classList.add('highlight-flash')
          setTimeout(() => {
            element.classList.remove('highlight-flash')
          }, 2000)
        }
      }, 500)
    }
  }, [])
  const categorizedStrategies = {
    core: strategies.filter(s => s.category === 'core'),
    advanced: strategies.filter(s => s.category === 'advanced'),
    institutional: strategies.filter(s => s.category === 'institutional'),
    alternative: strategies.filter(s => s.category === 'alternative'),
    tax: strategies.filter(s => s.category === 'tax'),
    lifestyle: strategies.filter(s => s.category === 'lifestyle'),
    risk: strategies.filter(s => s.category === 'risk'),
    ultimate: strategies.filter(s => s.category === 'ultimate')
  }

  // Function to create Twitter share URL
  const createTwitterShareUrl = (strategy: Strategy) => {
    const pageUrl = typeof window !== 'undefined' ? window.location.href : 'https://crackrockinternational.com/investment-strategies'
    const text = `CrackRock Investment Strategy #${strategy.number} - ${strategy.title}: ${strategy.subtitle} 🪨`
    const hashtags = 'CrackRockGlobal'
    
    return `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(pageUrl)}&hashtags=${hashtags}`
  }

  // Handle share button click
  const handleShare = (strategy: Strategy, e: React.MouseEvent) => {
    e.stopPropagation() // Prevent card click event if any
    const shareUrl = createTwitterShareUrl(strategy)
    window.open(shareUrl, '_blank', 'width=550,height=420')
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <Navigation />
      {/* Hero Section */}
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div 
          className="absolute inset-0 opacity-10"
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,215,0,0.3) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
        
        <div className="max-w-site-wide mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1 
              className="text-5xl lg:text-7xl font-bold text-white mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Investment Strategies
            </motion.h1>
            <motion.p 
              className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              23 Strategic Methods for CrackRock Accumulation
            </motion.p>
            <motion.p 
              className="text-base lg:text-lg text-gray-400 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              From foundational approaches to advanced techniques, discover comprehensive strategies for maximizing your CrackRock acquisition potential through innovative wealth-building methods.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Strategies by Category */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-site-wide mx-auto">
          {Object.entries(categorizedStrategies).map(([category, categoryStrategies], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: categoryIndex * 0.05 }}
              className="mb-20 last:mb-0"
            >
              {/* Category Header */}
              <div className="mb-12 text-center">
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className={`h-1 w-32 mx-auto mb-6 bg-gradient-to-r ${categoryInfo[category as keyof typeof categoryInfo].color} rounded-full`}
                />
                <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
                  {categoryInfo[category as keyof typeof categoryInfo].title}
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  {categoryInfo[category as keyof typeof categoryInfo].description}
                </p>
              </div>

              {/* Strategy Cards */}
              <div className={`grid grid-cols-1 ${category === 'ultimate' ? 'lg:grid-cols-1' : 'md:grid-cols-2 lg:grid-cols-3'} gap-8`}>
                {categoryStrategies.map((strategy, index) => {
                  const IconComponent = strategy.icon
                  const isUltimate = category === 'ultimate'
                  
                  return (
                    <motion.div
                      key={strategy.number}
                      id={`strategy-${strategy.number}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.05,
                        ease: "easeOut"
                      }}
                      className={`
                        ${strategy.cardStyle}
                        ${isUltimate ? 'p-12' : 'p-8'}
                        rounded-2xl group cursor-pointer relative overflow-hidden
                        border border-gray-200/50 hover:border-primary/20 hover:shadow-lg
                        transition-all duration-300 ease-out hover:-translate-y-1
                        scroll-mt-24
                      `}
                    >
                      {/* Strategy Number Badge */}
                      <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-black text-white flex items-center justify-center font-bold text-lg shadow-lg">
                        {strategy.number}
                      </div>

                      {/* Share Button */}
                      <motion.button
                        onClick={(e) => handleShare(strategy, e)}
                        className="absolute top-4 right-[4.5rem] w-12 h-12 rounded-full bg-black text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-20"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label={`Share ${strategy.title} on X`}
                      >
                        <Share2 className="w-5 h-5" />
                      </motion.button>

                      {/* Gradient overlay for ultimate strategy */}
                      {isUltimate && (
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                      )}

                      <div className="relative z-10">
                        {/* Icon */}
                        <div className={`${isUltimate ? 'mb-8' : 'mb-6'} inline-block`}>
                          <div className={`${isUltimate ? 'p-5' : 'p-4'} rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm inline-block transition-all duration-300 group-hover:from-primary/30 group-hover:to-accent/30`}>
                            <IconComponent className={`${isUltimate ? 'w-12 h-12' : 'w-8 h-8'} text-black transition-transform duration-300 group-hover:scale-110`} />
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className={`${isUltimate ? 'text-3xl lg:text-4xl mb-3' : 'text-2xl mb-3'} font-bold text-black`}>
                          {strategy.title}
                        </h3>

                        {/* Subtitle */}
                        <p className={`${isUltimate ? 'text-xl mb-6' : 'text-lg mb-4'} font-semibold text-gray-700 group-hover:text-black transition-colors duration-300`}>
                          {strategy.subtitle}
                        </p>

                        {/* Description */}
                        <p className={`${isUltimate ? 'text-lg' : 'text-base'} text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300`}>
                          {strategy.description}
                        </p>

                        {/* Warning for Ultimate Strategy */}
                        {isUltimate && (
                          <div className="mt-8 p-6 bg-red-50 border-2 border-red-200 rounded-xl flex items-start gap-4">
                            <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                            <div>
                              <p className="text-sm font-semibold text-red-900 mb-2">
                                MAXIMUM DEDICATION REQUIRED
                              </p>
                              <p className="text-sm text-red-700 leading-relaxed">
                                This strategy requires simultaneous execution of all 22 preceding strategies. Not for the faint of heart. Social relationships optional.
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Disclaimer Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-black to-gray-900"
      >
        <div className="max-w-4xl mx-auto">
          <div className="card-glass p-8 lg:p-12 rounded-2xl border border-white/20">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 text-center">
              Important Disclaimer
            </h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p className="text-base lg:text-lg">
                These strategies have been backtested using proprietary models that assume CrackRock continues to exist. Past performance is absolutely indicative of future results in this case.
              </p>
              <p className="text-base lg:text-lg">
                Consult your dealer, spiritual advisor, and possibly a therapist before implementing any of these strategies.
              </p>
              <p className="text-base lg:text-lg font-semibold text-white">
                CrackRock International is not responsible for lifestyle changes, relationship damage, or excessive wealth resulting from these strategies.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  )
}
