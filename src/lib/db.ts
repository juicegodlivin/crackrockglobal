import { sql } from '@vercel/postgres';
import type { Prediction, Stats } from '@/types/dashboard';
import predictionsData from '@/data/predictions.json';
import statsData from '@/data/stats.json';

// Check if database is available
let databaseAvailable: boolean | null = null;

async function isDatabaseAvailable(): Promise<boolean> {
  if (databaseAvailable !== null) return databaseAvailable;
  
  try {
    // Quick check if database connection exists
    if (!process.env.POSTGRES_URL) {
      databaseAvailable = false;
      return false;
    }
    await sql`SELECT 1`;
    databaseAvailable = true;
    return true;
  } catch (error) {
    console.log('Database not available, using JSON fallback');
    databaseAvailable = false;
    return false;
  }
}

/**
 * Initialize database tables if they don't exist
 * This will be called on first API request
 */
export async function initializeDatabase() {
  try {
    if (!(await isDatabaseAvailable())) {
      console.log('Database not configured, skipping initialization');
      return false;
    }

    // Create predictions table
    await sql`
      CREATE TABLE IF NOT EXISTS predictions (
        id TEXT PRIMARY KEY,
        data JSONB NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    // Create stats table
    await sql`
      CREATE TABLE IF NOT EXISTS stats (
        id TEXT PRIMARY KEY DEFAULT 'default',
        data JSONB NOT NULL,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    // Check if we need to seed data
    const existingPredictions = await sql`SELECT COUNT(*) FROM predictions`;
    const count = parseInt(existingPredictions.rows[0].count);

    if (count === 0) {
      console.log('Seeding database with initial data...');
      
      // Seed predictions
      for (const prediction of predictionsData) {
        await sql`
          INSERT INTO predictions (id, data)
          VALUES (${prediction.id}, ${JSON.stringify(prediction)}::jsonb)
          ON CONFLICT (id) DO NOTHING
        `;
      }

      // Seed stats
      await sql`
        INSERT INTO stats (id, data)
        VALUES ('default', ${JSON.stringify(statsData)}::jsonb)
        ON CONFLICT (id) DO UPDATE SET data = ${JSON.stringify(statsData)}::jsonb
      `;

      console.log('Database seeded successfully!');
    }

    return true;
  } catch (error) {
    console.error('Database initialization error:', error);
    return false;
  }
}

/**
 * Get all predictions from database or JSON fallback
 */
export async function getAllPredictions(): Promise<Prediction[]> {
  try {
    if (!(await isDatabaseAvailable())) {
      console.log('Using JSON fallback for predictions');
      return predictionsData as Prediction[];
    }

    await initializeDatabase();
    
    const result = await sql`
      SELECT data FROM predictions ORDER BY created_at DESC
    `;
    
    return result.rows.map(row => row.data as Prediction);
  } catch (error) {
    console.error('Error fetching predictions, falling back to JSON:', error);
    return predictionsData as Prediction[];
  }
}

/**
 * Get a single prediction by ID
 */
export async function getPredictionById(id: string): Promise<Prediction | null> {
  try {
    if (!(await isDatabaseAvailable())) {
      const predictions = predictionsData as Prediction[];
      return predictions.find(p => p.id === id) || null;
    }

    const result = await sql`
      SELECT data FROM predictions WHERE id = ${id}
    `;
    
    if (result.rows.length === 0) return null;
    return result.rows[0].data as Prediction;
  } catch (error) {
    console.error('Error fetching prediction:', error);
    const predictions = predictionsData as Prediction[];
    return predictions.find(p => p.id === id) || null;
  }
}

/**
 * Create a new prediction
 */
export async function createPrediction(prediction: Prediction): Promise<Prediction> {
  try {
    if (!(await isDatabaseAvailable())) {
      throw new Error('Database not available. Please set up Vercel Postgres database first. See VERCEL_DATABASE_SETUP.md');
    }

    await sql`
      INSERT INTO predictions (id, data)
      VALUES (${prediction.id}, ${JSON.stringify(prediction)}::jsonb)
    `;
    
    return prediction;
  } catch (error) {
    console.error('Error creating prediction:', error);
    throw error;
  }
}

/**
 * Update an existing prediction
 */
export async function updatePrediction(prediction: Prediction): Promise<Prediction> {
  try {
    if (!(await isDatabaseAvailable())) {
      throw new Error('Database not available. Please set up Vercel Postgres database first. See VERCEL_DATABASE_SETUP.md');
    }

    await sql`
      UPDATE predictions
      SET data = ${JSON.stringify(prediction)}::jsonb,
          updated_at = CURRENT_TIMESTAMP
      WHERE id = ${prediction.id}
    `;
    
    return prediction;
  } catch (error) {
    console.error('Error updating prediction:', error);
    throw error;
  }
}

/**
 * Delete a prediction
 */
export async function deletePrediction(id: string): Promise<boolean> {
  try {
    if (!(await isDatabaseAvailable())) {
      throw new Error('Database not available. Please set up Vercel Postgres database first. See VERCEL_DATABASE_SETUP.md');
    }

    await sql`
      DELETE FROM predictions WHERE id = ${id}
    `;
    
    return true;
  } catch (error) {
    console.error('Error deleting prediction:', error);
    throw error;
  }
}

/**
 * Get stats from database or JSON fallback
 */
export async function getStats(): Promise<Stats> {
  try {
    if (!(await isDatabaseAvailable())) {
      console.log('Using JSON fallback for stats');
      return statsData as Stats;
    }

    await initializeDatabase();
    
    const result = await sql`
      SELECT data FROM stats WHERE id = 'default'
    `;
    
    if (result.rows.length === 0) {
      // Return default stats if none exist
      return statsData as Stats;
    }
    
    return result.rows[0].data as Stats;
  } catch (error) {
    console.error('Error fetching stats, falling back to JSON:', error);
    return statsData as Stats;
  }
}

/**
 * Update stats
 */
export async function updateStats(stats: Stats): Promise<Stats> {
  try {
    if (!(await isDatabaseAvailable())) {
      throw new Error('Database not available. Please set up Vercel Postgres database first. See VERCEL_DATABASE_SETUP.md');
    }

    await sql`
      INSERT INTO stats (id, data)
      VALUES ('default', ${JSON.stringify(stats)}::jsonb)
      ON CONFLICT (id) DO UPDATE
      SET data = ${JSON.stringify(stats)}::jsonb,
          updated_at = CURRENT_TIMESTAMP
    `;
    
    return stats;
  } catch (error) {
    console.error('Error updating stats:', error);
    throw error;
  }
}

