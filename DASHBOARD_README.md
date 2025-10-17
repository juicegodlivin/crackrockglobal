# CrackRock Prediction Market Dashboard

A fully functional prediction market dashboard for degens to bet on crypto, celebrities, politics, and more.

## Features

### 🎯 Core Functionality
- **Flippable Prediction Cards**: Click any card to see detailed information on the back
- **Category Filtering**: Browse predictions by categories like Crypto Markets, Celebrities, Politics, and more
- **Trending Section**: Curated trending predictions on the main dashboard
- **Dark/Light Mode**: Toggle between themes with persistent styling
- **Responsive Design**: Works on desktop, tablet, and mobile devices

### 📊 Categories

**Main Categories:**
1. **Trending** - Curated trending predictions
2. **All Markets** - Browse all predictions with filtering
3. **Celebrities** - Celebrity gossip and entertainment predictions
4. **Crypto Markets** - Token price and performance bets
5. **Politics** - Political events and outcomes
6. **CrackRock Accumulation** - Strategic CrackRock acquisition predictions

**Degen Categories:**
7. **KOL Chaos** - Influencer behavior predictions
8. **Token Launches** - New token success/failure bets
9. **Rug Pulls** - Will it rug or moon?
10. **FOMO Bets** - High-risk trending plays

### 🎨 Design System

The dashboard uses a custom theme with CSS variables for seamless light/dark mode:

**Light Mode:**
- Clean white backgrounds
- Subtle shadows
- High contrast for readability

**Dark Mode:**
- Deep navy backgrounds
- Enhanced shadows
- Gold accents for primary actions

### 🔧 Admin Panel

Access at `/dashboard/admin` to manage predictions:

- **Create** new prediction markets
- **Edit** existing predictions
- **Delete** predictions with confirmation
- **Toggle Trending** status
- **Edit Stats** (Active Markets, Volume, Winners)
- **Export Data** as JSON

## File Structure

```
src/
├── app/
│   └── dashboard/
│       ├── layout.tsx          # Dashboard layout with sidebar
│       ├── page.tsx             # Main dashboard (trending)
│       ├── [category]/
│       │   └── page.tsx         # Dynamic category pages
│       └── admin/
│           └── page.tsx         # Admin panel
├── components/
│   └── dashboard/
│       ├── Sidebar.tsx          # Collapsible sidebar navigation
│       ├── PredictionCard.tsx   # Flippable card component
│       ├── StatsBar.tsx         # Stats display
│       ├── FilterBar.tsx        # Filter/sort controls
│       ├── CategoryHeader.tsx   # Page headers
│       ├── AdminCard.tsx        # Admin card with edit/delete
│       └── AdminForm.tsx        # Create/edit form modal
├── data/
│   ├── predictions.json         # Mock prediction data
│   ├── categories.json          # Category definitions
│   └── stats.json               # Dashboard stats
└── types/
    └── dashboard.ts             # TypeScript types
```

## Usage

### Accessing the Dashboard

Navigate to `http://localhost:3000/dashboard` to view the main dashboard.

### Navigation

- Click sidebar items to switch between categories
- Click prediction cards to flip and see detailed information
- Click again to flip back to the betting interface
- Use Filter/Sort buttons on Trending and All pages
- Click the sun/moon icon to toggle dark/light mode

### Admin Functions

1. Go to `/dashboard/admin`
2. Click "Create New Prediction" to add a market
3. Click "Edit" on any card to modify it
4. Click the trending icon to mark/unmark as trending
5. Click trash icon to delete (with confirmation)
6. Modify stats at the top and click "Save Stats"
7. Export all data as JSON for backup

## Data Structure

### Prediction Object
```typescript
{
  id: string;
  ticker: string;
  name: string;
  question: string;
  categories: string[];
  icon: string;
  badges: string[];
  yesPercentage: number;
  noPercentage: number;
  yesPrice: string;
  noPrice: string;
  volume: string;
  price: string;
  change24h: string;
  trending: boolean;
  extendedInfo: {
    type: 'crypto' | 'celebrity' | 'kol' | 'strategy' | 'politics' | 'degen';
    description: string;
    // Type-specific fields...
  }
}
```

## Customization

### Adding New Categories

1. Edit `src/data/categories.json`
2. Add icon to `iconMap` in `Sidebar.tsx`
3. Create predictions with the new category slug

### Adding New Predictions

Use the Admin Panel or directly edit `src/data/predictions.json`.

### Styling

- Theme colors: Edit CSS variables in `src/app/globals.css`
- Component styles: Use Tailwind with CSS variable references
- Card effects: Modify Framer Motion animations in `PredictionCard.tsx`

## Technical Details

### Tech Stack
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Card flip animations
- **Lucide React** - Icon library

### State Management
- Local state with React hooks
- No external state management needed for MVP
- Data stored in JSON files (ready for API integration)

### Future Enhancements
- Backend API integration
- Real-time betting functionality
- Wallet connection (Web3)
- Live updates via WebSockets
- User authentication
- Transaction history
- Advanced analytics
- Chart integration

## Notes

- All changes in Admin Panel are temporary (browser state only)
- Use Export function to save changes as JSON
- Dark mode preference could be persisted to localStorage
- Ready for backend integration when needed

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

Built with 💎 for the CrackRock community

