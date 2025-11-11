import { baseUrl } from "@/lib/utils";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "GPTBot",
        disallow: ["/"],
      },
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/edit"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
