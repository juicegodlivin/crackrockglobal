'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

const Footer = () => {
  const footerSections = [
    {
      title: "Investment strategies",
      links: [
        { label: "Strategy #1: The Miami Method", href: "/investment-strategies#strategy-1" },
        { label: "Strategy #5: Meal Prep to Rock Prep", href: "/investment-strategies#strategy-5" },
        { label: "Strategy #12: Mining Rights", href: "/investment-strategies#strategy-12" },
        { label: "Strategy #18: Minimalist Journey", href: "/investment-strategies#strategy-18" },
        { label: "Strategy #21: Diversified Concentration", href: "/investment-strategies#strategy-21" },
        { label: "Strategy #23: The Full Send Protocol", href: "/investment-strategies#strategy-23" }
      ]
    },
    {
      title: "CrackRock insights",
      links: [
        { label: "Fall 2025 Market Analysis", href: "/crackrock-insights/fall-2025-market-analysis" },
        { label: "All Reports", href: "/crackrock-insights" },
        { label: "Market Trends", href: "/crackrock-insights" },
        { label: "Investment Opportunities", href: "/crackrock-insights" },
        { label: "Research Archive", href: "/crackrock-insights" },
        { label: "Coming Soon", href: "/crackrock-insights" }
      ]
    },
    {
      title: "About us",
      links: [
        { label: "Our Mission", href: "/about-us#mission" },
        { label: "Investment Team", href: "/about-us#team" },
        { label: "Member Testimonials", href: "/about-us#success" },
        { label: "Sustainability", href: "/about-us#sustainability" },
        { label: "Join Our Team", href: "/about-us#careers" }
      ]
    }
  ]

  const externalLinks = [
    { 
      label: "Follow us on X", 
      href: "https://x.com/CrackRockGlobal",
      icon: "𝕏"
    },
    { 
      label: "Join Community", 
      href: "https://x.com/i/communities/1979748755378409931",
      icon: "💬"
    },
    { 
      label: "Pump.fun Token", 
      href: "#", // Replace with actual Pump.fun URL
      icon: "🪨"
    }
  ]

  return (
    <footer className="bg-black text-white">
      {/* Main Footer */}
      <div className="py-16">
        <div className="max-w-site-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
            {footerSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col"
              >
                <h3 className="text-lg font-semibold mb-6">{section.title}</h3>
                <ul className="space-y-3.5 flex-1">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-gray-300 hover:text-white transition-colors duration-200 text-sm hover:underline inline-block"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* External Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 pt-8 border-t border-gray-800"
          >
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                {externalLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 group"
                  >
                    <span className="text-xl">{link.icon}</span>
                    <span className="text-gray-300 group-hover:text-white text-sm font-medium">
                      {link.label}
                    </span>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white" />
                  </a>
                ))}
              </div>
              
              <div className="text-center lg:text-right">
                <div className="text-2xl font-display font-black mb-2">CrackRock</div>
                <p className="text-gray-400 text-sm">
                  © 2025 CrackRock Investment Solutions. All rights reserved.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 pt-8 border-t border-gray-800"
          >
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              <div className="flex flex-wrap justify-center lg:justify-start items-center space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors duration-200">Privacy Notice</a>
                <a href="#" className="hover:text-white transition-colors duration-200">Terms & Conditions</a>
                <a href="#" className="hover:text-white transition-colors duration-200">CrackRock Disclaimer</a>
                <a href="#" className="hover:text-white transition-colors duration-200">Investment Risk</a>
              </div>
              
              <div className="text-sm text-gray-400">
                CrackRock investment involves risk. Invest responsibly.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer