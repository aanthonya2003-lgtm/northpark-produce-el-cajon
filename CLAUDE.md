# CLAUDE.md — NorthPark Produce El Cajon Project Rules

Reference for future Claude sessions working on this codebase.

## Business identity (NEVER change without re-verification)
- Name: NorthPark Produce — El Cajon location
- Address: 432 E Chase Ave, El Cajon, CA 92020
- Phone: (619) 440-4401
- Email: northparkproduce@yahoo.com
- Founded: 1980
- Halal: Zabihah-verified, on-premises certified

## Verified links
- Wix mirror: northparkproduce.com/el-cajon
- Grubhub El Cajon: grubhub.com/restaurant/north-park-produce-e-chase-ave-432-e-chase-ave-el-cajon/2875424
- Uber Eats El Cajon: ubereats.com/store/north-park-produce/bUPVLSjOTpKNpvlAzMeXsQ (Postmates same-hash confirmed = El Cajon)
- Facebook El Cajon: facebook.com/northparkproduceelcajon (4,554 likes, ACTIVE)
- Instagram (family): instagram.com/northparkproduce (1,020 followers, ACTIVE — Poway-led but covers the family)
- DoorDash El Cajon: NOT LISTED — only San Diego (3551 El Cajon Blvd) has DoorDash
- Zabihah: zabihah.com/restaurants/ca33a6d4-7767-11ef-95ae-6045bdeb9f57/north-park-produce-el-cajon-ca

## Stack
- Next.js 15 (App Router), React 19, TypeScript strict, Tailwind v4
- GSAP 3.13 + ScrollTrigger + SplitType
- Framer Motion 11 (not 12 — 12 breaks types)
- Lenis smooth scroll synced to ScrollTrigger
- Lucide React, next/font (Playfair Display + DM Sans + JetBrains Mono)
- Forms: native fetch to api.web3forms.com — NEVER @formspree/react

## Design tokens (v3 — midnight green + spice gold)
- deep (bg): #1B3A2D — midnight green, hero & nav
- deep-darker: #143124
- surface (cards on dark): #0E2218
- surface-elevated: #1F4434
- ember (primary CTA / accent): #C8922A — spice gold
- ember-light (hover): #E0AC42
- saffron (secondary, star ratings): #D4A017
- cream (body on dark): #F5EFE0
- cream-bright (warm white sections): #FEFCF8
- charcoal (text on light): #1A1A1A
- muted: #8C7B6B

Design reference: Phoenicia Specialty Foods meets Natoora London. Market luxury — warm, rich, textured.

## Animation laws (absolute)
- once:true is BANNED — use toggleActions: 'play none none reverse'
- Hero animations = page-load only, never ScrollTrigger
- All sections have default visible CSS state as fallback
- 100dvh for full-viewport (never 100vh — iOS Safari bug)
- prefers-reduced-motion respected (gsap.set() to final values)
- All GSAP contexts have cleanup: return () => ctx.revert()
- Magnetic buttons gated behind pointer:fine
- v3 hero has clip-path overlay wipe: inset(0 100% 0 0) → inset(0 0% 0 0)

## Photography (HARD RULE)
- Primary hero/story/grill sections MUST use real Wix CDN URLs from lib/images.ts
- Press section: SanDiegoVille article image available in `images.pressSuperMercado`
- Department placeholders LABELED as `imageIsReal: false` in lib/departments.ts
- Stock images marked with "Stock" badge on /market page
- NEVER label Unsplash photos as real store photos
- Curated Unsplash queries only: actual flatbread oven, actual butcher counter, actual spice market — not "Mediterranean vibes" lifestyle shots

## Forms (HARD RULE)
- Use Web3Forms API (api.web3forms.com/submit)
- env var: NEXT_PUBLIC_WEB3FORMS_KEY
- If env missing → show graceful error, redirect to phone — NEVER mailto: as fallback
- No @formspree/react (React 19 incompatible)

## File ownership
- `lib/business.ts` — all verified facts (address, phone, hours, links, platter add-ons)
- `lib/images.ts` — central image manifest with Wix CDN URLs + helper
- `lib/menu-data.ts` — full verified menu
- `lib/departments.ts` — 8 departments + image refs + imageIsReal flag
- `components/` — UI primitives, all client components
- `app/` — App Router routes; each page has metadata + canonical

## Press badge classes (v3)
Use `press-badge press-badge-{outlet}` classes for visual differentiation:
- SanDiegoVille: red wordmark (#C8232A)
- Zabihah: green (#16803C)
- Boulevard BIA: blue (#2A4A8C)
- Wheree: charcoal

## .npmrc (mandatory)
```
legacy-peer-deps=true
shamefully-hoist=true
```

## Common bugs to fix on sight
- 100vh anywhere → replace with 100dvh
- once:true in ScrollTrigger → replace with toggleActions
- mailto: form action → replace with Web3Forms POST
- @formspree/react in package.json → remove
- Missing .npmrc → add legacy-peer-deps=true & shamefully-hoist=true
- Logo white box on dark bg → ensure logo-blend-screen class applied
- overflow:hidden on sticky parent → use overflow-x:clip instead

## Forbidden
- Inventing menu prices
- Inventing testimonials
- Linking unverified delivery platforms
- Passing stock photos as real store photos
- Lorem ipsum
- "Coming soon" labels without functional fallback
- Generic lifestyle photos of random people eating
