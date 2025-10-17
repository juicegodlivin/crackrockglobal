'use client';

import { Pencil, Trash2, TrendingUp } from 'lucide-react';
import type { Prediction } from '@/types/dashboard';
import PredictionIcon from './PredictionIcon';

interface AdminCardProps {
  prediction: Prediction;
  onEdit: (prediction: Prediction) => void;
  onDelete: (id: string) => void;
  onToggleTrending: (id: string) => void;
}

export default function AdminCard({ prediction, onEdit, onDelete, onToggleTrending }: AdminCardProps) {
  return (
    <div className="bg-[var(--card)] border border-[var(--border)] rounded-lg p-4">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <PredictionIcon
            type={prediction.extendedInfo.type}
            iconType={prediction.iconType}
            imageUrl={prediction.tokenImage}
            size={36}
          />
          <div>
            <div className="font-semibold text-[var(--card-foreground)]">{prediction.ticker}</div>
            <div className="text-xs text-[var(--muted-foreground)]">{prediction.name}</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {prediction.badges.map((badge, idx) => (
            <span
              key={idx}
              className="text-[10px] px-2 py-0.5 rounded-full bg-[var(--muted)] text-[var(--muted-foreground)] font-medium"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      <p className="text-sm text-[var(--card-foreground)] mb-3 line-clamp-2">
        {prediction.question}
      </p>

      <div className="flex items-center gap-2 text-xs text-[var(--muted-foreground)] mb-4">
        <span>Categories: {prediction.categories.join(', ')}</span>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => onEdit(prediction)}
          className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-[var(--primary)] hover:opacity-90 text-[var(--primary-foreground)] rounded-lg transition-opacity text-sm"
        >
          <Pencil size={14} />
          Edit
        </button>
        <button
          onClick={() => onToggleTrending(prediction.id)}
          className={`flex items-center justify-center gap-2 px-3 py-2 rounded-lg transition-all text-sm ${
            prediction.trending
              ? 'bg-orange-500 text-white hover:bg-orange-600'
              : 'bg-[var(--muted)] text-[var(--muted-foreground)] hover:bg-[var(--secondary)]'
          }`}
          title={prediction.trending ? 'Remove from trending' : 'Mark as trending'}
        >
          <TrendingUp size={14} />
        </button>
        <button
          onClick={() => {
            if (confirm('Are you sure you want to delete this prediction?')) {
              onDelete(prediction.id);
            }
          }}
          className="flex items-center justify-center gap-2 px-3 py-2 bg-[var(--destructive)] hover:opacity-90 text-[var(--destructive-foreground)] rounded-lg transition-opacity text-sm"
        >
          <Trash2 size={14} />
        </button>
      </div>
    </div>
  );
}

