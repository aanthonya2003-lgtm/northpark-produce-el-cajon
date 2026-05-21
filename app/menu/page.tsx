import type { Metadata } from "next";
import MenuClient from "./MenuClient";

export const metadata: Metadata = {
  title: "Menu — Mediterranean Grill",
  description:
    "Full menu for NorthPark Produce El Cajon. Beef & chicken kabobs, shawarma, falafel, family feasts from $39.99, lamb shank, and more. Halal certified. Open daily 9 AM – 8 PM.",
  alternates: { canonical: "/menu" },
};

export default function MenuPage() {
  return <MenuClient />;
}
