import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://gangwarmedical.shop";
  
  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-10-10"),
      changeFrequency: "weekly",
      priority: 1.0,
      images: ["https://gangwarmedical.shop/gangwar-storefront.jpeg"],
    },
  ];
}
