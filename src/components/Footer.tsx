'use client'

import { motion } from 'framer-motion'
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react'

const Footer = () => {
  const footerSections = [
    {
      title: "CrackRock investing",
      links: [
        "Investment strategies",
        "CrackRock portfolio tools",
        "Performance tracking",
        "Market insights",
        "CrackRock analysis",
        "About CrackRock investing"
      ]
    },
    {
      title: "Investment strategies",
      links: [
        "CrackRock mining stocks",
        "CrackRock futures",
        "CrackRock commodities",
        "Diversified CrackRock funds",
        "CrackRock growth strategies",
        "CrackRock storage REITs"
      ]
    },
    {
      title: "CrackRock insights",
      links: [
        "Market trends",
        "Investment opportunities",
        "CrackRock economics",
        "Mining technology",
        "Supply chain analysis",
        "Acquisition strategies"
      ]
    },
    {
      title: "About us",
      links: [
        "Our CrackRock mission",
        "Investment team",
        "Client success stories",
        "CrackRock sustainability",
        "Join our team",
        "CrackRock news"
      ]
    }
  ]

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ]

  return (
    <footer className="bg-black text-white">
      {/* Learn More Section */}
      <div className="bg-gray-900 py-12">
        <div className="max-w-site-wide mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">Maximize your CrackRock potential</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Stay informed with the latest CrackRock investment insights, market analysis, and acquisition strategies from our expert team.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-black px-8 py-3 rounded font-semibold hover:bg-opacity-90 transition-all duration-300"
            >
              Explore CrackRock strategies
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="max-w-site-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
            {footerSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-lg font-semibold mb-6">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 pt-8 border-t border-gray-800"
          >
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
              <div className="flex items-center space-x-6">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                      aria-label={social.label}
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  )
                })}
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