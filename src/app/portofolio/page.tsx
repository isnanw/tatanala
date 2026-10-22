import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ProjectTabbedShowcase } from "@/components/sections/ProjectTabbedShowcase";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { ExecutiveTestimonial } from "@/components/sections/ExecutiveTestimonial";
import { PreFooterSupportBanner } from "@/components/sections/PreFooterSupportBanner";

export const metadata: Metadata = {
  title: "Portofolio & Studi Kasus Proyek IT | Tatanala",
  description:
    "Eksplorasi portofolio implementasi sistem informasi, antrean publik klinik, ERP pergudangan, dan web profil korporat yang telah dirilis Tatanala.",
  keywords: [
    "Portofolio Software House",
    "Studi Kasus Sistem Informasi",
    "Implementasi ERP Multi-Cabang",
    "Aplikasi Antrean Klinik",
    "Proyek Web Perusahaan",
  ],
};

export default function PortofolioPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 sm:pt-36 bg-[#F8FAFC]">
        {/* Page Header */}
        <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200/80 px-4 py-1.5 rounded-full">
              Studi Kasus &amp; Bukti Keberhasilan
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mt-5 max-w-3xl mx-auto">
              Portofolio Rekayasa Software &amp; Sistem Informasi
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed">
              Telusuri bagaimana arsitektur perangkat lunak Tatanala memecahkan hambatan operasional nyata, meningkatkan akurasi data 100%, dan memperkuat kelembagaan klien.
            </p>
          </div>
        </section>

        {/* Tabbed Interactive Showcase */}
        <ProjectTabbedShowcase />

        {/* Comprehensive Case Studies */}
        <CaseStudies />

        {/* Executive Testimonial */}
        <ExecutiveTestimonial />

        {/* Support Banner */}
        <PreFooterSupportBanner />
      </main>
      <Footer />
    </>
  );
}
