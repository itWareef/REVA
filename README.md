# مسكن ريفا للمقاولات — Maskan Riva Contracting

Bilingual (Arabic RTL / English LTR) marketing website for Maskan Riva Contracting,
built with **Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion**.

## Content source
All copy was extracted from the company's original WordPress database
(`wpst_` tables) and rewritten into a single typed module: `lib/content.ts`
(company info, 6 services, 4 projects, 4 news articles, values, ISO certifications).
Edit that one file to update any text — both languages live side by side.

## Real photos (important)
The site currently uses hand-crafted architectural SVG scenes (`components/ArchScene.tsx`)
as premium placeholders wherever a real project photo belongs. When the original
`uploads.zip` (project photography) is available:
1. Drop images into `public/images/projects/…`
2. Replace `<ArchScene …/>` usages in `ProjectCard`, `AboutPreview`, project detail,
   news cards, hero with `next/image` `<Image>`.

## Develop
```
npm install
npm run dev      # http://localhost:3000  → redirects to /ar
```

## Build
```
npm run build && npm run start
```

## Deploy (do at publish stage)
- Push to GitHub, then import into Vercel (framework auto-detected).
- Point domain `rivacontractingsa.com` (apex CNAME → vercel-dns) + `www`.

## Structure
- `app/[locale]/…` — ar/en routing, RTL handled in `app/[locale]/layout.tsx`
- `components/` — Header, Footer, Hero, sections, cards, ContactForm (→ WhatsApp)
- `lib/content.ts` — all bilingual content · `lib/i18n.ts` — locale helpers
