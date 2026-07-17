import type { MetadataRoute } from "next";
import { produtos } from "@/data/produtos";

const SITE_URL = "https://www.boldparfum.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const paginas = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${SITE_URL}/produtos`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/favoritos`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.4,
    },
  ];

  const produtosSitemap = produtos.map((produto) => ({
    url: `${SITE_URL}/produto/${produto.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...paginas, ...produtosSitemap];
}