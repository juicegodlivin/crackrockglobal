import type { Category } from '@/types/dashboard';

interface CategoryHeaderProps {
  category?: Category;
  title?: string;
  description?: string;
}

export default function CategoryHeader({ category, title, description }: CategoryHeaderProps) {
  const displayTitle = title || category?.name || 'Live Prediction Markets';
  const displayDescription = description || category?.description || 'AI-analyzed token predictions with real-time betting markets';

  return (
    <div className="mb-6">
      <h1 className="text-3xl font-bold text-[var(--foreground)] mb-2">
        {displayTitle}
      </h1>
      <p className="text-[var(--muted-foreground)]">
        {displayDescription}
      </p>
    </div>
  );
}

