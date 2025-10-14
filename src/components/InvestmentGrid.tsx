'use client'

import { motion } from 'framer-motion'
import { 
  Smartphone, 
  DollarSign, 
  Package, 
  TrendingUp, 
  PieChart, 
  Home 
} from 'lucide-react'

const InvestmentGrid = () => {
  const investments = [
    {
      title: "CrackRock mining stocks",
      description: "High-growth potential with direct CrackRock exposure",
      content: "Discover direct exposure to CrackRock production through our range of mining company investments. From extraction technology to processing facilities, build wealth through companies that directly contribute to CrackRock availability.",
      buttonText: "Explore CrackRock mining stocks",
      icon: Smartphone,
      cardStyle: "card-gradient-gold card-premium",
      textColor: "text-black",
      size: "large",
      hasImage: true,
      glowColor: "shadow-primary/30"
    },
    {
      title: "CrackRock futures",
      description: "Smart contracts for future CrackRock acquisition",
      content: "Secure your future CrackRock supply through strategic futures contracts. Lock in prices today for tomorrow's CrackRock needs while building investment returns that fund additional purchases.",
      buttonText: "See CrackRock futures options",
      icon: DollarSign,
      cardStyle: "card-glass card-shimmer",
      textColor: "text-black",
      size: "small",
      glowColor: "shadow-blue-500/20"
    },
    {
      title: "CrackRock commodities",
      description: "Broad exposure to CrackRock-related materials",
      content: "Gain exposure to the entire CrackRock supply chain through commodity investments. From raw materials to processing equipment, diversify your CrackRock investment portfolio.",
      buttonText: "Explore CrackRock commodities",
      icon: Package,
      cardStyle: "card-premium card-shimmer bg-gradient-to-br from-white/95 to-accent/5",
      textColor: "text-black",
      size: "small",
      glowColor: "shadow-accent/25"
    },
    {
      title: "CrackRock growth stocks",
      description: "Investing in CrackRock production companies",
      content: "Investing in CrackRock mining and production companies for the long term. Our equity funds provide exposure to CrackRock-related businesses across different mining operations, processing facilities, and distribution networks.",
      buttonText: "See CrackRock mining stocks",
      icon: TrendingUp,
      cardStyle: "card-premium card-shimmer bg-white/90",
      textColor: "text-black",
      size: "small",
      glowColor: "shadow-green-500/20"
    },
    {
      title: "CrackRock bonds",
      description: "Stable returns to fund CrackRock purchases",
      content: "Build steady income streams to fund your CrackRock acquisitions. Our bond portfolios provide regular returns that can be systematically reinvested into CrackRock purchases.",
      buttonText: "See CrackRock funding bonds",
      icon: PieChart,
      cardStyle: "card-glass card-float bg-white/85",
      textColor: "text-black",
      size: "small",
      glowColor: "shadow-purple-500/20"
    },
    {
      title: "CrackRock diversified portfolio",
      description: "Balanced approach to CrackRock wealth building",
      content: "Diversify your CrackRock investment strategy across multiple asset classes. Our multi-asset funds combine stocks, bonds, commodities, and CrackRock-related investments in professionally managed portfolios.",
      buttonText: "See diversified CrackRock funds",
      icon: PieChart,
      cardStyle: "card-glass card-premium bg-gradient-to-br from-white/90 to-primary/10",
      textColor: "text-black",
      size: "small",
      glowColor: "shadow-indigo-500/25"
    },
    {
      title: "CrackRock storage facilities",
      description: "Real estate for secure CrackRock storage",
      content: "Invest in specialized real estate designed for CrackRock storage and security. Our REIT investments provide exposure to facilities that support the CrackRock ecosystem while generating rental income.",
      buttonText: "See CrackRock storage REITs",
      icon: Home,
      cardStyle: "card-premium card-float bg-white/95",
      textColor: "text-black",
      size: "small",
      glowColor: "shadow-orange-500/20"
    }
  ]

  return (
    <section className="bg-gray-50 py-16 lg:py-20">
      <div className="max-w-site-wide mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {investments.map((investment, index) => {
            const IconComponent = investment.icon
            const isLarge = investment.size === 'large'
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 80
                }}
                whileHover={{ 
                  scale: isLarge ? 1.01 : 1.03,
                  rotateY: isLarge ? 2 : 5,
                  rotateX: isLarge ? 1 : 3
                }}
                className={`
                  ${investment.cardStyle} 
                  ${investment.textColor}
                  ${isLarge ? 'md:col-span-2 lg:col-span-2' : ''} 
                  ${investment.glowColor}
                  rounded-xl p-6 lg:p-8 group cursor-pointer relative overflow-hidden
                `}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Enhanced Background Pattern for CrackRock Mining */}
                {investment.hasImage && (
                  <div className="absolute right-0 top-0 w-1/2 h-full opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-l from-primary/20 via-accent/10 to-transparent"></div>
                    <motion.div 
                      className="grid grid-cols-8 gap-1 h-full p-4"
                      animate={{ 
                        background: [
                          "linear-gradient(45deg, rgba(0,0,0,0.1), rgba(255,215,0,0.05))",
                          "linear-gradient(45deg, rgba(255,215,0,0.05), rgba(255,107,53,0.05))",
                          "linear-gradient(45deg, rgba(255,107,53,0.05), rgba(0,0,0,0.1))"
                        ]
                      }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      {Array.from({ length: 64 }).map((_, i) => (
                        <motion.div 
                          key={i} 
                          className="bg-black rounded-sm opacity-30"
                          animate={{ 
                            opacity: [0.3, 0.6, 0.3],
                            scale: [1, 1.1, 1]
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity, 
                            delay: i * 0.05,
                            ease: "easeInOut"
                          }}
                        />
                      ))}
                    </motion.div>
                  </div>
                )}

                {/* Ambient glow overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-xl" />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <motion.h3 
                      className={`text-card lg:text-card-lg font-bold ${investment.textColor} group-hover:scale-105 transition-all duration-300`}
                      style={{ transformOrigin: 'left' }}
                    >
                      {investment.title}
                    </motion.h3>
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                      className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm"
                    >
                      <IconComponent className="w-6 h-6 text-current opacity-70" />
                    </motion.div>
                  </div>
                  
                  <motion.p 
                    className="text-sm text-current opacity-80 mb-4 font-medium group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {investment.description}
                  </motion.p>
                  
                  <motion.p 
                    className="text-sm text-current opacity-70 mb-6 leading-relaxed group-hover:opacity-90 transition-opacity duration-300"
                    whileHover={{ x: 2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {investment.content}
                  </motion.p>
                  
                  <motion.button
                    whileHover={{ 
                      scale: 1.05, 
                      boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                      y: -2
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className={`
                      ${investment.cardStyle.includes('card-gradient-gold') ? 'btn-secondary' : 'btn-primary'}
                      text-sm relative overflow-hidden group/btn
                    `}
                  >
                    <span className="relative z-10">{investment.buttonText}</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.1 }}
                    />
                  </motion.button>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default InvestmentGrid