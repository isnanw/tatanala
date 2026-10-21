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
    "Hubungi tim insinyur sistem informasi Tatanala untuk konsultasi teknis awal, audit alur kerja bisnis, atau pembuatan sistem informasi kustom dan sistem siap pakai.",
  keywords: [
    "Kontak Tatanala",
    "Konsultasi Software House",
    "Jasa Pembuatan Sistem Informasi",
    "Audit Kebutuhan Sistem",
    "Konsultan IT Indonesia",
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
