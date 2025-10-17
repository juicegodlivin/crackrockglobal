// CoinGecko API utilities
// Use our API route instead of calling CoinGecko directly (bypasses CORS)
const COINGECKO_API = '/api/coingecko';

// Cache duration: 10 minutes for production, can be adjusted
const CACHE_DURATION = 10 * 60 * 1000; // 10 minutes in milliseconds

export interface CoinGeckoToken {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  total_volume: number;
  price_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
}

export interface TokenData {
  id: string;
  symbol: string;
  name: string;
  image: string;
  price: string;
  marketCap: string;
  volume: string;
  change24h: string;
  supply: string;
}

interface CachedData {
  data: TokenData;
  timestamp: number;
}

// In-memory cache
const memoryCache = new Map<string, CachedData>();

// Map prediction ticker symbols to CoinGecko IDs
export const COINGECKO_ID_MAP: Record<string, string> = {
  '$SWIF': 'solana', // Using SOL as placeholder for SWIF
  '$BONK': 'bonk',
  '$WIF': 'dogwifhat',
  '$POPCAT': 'popcat',
  '$PEPE': 'pepe',
  '$4': '4',
  '$DOGE': 'dogecoin',
  '$SHIB': 'shiba-inu',
  '$SOL': 'solana',
  '$TRUMP': 'maga',
  '$BTC': 'bitcoin',
};

// Get from localStorage cache
function getFromLocalStorage(key: string): CachedData | null {
  if (typeof window === 'undefined') return null;
  
  try {
    const cached = localStorage.getItem(`coingecko_${key}`);
    if (!cached) return null;
    
    const parsed: CachedData = JSON.parse(cached);
    const now = Date.now();
    
    // Check if cache is still valid
    if (now - parsed.timestamp < CACHE_DURATION) {
      return parsed;
    }
    
    // Cache expired, remove it
    localStorage.removeItem(`coingecko_${key}`);
    return null;
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return null;
  }
}

// Save to localStorage cache
function saveToLocalStorage(key: string, data: TokenData): void {
  if (typeof window === 'undefined') return;
  
  try {
    const cached: CachedData = {
      data,
      timestamp: Date.now()
    };
    localStorage.setItem(`coingecko_${key}`, JSON.stringify(cached));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
}

export async function fetchTokenData(coinGeckoId: string, bypassCache: boolean = false): Promise<TokenData | null> {
  // If not bypassing cache, check memory cache first
  if (!bypassCache) {
    const memoryCached = memoryCache.get(coinGeckoId);
    if (memoryCached && Date.now() - memoryCached.timestamp < CACHE_DURATION) {
      console.log(`Using memory cache for ${coinGeckoId}`);
      return memoryCached.data;
    }
    
    // Check localStorage cache
    const localCached = getFromLocalStorage(coinGeckoId);
    if (localCached) {
      console.log(`Using localStorage cache for ${coinGeckoId}`);
      // Also update memory cache
      memoryCache.set(coinGeckoId, localCached);
      return localCached.data;
    }
  }
  
  // No valid cache or bypassing cache, fetch from API
  try {
    console.log(`Fetching fresh data from CoinGecko for ${coinGeckoId}`);
    const response = await fetch(
      `${COINGECKO_API}?ids=${coinGeckoId}`,
      { 
        cache: 'no-store' // Don't use browser cache, we handle it ourselves
      }
    );

    if (!response.ok) {
      console.error(`CoinGecko API error: ${response.status}`);
      // Return cached data if available, even if expired
      const fallbackCache = memoryCache.get(coinGeckoId) || getFromLocalStorage(coinGeckoId);
      if (fallbackCache) {
        console.log(`Using stale cache for ${coinGeckoId} due to API error`);
        return fallbackCache.data;
      }
      return null;
    }

    const data: CoinGeckoToken[] = await response.json();
    
    if (!data || data.length === 0) {
      console.warn(`No data found for ${coinGeckoId}`);
      return null;
    }

    const token = data[0];

    const tokenData: TokenData = {
      id: token.id,
      symbol: token.symbol.toUpperCase(),
      name: token.name,
      image: token.image,
      price: formatPrice(token.current_price),
      marketCap: formatNumber(token.market_cap),
      volume: formatNumber(token.total_volume),
      change24h: token.price_change_percentage_24h.toFixed(2) + '%',
      supply: formatNumber(token.circulating_supply),
    };
    
    // Save to both caches
    memoryCache.set(coinGeckoId, {
      data: tokenData,
      timestamp: Date.now()
    });
    saveToLocalStorage(coinGeckoId, tokenData);
    
    return tokenData;
  } catch (error) {
    console.error('Error fetching CoinGecko data:', error);
    // Return cached data if available, even if expired
    const fallbackCache = memoryCache.get(coinGeckoId) || getFromLocalStorage(coinGeckoId);
    if (fallbackCache) {
      console.log(`Using stale cache for ${coinGeckoId} due to network error`);
      return fallbackCache.data;
    }
    return null;
  }
}

export async function fetchMultipleTokens(coinGeckoIds: string[]): Promise<Record<string, TokenData>> {
  const result: Record<string, TokenData> = {};
  const toFetch: string[] = [];
  
  // Check cache for each token
  for (const id of coinGeckoIds) {
    const memoryCached = memoryCache.get(id);
    if (memoryCached && Date.now() - memoryCached.timestamp < CACHE_DURATION) {
      result[id] = memoryCached.data;
      continue;
    }
    
    const localCached = getFromLocalStorage(id);
    if (localCached) {
      result[id] = localCached.data;
      memoryCache.set(id, localCached);
      continue;
    }
    
    toFetch.push(id);
  }
  
  // If all tokens are cached, return immediately
  if (toFetch.length === 0) {
    console.log('All tokens found in cache');
    return result;
  }
  
  // Fetch uncached tokens in batch
  try {
    console.log(`Fetching ${toFetch.length} tokens from CoinGecko API`);
    const idsString = toFetch.join(',');
    const response = await fetch(
      `${COINGECKO_API}?ids=${idsString}`,
      { cache: 'no-store' }
    );

    if (!response.ok) {
      console.error(`CoinGecko API error: ${response.status}`);
      return result;
    }

    const data: CoinGeckoToken[] = await response.json();
    
    data.forEach(token => {
      const tokenData: TokenData = {
        id: token.id,
        symbol: token.symbol.toUpperCase(),
        name: token.name,
        image: token.image,
        price: formatPrice(token.current_price),
        marketCap: formatNumber(token.market_cap),
        volume: formatNumber(token.total_volume),
        change24h: token.price_change_percentage_24h.toFixed(2) + '%',
        supply: formatNumber(token.circulating_supply),
      };
      
      result[token.id] = tokenData;
      
      // Cache the data
      memoryCache.set(token.id, {
        data: tokenData,
        timestamp: Date.now()
      });
      saveToLocalStorage(token.id, tokenData);
    });

    return result;
  } catch (error) {
    console.error('Error fetching multiple tokens:', error);
    return result;
  }
}

function formatPrice(price: number): string {
  if (price < 0.00001) {
    return `$${price.toExponential(2)}`;
  } else if (price < 1) {
    return `$${price.toFixed(6)}`;
  } else if (price < 100) {
    return `$${price.toFixed(4)}`;
  } else {
    return `$${price.toFixed(2)}`;
  }
}

function formatNumber(num: number): string {
  if (num >= 1e9) {
    return `$${(num / 1e9).toFixed(2)}B`;
  } else if (num >= 1e6) {
    return `$${(num / 1e6).toFixed(2)}M`;
  } else if (num >= 1e3) {
    return `$${(num / 1e3).toFixed(2)}K`;
  }
  return `$${num.toFixed(2)}`;
}

export function getCoinGeckoId(ticker: string): string | null {
  return COINGECKO_ID_MAP[ticker] || null;
}

// Clear all caches (useful for testing/admin)
export function clearAllCaches(): void {
  memoryCache.clear();
  if (typeof window !== 'undefined') {
    const keys = Object.keys(localStorage);
    keys.forEach(key => {
      if (key.startsWith('coingecko_')) {
        localStorage.removeItem(key);
      }
    });
  }
  console.log('All CoinGecko caches cleared');
}

// Get cache info for debugging
export function getCacheInfo(): { memoryCount: number; lastFetch: number | null } {
  let lastFetch: number | null = null;
  
  memoryCache.forEach(cached => {
    if (!lastFetch || cached.timestamp > lastFetch) {
      lastFetch = cached.timestamp;
    }
  });
  
  return {
    memoryCount: memoryCache.size,
    lastFetch
  };
}

