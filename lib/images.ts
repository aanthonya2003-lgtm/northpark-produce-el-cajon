// Verified real image manifest — all from official northparkproduce.com Wix CDN
// or verified press coverage. NO stock photos in primary positions.
// Last verified: 2026-05-21
//
// Wix CDN URL pattern: https://static.wixstatic.com/media/{id}
// Append a transform for sizing: /v1/fill/w_2400,h_1600,al_c,q_85,enc_auto/file

const WIX = "https://static.wixstatic.com/media";

// Helper to add a Wix transform for responsive sizing
const wix = (id: string, w = 2400, h?: number, q = 88) => {
  const sz = h ? `w_${w},h_${h},al_c,q_${q}` : `w_${w},al_c,q_${q}`;
  return `${WIX}/${id}/v1/fill/${sz},enc_auto/file.${id.endsWith(".png") ? "png" : "jpg"}`;
};

export const images = {
  // === LOGO (verified transparent PNG from official site) ===
  logo: `${WIX}/c63d62_028650d798504091ad3d70220ac997bd~mv2.png`,

  // === REAL NORTHPARK PRODUCE PHOTOS (Wix CDN — official site) ===
  storefrontElCajon: `${WIX}/c63d62_9c01db2728bc4ef98114451686c884b6~mv2.jpg`,
  grillMenuHero: `${WIX}/c63d62_fc750c61455f4d8fa90c9b03a43cbb24~mv2.jpg`,
  aboutHero: `${WIX}/c63d62_d9d051f34e1b42429a200497bd78709a~mv2.jpg`,
  homeHero: `${WIX}/c63d62_623dfcf6c6374d9abf1a1910b39397d8~mv2.jpg`,
  weeklyAdHero: `${WIX}/c63d62_e12bc87c48384e4a8ce92aa12c9f5bf6~mv2.jpg`,

  // === MENU CATEGORY PHOTOS (real Wix CDN from /menu-el-cajon) ===
  entreeCategory: `${WIX}/b195fc_c99c38a3f5e14f818ca57cc49cefa376~mv2_d_12744_3790_s_3_2.jpg`,
  sandwichesCategory: `${WIX}/c63d62_e227fa219ec54d31a843bb1e07223b71~mv2.jpg`,
  specialtiesCategory: `${WIX}/c63d62_a373f37479c84de48141251909aee1b2~mv2.jpg`,

  // === LIVE WEEKLY AD IMAGES (PNG, client-updated weekly via Wix) ===
  weeklyAdElCajon1: `${WIX}/c63d62_80b592f0a9394fbb9889401b965a0616~mv2.png`,
  weeklyAdElCajon2: `${WIX}/c63d62_0e01399d933f4020b8e51c3c2a5e2cfc~mv2.png`,

  // === PRESS COVERAGE PHOTOS (SanDiegoVille blogger CDN) ===
  pressSuperMercado:
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjJQMxGu7LfYXc9xWh3-Xa7I0cXWongkaKdg_ozGeOnk_3XLZAIHliOEDVk2IHzgmiNE2cu0mha2Rmc80CqVcsR-_M5iPVew7bfkPqtEukr8WRsWW2sG7e6k9BuNt1pD0p7DG1S-aWF0fNEi9DvuvqFwlRP94xOoCq7ejnF5DKhXHmHC6lS2lnA1LRkdZMf/s1280/maxresdefault-2.jpg",

  // === PLACEHOLDER IMAGES (clearly contextually matched but stock; replace when client provides) ===
  placeholderProduce:
    "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=1600&q=85&auto=format&fit=crop",
  placeholderHalalMeat:
    "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=1600&q=85&auto=format&fit=crop",
  placeholderBakery:
    "https://images.unsplash.com/photo-1568254183919-78a4f43a2877?w=1600&q=85&auto=format&fit=crop",
  placeholderInternational:
    "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=1600&q=85&auto=format&fit=crop",
  placeholderDeli:
    "https://images.unsplash.com/photo-1452195100486-9cc805987862?w=1600&q=85&auto=format&fit=crop",
  placeholderHookah:
    "https://images.unsplash.com/photo-1606229365485-93a3b8ee0385?w=1600&q=85&auto=format&fit=crop",
  placeholderFeast:
    "https://images.unsplash.com/photo-1544025162-d76694265947?w=1600&q=85&auto=format&fit=crop",
} as const;

// Optimized Wix CDN size helper for next/image
export const wixSize = (
  fullUrl: string,
  width: number,
  height?: number,
  quality = 88
) => {
  if (!fullUrl.includes("static.wixstatic.com/media/")) return fullUrl;
  const m = fullUrl.match(/static\.wixstatic\.com\/media\/([^/]+)/);
  if (!m) return fullUrl;
  const id = m[1];
  const sz = height
    ? `w_${width},h_${height},al_c,q_${quality}`
    : `w_${width},al_c,q_${quality}`;
  const ext = id.endsWith(".png") ? "png" : "jpg";
  return `${WIX}/${id}/v1/fill/${sz},enc_auto/file.${ext}`;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _unused = wix;
