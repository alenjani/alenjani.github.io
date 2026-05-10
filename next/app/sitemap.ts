import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const SITE = "https://alenjani.github.io";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${SITE}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE}/detection/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/twins/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/recsys/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
  ];
}
