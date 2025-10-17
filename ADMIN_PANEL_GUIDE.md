# Admin Panel - Fully Functional Guide

## Overview
The CrackRock Dashboard Admin Panel is now fully functional with **real data persistence**. All changes you make are saved to the server and will persist across sessions.

## What's Been Implemented

### 1. **API Routes for Data Management**

#### `/api/predictions` - Predictions CRUD
- **GET**: Fetch all predictions
- **POST**: Create new prediction
- **PUT**: Update existing prediction
- **DELETE**: Delete prediction by ID

#### `/api/stats` - Dashboard Stats
- **GET**: Fetch dashboard statistics
- **PUT**: Update dashboard statistics

### 2. **Fully Functional Admin Panel** (`/dashboard/admin`)

#### Features:
- ✅ **Create New Predictions**: Click "Create New Prediction" to add new markets
- ✅ **Edit Predictions**: Click the edit button on any card to modify it
- ✅ **Delete Predictions**: Remove predictions with confirmation dialog
- ✅ **Toggle Trending**: Mark/unmark predictions as trending with one click
- ✅ **Edit Stats**: Update Active Markets, Total Volume, and Today's Winners
- ✅ **Export Data**: Download all predictions and stats as JSON
- ✅ **Clear API Cache**: Force refresh of CoinGecko data
- ✅ **Auto-Refresh**: Refresh button to reload latest data
- ✅ **Loading States**: Visual feedback during save operations
- ✅ **Success Notifications**: Alerts confirm when changes are saved

#### How to Use:

**Creating a New Prediction:**
1. Click "Create New Prediction"
2. Fill in the form:
   - **Ticker**: Token symbol (e.g., $SOL)
   - **Name**: Full name (e.g., SOLANA)
   - **Question**: The prediction question
   - **Icon Type**: Choose from crypto, celebrity, KOL, politics, etc.
   - **CoinGecko ID**: For crypto tokens only (e.g., "solana")
   - **Volume**: Market volume (e.g., "$12.9B")
   - **Categories**: Select one or more categories
   - **Extended Info**: Description and analysis
   - **Trending**: Check to mark as trending
3. Click "Create Prediction"
4. Changes are **instantly saved** to the server

**Editing a Prediction:**
1. Click the "Edit" button on any prediction card
2. Modify any fields
3. Click "Update Prediction"
4. Changes are **immediately saved** and visible on the dashboard

**Deleting a Prediction:**
1. Click the trash icon on any prediction card
2. Confirm the deletion
3. Prediction is **permanently removed** from the database

**Toggling Trending:**
1. Click the trending icon (📈) on any card
2. The prediction is **instantly updated** to trending/not trending
3. Trending predictions appear on the main dashboard page

**Updating Dashboard Stats:**
1. Modify the values in the "Dashboard Stats" section
2. Click "Save Stats"
3. Stats are **instantly updated** across all dashboard pages

### 3. **Live Dashboard Updates** (`/dashboard`, `/dashboard/[category]`)

All dashboard pages now:
- ✅ Fetch data from API routes instead of static JSON
- ✅ Automatically reflect changes made in the admin panel
- ✅ Load fresh data on every page visit
- ✅ Combine real-time CoinGecko data with your custom predictions
- ✅ Show loading states while fetching data

### 4. **Data Flow**

```
Admin Panel → API Routes → JSON Files → Dashboard Pages
     ↓            ↓            ↓              ↓
  Edit Card → POST/PUT → predictions.json → Live Update
  Save Stats → PUT → stats.json → Stats Bar Update
```

## Files Modified/Created

### New API Routes:
- `src/app/api/predictions/route.ts` - Predictions CRUD operations
- `src/app/api/stats/route.ts` - Stats management

### Updated Admin Panel:
- `src/app/dashboard/admin/page.tsx` - Full CRUD functionality with API integration

### Updated Dashboard Pages:
- `src/app/dashboard/page.tsx` - Fetch predictions from API
- `src/app/dashboard/[category]/page.tsx` - Fetch predictions from API

## Important Notes

### Data Persistence
- ✅ All changes are **immediately saved** to `src/data/predictions.json` and `src/data/stats.json`
- ✅ Data persists across server restarts
- ✅ No manual file editing required
- ✅ Changes are **version-controlled** (can be committed to Git)

### CoinGecko Integration
- For crypto tokens, set `iconType: "crypto"` and provide a valid `coingeckoId`
- Token logos, prices, and volumes are automatically fetched from CoinGecko
- Cache expires after 10 minutes to avoid rate limits
- Manual cache clearing available via "Clear API Cache" button

### Icon Types Available
- **Crypto**: `crypto` (requires coingeckoId)
- **Celebrity**: `celebrity-general`, `celebrity-music`, `celebrity-film`, `celebrity-scandal`
- **KOL**: `kol-influencer`, `kol-drama`, `kol-tweet`
- **Politics**: `politics-election`, `politics-policy`
- **Strategy**: `strategy-accumulation`, `strategy-trading`
- **Degen**: `degen-rug`, `degen-moon`, `degen-fomo`

## Testing the Functionality

1. **Navigate to Admin Panel**: Go to `/dashboard/admin`
2. **Create a Test Prediction**:
   - Click "Create New Prediction"
   - Fill in the form with test data
   - Click "Create Prediction"
   - **Verify**: You should see a success alert and the new card appears
3. **Edit the Test Prediction**:
   - Click "Edit" on your test card
   - Change some values
   - Click "Update Prediction"
   - **Verify**: Changes are reflected immediately
4. **Toggle Trending**:
   - Click the trending icon
   - **Verify**: Icon changes color and prediction appears on main dashboard
5. **View on Dashboard**:
   - Navigate to `/dashboard`
   - **Verify**: Your changes are visible on the live dashboard
6. **Delete the Test Prediction**:
   - Go back to admin panel
   - Click trash icon
   - Confirm deletion
   - **Verify**: Card is removed and success alert appears

## Troubleshooting

### Changes Not Appearing?
1. Check browser console for errors
2. Try refreshing the page
3. Verify the dev server is running
4. Check that JSON files have write permissions

### API Errors?
- Ensure Node.js has file system permissions
- Check that `src/data/` directory exists
- Verify JSON files are not corrupted

### CoinGecko Data Not Loading?
- Check console for rate limit errors (429)
- Wait 1-2 minutes if rate limited
- Use "Clear API Cache" button to reset
- Verify `coingeckoId` is correct (check coingecko.com)

## Next Steps

You can now:
- ✅ Add all your prediction markets through the admin panel
- ✅ Edit and manage them easily
- ✅ Update dashboard statistics in real-time
- ✅ Test different icon types and categories
- ✅ Export your data for backup
- ✅ Build out your full prediction market platform

The admin panel is production-ready and fully functional! 🚀

