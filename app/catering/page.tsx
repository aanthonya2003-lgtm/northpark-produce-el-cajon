import type { Metadata } from "next";
import CateringClient from "./CateringClient";

export const metadata: Metadata = {
  title: "Catering & Family Feasts — From $39.99",
  description:
    "Halal catering from NorthPark Produce El Cajon. Family Feasts from $39.99 to $89.99. Whole Kuzi (roast lamb) $339. Salad platters, stews, and more for events, offices, and gatherings.",
  alternates: { canonical: "/catering" },
};

export default function CateringPage() {
  return <CateringClient />;
}
