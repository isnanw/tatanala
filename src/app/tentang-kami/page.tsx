import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Leadership } from "@/components/sections/Leadership";
import { NationalVision } from "@/components/sections/NationalVision";
import { BusinessProcessGuarantee } from "@/components/sections/BusinessProcessGuarantee";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { PreFooterSupportBanner } from "@/components/sections/PreFooterSupportBanner";

export const metadata: Metadata = {
  title: "Tentang Kami & Rekayasa Software Terpercaya | Tatanala",
  description:
    "Mengenal Tatanala: studio rekayasa perangkat lunak dan penyedia solusi sistem informasi berbasis di Yogyakarta yang siap melayani sistem custom maupun platform siap pakai.",
  keywords: [
    "Tentang Tatanala",
    "Software House Yogyakarta",
    "Konsultan IT Terpercaya",
    "Solusi Sistem Informasi",
    "Studio Rekayasa Software",
  ],
};

export default function TentangKamiPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 sm:pt-36 bg-[#F8FAFC]">
        {/* Page Header */}
        <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200/80 px-4 py-1.5 rounded-full">
              Profil Studio Rekayasa &amp; Komitmen Teknis
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mt-5 max-w-3xl mx-auto">
              Membangun Kepercayaan Melalui Rekayasa Software yang Andal
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed">
              Berpusat di Yogyakarta, Tatanala hadir sebagai mitra rekayasa perangkat lunak bagi bisnis dan organisasi yang mengutamakan kerapian kode, keamanan data, dan kedaulatan teknologi.
            </p>
          </div>
        </section>

        {/* National Digital Vision */}
        <NationalVision />

        {/* Leadership & Legal Standing */}
        <Leadership />

        {/* Business Process & Quality Guarantee */}
        <BusinessProcessGuarantee />

        {/* 5-Step Execution Methodology */}
        <ProcessTimeline />

        {/* Pre-footer Support */}
        <PreFooterSupportBanner />
      </main>
      <Footer />
    </>
  );
}
