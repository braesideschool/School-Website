import type { MetadataRoute } from "next";

const BASE_URL = "https://www.braesideschool.in";

const routes = [
  "",
  "/about",
  "/academics",
  "/activities",
  "/admissions",
  "/chairman",
  "/contact",
  "/events",
  "/facilities",
  "/gallery",
  "/rules",
  "/swiss-international",
  "/vision-mission",
  "/why-choose-us",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1.0 : path === "/admissions" ? 0.9 : 0.7,
  }));
}
