# CrackRock Insights - Adding New Reports

## Quick Guide

To add a new report to CrackRock Insights, follow these two simple steps:

### Step 1: Create the Report Page

1. Create a new folder in `src/app/crackrock-insights/` with a URL-friendly slug name (e.g., `my-new-report`)
2. Inside that folder, create a `page.tsx` file
3. Copy the structure from an existing report (like `fall-2025-market-analysis/page.tsx` or `crackrock-vs-diamonds/page.tsx`)
4. Customize the content while keeping the same styling and layout

### Step 2: Add to Reports List

Update `src/app/crackrock-insights/page.tsx`:

```typescript
const reports: Report[] = [
  // ... existing reports
  {
    id: '3', // Increment the ID
    title: 'Your Report Title',
    subtitle: 'Your Catchy Subtitle',
    description: 'A brief description of the report that will appear on the insights landing page.',
    publishDate: 'Month Day, Year',
    readTime: 'X min read',
    category: 'Category Name', // e.g., 'Market Analysis', 'Investment Strategy'
    slug: 'your-report-slug', // Must match the folder name
    featured: false, // Set to true to make it the featured report
    color: 'from-color-400 to-color-500' // Tailwind gradient colors
  }
  // Add more reports here as they come
]
```

## Report Structure

Each report page should include:

- **Hero Section**: Title, subtitle, publication date, read time
- **Executive Summary**: Brief overview in a highlighted box
- **Key Sections**: Multiple content sections with icons and visual elements
- **Quotes/Testimonials**: Blockquotes from "investors"
- **Conclusion**: Summary box with final thoughts
- **CTA Section**: Call-to-action buttons linking to other pages

## Styling Guidelines

- Use the same color scheme and gradients as existing reports
- Keep the humorous, satirical tone consistent
- Use `motion.div` from Framer Motion for animations
- Include relevant Lucide icons for visual interest
- Maintain the same padding, spacing, and typography

## Current Reports

1. **Fall 2025 Market Analysis** (`fall-2025-market-analysis`)
   - Featured report about furniture liquidation
   - Yellow/orange gradient theme

2. **CrackRock vs. Diamonds** (`crackrock-vs-diamonds`)
   - Investment strategy report
   - Blue/purple gradient theme

## Tips

- Choose unique gradient colors for each report
- Keep read times realistic (3-5 minutes)
- Make only ONE report `featured: true` at a time
- The slug must exactly match the folder name (URL-friendly, lowercase, hyphens)
- Regular reports appear in the "All Reports" grid section

