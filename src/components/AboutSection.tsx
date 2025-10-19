'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const AboutSection = () => {
  return (
    <section className="bg-white py-12 md:py-16 lg:py-20">
      <div className="max-w-site-wide mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left Content - About Us */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4">
              <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                ABOUT US
              </span>
            </div>
            <h2 className="text-section lg:text-section-lg font-display text-black mb-6">
              About CrackRock Investment Solutions
            </h2>
            <p className="text-body-large text-gray-600 mb-6 leading-relaxed">
                We are the leading provider of non-financial advice on CrackRock-focused investment strategies and wealth-building solutions for more CrackRock acquisitions. 
                For over a decade, we've been helping individuals and institutions maximize their CrackRock acquisition 
                potential through smart financial planning and strategic investing.
            </p>
            <Link href="/about-us">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                Learn more about the CrackRock Global team
              </motion.button>
            </Link>
          </motion.div>

          {/* Right Content - Maximize Your Potential */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-gray-900 to-black text-white rounded-2xl p-8 lg:p-10"
          >
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Maximize your CrackRock potential
            </h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Stay informed with the latest CrackRock investment insights, market analysis, and acquisition strategies from our expert team.
            </p>
            <Link href="/investment-strategies">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-black px-8 py-3 rounded font-semibold hover:bg-opacity-90 transition-all duration-300 w-full sm:w-auto"
              >
                Explore CrackRock strategies
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection