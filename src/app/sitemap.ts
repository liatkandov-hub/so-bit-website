import type { MetadataRoute } from "next";

import { products } from "@/lib/data/products";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.so-bit.co.il";

export default function sitemap(): MetadataRoute.Sitemap {
  const productRoutes: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${baseUrl}/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...productRoutes,
  ];
}
