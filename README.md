# Morningrise Agency — Landing Page

A high-converting, single-page marketing site for **Morningrise Agency and Viable Group**,
built with Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion.
Fully responsive and ready to deploy to Vercel. Styled to the project **brand
skill** (minimal & premium: near-black + off-white, single indigo accent `#4F46E5`,
Inter type, generous whitespace, soft shadows, rounded-2xl cards, subtle motion).

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Other commands

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # lint
```

## Deploy to Vercel

1. Push this folder to a Git repo (GitHub/GitLab/Bitbucket).
2. Import it at [vercel.com/new](https://vercel.com/new) — Vercel auto-detects Next.js.
3. No environment variables are required for the current (no-backend) setup.

## Project structure

```
app/
  layout.tsx        # fonts, metadata, global styles
  page.tsx          # assembles all sections in order
  globals.css       # Tailwind + brand tokens + helpers
components/
  Navbar.tsx        # sticky nav + mobile menu + Book a Call
  Hero.tsx          # headline, subhead, CTAs
  TrustStrip.tsx    # client logos + 3 stats
  Services.tsx      # 6 service cards
  HowItWorks.tsx    # Discover → Build → Automate & Scale
  Industries.tsx    # tailored audience cards
  Pricing.tsx       # Starter / Growth (Most Popular) / Custom
  Testimonials.tsx  # 3 quotes
  LeadCapture.tsx   # email form + Book a Call (final CTA)
  Footer.tsx        # links, contact, social, copyright
  Section.tsx       # shared section heading wrapper
  ui/               # Button, Reveal (scroll motion), icons
lib/
  site.ts           # central config: email, booking link, nav, socials
```

## ⚠️ Placeholders to fill before launch

All placeholders are marked with `TODO:` comments in the code. Quick checklist:

| What | Where |
|------|-------|
| **Booking link** (Calendly/Cal.com) | `lib/site.ts` → `site.bookingUrl` |
| **Social profile URLs** | `lib/site.ts` → `site.socials` |
| **Client logos** | `components/TrustStrip.tsx` (swap text wordmarks for real logos in `/public`) |
| **Stats** (currently placeholders) | `components/TrustStrip.tsx` → `stats` |
| **Pricing & feature lists** | `components/Pricing.tsx` → `tiers` |
| **Testimonials** (quotes, names, roles) | `components/Testimonials.tsx` → `quotes` |
| **Lead form backend** | `components/LeadCapture.tsx` (see below) |

Contact email (`dyiesmathew27@gmail.com`) is already set in `lib/site.ts`.

## Lead form — how it works now

The email capture form has **no backend yet**. On submit it:

1. `console.log`s the lead (`{ name, email }`), and
2. opens the visitor's email client with a pre-filled message to
   `dyiesmathew27@gmail.com` (mailto fallback).

To make it fully automated, wire `handleSubmit` in
`components/LeadCapture.tsx` to a real endpoint — e.g. a Next.js API route, a
form service like [Formspree](https://formspree.io), or your CRM/n8n webhook.

## Brand & accessibility

- Colors, type, and motion follow the **brand skill** (`.claude/skills/brand` /
  the project `SKILL.md`). Tokens live in `tailwind.config.ts` and `globals.css`.
- Semantic HTML, labelled form fields, keyboard-friendly focus rings, and
  `prefers-reduced-motion` support are built in.
