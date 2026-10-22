import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Services } from "@/components/sections/Services";
import { BusinessProcessGuarantee } from "@/components/sections/BusinessProcessGuarantee";
import { PreFooterSupportBanner } from "@/components/sections/PreFooterSupportBanner";
import { Faq } from "@/components/sections/Faq";

export const metadata: Metadata = {
  title: "Layanan & Solusi Rekayasa Software | Tatanala",
  description:
    "Solusi software bisnis terarah: website & portal profil profesional, sistem informasi operasional custom, manajemen stok & transaksi, dan dashboard monitoring laporan otomatis.",
  keywords: [
    "Software House Indonesia",
    "Sistem Informasi Bisnis",
    "Dashboard Laporan Otomatis",
    "Pembuatan Website Profesional",
    "Sistem Operasional Custom",
    "Konsultan IT Indonesia",
  ],
};

export default function LayananPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 sm:pt-36 bg-[#F8FAFC]">
        {/* Page Header */}
        <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200/80 px-4 py-1.5 rounded-full">
              Katalog Layanan &amp; Solusi Sistem
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mt-5 max-w-3xl mx-auto">
              Solusi Rekayasa Software yang Mudah Dipahami &amp; Tepat Sasaran
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed">
              Membantu bisnis dan instansi merapikan alur kerja dari manual ke sistem digital yang rapi, akurat, dan mudah digunakan oleh seluruh tim operasional Anda.
            </p>
          </div>
        </section>

        {/* Detailed Services Breakdown */}
        <Services />

        {/* Business Process & Guarantee */}
        <BusinessProcessGuarantee />

        {/* FAQ */}
        <Faq />

        {/* Pre-footer Call to Action */}
        <PreFooterSupportBanner />
      </main>
      <Footer />
    </>
  );
}
