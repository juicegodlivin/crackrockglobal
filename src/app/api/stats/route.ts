import { NextRequest, NextResponse } from 'next/server';
import type { Stats } from '@/types/dashboard';
import { requireAuth } from '@/lib/auth';
import { getStats, updateStats } from '@/lib/db';

// GET - Fetch stats
export async function GET() {
  try {
    const stats = await getStats();
    return NextResponse.json(stats);
  } catch (error) {
    console.error('Error reading stats:', error);
    return NextResponse.json(
      { error: 'Failed to read stats' },
      { status: 500 }
    );
  }
}

// PUT - Update stats
export async function PUT(request: NextRequest) {
  // Check authentication
  const authError = await requireAuth();
  if (authError) return authError;

  try {
    const updatedStats: Stats = await request.json();
    const stats = await updateStats(updatedStats);
    
    return NextResponse.json(stats);
  } catch (error) {
    console.error('Error updating stats:', error);
    return NextResponse.json(
      { error: 'Failed to update stats' },
      { status: 500 }
    );
  }
}

