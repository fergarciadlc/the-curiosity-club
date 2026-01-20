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
  timezone: "America/New_York", // optional - IANA timezone. Defaults to "Europe/Madrid"
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

### Automatic Features

**Status Computation:** The talk status (`upcoming` or `past`) is automatically computed based on the date and timezone. No need to set it manually!

**Timezone Handling:**
- All talks default to `Europe/Madrid` timezone (CET/CEST)
- Times are displayed with timezone abbreviation (e.g., "14:00-16:00 CET")
- Automatic DST handling (switches between CET and CEST)
- For remote talks, specify a custom `timezone` (e.g., `"America/New_York"`)
- Status computation uses the talk's timezone for accurate "upcoming" vs "past" determination

**ISR (Incremental Static Regeneration):**
- Pages revalidate every 24 hours
- Status changes appear automatically without manual rebuilds
- Perfect for Vercel's free tier

Then push to GitHub → Vercel auto-deploys.

## Proposal Form

The proposal form link is configured in `src/app/page.tsx`.

## Stack

- Next.js 15
- Tailwind CSS
- TypeScript
- Hosted on Vercel
