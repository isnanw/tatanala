"use client";

import { motion } from "framer-motion";
import { 
  ChevronRight, 
  ShieldCheck, 
  Zap, 
  Layers, 
  Building2, 
  Activity,
  ArrowUpRight,
  Boxes
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useConsult } from "@/components/consult/ConsultProvider";
import { ShapeDivider } from "@/components/ui/ShapeDivider";
import { localize, localizeHref, useLanguage } from "@/components/providers/LanguageProvider";

export function NationalVision() {
  const { openConsult } = useConsult();
  const { language } = useLanguage();

  return (
    <section id="identitas" className="relative pt-14 sm:pt-20 pb-20 sm:pb-28 bg-white overflow-hidden">
      {/* Subtle ambient light blur */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 left-0 w-[550px] h-[550px] bg-gradient-to-br from-emerald-100/30 via-teal-50/20 to-transparent blur-3xl rounded-full" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -bottom-40 right-0 w-[450px] h-[450px] bg-gradient-to-tl from-emerald-100/20 via-slate-50 to-transparent blur-3xl rounded-full" 
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Showcase with Interactive Animated Floating Cards */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-5 relative order-2 lg:order-1 transform-gpu"
          >
            {/* Visual Container */}
            <div className="relative mx-auto max-w-md rounded-3xl overflow-hidden border border-slate-200/90 bg-white shadow-2xl shadow-slate-200/70 group">
              <div className="relative aspect-[4/3] w-full bg-slate-100 overflow-hidden">
                <Image
                  src="/images/team-office.jpg"
                  alt={localize("Kolaborasi Tim Rekayasa Software Vieria Techno", language)}
                  fill
                  priority
                  loading="eager"
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60" />
              </div>

              {/* Bottom Card Information */}
              <div className="p-5 sm:p-6 pb-8 sm:pb-9 bg-white border-t border-slate-100">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                  <Building2 className="h-4 w-4 text-emerald-600" />
                  <span>{localize("Studio Rekayasa Software", language)}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed max-w-[85%]">
                  {localize("Melayani konsultasi, rekayasa, dan implementasi sistem informasi terintegrasi untuk bisnis di seluruh Indonesia.", language)}
                </p>
              </div>
            </div>

            {/* Interactive Animated Floating Badge 1: Top Left - Gold Touch */}
            <motion.div
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="absolute -top-5 -left-3 sm:-left-5 bg-white/95 backdrop-blur-md p-3 sm:p-3.5 rounded-2xl border border-amber-200/90 shadow-xl shadow-amber-500/10 flex items-center gap-3 cursor-pointer z-10"
            >
              <div className="h-10 w-10 rounded-xl bg-amber-50 text-amber-600 border border-amber-200/60 flex items-center justify-center font-bold shrink-0">
                <Activity className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900 leading-snug">{localize("99.9% Uptime SLA", language)}</p>
                <p className="text-[11px] text-slate-500 mt-0.5">{localize("Performa Server Stabil & Cepat", language)}</p>
              </div>
            </motion.div>

            {/* Interactive Animated Floating Badge 2: Lowered so it doesn't cover card text */}
            <motion.div
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="absolute -bottom-6 sm:-bottom-7 right-2 sm:right-4 bg-white/95 backdrop-blur-md p-3 sm:p-3.5 rounded-2xl border border-emerald-200/90 shadow-xl shadow-emerald-600/10 flex items-center gap-3 cursor-pointer z-10"
            >
              <div className="h-10 w-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold shrink-0">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">{localize("Standar Keamanan Data", language)}</p>
                <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">{localize("Enkripsi Data • Proteksi Multi-Lapis", language)}</p>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Column: Simplified Narrative, Flexible Value Props & CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-7 order-1 lg:order-2 transform-gpu"
          >
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center rounded-full bg-emerald-50/90 border border-emerald-200/90 px-3.5 py-1 text-xs sm:text-sm font-semibold text-emerald-800 shadow-sm mb-4">
              <span>{localize("Startup Teknologi & Rekayasa Software", language)}</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-extrabold text-slate-900 tracking-tight leading-[1.2]">
              {localize("Partner Rekayasa Software untuk Akselerasi Bisnis Anda", language)}
            </h2>

            {/* Concise Narrative */}
            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              {localize("Vieria Techno mengembangkan perangkat lunak dan sistem informasi modern untuk membantu bisnis mengotomasi proses operasional, meningkatkan efisiensi kerja, dan siap bertumbuh lebih cepat.", language)}
            </p>

            {/* Key Advantages Grid (Updated: Solusi Fleksibel replacing 100% Hak Milik Klien) */}
            <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-100">
              <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:border-emerald-200 transition-colors">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100/70 text-emerald-700 mb-3">
                  <Layers className="h-5 w-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">{localize("Arsitektur Scalable", language)}</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {localize("Fondasi sistem modern berbasis cloud yang cepat, andal, dan siap berkembang.", language)}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:border-emerald-200 transition-colors">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100/70 text-emerald-600 mb-3">
                  <Boxes className="h-5 w-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">{localize("Solusi Fleksibel", language)}</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {localize("Mendukung pengembangan kustom sesuai alur kerja maupun sistem siap pakai.", language)}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:border-amber-200 transition-colors">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-100/70 text-amber-700 mb-3">
                  <Zap className="h-5 w-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">{localize("Kolaborasi Tangkas", language)}</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {localize("Siklus pengerjaan terarah, komunikasi transparan, dan respon teknis cepat.", language)}
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => openConsult("identitas-startup")}
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3.5 text-sm sm:text-base font-bold transition-all shadow-md shadow-emerald-600/25 cursor-pointer"
              >
                <span>{localize("Konsultasi Kebutuhan Sistem", language)}</span>
                <ChevronRight className="h-4 w-4" />
              </button>
              <Link
                href={localizeHref("/tentang-kami", language)}
                className="inline-flex items-center gap-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 px-5 py-3.5 text-sm sm:text-base font-bold transition-all"
              >
                <span>{localize("Profil Selengkapnya", language)}</span>
                <ArrowUpRight className="h-4 w-4 text-slate-500" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Smooth Shape Divider transitioning to the next section */}
      <ShapeDivider
        variant="curve"
        position="bottom"
        nextBgColor="#F8FAFC"
        secondaryColor="rgba(37, 99, 235, 0.04)"
      />
    </section>
  );
}




