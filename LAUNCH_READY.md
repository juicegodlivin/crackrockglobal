# 🚀 Launch Ready - CA Update Guide

## Quick Launch Instructions

When you're ready to launch and have your Contract Address (CA), follow these simple steps:

### Step 1: Update the Contract Address

1. Open the file: `src/config/contract.ts`
2. Find this line:
   ```typescript
   export const CONTRACT_ADDRESS = ''
   ```
3. Paste your CA between the quotes:
   ```typescript
   export const CONTRACT_ADDRESS = 'YOUR_CA_HERE'
   ```
4. Save the file

### That's it! 🎉

The CA and Pump.fun link will automatically update in:
- ✅ Navigation bar CA widget (desktop & mobile)
- ✅ Footer Pump.fun link → `https://pump.fun/coin/YOUR_CA`

## What Gets Updated Automatically

### Navigation Bar
- The CA widget will show your contract address (shortened format: `XXXX...XXXX`)
- Clicking it will copy the full CA to clipboard
- "Soon..." text will disappear

### Footer
- The "Pump.fun Token" button will link to: `https://pump.fun/coin/YOUR_CA`
- Users can click to go directly to your token page

## Testing Before Launch

Before you add the real CA, you can test with a dummy address:
```typescript
export const CONTRACT_ADDRESS = 'TEST123456789'
```

Then verify:
1. Check the navigation bar shows the CA widget with your address
2. Click to copy and verify it copies correctly
3. Check the footer "Pump.fun Token" button
4. Hover to see the URL shows `https://pump.fun/coin/TEST123456789`

## After Adding the CA

After updating, if you're running locally:
```bash
npm run dev
```

The changes will be reflected immediately. If already deployed on Vercel, just push to your git repository:
```bash
git add .
git commit -m "Update contract address for launch"
git push
```

Vercel will automatically redeploy with the new CA.

---

**File Location:** `src/config/contract.ts`

**One file to rule them all!** 💍

