# CAC Grace & Truth — homepage demo

A homepage concept for gtmbirmingham.com, built with Next.js 16.3.4 (App Router).

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## What's real vs. placeholder

All copy lives in `lib/content.ts` — edit that one file to update text
without touching layout code.

Placeholders to confirm before this goes live (flagged with comments in
`lib/content.ts`):
- Sunday service time
- Current month's theme
- Real dates for upcoming events
- A real photo for the About section (currently pulling one image from
  the existing Wix site as a stand-in)

## What this fixes from the current site

- One clear primary action (Visit us) instead of four competing CTAs
- No placeholder/lorem-ipsum sections left unfinished
- No public Zoom meeting ID
- Clean, correct URL slugs
- Real content hierarchy: hero → this month → about → give
- Consistent type system (Fraunces for headings, Public Sans for body)
  instead of default theme styling

## Structure

```
app/
  layout.tsx       fonts + metadata
  page.tsx          assembles the homepage
  globals.css       design tokens (colors, fonts)
components/
  Header.tsx
  Hero.tsx
  AnnouncementsStrip.tsx
  About.tsx
  GiveAndFooter.tsx
lib/
  content.ts        all site copy — edit here
```
