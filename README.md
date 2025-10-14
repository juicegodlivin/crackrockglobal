# CrackRock Finance Landing Page

A modern, responsive finance landing page built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. This project replicates a professional financial services website design with advanced animations and responsive layouts.

## 🚀 Technologies Used

- **Next.js 14+** - React framework with App Router
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Modern icon library

## 🎨 Design System

The project follows a comprehensive design system defined in `design-system.json` with:

- **Brand Colors**: Gold primary (#FFD700), Black secondary, Orange accent (#FF6B35)
- **Typography**: Arial-based font families with responsive scales
- **Layout**: 1200px max width, 12-column grid system
- **Components**: Reusable UI components with consistent styling
- **Responsive**: Mobile-first approach with proper breakpoints
- **Accessibility**: WCAG-AA compliant with proper contrast ratios

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd crackrock-v0
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── components/
│   ├── Navigation.tsx       # Sticky navigation bar
│   ├── HeroSection.tsx      # Hero section with retirement trends
│   ├── CardsSection.tsx     # Three-column cards section
│   ├── FundsSection.tsx     # Funds matching section
│   ├── InvestmentGrid.tsx   # Investment options grid
│   ├── AboutSection.tsx     # About CrackRock section
│   └── Footer.tsx           # Comprehensive footer
└── design-system.json       # Complete design system specification
```

## ✨ Features

- **Responsive Design**: Mobile-first approach with smooth breakpoint transitions
- **Smooth Animations**: Framer Motion powered animations and micro-interactions
- **Modern UI**: Clean, professional design matching financial industry standards
- **Type Safety**: Full TypeScript implementation
- **Performance Optimized**: Next.js 14 with App Router for optimal loading
- **Accessibility**: WCAG-AA compliant with proper semantic HTML
- **SEO Ready**: Proper meta tags and semantic structure

## 🎯 Key Sections

1. **Navigation**: Sticky header with responsive mobile menu
2. **Hero**: Retirement trends with animated illustration
3. **Cards**: Three-column feature cards with hover effects
4. **Funds**: Search functionality for investment funds
5. **Investment Grid**: Comprehensive investment options showcase
6. **About**: Company information and statistics
7. **Footer**: Multi-column footer with social links

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

The design system is fully customizable through:

1. **Tailwind Config**: Modify `tailwind.config.js` for design tokens
2. **Design System**: Update `design-system.json` for comprehensive changes
3. **Global Styles**: Customize `src/app/globals.css` for global overrides
4. **Component Styles**: Individual component styling in respective files

## 📱 Responsive Breakpoints

- **Mobile**: 320-768px
- **Tablet**: 768-1024px  
- **Desktop**: 1024px+

## 🚀 Deployment

The project is ready for deployment on platforms like:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Docker**

For Vercel deployment:
```bash
npm run build
# Deploy to Vercel
```

## 📄 License

This project is for demonstration purposes. Please ensure you have proper licensing for any production use.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
