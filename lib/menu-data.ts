// Verified menu data — sourced directly from northparkproduce.com/menu-el-cajon
// All prices verified. Do NOT modify without re-verification against source.

export type MenuItem = {
  name: string;
  description?: string;
  price: string;
  category: MenuCategory;
  popular?: boolean;
  signature?: boolean;
};

export type MenuCategory =
  | "Entrées"
  | "Sandwiches"
  | "Family Feasts"
  | "North Park Specials"
  | "Specialties"
  | "Traditional Foods"
  | "Rice & Bulgur"
  | "Stews"
  | "Salads & Appetizers";

export const menuCategories: MenuCategory[] = [
  "Entrées",
  "Sandwiches",
  "Family Feasts",
  "North Park Specials",
  "Specialties",
  "Traditional Foods",
  "Rice & Bulgur",
  "Stews",
  "Salads & Appetizers",
];

export const menu: MenuItem[] = [
  // ENTRÉES
  {
    name: "Beef Kabob",
    description: "2 grilled skewers, served with rice, salad & hummus",
    price: "$15.99",
    category: "Entrées",
    popular: true,
    signature: true,
  },
  {
    name: "Chicken Kabob",
    description: "2 grilled skewers, served with rice, salad & hummus",
    price: "$15.99",
    category: "Entrées",
    popular: true,
    signature: true,
  },
  {
    name: "Chicken Tekka",
    description: "1 grilled chicken tekka skewer, with rice, salad & hummus",
    price: "$15.99",
    category: "Entrées",
  },
  {
    name: "Beef Shawarma",
    description: "Marinated in special spices, with rice, hummus & salad",
    price: "$15.99",
    category: "Entrées",
    popular: true,
  },
  {
    name: "Chicken Shawarma",
    description: "Marinated in special spices, with rice, hummus & salad",
    price: "$15.99",
    category: "Entrées",
    popular: true,
    signature: true,
  },
  {
    name: "Falafel Plate",
    description:
      "6 pcs — crushed garbanzo beans with special spices, salad, hummus & tahini",
    price: "$14.99",
    category: "Entrées",
  },
  {
    name: "Lamb Shank Plate",
    description: "Served with rice and choice of stew",
    price: "$15.99",
    category: "Entrées",
  },
  {
    name: "Fish Fillet Plate",
    description: "2 pcs fish fillet, with hummus, salad & tahini sauce",
    price: "$15.99",
    category: "Entrées",
  },

  // SANDWICHES
  { name: "Beef Shawarma Sandwich", price: "$9.99", category: "Sandwiches" },
  { name: "Chicken Shawarma Sandwich", price: "$9.99", category: "Sandwiches" },
  { name: "Beef Kabob Sandwich", price: "$9.99", category: "Sandwiches" },
  { name: "Chicken Kabob Sandwich", price: "$9.99", category: "Sandwiches" },
  { name: "Falafel Sandwich", price: "$8.99", category: "Sandwiches" },
  { name: "Chicken Cream Chop Sandwich", price: "$9.99", category: "Sandwiches" },

  // FAMILY FEASTS
  {
    name: "Feast for 3",
    description:
      "3 chicken kabob, 3 beef kabob, 1 cream chop, 1 chicken tekka, ½ lb chicken shawarma, ½ lb beef shawarma, 1 salad, 1 tanour bread, yellow rice",
    price: "$39.99",
    category: "Family Feasts",
    popular: true,
    signature: true,
  },
  {
    name: "Feast for 5",
    description:
      "5 chicken kabob, 5 beef kabob, ½ lb chicken cream chop, 1 chicken tekka, ½ lb chicken shawarma, ½ lb beef shawarma, 1 salad, 1 tanour bread, yellow rice, hummus",
    price: "$59.99",
    category: "Family Feasts",
    popular: true,
    signature: true,
  },
  {
    name: "Feast for 7",
    description:
      "7 chicken kabob, 7 beef kabob, ½ lb cream chop, 2 chicken tekka, ½ lb chicken shawarma, 2 tanour bread, yellow rice, hummus",
    price: "$74.99",
    category: "Family Feasts",
    signature: true,
  },
  {
    name: "Feast for 10",
    description:
      "8 beef kabob, 8 chicken kabob, 3 chicken tikka, ½ lb cream chop, ½ lb chicken shawarma, ½ lb beef shawarma, 2 tanour bread, 1 cup stew, yellow rice, hummus, salad",
    price: "$89.99",
    category: "Family Feasts",
    signature: true,
  },

  // NORTH PARK SPECIALS
  {
    name: "North Park Combo Special",
    description:
      "5 kabob (beef or chicken), 1 chicken cream chop, ¼ lb beef shawarma, ¼ lb chicken shawarma, with rice & salad",
    price: "$29.99",
    category: "North Park Specials",
    signature: true,
    popular: true,
  },

  // SPECIALTIES (À LA CARTE)
  { name: "Beef Kabob (each)", price: "$2.99", category: "Specialties" },
  { name: "Chicken Kabob (each)", price: "$2.99", category: "Specialties" },
  { name: "Chicken Tekka (each)", price: "$6.99", category: "Specialties" },
  {
    name: "Chicken Shawarma (per lb)",
    price: "$11.99",
    category: "Specialties",
  },
  { name: "Beef Shawarma (per lb)", price: "$14.99", category: "Specialties" },
  { name: "Fish Fillet (per lb)", price: "$9.99", category: "Specialties" },
  {
    name: "Chicken Cream Chop (per lb)",
    price: "$9.99",
    category: "Specialties",
  },

  // TRADITIONAL FOODS
  {
    name: "Whole Rotisserie Chicken",
    price: "$8.99",
    category: "Traditional Foods",
    popular: true,
  },
  {
    name: "Cooked Dolma With Meat (per lb)",
    price: "$11.99",
    category: "Traditional Foods",
  },
  {
    name: "Whole Chicken Stuffed With Rice",
    price: "$14.99",
    category: "Traditional Foods",
  },
  {
    name: "Cooked Dolma (Whole Pot)",
    description: "Catering size — feeds a crowd",
    price: "$110.00",
    category: "Traditional Foods",
    signature: true,
  },
  {
    name: "½ Kuzi with Rice",
    description: "Whole roasted lamb half over yellow rice",
    price: "$189.00",
    category: "Traditional Foods",
    signature: true,
  },
  {
    name: "Whole Kuzi with Rice",
    description: "The full feast — whole roasted lamb over yellow rice",
    price: "$339.00",
    category: "Traditional Foods",
    signature: true,
  },

  // RICE & BULGUR
  {
    name: "Rice — White / Yellow / Red (per lb)",
    price: "$6.99",
    category: "Rice & Bulgur",
  },
  { name: "Bulgur (per lb)", price: "$6.99", category: "Rice & Bulgur" },
  { name: "Biryani (per lb)", price: "$9.99", category: "Rice & Bulgur" },

  // STEWS
  {
    name: "White Beans Stew",
    description: "16 oz / 32 oz",
    price: "$5.99 / $7.99",
    category: "Stews",
  },
  {
    name: "Curry Potato Stew",
    description: "16 oz / 32 oz",
    price: "$5.99 / $7.99",
    category: "Stews",
  },
  {
    name: "Okra Stew",
    description: "16 oz / 32 oz",
    price: "$5.99 / $7.99",
    category: "Stews",
  },
  {
    name: "Green Beans Stew",
    description: "16 oz / 32 oz",
    price: "$5.99 / $7.99",
    category: "Stews",
  },
  {
    name: "Tabsi (Eggplant w/ Meat) per lb",
    price: "$9.99",
    category: "Stews",
  },

  // SALADS & APPETIZERS
  {
    name: "Iraqi Salad",
    description: "Medium / Large platter",
    price: "$24.99 / $44.99",
    category: "Salads & Appetizers",
  },
  {
    name: "Tabbouli",
    description: "Medium / Large platter",
    price: "$24.99 / $44.99",
    category: "Salads & Appetizers",
  },
  {
    name: "Fattoush",
    description: "Medium / Large platter",
    price: "$24.99 / $44.99",
    category: "Salads & Appetizers",
  },
  {
    name: "Hummus",
    description: "Medium / Large platter",
    price: "$24.99 / $44.99",
    category: "Salads & Appetizers",
    popular: true,
  },
  {
    name: "Baba Ganoush",
    description: "Medium / Large platter",
    price: "$24.99 / $44.99",
    category: "Salads & Appetizers",
  },
  {
    name: "Eggplant Salad",
    description: "Medium / Large platter",
    price: "$24.99 / $44.99",
    category: "Salads & Appetizers",
  },
  {
    name: "Greek Salad",
    description: "Medium / Large platter",
    price: "$24.99 / $44.99",
    category: "Salads & Appetizers",
  },
];

export const featuredItems = menu.filter((item) => item.signature).slice(0, 6);
export const familyFeasts = menu.filter(
  (item) => item.category === "Family Feasts"
);
