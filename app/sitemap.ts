import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { siteUrl } from "@/data/links";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/projects", ...projects.map((p) => `/projects/${p.slug}`)].map(
    (path) => ({
      url: `${siteUrl}${path}`,
      changeFrequency: "monthly",
      priority: path === "" ? 1 : 0.7,
    }),
  );
}
