import type { Metadata, Viewport } from "next";
import { Playfair_Display, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/LenisProvider";
import { business } from "@/lib/business";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1B3A2D",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://northpark-produce-el-cajon.vercel.app"),
  title: {
    default:
      "NorthPark Produce El Cajon | International Grocery & Mediterranean Grill",
    template: "%s | NorthPark Produce El Cajon",
  },
  description:
    "Family-owned since 1980. Halal certified butcher. Fresh bread baked daily. International groceries, Mediterranean grill, hookah shop. 432 E Chase Ave, El Cajon, CA. Open 7 days.",
  keywords: [
    "halal grocery el cajon",
    "middle eastern market el cajon",
    "international grocery el cajon",
    "north park produce",
    "kabob el cajon",
    "halal meat el cajon",
    "mediterranean grill el cajon",
    "hookah shop san diego",
    "iraqi grocery el cajon",
    "shawarma el cajon",
  ],
  authors: [{ name: "NorthPark Produce" }],
  creator: "NorthPark Produce",
  publisher: "NorthPark Produce",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    title: "NorthPark Produce El Cajon",
    description:
      "El Cajon's Premier International Market & Mediterranean Grill. Family owned since 1980. Halal certified. Fresh bread baked daily.",
    url: "https://northpark-produce-el-cajon.vercel.app",
    siteName: "NorthPark Produce El Cajon",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NorthPark Produce El Cajon",
    description:
      "El Cajon's Premier International Market & Mediterranean Grill. Halal certified. Since 1980.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Restaurant", "GroceryStore"],
        "@id": "https://northpark-produce-el-cajon.vercel.app/#business",
        name: "NorthPark Produce",
        alternateName: "NorthPark Produce El Cajon",
        image: [
          "https://static.wixstatic.com/media/c63d62_9c01db2728bc4ef98114451686c884b6~mv2.jpg",
          "https://static.wixstatic.com/media/c63d62_fc750c61455f4d8fa90c9b03a43cbb24~mv2.jpg",
        ],
        logo: "https://static.wixstatic.com/media/c63d62_028650d798504091ad3d70220ac997bd~mv2.png",
        description:
          "Family-owned international grocery store, halal butcher, Mediterranean grill, and in-store bakery. Serving El Cajon and Greater San Diego since 1980.",
        address: {
          "@type": "PostalAddress",
          streetAddress: business.address.street,
          addressLocality: business.address.city,
          addressRegion: business.address.state,
          postalCode: business.address.zip,
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: business.address.geo.lat,
          longitude: business.address.geo.lng,
        },
        telephone: business.phoneTel,
        email: business.email,
        url: "https://northparkproduce.com",
        sameAs: [
          business.social[0]?.url,
          business.social[1]?.url,
          "https://www.yelp.com/biz/north-park-produce-el-cajon-5",
          "https://www.zabihah.com/restaurants/ca33a6d4-7767-11ef-95ae-6045bdeb9f57/north-park-produce-el-cajon-ca",
        ],
        servesCuisine: [
          "Middle Eastern", "Mediterranean", "Iraqi", "Lebanese", "Halal", "International",
        ],
        paymentAccepted: ["Cash", "Credit Card", "Apple Pay"],
        priceRange: "$",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "07:30",
            closes: "22:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Saturday", "Sunday"],
            opens: "08:00",
            closes: "22:00",
          },
        ],
        hasMenu: "https://northpark-produce-el-cajon.vercel.app/menu",
        founder: {
          "@type": "Organization",
          name: "NorthPark Produce",
          foundingDate: "1980",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.4",
          reviewCount: "101",
          bestRating: "5",
          worstRating: "1",
        },
        amenityFeature: [
          { "@type": "LocationFeatureSpecification", name: "Halal Certified", value: true },
          { "@type": "LocationFeatureSpecification", name: "Wheelchair Accessible", value: true },
          { "@type": "LocationFeatureSpecification", name: "Private Parking", value: true },
          { "@type": "LocationFeatureSpecification", name: "Bike Parking", value: true },
        ],
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://static.wixstatic.com" />
        <link rel="dns-prefetch" href="https://blogger.googleusercontent.com" />
      </head>
      <body className="antialiased">
        <LenisProvider>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
