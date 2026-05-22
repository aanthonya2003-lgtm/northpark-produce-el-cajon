# NorthPark Produce El Cajon — v3.0

Production website for **NorthPark Produce El Cajon** — international market, halal butcher, Mediterranean grill, bakery, deli, and hookah shop. Family-owned since 1980.

**Location:** 432 E Chase Ave, El Cajon, CA 92020
**Phone:** (619) 440-4401
**Email:** northparkproduce@yahoo.com

## What's new in v3.0

- **Midnight green + spice gold palette** — `#1B3A2D` background, `#C8922A` accent (Phoenicia × Natoora aesthetic, replacing v2 brown+ember)
- **Instagram added** — `@northparkproduce` verified active (1,020 followers, family account)
- **Press badges restyled** — publication-colored wordmarks (SanDiegoVille red, Zabihah green, BIA blue)
- **Catering platter add-ons catalog** — Iraqi Salad, Tabbouli, Fattoush, Hummus, Baba Ganoush, Eggplant, Greek with M/L pricing
- **llms-full.txt** — comprehensive AI-discovery content layer
- **Hero clip-path overlay wipe** — `inset(0 100% 0 0)` → `inset(0 0% 0 0)` golden sweep on page load
- **.npmrc enhanced** with `shamefully-hoist=true` (better React 19 peer dep stability)
- **Charcoal text on warm-white** for higher legibility on light sections
- **Order Now nav button** is now a real `<Link href="/order">` (was `<button>`)

## Inherited from v2

- Real photography from official northparkproduce.com Wix CDN (11 real photos)
- Live weekly ad images auto-update from client's Wix every Monday
- Live Facebook page embed on `/weekly-ad`
- Functional Web3Forms catering inquiry + email signup (no mailto)
- Two-row bidirectional testimonial marquee
- DoorDash honest disclosure (not available for El Cajon)
- All three locations on /contact

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
| `/` | Hero (clip-path wipe), story, 8 departments, featured menu, stats, testimonials (2 rows), press badges, weekly teaser, hours/map |
| `/menu` | Full Mediterranean Grill menu, filterable, Framer Motion tab indicator |
| `/market` | 8 departments showcase with clip-path wipes & parallax |
| `/order` | Online ordering hub (Grubhub + Uber Eats verified) |
| `/catering` | Family Feasts + **platter add-ons catalog** + Web3Forms inquiry |
| `/weekly-ad` | Live Wix CDN ad images + Facebook page embed + Web3Forms signup |
| `/contact` | Map, hours, click-to-call, Facebook & Instagram, all 3 locations |

## Local Development

```bash
cp .env.example .env.local
# fill in NEXT_PUBLIC_WEB3FORMS_KEY
npm install     # .npmrc forces legacy-peer-deps + shamefully-hoist
npm run dev     # http://localhost:3000
npm run build   # production build
npm run typecheck
```

## Forms Setup (CRITICAL before launch)

Sign up free at [web3forms.com](https://web3forms.com) → use `northparkproduce@yahoo.com` → copy access key → add `NEXT_PUBLIC_WEB3FORMS_KEY` to Vercel env vars → redeploy.

Without the key, forms show graceful error redirecting users to call (619) 440-4401.

## Deploy

1. Push merges automatically from GitHub → Vercel
2. Repo: <https://github.com/aanthonya2003-lgtm/northpark-produce-el-cajon>
3. Live deploy: <https://northpark-produce-el-cajon.vercel.app>

## v3.0 Verified Source Map

| Asset | Source | Status |
|---|---|---|
| Logo | northparkproduce.com Wix CDN | Live |
| Hero photo | northparkproduce.com /el-cajon | Live |
| Story photo | northparkproduce.com /about | Live |
| Menu category images | northparkproduce.com /menu-el-cajon | Live |
| Weekly ad images (PNG) | northparkproduce.com /copy-of-weekly-specials | Live (auto-update) |
| Press: SanDiegoVille articles | sandiegoville.com | Live |
| Press: real store photo | SanDiegoVille blogger CDN | Live (Super Mercado article) |
| Grubhub link | grubhub.com /.../2875424 | Verified live |
| Uber Eats link | ubereats.com /.../bUPVL... | Verified live (Postmates same hash → El Cajon) |
| DoorDash | NOT AVAILABLE for El Cajon | Omitted, honest disclosure on /order |
| Facebook | facebook.com/northparkproduceelcajon | 4,554 likes (El Cajon-specific) |
| Instagram | instagram.com/northparkproduce | 1,020 followers (family account) |
| Zabihah | zabihah.com /.../north-park-produce-el-cajon-ca | Verified live |
