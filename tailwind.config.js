/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFD700',
        secondary: '#000000',
        accent: '#FF6B35',
        background: '#FFFFFF',
        darkBackground: '#1A1A1A',
        glass: {
          light: 'rgba(255, 255, 255, 0.25)',
          medium: 'rgba(255, 255, 255, 0.35)',
          dark: 'rgba(0, 0, 0, 0.25)',
        },
        glow: {
          primary: 'rgba(255, 215, 0, 0.3)',
          accent: 'rgba(255, 107, 53, 0.3)',
          blue: 'rgba(59, 130, 246, 0.3)',
          purple: 'rgba(147, 51, 234, 0.3)',
        }
      },
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif'],
        display: ['Arial Black', 'sans-serif'],
      },
      fontSize: {
        'hero': ['48px', { lineHeight: '1.1', fontWeight: '900' }],
        'hero-lg': ['56px', { lineHeight: '1.1', fontWeight: '900' }],
        'section': ['32px', { lineHeight: '1.2', fontWeight: '800' }],
        'section-lg': ['40px', { lineHeight: '1.2', fontWeight: '800' }],
        'card': ['20px', { lineHeight: '1.3', fontWeight: '700' }],
        'card-lg': ['24px', { lineHeight: '1.3', fontWeight: '700' }],
        'body-large': ['16px', { lineHeight: '1.5', fontWeight: '400' }],
        'body-large-lg': ['18px', { lineHeight: '1.5', fontWeight: '400' }],
      },
      maxWidth: {
        'site': '1400px',
        'site-wide': '1600px',
        'site-full': '1800px',
      },
      spacing: {
        'xs': '8px',
        'sm': '16px',
        'md': '24px',
        'lg': '32px',
        'xl': '48px',
        'xxl': '64px',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.3s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
}