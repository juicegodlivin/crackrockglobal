import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import type { Prediction } from '@/types/dashboard';
import { requireAuth } from '@/lib/auth';

const PREDICTIONS_FILE = path.join(process.cwd(), 'src', 'data', 'predictions.json');

// Helper to read predictions
function readPredictions(): Prediction[] {
  const fileContents = fs.readFileSync(PREDICTIONS_FILE, 'utf8');
  return JSON.parse(fileContents);
}

// Helper to write predictions
function writePredictions(predictions: Prediction[]) {
  fs.writeFileSync(PREDICTIONS_FILE, JSON.stringify(predictions, null, 2), 'utf8');
}

// GET - Fetch all predictions
export async function GET() {
  try {
    const predictions = readPredictions();
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
    const predictions = readPredictions();
    
    // Ensure the prediction has an ID
    if (!newPrediction.id) {
      newPrediction.id = `pred-${Date.now()}`;
    }
    
    // Add the new prediction
    predictions.push(newPrediction);
    writePredictions(predictions);
    
    return NextResponse.json(newPrediction, { status: 201 });
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
    const predictions = readPredictions();
    
    const index = predictions.findIndex(p => p.id === updatedPrediction.id);
    if (index === -1) {
      return NextResponse.json(
        { error: 'Prediction not found' },
        { status: 404 }
      );
    }
    
    predictions[index] = updatedPrediction;
    writePredictions(predictions);
    
    return NextResponse.json(updatedPrediction);
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
    
    const predictions = readPredictions();
    const filteredPredictions = predictions.filter(p => p.id !== id);
    
    if (filteredPredictions.length === predictions.length) {
      return NextResponse.json(
        { error: 'Prediction not found' },
        { status: 404 }
      );
    }
    
    writePredictions(filteredPredictions);
    
    return NextResponse.json({ success: true, id });
  } catch (error) {
    console.error('Error deleting prediction:', error);
    return NextResponse.json(
      { error: 'Failed to delete prediction' },
      { status: 500 }
    );
  }
}

