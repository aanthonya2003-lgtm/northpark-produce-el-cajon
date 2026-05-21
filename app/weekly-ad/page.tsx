import type { Metadata } from "next";
import WeeklyAdClient from "./WeeklyAdClient";

export const metadata: Metadata = {
  title: "Weekly Ad — Fresh Specials Every Week",
  description:
    "This week's deals at NorthPark Produce El Cajon. Fresh produce, butcher counter savings, bakery, and grill specials. Updated weekly on Facebook.",
  alternates: { canonical: "/weekly-ad" },
};

export default function WeeklyAdPage() {
  return <WeeklyAdClient />;
}
