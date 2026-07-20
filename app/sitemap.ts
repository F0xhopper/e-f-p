import type { MetadataRoute } from "next";
import { projects } from "./lib/content";
import { projectSlug } from "./lib/files";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE_URL}/about`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/contact`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/projects`, changeFrequency: "monthly", priority: 0.7 },
    ...projects.map((p) => ({
      url: `${BASE_URL}/projects/${projectSlug(p)}`,
      changeFrequency: "yearly" as const,
      priority: 0.8,
    })),
  ];
}
