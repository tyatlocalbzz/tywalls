# tywalls.com — Personal Brand Site

Minimal, clean, trust-building website for Ty Walls. Built as the replacement for the previous Astro site.

**Design intent**: Fast. Honest. Human. Subtle premium through restraint, typography, and breathing room — not decoration. Feels like a thoughtful person, not a marketing department.

## Stack
- Next.js 16 (App Router)
- TypeScript + Tailwind 4
- MDX via `next-mdx-remote` + `gray-matter` (file-based articles)
- Editorial typography (EB Garamond display + Inter body)
- Static-friendly, Vercel deploy

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Key pages (v1)
- `/` — Hero, short story, featured articles, clear CTA
- `/articles` — Index + individual MDX essays
- `/contact` — Honest booking + simple mailto form

## Adding a new article

1. Create `content/articles/your-slug.mdx`
2. Frontmatter (required):
   ```md
   ---
   title: "The actual title"
   date: "2026-05-20"
   excerpt: "One sentence that appears on the index and in previews."
   ---
   ```
3. Write in plain Markdown. The site applies restrained editorial styling automatically.
4. The article appears on `/articles` automatically (sorted by date desc).

Keep the voice: direct, first-person, no em-dashes in prose, no buzzwords, confident but never arrogant. Read it out loud.

## Environment variables

Copy `.env.example` → `.env.local` (or set in Vercel).

- `PUBLIC_CAL_URL` — Your Cal.com link (strongly recommended)
- Optional PostHog and phone for future parity

## Images & assets

- Portrait placeholder lives on the home page (currently a simple "TW" mark).
- Drop real photography into `public/images/` (recommended: one strong headshot or environmental portrait, plus any notebook/recorder artifacts you want to use).
- **Never use stock photography.** Real or nothing. The brand is built on authenticity.
- Update the hero portrait reference and og-image.jpg when you have finals.
- Current `og-image.jpg` reference in metadata — add the real file to `public/`.

## Deploying / replacing the old site

1. Create a new Vercel project pointing at this repo (or push this folder).
2. Add the env vars from `.env.example`.
3. Set the domain in Vercel (tywalls.com + www redirect).
4. Update DNS at your registrar:
   - A record: `76.76.21.21` (Vercel)
   - CNAME for www: `cname.vercel-dns.com`
5. In Vercel project settings → Domains, add the domain and enable redirect www → root.
6. Once live and verified, you can archive or delete the old Astro project at `/Users/tywalls/personal/tywalls.com`.

The old site had a no-scroll 100dvh "native app" feel. This one trades that constraint for real articles and breathing room while keeping the same honest, minimal spirit.

## Future expansion (easy wins)
- `/photography` or `/archive` — curated selects from your media work
- Principles or "How I work" page (pull language from the operating principles in tys-agency)
- Deeper PostHog event tracking on CTAs
- Transcript-miner → article pipeline (the content already lives in your recordings)

## Voice & content rules (non-negotiable)
Load these before writing or editing copy:
- `brand-voice.md` (in the tys-agency skills)
- The three seeded articles are the reference tone.

If a sentence could live on a competitor’s site unchanged, rewrite it.

## One-line test
Does this feel like a real person who has done the work and is quietly confident about it? If not, cut it.

---

Built with Grok. Questions or changes — just say the word.
