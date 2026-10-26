"use client";

import { motion, type Variants } from "framer-motion";
import { 
  MessageCircle, 
  ArrowRight, 
  ShieldCheck, 
  Headphones, 
  Database, 
  Cloud, 
  Zap, 
  Layers,
  Cpu 
} from "lucide-react";
import Image from "next/image";
import { useConsult } from "@/components/consult/ConsultProvider";
import { PartnerLogos } from "@/components/ui/PartnerLogos";
import { localize, useLanguage } from "@/components/providers/LanguageProvider";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.04 },
  },
};

const itemAnim: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export function Hero() {
  const { language } = useLanguage();
  const { openConsult } = useConsult();

  const handleScrollToProcess = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("proses-bisnis");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="top"
      aria-label={localize("Software Berkualitas Dibuat Khusus Sesuai Kebutuhan Anda - Vieria Techno", language)}
      className="relative overflow-hidden bg-gradient-to-br from-[#EEF6FF] via-[#F8FAFC] to-white flex flex-col justify-between min-h-screen pt-28 sm:pt-22 lg:pt-24"
    >
      {/* 1. Animated Drifting Background Mesh Orbs (Optimized: static on mobile, GPU-accelerated on desktop) */}
      {/* Mobile Static High-Performance Gradients */}
      <div
        className="sm:hidden absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-tr from-emerald-400/20 via-teal-200/15 to-transparent rounded-full blur-2xl pointer-events-none -z-0"
        aria-hidden="true"
      />
      <div
        className="sm:hidden absolute top-1/3 -left-10 w-[260px] h-[260px] bg-gradient-to-br from-teal-300/20 via-emerald-200/15 to-transparent rounded-full blur-2xl pointer-events-none -z-0"
        aria-hidden="true"
      />

      {/* Desktop Fluid GPU Mesh Orbs */}
      <motion.div
        animate={{ 
          x: [0, 30, -20, 0], 
          y: [0, -25, 15, 0],
          scale: [1, 1.08, 0.96, 1] 
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="hidden sm:block absolute top-10 right-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-emerald-400/20 via-teal-300/15 to-amber-200/10 rounded-full blur-3xl pointer-events-none -z-0 transform-gpu will-change-transform"
      />
      
      <motion.div
        animate={{ 
          x: [0, -25, 20, 0], 
          y: [0, 20, -15, 0],
          scale: [1, 1.1, 1] 
        }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        className="hidden sm:block absolute top-1/3 -left-20 w-[420px] h-[420px] bg-gradient-to-br from-teal-300/20 via-emerald-200/15 to-transparent rounded-full blur-3xl pointer-events-none -z-0 transform-gpu will-change-transform"
      />

      <div
        className="hidden sm:block absolute -top-10 left-1/2 -translate-x-1/2 w-[550px] h-[300px] bg-emerald-400/10 rounded-full blur-3xl pointer-events-none -z-0"
      />

      {/* 2. Floating Twinkling Tech Particle Constellations (Desktop only for zero mobile main-thread contention) */}
      <div className="hidden sm:block">
        <motion.div
          animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-28 left-1/4 h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-md shadow-emerald-400 pointer-events-none transform-gpu"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.25, 0.85, 0.25] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/2 left-[18%] h-2 w-2 rounded-full bg-teal-400 shadow-md shadow-teal-300 pointer-events-none transform-gpu"
        />
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-36 right-1/3 h-2 w-2 rounded-full bg-indigo-500 shadow-md shadow-indigo-300 pointer-events-none transform-gpu"
        />
      </div>

      {/* 3. Subtle Tech Dot Grid Pattern for modern texture */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(#2563EB_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.08] pointer-events-none [mask-image:radial-gradient(ellipse_75%_70%_at_50%_40%,#000_60%,transparent_100%)] -z-0" 
        aria-hidden="true"
      />

      {/* Main Hero Grid Content: Flexes to fill viewport cleanly */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-end">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-8 items-end h-full">
          
          {/* Left Column: Headline, Subtitle, CTA, & Trust Highlights */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="lg:col-span-6 xl:col-span-6 self-end pb-8 sm:pb-5 lg:pb-6 text-left"
          >

            {/* Direct Headline */}
            <motion.h1
              variants={itemAnim}
              className="font-sans text-3xl sm:text-4xl lg:text-[3.25rem] font-extrabold tracking-tight leading-[1.18] lg:leading-[1.14] text-slate-900"
            >
              {localize("Software Berkualitas Dibuat Khusus", language)}{" "}
              <span className="text-emerald-700 block mt-1">
                {localize("Sesuai Kebutuhan Anda", language)}
              </span>
            </motion.h1>

            {/* Direct Subtitle - HIG Body Text standard (16px to 18px) */}
            <motion.p
              variants={itemAnim}
              className="mt-3.5 sm:mt-4 text-base sm:text-lg text-slate-700 font-normal leading-relaxed max-w-xl"
            >
              {localize("Kami bantu susun alur sistem Anda, kembangkan sesuai kebutuhan, uji coba hingga siap pakai, dan dampingi penuh operasionalnya.", language)}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemAnim} className="mt-5 sm:mt-7 flex flex-wrap items-center gap-3 sm:gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={() => openConsult("diskusi-alur-kerja")}
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold shadow-lg shadow-emerald-600/25 transition-all duration-200 cursor-pointer"
              >
                <MessageCircle className="h-5 w-5" />
                <span>{localize("Konsultasikan Kebutuhan Sistem", language)}</span>
                <ArrowRight className="h-4 w-4" />
              </motion.button>

              <a
                href="#proses-bisnis"
                onClick={handleScrollToProcess}
                className="inline-flex items-center gap-1.5 text-sm sm:text-base font-bold text-slate-700 hover:text-emerald-700 px-3 py-2 transition-colors cursor-pointer"
              >
                <span>{localize("Pelajari Alur Kerja", language)}</span>
              </a>
            </motion.div>

            {/* 3 Langkah Alur Pengerjaan Transparan - Legible typography */}
            <motion.div
              variants={itemAnim}
              className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-slate-200/80"
            >
              <p className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-slate-600 mb-3">
                {localize("Alur Pengerjaan Jelas & Terarah:", language)}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                {/* Step 1 */}
                <div className="rounded-2xl bg-white/80 border border-slate-200/90 p-3 sm:p-3.5 shadow-xs hover:border-emerald-300 transition-colors">
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold items-center justify-center shrink-0">
                      1
                    </span>
                    <span className="text-sm font-bold text-slate-900 leading-snug">
                      {localize("Diskusi Kebutuhan", language)}
                    </span>
                  </div>
                  <p className="text-xs sm:text-[13px] text-slate-600 mt-1.5 leading-normal">
                    {localize("Petakan alur & kendala sistem tanpa biaya awal.", language)}
                  </p>
                </div>

                {/* Step 2 */}
                <div className="rounded-2xl bg-white/80 border border-slate-200/90 p-3 sm:p-3.5 shadow-xs hover:border-emerald-300 transition-colors">
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold items-center justify-center shrink-0">
                      2
                    </span>
                    <span className="text-sm font-bold text-slate-900 leading-snug">
                      {localize("Rancang & Uji", language)}
                    </span>
                  </div>
                  <p className="text-xs sm:text-[13px] text-slate-600 mt-1.5 leading-normal">
                    {localize("Dibuat persis SOP usaha & diuji bersama tim Anda.", language)}
                  </p>
                </div>

                {/* Step 3 */}
                <div className="rounded-2xl bg-white/80 border border-slate-200/90 p-3 sm:p-3.5 shadow-xs hover:border-emerald-300 transition-colors">
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold items-center justify-center shrink-0">
                      3
                    </span>
                    <span className="text-sm font-bold text-slate-900 leading-snug">
                      {localize("Pendampingan", language)}
                    </span>
                  </div>
                  <p className="text-xs sm:text-[13px] text-slate-600 mt-1.5 leading-normal">
                    {localize("Garansi teknis & panduan sampai beroperasi.", language)}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Model Image scaled to align head with 'Software Berkualitas' */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-6 xl:col-span-6 relative w-full h-[460px] sm:h-[520px] lg:h-[565px] xl:h-[600px] flex items-end justify-center lg:justify-end mt-2 lg:mt-0"
          >
            {/* 4. Halo Glow & Orbital Tech Rings Behind Talent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none -z-0">
              {/* Radiant Soft Center Glow */}
              <div className="w-[300px] h-[300px] sm:w-[440px] sm:h-[440px] rounded-full bg-gradient-to-tr from-emerald-400/20 via-teal-300/20 to-amber-400/15 blur-2xl sm:animate-pulse" />

              {/* Inner Rotating Dashed Orbit Ring with Satellite (Desktop only) */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="hidden sm:block absolute inset-0 m-auto w-[360px] h-[360px] sm:w-[420px] sm:h-[420px] rounded-full border border-emerald-500/30 border-dashed transform-gpu will-change-transform"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-lg shadow-emerald-400/80" />
              </motion.div>

              {/* Outer Counter-Rotating Orbit Ring (Desktop only) */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
                className="hidden sm:block absolute inset-0 m-auto w-[460px] h-[460px] sm:w-[520px] sm:h-[520px] rounded-full border border-teal-400/30 transform-gpu will-change-transform"
              >
                <div className="absolute bottom-6 right-12 h-2 w-2 rounded-full bg-amber-400 shadow-md shadow-amber-300" />
              </motion.div>
            </div>

            {/* 5. Floating Tech Nodes orbiting the talent */}
            {/* Node A: Data Terpusat (Upper-left behind shoulder) */}
            <motion.div
              animate={{ y: [0, -8, 0], x: [0, 4, 0] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-20 sm:top-24 -left-2 sm:-left-6 lg:-left-10 z-20 hidden sm:flex items-center gap-2.5 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-emerald-200/90 shadow-xl shadow-emerald-600/10 pointer-events-none transform-gpu will-change-transform"
            >
              <div className="h-7 w-7 rounded-lg bg-emerald-50 text-emerald-700 grid place-items-center shrink-0">
                <Database className="h-4 w-4" />
              </div>
              <div className="text-left">
                <p className="text-[11px] font-bold text-slate-900 leading-tight">{localize("Data Terpusat & Rapi", language)}</p>
                <p className="text-[10px] text-emerald-700 font-medium mt-0.5">
                  Otomatis Sinkron 24/7
                </p>
              </div>
            </motion.div>

            {/* Node B: Akses Lancar (Lower-left near laptop) */}
            <motion.div
              animate={{ y: [0, 8, 0], x: [0, -3, 0] }}
              transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              className="absolute bottom-28 sm:bottom-32 -left-2 sm:-left-4 lg:-left-8 z-20 hidden sm:flex items-center gap-2.5 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-teal-200/90 shadow-xl shadow-teal-500/10 pointer-events-none transform-gpu will-change-transform"
            >
              <div className="h-7 w-7 rounded-lg bg-teal-50 text-teal-700 grid place-items-center shrink-0">
                <Cloud className="h-4 w-4" />
              </div>
              <div className="text-left">
                <p className="text-[11px] font-bold text-slate-900 leading-tight">{localize("Akses Lancar & Stabil", language)}</p>
                <p className="text-[10px] text-slate-500 font-medium mt-0.5">{localize("Siap Digunakan Kapan Saja", language)}</p>
              </div>
            </motion.div>

            {/* Card "Sistem Siap Pakai" positioned directly by the pointing hand - Gold Accent */}
            <div
              className="absolute top-8 sm:top-10 lg:top-12 right-0 sm:right-2 lg:-right-4 xl:right-2 z-20 flex items-center gap-3 bg-white sm:bg-white/95 sm:backdrop-blur-md px-4 py-2.5 rounded-2xl border border-amber-200/90 shadow-lg shadow-amber-500/10 pointer-events-none transform-gpu"
            >
              <div className="h-9 w-9 rounded-xl bg-amber-50 text-amber-600 border border-amber-200/60 grid place-items-center shrink-0">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">{localize("Sistem Siap Pakai", language)}</p>
                <p className="text-xs text-slate-600 mt-0.5 font-normal">{localize("Aman, Cepat & Teruji", language)}</p>
              </div>
            </div>

            {/* Secondary Floating Card: "Garansi & Pendampingan" balanced on the bottom-right of the model */}
            <div
              className="absolute bottom-8 sm:bottom-10 lg:bottom-12 right-0 sm:right-2 lg:-right-4 xl:right-2 z-20 flex items-center gap-3 bg-white sm:bg-white/95 sm:backdrop-blur-md px-4 py-2.5 rounded-2xl border border-emerald-200/90 shadow-lg shadow-emerald-950/10 pointer-events-none transform-gpu"
            >
              <div className="h-9 w-9 rounded-xl bg-emerald-50 text-emerald-600 grid place-items-center shrink-0">
                <Headphones className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">{localize("Garansi & Pendampingan", language)}</p>
                <p className="text-xs text-slate-600 mt-0.5 font-normal">{localize("Dukungan penuh saat go-live", language)}</p>
              </div>
            </div>

            {/* Dynamic Model Image: Anchored directly onto the bottom partner bar */}
            <div className="relative z-10 w-full h-full max-w-[420px] sm:max-w-[480px] lg:max-w-[520px] xl:max-w-[540px]">
              <Image
                src="/images/hero-header.png"
                alt={localize("Konsultan Rekayasa Software Vieria Techno", language)}
                fill
                priority
                unoptimized
                sizes="(max-width: 640px) 420px, (max-width: 1024px) 480px, 540px"
                className="object-contain object-bottom select-none drop-shadow-[0_16px_32px_rgba(15,23,42,0.05)]"
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Bar: Client Logos Carousel (Included inside 1st screen viewport) */}
      <div className="relative z-20 border-t border-slate-200/80 bg-white/95 backdrop-blur-md py-3 sm:py-3.5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-6">
            
            {/* Left Tagline - HIG Clear text */}
            <div className="text-center sm:text-left shrink-0">
              <p className="text-sm sm:text-[15px] font-bold text-slate-900 leading-tight">
                Vieria Techno dipercaya oleh berbagai sektor
              </p>
            </div>

            {/* Right Interactive Carousel Logos */}
            <div className="w-full sm:max-w-xl lg:max-w-4xl overflow-hidden">
              <PartnerLogos />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
