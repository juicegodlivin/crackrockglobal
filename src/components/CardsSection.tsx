'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Eye, Target } from 'lucide-react'
import Link from 'next/link'

const CardsSection = () => {
  const cards = [
    {
      icon: TrendingUp,
      title: "Smart strategies for CrackRock accumulation",
      description: "Understand how modern investment approaches are creating new opportunities for maximizing your CrackRock acquisition potential through strategic wealth building.",
      link: "Read our Full CrackRock Investment Overview",
      href: "/investment-strategies",
      cardStyle: "card-gradient-gold card-shimmer",
      iconBg: "bg-gradient-to-br from-black/20 to-gray-800/20 backdrop-blur-sm",
      textColor: "text-black"
    },
    {
      icon: Eye,
      title: "Fall market visibility, maximum gains",
      description: "CrackRock investment success is only as good as your market insight. Gain comprehensive visibility into opportunities that maximize your CrackRock purchasing power.",
      link: "Read our Fall 2025 CrackRock market analysis",
      href: "/crackrock-insights/fall-2025-market-analysis",
      cardStyle: "card-glass card-shimmer bg-white/90",
      iconBg: "bg-gradient-to-br from-primary/20 to-accent/15 backdrop-blur-sm",
      textColor: "text-black"
    },
    {
      icon: Target,
      title: "Prime opportunities for CrackRock investors",
      description: "Explore how emerging investment opportunities present unique pathways to increase your CrackRock acquisition capacity through intelligent financial planning.",
      link: "Read our weekly CrackRock market insights",
      href: "/crackrock-insights",
      cardStyle: "card-holographic bg-white/95",
      iconBg: "bg-gradient-to-br from-accent/20 to-primary/15 backdrop-blur-sm",
      textColor: "text-black"
    }
  ]

  return (
    <section className="bg-primary py-32 lg:py-40 relative">
      {/* Cards positioned to overlap the section boundary */}
      <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2 z-10">
        <div className="max-w-site-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {cards.map((card, index) => {
            const IconComponent = card.icon
            return (
              <Link key={index} href={card.href}>
                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    rotateY: 5,
                    rotateX: 5
                  }}
                  className={`${card.cardStyle} rounded-xl p-6 lg:p-8 group cursor-pointer relative overflow-hidden`}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                {/* Subtle background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-start space-x-4 mb-4">
                    <motion.div 
                      className="flex-shrink-0"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className={`p-3 ${card.iconBg} rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110`}>
                        <IconComponent className="w-6 h-6 text-black/70" />
                      </div>
                    </motion.div>
                    <div className="flex-1">
                      <motion.h3 
                        className={`text-card lg:text-card-lg font-bold ${card.textColor} mb-3 group-hover:scale-105 transition-all duration-300`}
                        style={{ transformOrigin: 'left' }}
                      >
                        {card.title}
                      </motion.h3>
                    </div>
                  </div>
                  
                  <p className={`text-sm ${card.textColor} opacity-80 mb-6 leading-relaxed group-hover:opacity-100 transition-opacity duration-300`}>
                    {card.description}
                  </p>
                  
                  <motion.div 
                    className="flex items-center space-x-3"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <motion.div 
                      className="p-2 bg-gradient-to-br from-black/10 to-gray-800/10 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                      whileHover={{ rotate: 45 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-black/70 text-sm font-bold">→</span>
                    </motion.div>
                    <span className={`text-sm font-semibold ${card.textColor} link-hover group-hover:text-opacity-80 transition-all duration-300`}>
                      {card.link}
                    </span>
                  </motion.div>
                </div>
              </motion.div>
              </Link>
            )
          })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CardsSection