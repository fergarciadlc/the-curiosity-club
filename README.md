# Curiosity Club 🔍

A website for the **Curiosity Club** at the Music Technology Group (MTG), Universitat Pompeu Fabra.

A series of sessions where anyone can teach, share, or show something cool. Technical, non-technical, artistic, weird… everything is welcome.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Adding a New Talk

Edit `src/data/talks.ts` and add a new entry:

```typescript
{
  slug: "my-talk-slug",
  title: "My Talk Title",
  presenter: {
    name: "Your Name",
    website: "https://yoursite.com",      // optional
    linkedin: "https://linkedin.com/in/you", // optional
    github: "https://github.com/you",     // optional
    twitter: "https://x.com/you",         // optional
  },
  description: "Short description for the card",
  longDescription: `Longer description shown on the talk page...`,
  date: "2025-01-15",      // ISO format (YYYY-MM-DD) or "TBD" for unscheduled talks
  time: "14:00-16:00",     // or "TBD"
  location: "Demo Room",
  tags: ["tag1", "tag2"],
  
  // Optional - add after the session:
  materials: {
    slides: "https://link-to-slides",
    code: "https://github.com/...",
    links: [
      { label: "Resource", url: "https://..." }
    ]
  },
  video: "https://www.youtube.com/embed/VIDEO_ID"  // must be embed URL
}
```

**Note:** The status (`upcoming`, `past`, or `tbd`) is automatically determined based on the date. No need to set it manually!

Then push to GitHub → Vercel auto-deploys.

## Proposal Form

The proposal form link is configured in `src/app/page.tsx`.

## Stack

- Next.js 15
- Tailwind CSS
- TypeScript
- Hosted on Vercel
