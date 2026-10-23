import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tatanala.id";

const localizedPages = [
  { id: "/", en: "/en", priority: 1 },
  { id: "/layanan", en: "/en/services", priority: 0.9 },
  { id: "/portofolio", en: "/en/portfolio", priority: 0.8 },
  { id: "/tentang-kami", en: "/en/about", priority: 0.7 },
  { id: "/kontak", en: "/en/contact", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return localizedPages.flatMap(({ id, en, priority }) => [
    {
      url: new URL(id, siteUrl).toString(),
      alternates: {
        languages: {
          "id-ID": new URL(id, siteUrl).toString(),
          "en-US": new URL(en, siteUrl).toString(),
          "x-default": new URL(id, siteUrl).toString(),
        },
      },
      changeFrequency: "monthly",
      priority,
    },
    {
      url: new URL(en, siteUrl).toString(),
      alternates: {
        languages: {
          "id-ID": new URL(id, siteUrl).toString(),
          "en-US": new URL(en, siteUrl).toString(),
          "x-default": new URL(id, siteUrl).toString(),
        },
      },
      changeFrequency: "monthly",
      priority: priority * 0.9,
    },
  ]);
}
