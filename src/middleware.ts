import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

// Middleware to protect admin routes
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect /dashboard/admin route
  if (pathname.startsWith('/dashboard/admin')) {
    const token = request.cookies.get('admin_session')?.value;

    if (!token) {
      // Redirect to login (which is the admin page itself - it shows login when not authenticated)
      return NextResponse.next();
    }

    try {
      const secret = new TextEncoder().encode(
        process.env.SESSION_SECRET || 'your-secret-key-change-this'
      );
      
      await jwtVerify(token, secret);
      return NextResponse.next();
    } catch (error) {
      // Token is invalid, delete it and redirect
      const response = NextResponse.next();
      response.cookies.delete('admin_session');
      return response;
    }
  }

  return NextResponse.next();
}

// Configure which routes use this middleware
export const config = {
  matcher: [
    '/dashboard/admin/:path*',
  ]
};

