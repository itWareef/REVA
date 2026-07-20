import type { MetadataRoute } from "next";
import { projects, news } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://rivacontractingsa.com";
  const routes = ["", "/about", "/services", "/projects", "/news", "/contact"];
  const urls: MetadataRoute.Sitemap = [];
  for (const l of ["ar", "en"]) {
    for (const r of routes) urls.push({ url: `${base}/${l}${r}`, changeFrequency: "monthly", priority: r === "" ? 1 : 0.8 });
    for (const p of projects) urls.push({ url: `${base}/${l}/projects/${p.slug}`, priority: 0.7 });
    for (const n of news) urls.push({ url: `${base}/${l}/news/${n.slug}`, priority: 0.6 });
  }
  return urls;
}
