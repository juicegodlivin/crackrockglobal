import { NextRequest, NextResponse } from 'next/server';
import type { Prediction } from '@/types/dashboard';
import { requireAuth } from '@/lib/auth';
import {
  getAllPredictions,
  createPrediction,
  updatePrediction,
  deletePrediction,
} from '@/lib/db';

// GET - Fetch all predictions
export async function GET() {
  try {
    const predictions = await getAllPredictions();
    return NextResponse.json(predictions);
  } catch (error) {
    console.error('Error reading predictions:', error);
    return NextResponse.json(
      { error: 'Failed to read predictions' },
      { status: 500 }
    );
  }
}

// POST - Create new prediction
export async function POST(request: NextRequest) {
  // Check authentication
  const authError = await requireAuth();
  if (authError) return authError;

  try {
    const newPrediction: Prediction = await request.json();
    
    // Ensure the prediction has an ID
    if (!newPrediction.id) {
      newPrediction.id = `pred-${Date.now()}`;
    }
    
    // Save to database
    const created = await createPrediction(newPrediction);
    
    return NextResponse.json(created, { status: 201 });
  } catch (error) {
    console.error('Error creating prediction:', error);
    return NextResponse.json(
      { error: 'Failed to create prediction' },
      { status: 500 }
    );
  }
}

// PUT - Update existing prediction
export async function PUT(request: NextRequest) {
  // Check authentication
  const authError = await requireAuth();
  if (authError) return authError;

  try {
    const updatedPrediction: Prediction = await request.json();
    
    // Update in database
    const updated = await updatePrediction(updatedPrediction);
    
    return NextResponse.json(updated);
  } catch (error) {
    console.error('Error updating prediction:', error);
    return NextResponse.json(
      { error: 'Failed to update prediction' },
      { status: 500 }
    );
  }
}

// DELETE - Delete prediction
export async function DELETE(request: NextRequest) {
  // Check authentication
  const authError = await requireAuth();
  if (authError) return authError;

  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json(
        { error: 'Prediction ID is required' },
        { status: 400 }
      );
    }
    
    // Delete from database
    await deletePrediction(id);
    
    return NextResponse.json({ success: true, id });
  } catch (error) {
    console.error('Error deleting prediction:', error);
    return NextResponse.json(
      { error: 'Failed to delete prediction' },
      { status: 500 }
    );
  }
}

