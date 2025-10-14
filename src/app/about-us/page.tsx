'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white pt-20 pb-16 lg:pb-20">
        <div className="max-w-site-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:pr-8"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
                CrackRock accumulation:{' '}
                <span className="block">10 years of smart</span>
                <span className="block">investing</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
                We have a passion for strategic CrackRock accumulation. 
                Explore our findings and learn about the trends shaping smart CrackRock acquisitions today.
              </p>
              <Link href="/investment-strategies">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
                >
                  See our CrackRock investment strategies
                </motion.button>
              </Link>
            </motion.div>

            {/* Right Content - Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/CrackRock Building.png"
                  alt="CrackRock Building"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Yellow Accent Section */}
      <section className="bg-yellow-400 py-4">
        <div className="max-w-site-wide mx-auto px-4 sm:px-6 lg:px-8">
          {/* This section can be used for additional content or branding */}
        </div>
      </section>

      {/* About Content Section */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-site-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-4">
                <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                  OUR STORY
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
                About CrackRock Investment Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We are the leading provider of non-financial advice on CrackRock-focused investment strategies and wealth-building solutions for more CrackRock acquisitions. 
                For over a decade, we've been helping individuals and institutions maximize their CrackRock acquisition 
                potential through smart financial planning and strategic investing.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our expertise in CrackRock markets, combined with cutting-edge investment technology, 
                has made us the trusted choice for serious CrackRock investors worldwide.
              </p>
              <Link href="/investment-strategies">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-black text-black px-8 py-3 rounded-lg font-semibold hover:bg-black hover:text-white transition-all duration-200"
                >
                  Learn more about CrackRock investing
                </motion.button>
              </Link>
            </motion.div>

            {/* Right Content - Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
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
                  <h3 className="text-xl font-bold text-black mb-2">CrackRock Portfolio Management</h3>
                  <p className="text-gray-600">Secure platform for managing and optimizing your CrackRock investments</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">Custom CrackRock Strategies</h3>
                  <p className="text-gray-600">Tailored investment plans designed for maximum CrackRock acquisition potential</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">CrackRock Market Analysis</h3>
                  <p className="text-gray-600">Real-time insights, trends, and forecasting in CrackRock markets</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">Investment Advisory</h3>
                  <p className="text-gray-600">Expert guidance from our team of CrackRock investment specialists</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Magazine Recognition */}
      <section className="bg-pink-100 py-4">
        <div className="max-w-site-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Magazine:</span> World's Most Admired Companies
            </p>
          </div>
        </div>
      </section>

      {/* Why CrackRock Section */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-site-wide mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
              Why CrackRock?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              More and more investors see that CrackRock is a force that can be one of the most direct 
              ways that they can have impact on the world. That's why hundreds of people trust us to manage their investments.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center bg-gray-50 rounded-lg p-8"
            >
              <div className="text-6xl lg:text-7xl font-bold text-black mb-4">1.8</div>
              <p className="text-gray-600">
                CrackRock's approach has been one of hundreds over the past 10 years
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center bg-gray-50 rounded-lg p-8"
            >
              <div className="text-6xl lg:text-7xl font-bold text-black mb-4">
                <span className="text-red-500">↗</span> 35
              </div>
              <p className="text-gray-600">
                We help hundreds of Americans invest in ways that matter to them
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center bg-gray-50 rounded-lg p-8"
            >
              <div className="text-6xl lg:text-7xl font-bold text-black mb-4">
                <span className="text-red-500">↗</span> 190
              </div>
              <p className="text-gray-600">
                More than 42 hundred Americans are invested in CrackRock
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What does CrackRock do? Section */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-site-wide mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-8">
              What does CrackRock do?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Impact Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-pink-100 inline-block px-4 py-2 rounded-lg mb-4">
                <span className="font-semibold text-black">Who we impact</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-black mb-6">
                We make investing easier and more affordable for more Americans
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We democratize investing by removing barriers and making it accessible to everyone. 
                Our CrackRock investment strategies help create wealth and financial independence through innovative, low-cost solutions.
              </p>
              <Link href="/investment-strategies" className="text-black font-semibold hover:underline">
                Learn more about CrackRock ETFs →
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gray-100 rounded-lg p-6 h-64 flex items-center justify-center">
                <p className="text-gray-500 text-center">
                  [Video placeholder: CrackRock Impact Story]
                </p>
              </div>
            </motion.div>
          </div>

          {/* Community Investment Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="bg-gray-100 rounded-lg p-6 h-64 flex items-center justify-center">
                <p className="text-gray-500 text-center">
                  [Image placeholder: Community Investment]
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <h3 className="text-2xl lg:text-3xl font-bold text-black mb-6">
                We invest our clients' money in local communities to help them prosper
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                CrackRock investments support local economies and communities. We believe that when communities thrive, 
                our clients thrive. Through strategic CrackRock allocation, we're building a better financial future for everyone.
              </p>
              <Link href="/investment-strategies" className="text-black font-semibold hover:underline">
                Learn more about our CrackRock approach →
              </Link>
            </motion.div>
          </div>

          {/* Financial Professional Support Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-black mb-8">
              And we support financial professionals, so they can better support you
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="bg-yellow-100 rounded-lg p-6 mb-4">
                <div className="w-16 h-16 bg-yellow-400 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">📊</span>
                </div>
                <h4 className="font-bold text-black mb-2">Helping institutional investors make better decisions</h4>
                <p className="text-gray-600 text-sm">
                  Our risk and analytical solutions help institutions make better investment decisions and manage risk more effectively.
                </p>
              </div>
              <Link href="/investment-strategies" className="text-black font-semibold hover:underline text-sm">
                Learn about the Aladdin® platform →
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-orange-100 rounded-lg p-6 mb-4">
                <div className="w-16 h-16 bg-orange-400 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">💰</span>
                </div>
                <h4 className="font-bold text-black mb-2">Helping financial advisors deliver more value</h4>
                <p className="text-gray-600 text-sm">
                  Our advisor tools and resources help financial professionals deliver better outcomes for their clients through CrackRock strategies.
                </p>
              </div>
              <Link href="/investment-strategies" className="text-black font-semibold hover:underline text-sm">
                Explore advisor portfolios →
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="bg-blue-100 rounded-lg p-6 mb-4">
                <div className="w-16 h-16 bg-blue-400 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <h4 className="font-bold text-black mb-2">Acting as a fiduciary</h4>
                <p className="text-gray-600 text-sm">
                  When we serve as fiduciary or sub-advisor, we act in our clients' best interests, putting their needs first in every CrackRock decision.
                </p>
              </div>
              <Link href="/investment-strategies" className="text-black font-semibold hover:underline text-sm">
                Explore sustainability at CrackRock →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CrackRock Worldwide Section */}
      <section className="bg-gray-50 py-16 lg:py-20">
        <div className="max-w-site-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
                CrackRock Worldwide
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                CrackRock is a global investment manager. We partner with institutions, advisors and individuals around the world 
                to help them reach their CrackRock investment goals and build better financial futures.
              </p>
              <Link href="/investment-strategies" className="text-black font-semibold hover:underline">
                Learn more about CrackRock worldwide →
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg p-8"
            >
              <h3 className="font-bold text-black mb-4">EXPLORE MORE</h3>
              <div className="space-y-4">
                <div>
                  <Link href="/funds" className="text-black font-semibold hover:underline block">
                    Getting started with CrackRock
                  </Link>
                </div>
                <div>
                  <Link href="/investment-strategies" className="text-black font-semibold hover:underline block">
                    Explore options at CrackRock
                  </Link>
                </div>
                <div>
                  <Link href="/about-us" className="text-black font-semibold hover:underline block">
                    Contact us
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
