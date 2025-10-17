import { NextRequest, NextResponse } from 'next/server';

const COINGECKO_API = 'https://api.coingecko.com/api/v3';

// Simple retry with exponential backoff for 429 errors
async function fetchWithRetry(url: string, maxRetries = 3): Promise<Response> {
  for (let i = 0; i < maxRetries; i++) {
    const response = await fetch(url, {
      headers: {
        'Accept': 'application/json',
      },
      // Increase timeout for batch requests
      signal: AbortSignal.timeout(10000), // 10 second timeout
    });

    if (response.status !== 429) {
      return response;
    }

    // If rate limited and not last retry, wait before trying again
    if (i < maxRetries - 1) {
      const waitTime = Math.pow(2, i) * 1000; // 1s, 2s, 4s
      console.log(`Rate limited, waiting ${waitTime}ms before retry ${i + 1}/${maxRetries}`);
      await new Promise(resolve => setTimeout(resolve, waitTime));
    }
  }

  // If all retries failed, return the last 429 response
  return fetch(url, {
    headers: {
      'Accept': 'application/json',
    },
  });
}

// API route to proxy CoinGecko requests and bypass CORS
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const ids = searchParams.get('ids');

  if (!ids) {
    return NextResponse.json(
      { error: 'Missing ids parameter' },
      { status: 400 }
    );
  }

  try {
    const url = `${COINGECKO_API}/coins/markets?vs_currency=usd&ids=${ids}&order=market_cap_desc&sparkline=false&price_change_percentage=24h`;
    
    const response = await fetchWithRetry(url);

    if (!response.ok) {
      console.error(`CoinGecko API error: ${response.status} for ids: ${ids}`);
      
      // For 429 errors, return empty array instead of error
      // This allows cached data to be used on the client side
      if (response.status === 429) {
        console.warn('Rate limit exceeded, returning empty array to use cached data');
        return NextResponse.json([], {
          headers: {
            'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=600',
          },
        });
      }
      
      return NextResponse.json(
        { error: `CoinGecko API returned ${response.status}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    
    console.log(`Successfully fetched ${data.length} tokens from CoinGecko`);
    
    // Return with CORS headers to allow our frontend to access it
    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
      },
    });
  } catch (error) {
    console.error('Error fetching CoinGecko data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch data from CoinGecko' },
      { status: 500 }
    );
  }
}

// Set runtime to edge for better performance (optional)
export const runtime = 'nodejs';

