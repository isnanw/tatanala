import type { Metadata } from "next";
import { Footer } from "@/components/sections/Footer";
import { Services } from "@/components/sections/Services";
import { SubpageHero } from "@/components/sections/SubpageHero";
import { BusinessProcessGuarantee } from "@/components/sections/BusinessProcessGuarantee";
import { Faq } from "@/components/sections/Faq";

export const metadata: Metadata = {
  alternates: {
    canonical: "/layanan",
    languages: { "id-ID": "/layanan", "en-US": "/en/services", "x-default": "/layanan" },
  },
  title: "Jasa Software & IT Solutions | Custom Business Systems - Vieria Techno",
  description:
    "Solusi software bisnis terarah: website & portal profil profesional, sistem informasi operasional custom, manajemen stok & transaksi, dan dashboard monitoring laporan otomatis.",
  keywords: [
    "Software House Indonesia",
    "Sistem Informasi Bisnis",
    "Dashboard Laporan Otomatis",
    "Pembuatan Website Profesional",
    "Sistem Operasional Custom",
    "Konsultan IT Indonesia",
    "jasa software Indonesia",
    "pembuatan sistem informasi bisnis",
    "custom software development",
    "business process automation software",
    "enterprise software solutions",
    "custom business systems Indonesia",
  ],
  openGraph: {
    title: "Layanan & Solusi Rekayasa Software | Vieria Techno",
    description:
      "Solusi software bisnis terarah: website & portal profil profesional, sistem informasi operasional custom, manajemen stok & transaksi, dan dashboard monitoring laporan otomatis.",
    url: "/layanan",
    locale: "id_ID",
    alternateLocale: ["en_US"],
    type: "website",
    siteName: "Vieria Techno IT Solutions",
    images: [
      {
        url: "/images/og-server.jpg",
        secureUrl: "https://vieria.recehku.id/images/og-server.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Layanan & Solusi Sistem Vieria Techno",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Layanan & Solusi Rekayasa Software | Vieria Techno",
    description:
      "Solusi software bisnis terarah: website & portal profil profesional, sistem informasi operasional custom, dan dashboard monitoring otomatis.",
    images: ["/images/og-server.jpg"],
  },
};

export default function LayananPage() {
  return (
    <>
      <main className="bg-[#F8FAFC]">
        {/* Modern Executive Subpage Hero with 3 Core Pillar Points */}
        <SubpageHero
          breadcrumb="Layanan &amp; Solusi"
          badge="VIERIA TECHNO — SYSTEM INTEGRITY"
          title="Rooted in Strength, Growing Through Innovation"
          description="Fondasi sistem yang tangguh untuk bisnis yang siap tumbuh. Kami memadukan keandalan rekayasa sistem informasi, website profil berwibawa, dan strategi akuisisi pasar (SEO &amp; Ads)."
          headerBgImage="/images/server.jpg"
          points={[
            {
              iconName: "boxes",
              badge: "The Strong Roots",
              title: "Sistem Informasi & Otomasi",
              description: "Merapikan 'akar' operasional di belakang layar (stok, keuangan, rekap kerja) dengan prinsip System Integrity—kuat, stabil, dan konsisten.",
              actionLabel: "Pelajari Sistem",
              actionHref: "#layanan",
            },
            {
              iconName: "globe",
              badge: "The Resilient Stem",
              title: "Website Company Profile",
              description: "Membangun wajah perusahaan yang berwibawa, cepat, dan kredibel di mata mitra bisnis, investor, maupun tender.",
              actionLabel: "Lihat Deliverables",
              actionHref: "#layanan",
            },
            {
              iconName: "rocket",
              badge: "Endless Growth",
              title: "SEO Organik & Digital Ads",
              description: "Membuka keran prospek dan penjualan baru secara terukur setelah fondasi web dan sistem internal klien siap.",
              actionLabel: "Konsultasikan Skema",
              consultTopic: "layanan-kustom",
            },
          ]}
        />

        {/* Detailed Services Breakdown */}
        <Services />

        {/* Business Process & Guarantee */}
        <BusinessProcessGuarantee />

        {/* FAQ */}
        <Faq />
      </main>
      <Footer />
    </>
  );
}
