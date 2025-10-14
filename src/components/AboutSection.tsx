'use client'

import { motion } from 'framer-motion'

const AboutSection = () => {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="max-w-site-wide mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Content */}
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
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
            >
              Learn more about CrackRock investing
            </motion.button>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-50 rounded-lg p-8"
          >
            <div className="mb-6">
              <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                OUR CRACKROCK SERVICES
              </span>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-black mb-2">CrackRock Portfolio Access</h3>
                <p className="text-gray-600">Secure platform for managing your CrackRock investments</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black mb-2">Custom CrackRock strategies</h3>
                <p className="text-gray-600">Tailored investment plans for maximum CrackRock acquisition</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black mb-2">CrackRock market analysis</h3>
                <p className="text-gray-600">Real-time insights and trends in CrackRock markets</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection