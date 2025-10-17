import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import type { Stats } from '@/types/dashboard';
import { requireAuth } from '@/lib/auth';

const STATS_FILE = path.join(process.cwd(), 'src', 'data', 'stats.json');

// Helper to read stats
function readStats(): Stats {
  const fileContents = fs.readFileSync(STATS_FILE, 'utf8');
  return JSON.parse(fileContents);
}

// Helper to write stats
function writeStats(stats: Stats) {
  fs.writeFileSync(STATS_FILE, JSON.stringify(stats, null, 2), 'utf8');
}

// GET - Fetch stats
export async function GET() {
  try {
    const stats = readStats();
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
    writeStats(updatedStats);
    
    return NextResponse.json(updatedStats);
  } catch (error) {
    console.error('Error updating stats:', error);
    return NextResponse.json(
      { error: 'Failed to update stats' },
      { status: 500 }
    );
  }
}

