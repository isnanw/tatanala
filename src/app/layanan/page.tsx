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
        url: "/images/server.jpg",
        width: 1200,
        height: 630,
        alt: "Layanan & Solusi Sistem Vieria Techno",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Layanan & Solusi Rekayasa Software | Vieria Techno",
    description:
      "Solusi software bisnis terarah: website & portal profil profesional, sistem informasi operasional custom, dan dashboard monitoring otomatis.",
    images: ["/images/server.jpg"],
  },
};

export default function LayananPage() {
  return (
    <>
      <main className="bg-[#F8FAFC]">
        {/* Modern Executive Subpage Hero with 3 Core Pillar Points */}
        <SubpageHero
          breadcrumb="Layanan &amp; Solusi"
          badge="Katalog Layanan &amp; Solusi Sistem"
          title="Solusi Rekayasa Software yang Mudah Dipahami & Tepat Sasaran"
          description="Membantu bisnis dan instansi merapikan alur kerja manual menjadi sistem digital yang rapi, transparan, dan mudah digunakan oleh seluruh tim operasional."
          headerBgImage="/images/server.jpg"
          points={[
            {
              iconName: "globe",
              badge: "Pilar Hulu",
              title: "Website & Portal Profesional",
              description: "Situs profil berbobot dan siap tender. Menampilkan legalitas, portofolio terverifikasi, dan cepat dimuat di segala perangkat.",
              actionLabel: "Lihat Rincian Deliverables",
              actionHref: "#layanan",
            },
            {
              iconName: "boxes",
              badge: "Pilar Tengah",
              title: "Sistem Informasi & Operasional",
              description: "100% dirancang sesuai alur nyata & SOP unik bisnis Anda. Mulai dari sistem HRD, presensi, hingga transaksi & antrean realtime.",
              actionLabel: "Pelajari Alur Sistem",
              actionHref: "#layanan",
            },
            {
              iconName: "rocket",
              badge: "Pilar Hilir",
              title: "Dashboard Laporan & Monitoring",
              description: "Pusat visualisasi data otomatis. Rekap analitik performa cabang, stok, dan mutasi tanpa kompilasi spreadsheet manual.",
              actionLabel: "Konsultasikan Kebutuhan",
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
