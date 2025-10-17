import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { jwtVerify } from 'jose';

export async function GET() {
  try {
    const token = cookies().get('admin_session')?.value;
    
    if (!token) {
      return NextResponse.json({ authenticated: false });
    }
    
    const secret = new TextEncoder().encode(
      process.env.SESSION_SECRET || 'your-secret-key-change-this'
    );
    
    await jwtVerify(token, secret);
    
    return NextResponse.json({ authenticated: true });
  } catch (error) {
    return NextResponse.json({ authenticated: false });
  }
}

