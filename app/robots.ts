import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || (process.env.NODE_ENV === "production" ? "https://amthanevalley.com" : "http://localhost:3000");

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: [`${siteUrl.replace(/\/$/, "")}/sitemap.xml`],
    host: siteUrl.replace(/\/$/, ""),
  };
}
