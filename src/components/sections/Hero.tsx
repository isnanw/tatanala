"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, ChevronRight, ShieldCheck, Sparkles, Code2, Database } from "lucide-react";
import { useConsult } from "@/components/consult/ConsultProvider";
import { HeroDashboard } from "./HeroDashboard";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemAnim: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function Hero() {
  const { openConsult } = useConsult();

  return (
    <section
      id="top"
      aria-label="Hero - Tatanala Rekayasa Sistem & Pemasaran Terarah"
      className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24 bg-[#F8FAFC]"
    >
      {/* Background Animated Gradient Mesh */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 20, 0],
          y: [0, -10, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl pointer-events-none -z-10"
      />
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          x: [0, -15, 0],
          y: [0, 15, 0],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 h-72 w-72 rounded-full bg-sky-100/50 blur-3xl pointer-events-none -z-10"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Tatanala Headline & Philosophy */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="lg:col-span-6 flex flex-col justify-center"
          >
            {/* Eyebrow Badge */}
            <motion.div variants={itemAnim} className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-50/90 border border-blue-200/80 px-4 py-1.5 text-xs font-semibold text-blue-700 shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
                </span>
                Rekayasa Sistem &bull; Bukan Sekadar Website Biasa
              </span>
            </motion.div>

            {/* Giant Title */}
            <motion.h1
              variants={itemAnim}
              className="font-sans text-4xl sm:text-5xl lg:text-[3.65rem] font-extrabold tracking-[-0.03em] leading-[1.1] text-slate-900"
            >
              Menata Sistem. <br />
              <span className="text-blue-600">Menuntaskan Kendala.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemAnim}
              className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-slate-600 font-normal"
            >
              Bukan sekadar bikin website. Kami menata alur kerja operasional (ERP, inventaris, POS multi-cabang) dan menyalakan mesin pertumbuhan terukur dari hulu ke hilir.
            </motion.p>

            {/* CTAs with interactive spring */}
            <motion.div
              variants={itemAnim}
              className="mt-8 flex flex-wrap items-center gap-3.5"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={() => openConsult("bingung")}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 text-sm font-semibold shadow-lg shadow-blue-500/25 transition-all duration-200"
              >
                <span>Konsultasikan Kebutuhan</span>
                <ArrowRight className="h-4 w-4" />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#portofolio"
                className="inline-flex items-center justify-center gap-1.5 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 px-6 py-3.5 text-sm font-semibold shadow-xs transition-all duration-200"
              >
                <span>Tinjau Portofolio</span>
                <ChevronRight className="h-4 w-4 text-slate-400" />
              </motion.a>
            </motion.div>

            {/* Keystroke & Value Propositions */}
            <motion.div
              variants={itemAnim}
              className="mt-10 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs font-semibold text-slate-600 pt-6 border-t border-slate-200/80"
            >
              <div className="flex items-center gap-1.5">
                <span className="grid h-5 w-5 place-items-center rounded bg-blue-50 text-[10px] font-bold text-blue-700 border border-blue-200">
                  ✓
                </span>
                <span>Blueprint Masalah Gratis</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="grid h-5 w-5 place-items-center rounded bg-blue-50 text-[10px] font-bold text-blue-700 border border-blue-200">
                  ✓
                </span>
                <span>100% Hak Milik Source Code</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="grid h-5 w-5 place-items-center rounded bg-blue-50 text-[10px] font-bold text-blue-700 border border-blue-200">
                  ✓
                </span>
                <span>Tanpa Biaya Tersembunyi</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Hero Interactive Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <HeroDashboard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
