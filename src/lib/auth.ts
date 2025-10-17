import { cookies } from 'next/headers';
import { jwtVerify } from 'jose';

/**
 * Server-side authentication helper
 * Verifies the admin session token from HTTP-only cookies
 * @returns true if authenticated, false otherwise
 */
export async function isAuthenticated(): Promise<boolean> {
  try {
    const token = cookies().get('admin_session')?.value;
    
    if (!token) {
      return false;
    }
    
    const secret = new TextEncoder().encode(
      process.env.SESSION_SECRET || 'your-secret-key-change-this'
    );
    
    await jwtVerify(token, secret);
    return true;
  } catch (error) {
    return false;
  }
}

/**
 * Server-side authentication middleware for API routes
 * Returns an error response if not authenticated, null if authenticated
 */
export async function requireAuth() {
  const authenticated = await isAuthenticated();
  
  if (!authenticated) {
    return new Response(
      JSON.stringify({ error: 'Unauthorized - Admin authentication required' }),
      { 
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
  
  return null;
}
