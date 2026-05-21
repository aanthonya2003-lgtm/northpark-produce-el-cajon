export type Department = {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  features: string[];
  image: string;
  imageAlt: string;
};

export const departments: Department[] = [
  {
    slug: "produce",
    title: "Fresh Produce",
    shortTitle: "Produce",
    tagline: "From the field, to the world, to your kitchen.",
    description:
      "Daily-arrived fresh produce sourced locally and internationally. Find varieties you won't see in the big-box stores — herbs, dates, persimmons, fresh figs in season, and Mediterranean staples at honest prices.",
    features: [
      "Daily deliveries — never stale",
      "International varieties under one roof",
      "Competitive El Cajon pricing",
      "Cash & full card payment accepted",
    ],
    image:
      "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=1600&q=85&auto=format&fit=crop",
    imageAlt:
      "Fresh produce display with vibrant fruits and vegetables at an international market",
  },
  {
    slug: "halal-meats",
    title: "Halal Meats",
    shortTitle: "Halal Butcher",
    tagline: "Certified halal. Cut daily. By butchers who know their craft.",
    description:
      "A full halal-certified butcher counter. Lamb, beef, chicken, and goat — cut to your order, with the cuts you actually want for kebab, shawarma, kufta, and slow-roast feasts. The halal certification is on display at the meat counter.",
    features: [
      "Full halal certification — verified on premises",
      "Lamb, beef, chicken, goat — cut to order",
      "Marinated kabob meats prepped fresh",
      "Bulk pricing for families & events",
    ],
    image:
      "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=1600&q=85&auto=format&fit=crop",
    imageAlt: "Halal butcher counter with fresh meats displayed",
  },
  {
    slug: "bakery",
    title: "Bakery & Breads",
    shortTitle: "Bakery",
    tagline: "Bread baked in front of you. Still warm when you get home.",
    description:
      "Our in-store bakery turns out flatbread, tanour, and pita all day — pulled hot from the oven and bagged right in front of you. It's the part of the store you smell before you see.",
    features: [
      "Flatbread, tanour & pita baked daily",
      "Meat pies & sweet pastries",
      "Made-fresh tortillas (since the 2024 expansion)",
      "Bagged warm — never sitting on a shelf",
    ],
    image:
      "https://images.unsplash.com/photo-1568254183919-78a4f43a2877?w=1600&q=85&auto=format&fit=crop",
    imageAlt: "Fresh flatbread being pulled from a traditional clay oven",
  },
  {
    slug: "grill",
    title: "Mediterranean Grill",
    shortTitle: "Grill",
    tagline: "A full restaurant inside the market.",
    description:
      "Kabobs, shawarma, falafel, lamb shank, rotisserie chicken — and family feasts that feed three to ten people. Served fresh from open 9 AM to 8 PM, every day of the week.",
    features: [
      "Beef & chicken kabobs from $15.99",
      "Family Feasts $39.99 – $89.99",
      "Whole Kuzi (roast lamb) for catering",
      "Open daily 9 AM – 8 PM",
    ],
    image:
      "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=1600&q=85&auto=format&fit=crop",
    imageAlt: "Beef and chicken kabobs grilling over an open flame",
  },
  {
    slug: "international",
    title: "International Grocery",
    shortTitle: "International",
    tagline: "Lebanese, Iraqi, Persian, Russian, Hispanic, Asian — all in one aisle walk.",
    description:
      "We searched the planet so you don't have to drive across the county. Pantry staples, cooking pastes, pickled vegetables, jarred preserves, frozen specialties, snacks, sweets, and teas from twenty-plus countries.",
    features: [
      "Middle Eastern, Persian, Iraqi & Chaldean staples",
      "Russian, European & Hispanic specialties",
      "Asian sauces, noodles & sweets",
      "Bulk spices — most around $2/bag",
    ],
    image:
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=1600&q=85&auto=format&fit=crop",
    imageAlt: "Aisles of international grocery products and pantry staples",
  },
  {
    slug: "deli",
    title: "Deli & Cheese",
    shortTitle: "Deli",
    tagline: "Try the feta. Then try four more.",
    description:
      "A full-service deli with feta cheeses from Bulgaria, Greece, France, and the Middle East — plus halloumi, labne, kashkaval, and tulum. Deli meats sliced to order. Olives, pickles, and stuffed grape leaves by the pound.",
    features: [
      "Feta varieties from around the world",
      "Halloumi, labne, kashkaval & tulum",
      "Sliced-to-order halal deli meats",
      "Olives & pickled vegetables by the pound",
    ],
    image:
      "https://images.unsplash.com/photo-1452195100486-9cc805987862?w=1600&q=85&auto=format&fit=crop",
    imageAlt: "Mediterranean deli case with cheeses, olives, and prepared foods",
  },
  {
    slug: "hookah",
    title: "Hookah & Sheesha",
    shortTitle: "Hookah",
    tagline: "San Diego's most extensive sheesha selection.",
    description:
      "One of the largest hookah and sheesha lounges-by-the-shelf in San Diego County. Pipes, hoses, coals, foils, accessories — and a wall of flavored tobacco that takes a minute to walk past.",
    features: [
      "Hookah pipes, hoses & accessories",
      "Premium charcoal & foils",
      "Wide flavored sheesha selection",
      "Among the most extensive in San Diego",
    ],
    image:
      "https://images.unsplash.com/photo-1606229365485-93a3b8ee0385?w=1600&q=85&auto=format&fit=crop",
    imageAlt: "Hookah pipes and sheesha tobacco selection on display",
  },
  {
    slug: "feasts",
    title: "Family Feasts",
    shortTitle: "Feasts",
    tagline: "Feed the table. Feed the family. Feed the room.",
    description:
      "From a Feast for 3 at $39.99 to the full whole roast lamb (Kuzi) at $339, we cater every size of gathering. Kabobs, shawarma, rice, salads, hummus, and fresh tanour bread — packaged for your event.",
    features: [
      "Feast for 3 — $39.99",
      "Feast for 5 — $59.99",
      "Feast for 7 — $74.99",
      "Feast for 10 — $89.99",
      "Whole Kuzi with rice — $339",
    ],
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=1600&q=85&auto=format&fit=crop",
    imageAlt: "A spread of grilled kabobs, rice, and Mediterranean salads",
  },
]; 
