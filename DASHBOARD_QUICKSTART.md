# CrackRock Prediction Market Dashboard - Quick Start

## 🚀 What Was Built

A complete prediction market dashboard with:
- ✅ 18+ mock prediction markets across 10 categories
- ✅ Flippable cards with detailed information
- ✅ Sidebar navigation with collapsible design
- ✅ Dark/Light mode toggle
- ✅ Admin panel for CRUD operations
- ✅ Filtering and sorting functionality
- ✅ Fully responsive design
- ✅ Custom theme using CSS variables

## 🎯 Quick Access

### Main Dashboard
```
http://localhost:3000/dashboard
```
Shows trending prediction markets.

### All Categories
- **All Markets**: `/dashboard/all`
- **Celebrities**: `/dashboard/celebrities`
- **Crypto Markets**: `/dashboard/crypto-markets`
- **Politics**: `/dashboard/politics`
- **CrackRock Accumulation**: `/dashboard/crackrock-accumulation`
- **KOL Chaos**: `/dashboard/kol-chaos`
- **Token Launches**: `/dashboard/token-launches`
- **Rug Pulls**: `/dashboard/rug-pulls`
- **FOMO Bets**: `/dashboard/fomo-bets`

### Admin Panel
```
http://localhost:3000/dashboard/admin
```
Manage all predictions and dashboard stats.

## 🎮 How to Use

### For Users

1. **Browse Markets**
   - Click sidebar categories to explore different prediction types
   - Click any card to flip and see detailed analysis
   - Click again to flip back

2. **Toggle Theme**
   - Click sun/moon icon in top-right corner
   - Theme persists during session

3. **Filter & Sort**
   - Available on Trending and All Markets pages
   - Click "Filter Markets" or "Sort by Volume"

### For Admins

1. **Create Prediction**
   - Go to Admin Panel
   - Click "Create New Prediction"
   - Fill out form and submit

2. **Edit Prediction**
   - Click "Edit" on any card
   - Modify fields and save

3. **Toggle Trending**
   - Click trending icon on card
   - Predictions appear on main dashboard

4. **Delete Prediction**
   - Click trash icon
   - Confirm deletion

5. **Edit Stats**
   - Modify numbers at top of admin panel
   - Click "Save Stats"

6. **Export Data**
   - Click "Export Data" button
   - Downloads JSON file with all predictions

## 📂 File Locations

### Data Files (Edit these for content)
- `src/data/predictions.json` - All prediction markets
- `src/data/categories.json` - Category definitions
- `src/data/stats.json` - Dashboard statistics

### Styling
- `src/app/globals.css` - Theme variables and global styles

### Components
- `src/components/dashboard/` - All dashboard components

## 🎨 Customization Examples

### Change Theme Colors

Edit `src/app/globals.css`:
```css
:root {
  --primary: oklch(0.8565 0.1739 91.2108); /* Gold accent */
  --background: oklch(1.0000 0 0); /* White background */
  /* etc... */
}
```

### Add New Category

1. Edit `src/data/categories.json`:
```json
{
  "id": "sports",
  "name": "Sports",
  "slug": "sports",
  "description": "Sports event predictions",
  "icon": "Trophy",
  "group": "markets"
}
```

2. Add icon to `Sidebar.tsx` iconMap
3. Tag predictions with "sports" category

### Add New Prediction

Use Admin Panel OR edit `src/data/predictions.json`:
```json
{
  "id": "new-prediction",
  "ticker": "$NEW",
  "name": "New Token",
  "question": "Will NEW token moon?",
  "categories": ["crypto-markets"],
  "icon": "🚀",
  ...
}
```

## ⚠️ Important Notes

1. **Temporary Storage**: Admin changes are in browser state only. Use Export to save.
2. **Mock Data**: All predictions are fake data for demonstration.
3. **No Backend**: Currently frontend-only, ready for API integration.
4. **Betting Not Live**: UI only, no actual betting functionality yet.

## 🔗 Next Steps (Future)

- [ ] Connect to backend API
- [ ] Implement real betting with Web3
- [ ] Add wallet connection
- [ ] Real-time updates via WebSockets
- [ ] User authentication
- [ ] Transaction history
- [ ] Charts and analytics
- [ ] Mobile app

## 📞 Support

Check `DASHBOARD_README.md` for detailed documentation.

---

**Status**: ✅ All features implemented and working
**Test URL**: http://localhost:3000/dashboard
**Build Time**: ~30 minutes
**Files Created**: 18 files (components, pages, data, types)

