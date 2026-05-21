import { images } from "./images";

export type Department = {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  features: string[];
  image: string;
  imageAlt: string;
  imageIsReal: boolean; // true = real NorthPark photo, false = stock placeholder
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
      "Cash, card & Apple Pay accepted",
    ],
    image: images.placeholderProduce,
    imageAlt: "Fresh produce display at NorthPark Produce El Cajon",
    imageIsReal: false,
  },
  {
    slug: "halal-meats",
    title: "Halal Meats",
    shortTitle: "Halal Butcher",
    tagline: "Certified halal. Cut daily. By butchers who know their craft.",
    description:
      "A full halal-certified butcher counter. Lamb, beef, chicken, and goat — cut to your order, with the cuts you actually want for kebab, shawarma, kufta, and slow-roast feasts. The halal certification is on display at the meat counter, verified by Zabihah.",
    features: [
      "Full halal certification — verified on premises",
      "Lamb, beef, chicken, goat — cut to order",
      "Marinated kabob meats prepped fresh",
      "Bulk pricing for families & events",
    ],
    image: images.placeholderHalalMeat,
    imageAlt: "Halal butcher counter with fresh cuts at NorthPark Produce El Cajon",
    imageIsReal: false,
  },
  {
    slug: "bakery",
    title: "Bakery & Breads",
    shortTitle: "Bakery",
    tagline: "Bread baked in front of you. Still warm when you get home.",
    description:
      "Our in-store bakery turns out flatbread, tanour, and pita all day — pulled hot from the oven and bagged right in front of you. Since 2024 we also press fresh tortillas using equipment from the legendary Pancho Villa Market.",
    features: [
      "Flatbread, tanour & pita baked daily",
      "Meat pies & sweet pastries",
      "Fresh-pressed tortillas (since 2024)",
      "Bagged warm — never sitting on a shelf",
    ],
    image: images.placeholderBakery,
    imageAlt: "Fresh flatbread baking at NorthPark Produce",
    imageIsReal: false,
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
    image: images.grillMenuHero,
    imageAlt: "Mediterranean grill at NorthPark Produce El Cajon",
    imageIsReal: true,
  },
  {
    slug: "international",
    title: "International Grocery",
    shortTitle: "International",
    tagline:
      "Lebanese, Iraqi, Persian, Russian, Hispanic, Asian — all in one aisle walk.",
    description:
      "We searched the planet so you don't have to drive across the county. Pantry staples, cooking pastes, pickled vegetables, jarred preserves, frozen specialties, snacks, sweets, and teas from twenty-plus countries.",
    features: [
      "Middle Eastern, Persian, Iraqi & Chaldean staples",
      "Russian, European & Hispanic specialties",
      "Asian sauces, noodles & sweets",
      "Bulk spices — most around $2/bag",
    ],
    image: images.placeholderInternational,
    imageAlt: "International grocery aisles at NorthPark Produce",
    imageIsReal: false,
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
    image: images.placeholderDeli,
    imageAlt: "Mediterranean deli case with cheeses, olives, and prepared foods",
    imageIsReal: false,
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
    image: images.placeholderHookah,
    imageAlt: "Hookah and sheesha tobacco selection",
    imageIsReal: false,
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
    image: images.placeholderFeast,
    imageAlt: "A spread of grilled kabobs, rice, and Mediterranean salads",
    imageIsReal: false,
  },
];
