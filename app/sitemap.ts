import type { MetadataRoute } from "next";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://northpark-produce-el-cajon.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${baseUrl}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/menu`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/market`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/order`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/catering`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/weekly-ad`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.75 },
  ];
}
