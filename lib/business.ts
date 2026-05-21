// Verified business data — sourced directly from northparkproduce.com,
// Google Business, Facebook (northparkproduceelcajon), Yelp, and Zabihah.
// Do NOT modify without re-verification.

export const business = {
  name: "NorthPark Produce",
  legalName: "NorthPark Produce El Cajon",
  tagline: "We Searched the Planet. We Brought It Home.",
  founded: 1980,
  yearsServing: new Date().getFullYear() - 1980,
  address: {
    street: "432 E Chase Ave",
    city: "El Cajon",
    state: "CA",
    zip: "92020",
    full: "432 E Chase Ave, El Cajon, CA 92020",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=North+Park+Produce+432+E+Chase+Ave+El+Cajon+CA+92020",
    geo: { lat: 32.780489, lng: -116.95741 },
  },
  phone: "(619) 440-4401",
  phoneTel: "+16194404401",
  email: "northparkproduce@yahoo.com",
  storeHours: [
    { day: "Monday", hours: "7:30 AM – 10:00 PM" },
    { day: "Tuesday", hours: "7:30 AM – 10:00 PM" },
    { day: "Wednesday", hours: "7:30 AM – 10:00 PM" },
    { day: "Thursday", hours: "7:30 AM – 10:00 PM" },
    { day: "Friday", hours: "7:30 AM – 10:00 PM" },
    { day: "Saturday", hours: "8:00 AM – 10:00 PM" },
    { day: "Sunday", hours: "8:00 AM – 10:00 PM" },
  ],
  restaurantHours: [
    { day: "Monday – Sunday", hours: "9:00 AM – 8:00 PM" },
  ],
  locations: ["El Cajon (this location)", "North Park, San Diego", "Poway"],
  // Verified delivery platforms — El Cajon location only
  delivery: [
    {
      platform: "Grubhub",
      url: "https://www.grubhub.com/restaurant/north-park-produce-e-chase-ave-432-e-chase-ave-el-cajon/2875424",
      verified: true,
      eta: "30–45 min",
      tagline: "Browse menu, order in seconds",
    },
    {
      platform: "Uber Eats",
      url: "https://www.ubereats.com/store/north-park-produce/bUPVLSjOTpKNpvlAzMeXsQ",
      verified: true,
      eta: "25–40 min",
      tagline: "Track in real time",
    },
  ],
  // Verified social — El Cajon page only
  social: [
    {
      platform: "Facebook",
      handle: "@northparkproduceelcajon",
      url: "https://www.facebook.com/northparkproduceelcajon/",
      followers: "4,554 likes",
      verified: true,
    },
  ],
  // Verified press coverage
  press: [
    {
      outlet: "SanDiegoVille",
      date: "Nov 21, 2024",
      title:
        "San Diego's North Park Produce Expands With 'Super Mercado' To Preserve Pancho Villa Market Legacy",
      url: "https://www.sandiegoville.com/2024/11/san-diegos-north-park-produce-expands.html",
    },
    {
      outlet: "SanDiegoVille",
      date: "Jan 12, 2025",
      title:
        "North Park Produce Pumping Out Fresh-Made Tortillas Using Some Pancho Villa Market Equipment",
      url: "https://www.sandiegoville.com/2025/01/san-diegos-north-park-produce-pumping.html",
    },
    {
      outlet: "Boulevard BIA",
      date: "Business Listing",
      title: "North Park Produce — El Cajon Boulevard",
      url: "https://theboulevard.org/listing-item/north-park-produce/",
    },
    {
      outlet: "Zabihah",
      date: "Halal Verified",
      title: "Halal-certified butcher & deli",
      url: "https://www.zabihah.com/restaurants/ca33a6d4-7767-11ef-95ae-6045bdeb9f57/north-park-produce-el-cajon-ca",
    },
  ],
  // Verified testimonials
  testimonials: [
    {
      quote:
        "My go-to spot! The El Cajon location is my favorite, and I always stop by whenever I'm in the area.",
      author: "Shaza A.",
      source: "Yelp",
      rating: 5,
      date: "January 2025",
    },
    {
      quote:
        "Fresh squeezed juices, kabobs, fresh baked breads, lots of great produce, olive oils are awesome.",
      author: "Susan V.D.",
      source: "Facebook",
      rating: 5,
    },
    {
      quote:
        "I also love getting the fresh bread that is made right in front of you and is warm!!!",
      author: "Yelp Reviewer",
      source: "Yelp",
      rating: 5,
    },
    {
      quote:
        "If you haven't been to North Park Produce you're missing out on an experience that's unbelievable.",
      author: "Google Reviewer",
      source: "Google",
      rating: 5,
    },
    {
      quote:
        "Fantastic selection of North African and Middle Eastern staples, prepared meals and freshly baked flat breads.",
      author: "Yelp Reviewer",
      source: "Yelp",
      rating: 5,
    },
    {
      quote:
        "You can't beat the price of their spices and selection of spices, all packaged in bulk, around $2.",
      author: "Yelp Reviewer",
      source: "Yelp",
      rating: 5,
    },
    {
      quote:
        "The enticing aromas of freshly baked bread and hot meat pies waft through the aisles, creating an inviting atmosphere.",
      author: "Wheree Editorial",
      source: "Editorial",
      rating: 5,
    },
  ],
} as const;

export type Business = typeof business;
