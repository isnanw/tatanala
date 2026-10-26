import type { Metadata } from "next";
import { Footer } from "@/components/sections/Footer";
import { ProjectTabbedShowcase } from "@/components/sections/ProjectTabbedShowcase";
import { SubpageHero } from "@/components/sections/SubpageHero";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { ExecutiveTestimonial } from "@/components/sections/ExecutiveTestimonial";

export const metadata: Metadata = {
  alternates: {
    canonical: "/portofolio",
    languages: { "id-ID": "/portofolio", "en-US": "/en/portfolio", "x-default": "/portofolio" },
  },
  title: "Portofolio Software & IT Case Studies | Vieria Techno Indonesia",
  description:
    "Eksplorasi portofolio implementasi sistem informasi, antrean publik klinik, ERP pergudangan, dan web profil korporat yang telah dirilis Vieria Techno.",
  keywords: [
    "Portofolio Software House",
    "Studi Kasus Sistem Informasi",
    "Implementasi ERP Multi-Cabang",
    "Aplikasi Antrean Klinik",
    "Proyek Web Perusahaan",
    "software development portfolio",
    "IT project case studies",
    "ERP implementation case study",
    "business software portfolio Indonesia",
    "enterprise IT projects",
  ],
  openGraph: {
    title: "Portofolio Rekayasa Software & Studi Kasus | Vieria Techno",
    description:
      "Eksplorasi portofolio implementasi sistem informasi, antrean publik klinik, ERP pergudangan, dan web profil korporat yang telah dirilis Vieria Techno.",
    url: "/portofolio",
    locale: "id_ID",
    alternateLocale: ["en_US"],
    type: "website",
    siteName: "Vieria Techno IT Solutions",
    images: [
      {
        url: "/images/og-share.jpg",
        secureUrl: "https://vieria.recehku.id/images/og-share.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Portofolio Proyek Vieria Techno",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portofolio Rekayasa Software & Studi Kasus | Vieria Techno",
    description:
      "Eksplorasi portofolio implementasi sistem informasi, antrean publik klinik, ERP pergudangan, dan web profil korporat yang telah dirilis Vieria Techno.",
    images: ["/images/og-share.jpg"],
  },
};

export default function PortofolioPage() {
  return (
    <>
      <main className="bg-[#F8FAFC]">
        {/* Modern Executive Subpage Hero with 3 Sector Highlights */}
        <SubpageHero
          breadcrumb="Portofolio Proyek"
          badge="Studi Kasus &amp; Bukti Keberhasilan"
          title="Portofolio Rekayasa Software & Sistem Informasi"
          description="Telusuri bagaimana arsitektur perangkat lunak Vieria Techno memecahkan hambatan operasional nyata, meningkatkan efisiensi proses, dan memperkuat tata kelola digital klien."
          headerBgImage="/images/client-training.jpg"
          points={[
            {
              iconName: "wallet",
              badge: "Kesehatan & SIMRS",
              title: "Sistem Keuangan Petty Cash RS",
              description: "Otomasi pencatatan kas kecil multi-poli rumah sakit dengan audit trail akuntabel & rekonsiliasi bebas selisih data.",
              actionLabel: "Lihat Showcase Proyek",
              actionHref: "#portofolio-showcase",
            },
            {
              iconName: "landmark",
              badge: "Pemerintahan & PPID",
              title: "Portal Pengaduan & Aduan LAPOR",
              description: "Platform aspirasi publik terintegrasi dengan penomoran tiket transparan, disposisi antar-dinas, & verifikasi berkas.",
              actionLabel: "Buka Studi Kasus",
              actionHref: "#portofolio-showcase",
            },
            {
              iconName: "shopping",
              badge: "Retail & E-Commerce",
              title: "Platform Luxury Florist",
              description: "E-Commerce headless berkecepatan tinggi dengan drawer cart instan tanpa reload serta navigasi taksonomi botani dinamis.",
              actionLabel: "Eksplorasi Fitur",
              actionHref: "#portofolio-showcase",
            },
          ]}
        />

        {/* Tabbed Interactive Showcase */}
        <ProjectTabbedShowcase />

        {/* Comprehensive Case Studies */}
        <CaseStudies />

        {/* Executive Testimonial */}
        <ExecutiveTestimonial />
      </main>
      <Footer />
    </>
  );
}
