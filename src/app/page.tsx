'use client'

import { useEffect } from 'react'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import CardsSection from '@/components/CardsSection'
import FundsSection from '@/components/FundsSection'
import InvestmentGrid from '@/components/InvestmentGrid'
import AboutSection from '@/components/AboutSection'
import Footer from '@/components/Footer'

export default function Home() {
  useEffect(() => {
    // Comprehensive scroll to top on page load
    const scrollToTop = () => {
      // Method 1: Standard window.scrollTo
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      })
      
      // Method 2: Fallback for older browsers
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }

    // Immediate scroll to top
    scrollToTop()
    
    // Also scroll to top after a brief delay to handle any layout shifts
    const timeoutId = setTimeout(scrollToTop, 100)
    
    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <CardsSection />
      <FundsSection />
      <InvestmentGrid />
      <AboutSection />
      <Footer />
    </main>
  )
}