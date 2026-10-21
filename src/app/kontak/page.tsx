import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ContactHero } from "@/components/sections/ContactHero";
import { BusinessProcessGuarantee } from "@/components/sections/BusinessProcessGuarantee";
import { Faq } from "@/components/sections/Faq";
import { PreFooterSupportBanner } from "@/components/sections/PreFooterSupportBanner";

export const metadata: Metadata = {
  title: "Hubungi Kami & Konsultasi Kebutuhan Sistem | Tatanala",
  description:
    "Hubungi tim insinyur sistem informasi Tatanala untuk konsultasi teknis awal, audit alur kerja bisnis, atau pembuatan sistem informasi kustom berbasis di Yogyakarta.",
  keywords: [
    "Kontak Tatanala",
    "Konsultasi Software House",
    "Alamat Studio Tatanala Yogyakarta",
    "Jasa Pembuatan Sistem Informasi",
    "Audit Kebutuhan Sistem",
  ],
};

export default function KontakPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Dedicated Full-Scale Contact & SRS Form Section */}
        <ContactHero />

        {/* Business Process & SLA Guarantee */}
        <BusinessProcessGuarantee />

        {/* Formal Corporate FAQ */}
        <Faq />

        {/* Pre-footer Support Banner */}
        <PreFooterSupportBanner />
      </main>
      <Footer />
    </>
  );
}
