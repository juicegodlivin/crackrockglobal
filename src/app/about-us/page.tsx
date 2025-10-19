'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Target, 
  Users, 
  TrendingUp, 
  Leaf, 
  Briefcase, 
  Award,
  Globe,
  Heart,
  Zap,
  Shield,
  Star,
  Lightbulb,
  DollarSign,
  CheckCircle,
  GraduationCap
} from 'lucide-react'

export default function AboutUsPage() {
  const teamMembers = [
    {
      name: "Hunter Biden",
      role: "Chairman & CEO",
      description: "Visionary leader with unparalleled experience in alternative asset acquisition. Pioneered innovative accumulation strategies that revolutionized the industry.",
      image: "/Hunter Biden.png",
      icon: null
    },
    {
      name: "Ben Armstrong",
      role: "Chief Marketing Officer",
      description: "Master strategist in CrackRock market positioning and brand development. Former crypto influencer who saw the light and went all-in on CrackRock.",
      image: "/Ben Armstrong.png",
      icon: null
    },
    {
      name: "Charlie Sheen",
      role: "HR & Public Relations",
      description: "Award-winning communicator with decades of experience in public image optimization. Brings unmatched expertise in crisis management and tiger blood-level performance strategies.",
      image: "/Charlie Sheen.png",
      icon: null
    },
    {
      name: "Trev",
      role: "CrackRock Development",
      description: "Full-stack architect specializing in scalable CrackRock infrastructure and digital accumulation platforms. Builds the technology that powers next-generation investment strategies.",
      image: "/Trev.png",
      icon: null
    }
  ]

  const testimonials = [
    {
      name: "Mert",
      image: "/Testimonials/Mert.png"
    },
    {
      name: "Oprah Winfrey",
      image: "/Testimonials/Oprah Winfrey.png"
    },
    {
      name: "Tyrone Biggums",
      image: "/Testimonials/Tyrone Biggums.png"
    },
    {
      name: "Whitney Houston",
      image: "/Testimonials/Whitney Houston.png"
    }
  ]

  return (
    <main className="min-h-screen bg-white">
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
              <Users className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
            </motion.div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              About CrackRock Global
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Pioneering strategic CrackRock accumulation advisory since 2015
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section id="mission" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="max-w-site-wide mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <Target className="w-8 h-8 text-yellow-600" />
              <h2 className="text-4xl lg:text-5xl font-bold text-black">Our Mission</h2>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 lg:p-12">
                <h3 className="text-3xl font-bold text-black mb-6">
                  Maximizing CrackRock Accumulation Potential Since 2015
                </h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  At CrackRock Global, we empower investors to maximize their CrackRock acquisition potential through 
                  sophisticated strategies that eliminate diversification drag and weak-handed investor syndrome. 
                  Our mission is to provide comprehensive non-financial advice on CrackRock-focused investment solutions.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We help individuals and institutions convert fiat directly to CrackRock with unparalleled efficiency, 
                  leveraging everything from 401(k)s to home equity lines of CrackRock. Traditional assets are for 
                  those who don't understand the power of strategic accumulation.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {[
                { icon: Shield, title: "CrackRock Acquisition Efficiency", desc: "We are the leading provider of non-financial advice on CrackRock-focused investment strategies and wealth-building solutions for more CrackRock acquisitions." },
                { icon: Zap, title: "23 Strategies", desc: "Proven methods for optimal CrackRock portfolio building" },
                { icon: Heart, title: "10 Years", desc: "Leading CrackRock investment advisory excellence" }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-black mb-2">{value.title}</h4>
                    <p className="text-gray-600">{value.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Investment Team Section */}
      <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white scroll-mt-24">
        <div className="max-w-site-wide mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <Users className="w-8 h-8 text-yellow-600" />
              <h2 className="text-4xl lg:text-5xl font-bold text-black">Investment Team</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The strategic minds behind 10 years of innovative CrackRock accumulation methodology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl overflow-hidden">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      member.icon
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">{member.name}</h3>
                  <p className="text-sm font-semibold text-yellow-600 mb-3">{member.role}</p>
                  <p className="text-sm text-gray-600">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-lg text-gray-600 mb-6">
              Our team brings 100+ combined years of unconventional accumulation experience
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-yellow-100 px-6 py-3 rounded-full">
                <span className="font-semibold text-black">School of Hard Knocks Educated</span>
              </div>
              <div className="bg-orange-100 px-6 py-3 rounded-full">
                <span className="font-semibold text-black">Zero Traditional Credentials</span>
              </div>
              <div className="bg-green-100 px-6 py-3 rounded-full">
                <span className="font-semibold text-black">Full Conviction</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Member Testimonials Section */}
      <section id="success" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="max-w-site-wide mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <Award className="w-8 h-8 text-yellow-600" />
              <h2 className="text-4xl lg:text-5xl font-bold text-black">Member Testimonials</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our distinguished members who've achieved excellence with CrackRock Global
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative aspect-video">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold text-black">{testimonial.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section id="sustainability" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-emerald-50 scroll-mt-24">
        <div className="max-w-site-wide mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <Leaf className="w-8 h-8 text-green-600" />
              <h2 className="text-4xl lg:text-5xl font-bold text-black">Sustainability</h2>
            </div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Committed to responsible CrackRock accumulation practices and ethical sourcing
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-3xl font-bold text-black mb-6 text-center">
              Sustainable Accumulation Practices
            </h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed text-center">
              At CrackRock Global, we're committed to responsible CrackRock accumulation methodologies that 
              consider long-term portfolio sustainability, community reinvestment, and ethical sourcing practices 
              from only the finest urban distribution networks.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed text-center">
              We believe in building lasting relationships with premium suppliers, supporting local corner 
              economies through strategic bulk purchasing, and ensuring every CrackRock acquisition 
              contributes to a more sustainable accumulation ecosystem.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              {[
                "Carbon-neutral accumulation routes via electric vehicles",
                "Ethically sourced CrackRock from premium networks only",
                "Community reinvestment through bulk purchasing programs",
                "Diversification elimination advocacy and education"
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-md"
                >
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section id="careers" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="max-w-site-wide mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <Briefcase className="w-8 h-8 text-yellow-600" />
              <h2 className="text-4xl lg:text-5xl font-bold text-black">Join Our Team</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Help us revolutionize CrackRock accumulation strategies for the next generation of all-in investors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {[
              { title: "Innovation Culture", icon: Lightbulb, desc: "Develop cutting-edge accumulation strategies that challenge conventional wisdom" },
              { title: "Field Experience", icon: Users, desc: "Hands-on exposure to real-world CrackRock markets and distribution networks" },
              { title: "Performance-Based Pay", icon: DollarSign, desc: "Earn based on successful client accumulation metrics (paid in CrackRock)" }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-black text-white rounded-2xl p-12 text-center"
          >
            <h3 className="text-3xl font-bold mb-6">Ready to Go All-In?</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We're seeking unconventional talent who understand that diversification is for cowards. 
              No traditional finance experience required—in fact, it's preferred. Please bring references from your local corner.
            </p>
            <Link href="/investment-strategies">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors duration-200"
              >
                Apply Now (Corner References Required)
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

    </main>
  )
}
