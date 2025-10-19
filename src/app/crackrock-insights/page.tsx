'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import { FileText, Calendar, Clock, TrendingUp, ArrowRight } from 'lucide-react'

interface Report {
  id: string
  title: string
  subtitle: string
  description: string
  publishDate: string
  readTime: string
  category: string
  slug: string
  featured: boolean
  color: string
}

const reports: Report[] = [
  {
    id: '1',
    title: 'Fall 2025 Market Analysis',
    subtitle: 'The Great Furniture Liquidation',
    description: 'The definitive guide to understanding why people are literally selling their furniture for CrackRock. Includes analysis on the couch phenomenon, copper pipe crisis, and market sentiment reaching furniture-threateningly high levels.',
    publishDate: 'October 15, 2025',
    readTime: '3 min read',
    category: 'Market Analysis',
    slug: 'fall-2025-market-analysis',
    featured: true,
    color: 'from-yellow-400 to-orange-500'
  }
  // Add more reports here as they come
]

export default function CrackRockInsightsPage() {
  const featuredReport = reports.find(r => r.featured)
  const regularReports = reports.filter(r => !r.featured)

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
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
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <FileText className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
            </motion.div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              CrackRock Insights
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              In-depth research, market analysis, and strategic insights for CrackRock investors
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
              <Calendar className="w-4 h-4" />
              <span>Updated regularly with fresh insights</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Report */}
      {featuredReport && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-site-wide mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-yellow-600" />
                <h2 className="text-sm font-bold text-gray-600 uppercase tracking-wide">
                  Featured Report
                </h2>
              </div>
            </motion.div>

            <Link href={`/crackrock-insights/${featuredReport.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.01 }}
                className="group cursor-pointer"
              >
                <div className={`relative bg-gradient-to-br ${featuredReport.color} rounded-2xl p-8 lg:p-12 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300`}>
                  {/* Animated background pattern */}
                  <motion.div 
                    className="absolute inset-0 opacity-20"
                    animate={{ 
                      backgroundPosition: ['0% 0%', '100% 100%'],
                    }}
                    transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
                    style={{
                      backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.2) 1px, transparent 1px)',
                      backgroundSize: '30px 30px'
                    }}
                  />

                  <div className="relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className="inline-block bg-black text-white px-4 py-2 rounded-full text-xs font-bold mb-4 uppercase tracking-wide">
                          {featuredReport.category}
                        </div>
                        <h3 className="text-4xl lg:text-5xl font-bold text-black mb-4 group-hover:scale-105 transition-transform duration-300 origin-left">
                          {featuredReport.title}
                        </h3>
                        <p className="text-xl font-semibold text-black/80 mb-4">
                          {featuredReport.subtitle}
                        </p>
                        <p className="text-base text-black/70 mb-6 leading-relaxed">
                          {featuredReport.description}
                        </p>
                        <div className="flex items-center gap-6 text-sm text-black/60 mb-6">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{featuredReport.publishDate}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{featuredReport.readTime}</span>
                          </div>
                        </div>
                        <motion.div
                          className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg font-semibold group-hover:bg-gray-900 transition-colors duration-300"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <span>Read Full Report</span>
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </motion.div>
                      </div>
                      <div className="hidden lg:block">
                        <div className="bg-black/10 backdrop-blur-sm rounded-xl p-8 border-2 border-black/20">
                          <FileText className="w-32 h-32 text-black/30 mx-auto" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>
        </section>
      )}

      {/* All Reports Grid */}
      {regularReports.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-site-wide mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
                All Reports
              </h2>
              <p className="text-lg text-gray-600">
                Comprehensive analysis and insights into CrackRock markets
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularReports.map((report, index) => (
                <Link key={report.id} href={`/crackrock-insights/${report.slug}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="group cursor-pointer bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
                  >
                    <div className={`h-2 bg-gradient-to-r ${report.color}`} />
                    <div className="p-6">
                      <div className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold mb-4">
                        {report.category}
                      </div>
                      <h3 className="text-xl font-bold text-black mb-2 group-hover:text-primary transition-colors duration-300">
                        {report.title}
                      </h3>
                      <p className="text-sm font-semibold text-gray-600 mb-3">
                        {report.subtitle}
                      </p>
                      <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                        {report.description}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{report.publishDate}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{report.readTime}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm font-semibold text-black group-hover:text-primary transition-colors duration-300">
                        <span>Read Report</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Coming Soon Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <FileText className="w-16 h-16 text-gray-300 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-black mb-4">More Reports Coming Soon</h3>
            <p className="text-lg text-gray-600 mb-8">
              We're constantly analyzing CrackRock markets and investment trends. 
              Check back regularly for new insights and research.
            </p>
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Return to Home
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
