"use client";

import { ArrowUp, Mail, Phone, MapPin, MessageCircle, MessageSquare, ShieldCheck, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Logo } from "@/components/ui/Logo";
import { SITE } from "@/data/content";
import { localize, localizeHref, useLanguage } from "@/components/providers/LanguageProvider";
import { useConsult } from "@/components/consult/ConsultProvider";

export function Footer() {
  const { language } = useLanguage();
  const { openConsult } = useConsult();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#07101E] text-slate-300 pt-10 pb-12 overflow-visible">
      
      {/* 1. Floating Consultation Card Overlapping the Top of the Footer */}
      <div className="relative -mt-28 sm:-mt-36 lg:-mt-40 mb-14 sm:mb-20 z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 25, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] bg-[#1E293B] border border-slate-700/80 shadow-2xl text-white transform-gpu"
        >
          
          {/* Subtle Organic Curve Watermark Accent matching reference */}
          <div className="absolute right-0 top-0 bottom-0 w-3/5 pointer-events-none opacity-[0.06] overflow-hidden flex items-center justify-end select-none">
            <svg viewBox="0 0 500 500" className="w-[620px] h-[620px] text-white fill-current">
              <path d="M250,0 C380,80 450,220 420,350 C390,480 280,520 150,470 C20,420 -30,290 10,160 C50,30 120,-80 250,0 Z" />
            </svg>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 items-end">
            
            {/* Left Column: Photo of Consultant with Headset gesturing right (Large & Towering) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-start items-end pl-0 lg:pl-6 overflow-hidden">
              <div className="relative w-[340px] sm:w-[400px] lg:w-[460px] h-[340px] sm:h-[400px] lg:h-[440px] -mb-1">
                <Image
                  src="/images/tatanala-support-consultant-cutout.png"
                  alt={localize("Konsultan Layanan Tatanala", language)}
                  fill
                  sizes="(max-width: 640px) 340px, (max-width: 1024px) 400px, 460px"
                  className="object-contain object-bottom select-none"
                  priority
                />
              </div>
            </div>

            {/* Right Column: Copy, Pill Button & Micro-copy */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-14 text-center lg:text-left flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl lg:text-[2.6rem] font-extrabold text-white tracking-tight leading-tight">
                {localize("Masih bertahan dengan sistem yang rumit?", language)}
              </h2>
              
              <p className="mt-3 text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
                {localize("Jangan sampai terlambat, beralih ke solusi digital Tatanala sekarang!", language)}
              </p>

              {/* White Pill Consultation CTA Button */}
              <div className="mt-6 sm:mt-7 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                <button
                  type="button"
                  onClick={() => openConsult("banner-footer")}
                  className="inline-flex items-center justify-center gap-2.5 rounded-full bg-white hover:bg-slate-100 text-slate-900 px-8 py-3.5 text-sm sm:text-base font-bold shadow-xl transition-all duration-200 cursor-pointer hover:scale-[1.02]"
                >
                  <MessageSquare className="h-4 w-4 text-blue-600" />
                  <span>{localize("Konsultasi Sekarang!", language)}</span>
                </button>
              </div>

              <p className="mt-3.5 text-xs sm:text-[13px] text-slate-400 font-medium">
                {localize("Dapatkan penawaran menarik & pendampingan teknis penuh", language)}
              </p>
            </div>

          </div>

        </motion.div>
      </div>

      {/* 2. Main Multi-Column Sitemap Grid (Matching the Reference Layout) */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Brand Bar */}
        <div className="pb-10 mb-10 border-b border-slate-800 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div>
            <Logo tone="dark" />
            <p className="mt-2 text-sm text-slate-400 max-w-md">
              {localize("Software House & Konsultan Rekayasa Sistem Digital: Solusi website bisnis profesional, sistem operasional custom, dan dashboard laporan otomatis.", language)}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-300">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-blue-400 shrink-0" /> {SITE.address}
            </span>
            <span className="hidden sm:inline text-slate-600">&bull;</span>
            <span className="flex items-center gap-1.5">
              <Mail className="h-4 w-4 text-blue-400 shrink-0" /> {SITE.email}
            </span>
            <span className="hidden sm:inline text-slate-600">&bull;</span>
            <span className="flex items-center gap-1.5">
              <Phone className="h-4 w-4 text-blue-400 shrink-0" /> {SITE.whatsappDisplay}
            </span>
          </div>
        </div>

        {/* Sitemap 4-Column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-12 border-b border-slate-800/80 text-left">
          
          {/* Col 1: TENTANG */}
          <div>
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white mb-4">
              {localize("Tentang", language)}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li>
                <Link href={localizeHref("/tentang-kami", language)} className="hover:text-white transition-colors">{localize("Tentang Kami", language)}</Link>
              </li>
              <li>
                <Link href={localizeHref("/tentang-kami", language)} className="hover:text-white transition-colors">Company Profile</Link>
              </li>
              <li>
                <Link href={localizeHref("/portofolio", language)} className="hover:text-white transition-colors">{localize("Portofolio & Klien", language)}</Link>
              </li>
              <li>
                <Link href={localizeHref("/kontak", language)} className="hover:text-white transition-colors">{localize("Hubungi Kami", language)}</Link>
              </li>
            </ul>
          </div>

          {/* Col 2: WEBSITE & APLIKASI */}
          <div>
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white mb-4">
              {localize("Website & Aplikasi", language)}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li>
                <Link href={localizeHref("/layanan", language)} className="hover:text-white transition-colors">{localize("Portal Bisnis Korporasi", language)}</Link>
              </li>
              <li>
                <Link href={localizeHref("/layanan", language)} className="hover:text-white transition-colors">{localize("Web App Kustom", language)}</Link>
              </li>
              <li>
                <Link href={localizeHref("/layanan", language)} className="hover:text-white transition-colors">{localize("Optimasi SEO & Performa Web", language)}</Link>
              </li>
              <li>
                <Link href={localizeHref("/layanan", language)} className="hover:text-white transition-colors">{localize("Integrasi API & Cloud", language)}</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: APLIKASI BISNIS ERP */}
          <div>
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white mb-4">
              {localize("Aplikasi Bisnis ERP", language)}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li>
                <Link href={localizeHref("/layanan", language)} className="hover:text-white transition-colors">{localize("Keuangan & Petty Cash", language)}</Link>
              </li>
              <li>
                <Link href={localizeHref("/layanan", language)} className="hover:text-white transition-colors">{localize("Manajemen Stok & Gudang", language)}</Link>
              </li>
              <li>
                <Link href={localizeHref("/layanan", language)} className="hover:text-white transition-colors">{localize("HRIS & Absensi Pegawai", language)}</Link>
              </li>
              <li>
                <Link href={localizeHref("/layanan", language)} className="hover:text-white transition-colors">{localize("Dashboard Eksekutif", language)}</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: APLIKASI E-GOVERNMENT */}
          <div>
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white mb-4">
              {localize("Aplikasi E-Government", language)}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li>
                <Link href={localizeHref("/layanan", language)} className="hover:text-white transition-colors">{localize("Website & Portal Pemda", language)}</Link>
              </li>
              <li>
                <Link href={localizeHref("/portofolio", language)} className="hover:text-white transition-colors">{localize("Sistem Pengaduan LAPOR", language)}</Link>
              </li>
              <li>
                <Link href={localizeHref("/layanan", language)} className="hover:text-white transition-colors">{localize("e-Data Sektoral & Statistik", language)}</Link>
              </li>
              <li>
                <Link href={localizeHref("/layanan", language)} className="hover:text-white transition-colors">{localize("Disposisi Antar-Dinas", language)}</Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-400">
          <p>&copy; 2026 Tatanala. {localize("Menata Sistem, Menuntaskan Kendala. Seluruh hak cipta dilindungi undang-undang.", language)}</p>
          
          <div className="flex items-center gap-6">
            <Link href={localizeHref("/tentang-kami", language)} className="hover:text-white transition-colors">{localize("SLA & Garansi", language)}</Link>
            <Link href={localizeHref("/tentang-kami", language)} className="hover:text-white transition-colors">{localize("Keamanan Kode", language)}</Link>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label={localize("Kembali ke atas", language)}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-800 bg-slate-900/60 text-slate-400 hover:text-white hover:border-slate-700 transition-colors ml-2 cursor-pointer"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>

      </div>

      {/* Floating WhatsApp Quick Action Button (Bottom Right) */}
      <a
        href={`https://wa.me/${SITE.whatsapp}?text=Halo%20Tatanala,%20saya%20ingin%20konsultasi%20kebutuhan%20software`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={localize("Hubungi WhatsApp Tatanala", language)}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white text-[#25D366]" />
      </a>

    </footer>
  );
}
