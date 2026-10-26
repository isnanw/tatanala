import type { Metadata } from "next";
import { Footer } from "@/components/sections/Footer";
import { ContactHero } from "@/components/sections/ContactHero";
import { SubpageHero } from "@/components/sections/SubpageHero";
import { BusinessProcessGuarantee } from "@/components/sections/BusinessProcessGuarantee";
import { Faq } from "@/components/sections/Faq";
import { SITE } from "@/data/content";

export const metadata: Metadata = {
  alternates: {
    canonical: "/kontak",
    languages: { "id-ID": "/kontak", "en-US": "/en/contact", "x-default": "/kontak" },
  },
  title: "Kontak & Konsultasi IT | Software Development Indonesia - Vieria Techno",
  description:
    "Hubungi tim insinyur sistem informasi Vieria Techno untuk konsultasi teknis awal, audit alur kerja bisnis, atau pembuatan sistem informasi kustom dan sistem siap pakai.",
  keywords: [
    "Kontak Vieria Techno",
    "Konsultasi Software House",
    "Jasa Pembuatan Sistem Informasi",
    "Audit Kebutuhan Sistem",
    "Konsultan IT Indonesia",
    "IT consultation Indonesia",
    "software development consultation",
    "hire software developers Indonesia",
    "business systems consultation",
  ],
  openGraph: {
    title: "Kontak & Konsultasi IT | Vieria Techno Indonesia",
    description:
      "Hubungi tim insinyur sistem informasi Vieria Techno untuk konsultasi teknis awal, audit alur kerja bisnis, atau pembuatan sistem informasi kustom dan sistem siap pakai.",
    url: "/kontak",
    locale: "id_ID",
    alternateLocale: ["en_US"],
    type: "website",
    siteName: "Vieria Techno IT Solutions",
    images: [
      {
        url: "/images/server.jpg",
        width: 1200,
        height: 630,
        alt: "Konsultasi IT Vieria Techno",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kontak & Konsultasi IT | Vieria Techno Indonesia",
    description:
      "Hubungi tim insinyur sistem informasi Vieria Techno untuk konsultasi teknis awal, audit alur kerja bisnis, atau pembuatan sistem informasi kustom.",
    images: ["/images/server.jpg"],
  },
};

export default function KontakPage() {
  return (
    <>
      <main className="bg-[#F8FAFC]">
        {/* Modern Executive Subpage Hero with 3 Fast Contact Points */}
        <SubpageHero
          breadcrumb="Hubungi Kami"
          badge="Pusat Konsultasi &amp; Komunikasi Resmi"
          title="Konsultasi Teknis & Jadwalkan Kebutuhan Sistem Anda"
          description="Sampaikan permasalahan alur data, integrasi sistem, atau pengadaan proyek kelembagaan Anda. Insinyur senior kami menyusun telaah kebutuhan sistem (SRS) secara komprehensif."
          headerBgImage="/images/support-consultant.jpg"
          points={[
            {
              iconName: "message",
              badge: "Respon Cepat",
              title: "Hotline WhatsApp Resmi",
              description: "Konsultasi langsung dengan tim insinyur via chat pesan instan untuk respon tanggap dan diskusi awal proyek.",
              actionLabel: "Chat WhatsApp Sekarang",
              actionHref: `https://wa.me/${SITE.whatsapp}?text=Halo%20Vieria%20Techno,%20saya%20ingin%20konsultasi%20kebutuhan%20sistem`,
            },
            {
              iconName: "fileCheck",
              badge: "Pengajuan SRS",
              title: "Formulir Spesifikasi Teknis",
              description: "Kirimkan ruang lingkup sistem, kendala alur data bisnis, dan estimasi waktu untuk telaah awal dalam 1x24 jam.",
              actionLabel: "Lompat ke Formulir",
              actionHref: "#konsultasi-form",
            },
            {
              iconName: "mail",
              badge: "Korespondensi",
              title: "Surel Resmi & Perjanjian NDA",
              description: "Pengiriman draf dokumen penawaran resmi, undangan tender kelembagaan, serta pertukaran draf kerahasiaan bermaterai.",
              actionLabel: "Kirim Email Resmi",
              actionHref: `mailto:${SITE.email}`,
            },
          ]}
        />

        {/* Dedicated Full-Scale Contact & SRS Form Section */}
        <ContactHero />

        {/* Business Process & SLA Guarantee */}
        <BusinessProcessGuarantee />

        {/* Formal Corporate FAQ */}
        <Faq />
      </main>
      <Footer />
    </>
  );
}
