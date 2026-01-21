# Ivan Karabeinikau — Portfolio

Personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Content:** Markdown files
- **Deployment:** Vercel (static export)

## Project Structure

```
portfolio/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── case-studies/       # Case study pages
│   ├── projects/           # Projects page
│   └── contact/            # Contact page
├── components/             # React components
├── content/                # Markdown content
│   └── case-studies/       # Case study markdown files
├── lib/                    # Utility functions
└── public/                 # Static assets
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### Build

```bash
npm run build
```

Static files are generated in the `out/` directory.

## Deployment to Vercel

### Option 1: Vercel CLI

```bash
npm i -g vercel
vercel
```

### Option 2: GitHub Integration

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy

Vercel will automatically detect Next.js and configure the build.

## Content Management

### Adding a New Case Study

1. Create a new markdown file in `content/case-studies/`:

```markdown
---
title: "Project Name"
type: "Project Type"
status: "Active"
description: "Short description for SEO"
---

# Project Name

Your content here...
```

2. The page will be available at `/case-studies/[filename]`

### Updating Projects

Edit the `getProjects()` function in `lib/content.ts` to add or modify projects.

## Customization

### Colors

Edit `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  primary: '#111827',   // Main text
  muted: '#6b7280',     // Secondary text
  accent: '#2563eb',    // Links and highlights
  border: '#e5e7eb',    // Borders
}
```

### Domain

Update the base URL in:
- `app/sitemap.ts`
- `app/robots.ts`
- `app/layout.tsx` (OpenGraph URL)

## SEO

- Metadata configured in `app/layout.tsx`
- Sitemap generated at `/sitemap.xml`
- Robots.txt generated at `/robots.txt`
- Add your OpenGraph image to `public/og-image.png` (1200x630px recommended)

## License

Private project.
