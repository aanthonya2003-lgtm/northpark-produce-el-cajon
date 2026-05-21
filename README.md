# NorthPark Produce El Cajon

Production website for **NorthPark Produce** — El Cajon's premier international market and Mediterranean grill. Family-owned since 1980.

**Location:** 432 E Chase Ave, El Cajon, CA 92020
**Phone:** (619) 440-4401
**Email:** northparkproduce@yahoo.com

## Stack

- **Framework:** Next.js 15 (App Router) + React 19
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript (strict)
- **Animations:** GSAP 3 + ScrollTrigger + SplitType, Framer Motion
- **Smooth scroll:** Lenis
- **Icons:** Lucide React
- **Fonts:** Playfair Display + DM Sans (next/font)

## Routes

| Route | Purpose |
|---|---|
| `/` | Homepage — hero, departments, menu preview, testimonials, press, hours, map |
| `/menu` | Full Mediterranean Grill menu with category filter |
| `/market` | International grocery departments showcase |
| `/order` | Online ordering hub (Grubhub, Uber Eats) |
| `/catering` | Family Feasts & catering inquiry |
| `/weekly-ad` | Weekly specials & Facebook deals link |
| `/contact` | Map embed, hours, click-to-call |

## Local Development

```bash
npm install         # .npmrc forces legacy-peer-deps
npm run dev         # http://localhost:3000
npm run build       # production build
npm run typecheck   # tsc --noEmit
```

## Deploy

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import `aanthonya2003-lgtm/northpark-produce-el-cajon`
3. Framework auto-detects as Next.js → Deploy
4. Live in ~90 seconds

## Verified Sources

All business data, menu prices, testimonials, press mentions, and delivery platform links were verified from authoritative sources. No data is fabricated.
