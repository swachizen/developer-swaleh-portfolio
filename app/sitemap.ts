import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    "https://developer-swaleh-portfolio.vercel.app";

  return [
    {
      url: baseUrl,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      priority: 0.9,
    },
  ];
}
