# NorthPark Produce El Cajon — v2.0

Production website for **NorthPark Produce El Cajon** — international market, halal butcher, Mediterranean grill, bakery, deli, and hookah shop. Family-owned since 1980.

**Location:** 432 E Chase Ave, El Cajon, CA 92020
**Phone:** (619) 440-4401
**Email:** northparkproduce@yahoo.com

## What's new in v2.0

- **Real photography** sourced from the official northparkproduce.com Wix CDN — no stock photos in primary hero positions
- **Live weekly ad embed** — the actual current weekly ad images pull from the client's Wix site, auto-updating every Monday
- **Live Facebook page embed** on `/weekly-ad` showing current posts
- **Functional forms** via Web3Forms (catering inquiry + weekly ad email signup) — no mailto fallbacks
- **Bidirectional two-row testimonial marquee**
- **DoorDash removed** — verified non-existent for El Cajon location
- **Updated color palette:** deeper Iraqi-night background (#0F0A06), ember (#E8762C), saffron (#D4A017)
- **JetBrains Mono** added for prices, hours, and data
- **Three-location showcase** on contact page

## Stack

- **Framework:** Next.js 15 (App Router) + React 19
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript (strict)
- **Animations:** GSAP 3 + ScrollTrigger + SplitType, Framer Motion 11
- **Smooth scroll:** Lenis
- **Icons:** Lucide React
- **Fonts:** Playfair Display + DM Sans + JetBrains Mono (next/font)
- **Forms:** Native fetch → Web3Forms API

## Routes

| Route | Purpose |
|---|---|
| `/` | Homepage — hero, story, 8 departments, featured menu, stats, testimonials (2 rows bidirectional), press, weekly teaser, hours/map |
| `/menu` | Full Mediterranean Grill menu, filterable, Framer Motion tab indicator |
| `/market` | 8 departments showcase with clip-path wipes & parallax |
| `/order` | Online ordering hub (Grubhub + Uber Eats verified for El Cajon) |
| `/catering` | Family Feasts pricing + Web3Forms inquiry |
| `/weekly-ad` | **Live weekly ad images + Facebook page embed + Web3Forms email signup** |
| `/contact` | Map, hours, click-to-call, all 3 locations |

## Local Development

```bash
cp .env.example .env.local
# fill in NEXT_PUBLIC_WEB3FORMS_KEY (see Forms section below)
npm install     # .npmrc forces legacy-peer-deps for React 19
npm run dev     # http://localhost:3000
npm run build   # production build
npm run typecheck
```

## Forms Setup (CRITICAL — must do before launch)

The catering inquiry form and weekly-ad email signup both POST to [Web3Forms](https://web3forms.com).

**Setup:**
1. Sign up free at <https://web3forms.com>
2. Use email `northparkproduce@yahoo.com` so submissions go directly to the business
3. Copy your access key from the dashboard
4. In Vercel: Project Settings → Environment Variables → Add:
   - Name: `NEXT_PUBLIC_WEB3FORMS_KEY`
   - Value: your access key
   - Environments: Production, Preview, Development
5. Redeploy

**Until set:** Forms display a graceful error directing users to call (619) 440-4401.

## Deploy

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import `aanthonya2003-lgtm/northpark-produce-el-cajon`
3. Add `NEXT_PUBLIC_WEB3FORMS_KEY` env var (see above)
4. Framework auto-detects as Next.js → Deploy
5. Live in ~90 seconds

## Photography Status

All hero, story, and grill section images are **REAL NorthPark Produce photos** pulled live from `static.wixstatic.com` (client's official Wix CDN). The weekly ad page pulls live ad PNG images — when the client updates Wix on Monday, those changes appear here immediately.

Department category images for **Produce, Halal Meats, Bakery, International, Deli, Hookah, Feasts** are currently labeled "Stock" placeholders (contextually matched Unsplash) and should be replaced with real photos. Codebase clearly marks each as `imageIsReal: false` in `lib/departments.ts`.

**Priority client request:** photograph the bakery oven, halal meat counter, produce section, and hookah wall (~30 min on-site shoot). Update the URLs in `lib/images.ts` and `lib/departments.ts`.

## Repo

- GitHub: <https://github.com/aanthonya2003-lgtm/northpark-produce-el-cajon>
- Wix mirror (client's outdated site): <https://www.northparkproduce.com/el-cajon>
