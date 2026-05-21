import type { Metadata } from "next";
import MarketClient from "./MarketClient";

export const metadata: Metadata = {
  title: "The Market — Departments & Specialties",
  description:
    "Eight departments under one roof: fresh produce, halal butcher, in-store bakery, Mediterranean grill, international grocery, full deli, hookah shop, and family feasts. El Cajon, CA.",
  alternates: { canonical: "/market" },
};

export default function MarketPage() {
  return <MarketClient />;
}
