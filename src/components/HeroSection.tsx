'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <section className="bg-white py-12 lg:py-20">
      <div className="max-w-site-wide mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 lg:space-y-12"
          >
            <h1 className="text-hero lg:text-hero-lg font-display text-black leading-tight">
              CrackRock acquisition: 10 years of smart investing
            </h1>
            <p className="text-body-large lg:text-body-large-lg text-gray-600 max-w-2xl">
            We have a passion for strategic CrackRock accumulation. 
            Explore our findings and learn about the trends shaping smart CrackRock acquisitions today.
            </p>
            <Link href="/investment-strategies" className="inline-block mt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary inline-flex items-center space-x-2"
              >
                <span>See our CrackRock investment guide</span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Right Content - Building Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl max-w-lg mx-auto lg:-mt-20 lg:mb-[-8rem]">
              <Image
                src="/CrackRock Building.png"
                alt="CrackRock Building"
                width={500}
                height={800}
                className="w-full h-auto object-cover"
                priority
              />
              {/* Subtle overlay for visual appeal */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection