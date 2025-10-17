# Icon Types Reference

Complete list of all available icon types for prediction cards in the admin panel.

## 🪙 Crypto & Tokens
- `crypto` - Standard crypto token (requires CoinGecko ID)
- `crypto-nft` - NFT Collection
- `crypto-defi` - DeFi Protocol
- `crypto-airdrop` - Airdrop
- `crypto-chain` - Blockchain/L1/L2

## 👤 Celebrities & Entertainment
- `celebrity-general` - Celebrity - General
- `celebrity-music` - Celebrity - Music
- `celebrity-film` - Celebrity - Film
- `celebrity-scandal` - Celebrity - Scandal
- `celebrity-sports` - Celebrity - Sports
- `celebrity-relationship` - Celebrity - Relationship

## 📢 KOLs & Influencers
- `kol-influencer` - KOL - Influencer
- `kol-drama` - KOL - Drama
- `kol-tweet` - KOL - Tweet
- `kol-alpha` - KOL - Alpha Call
- `kol-beef` - KOL - Beef/Feud
- `kol-expose` - KOL - Exposé

## 🏛️ Politics & World Events
- `politics-election` - Politics - Election
- `politics-policy` - Politics - Policy
- `politics-scandal` - Politics - Scandal
- `politics-geopolitics` - Politics - Geopolitics
- `politics-regulation` - Politics - Regulation

## 📈 Trading Strategies
- `strategy-accumulation` - Strategy - Accumulation
- `strategy-trading` - Strategy - Trading
- `strategy-leverage` - Strategy - Leverage Play
- `strategy-arbitrage` - Strategy - Arbitrage
- `strategy-yield` - Strategy - Yield Farming

## 🎲 Degen Plays
- `degen-rug` - Degen - Rug Pull
- `degen-moon` - Degen - Moon Shot
- `degen-fomo` - Degen - FOMO Play
- `degen-yolo` - Degen - YOLO
- `degen-gamble` - Degen - Pure Gamble
- `degen-meme` - Degen - Meme Coin
- `degen-pump` - Degen - Pump & Dump

## 🚀 Token Launches
- `launch-presale` - Launch - Presale
- `launch-ido` - Launch - IDO/ICO
- `launch-listing` - Launch - CEX Listing
- `launch-airdrop` - Launch - Airdrop Farming

## 📊 Market Events
- `market-crash` - Market - Crash
- `market-rally` - Market - Rally
- `market-volatility` - Market - Volatility
- `market-manipulation` - Market - Manipulation
- `market-whale` - Market - Whale Movement

## 🎮 Gaming & Metaverse
- `gaming-metaverse` - Gaming - Metaverse
- `gaming-p2e` - Gaming - Play-to-Earn
- `gaming-esports` - Gaming - Esports

## 🏢 Tech & Business
- `tech-startup` - Tech - Startup
- `tech-ai` - Tech - AI/ML
- `tech-acquisition` - Tech - M&A
- `tech-ipo` - Tech - IPO

## 🌍 Social & Culture
- `social-trend` - Social - Viral Trend
- `social-meme` - Social - Meme
- `social-movement` - Social - Movement

---

## Usage Notes

### CoinGecko Integration
- Only use CoinGecko ID with crypto-related icon types
- When you add or change a `coingeckoId` on a prediction, the system automatically:
  1. Fetches the token's logo from CoinGecko
  2. Updates the real-time price
  3. Pulls the 24h price change
  4. Gets the current trading volume
  5. Caches the data for 10 minutes

### How to Find CoinGecko IDs
1. Go to [CoinGecko.com](https://www.coingecko.com)
2. Search for your token
3. Look at the URL: `coingecko.com/en/coins/[TOKEN_ID]`
4. The `TOKEN_ID` is what you need

**Examples:**
- Solana: `solana`
- Bonk: `bonk`
- Dogwifhat: `dogwifcoin` or `dogwifhat`
- Jupiter: `jupiter-exchange-solana`
- Jito: `jito-governance-token`

### Icon Display
- Crypto tokens with valid CoinGecko IDs will show the actual token logo
- All other icon types will show themed icons that match your site's design
- Icons automatically adapt to light/dark mode

### Best Practices
1. Use specific icon types for better categorization
2. For crypto tokens, always verify the CoinGecko ID is correct
3. Group similar predictions using the same icon type for visual consistency
4. Use degen categories for high-risk/meme predictions
5. Use strategy categories for trading/investment predictions

