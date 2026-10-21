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

export function NationalVision() {
  const { openConsult } = useConsult();

  return (
    <section id="identitas" className="relative pt-7 sm:pt-9 pb-7 sm:pb-8 bg-white border-b border-slate-200/80 overflow-hidden">
      {/* Subtle ambient light blur */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 left-0 w-[550px] h-[550px] bg-gradient-to-br from-blue-100/40 via-sky-50/20 to-transparent blur-3xl rounded-full" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -bottom-40 right-0 w-[450px] h-[450px] bg-gradient-to-tl from-indigo-100/30 via-slate-50 to-transparent blur-3xl rounded-full" 
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Showcase with Interactive Animated Floating Cards */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative order-2 lg:order-1"
          >
            {/* Visual Container */}
            <div className="relative mx-auto max-w-md rounded-3xl overflow-hidden border border-slate-200/90 bg-white shadow-2xl shadow-slate-200/70 group">
              <div className="relative aspect-[4/3] w-full bg-slate-100 overflow-hidden">
                <Image
                  src="/images/team-office.jpg"
                  alt="Kolaborasi Tim Rekayasa Software Tatanala"
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60" />
              </div>

              {/* Bottom Card Information */}
              <div className="p-5 sm:p-6 pb-8 sm:pb-9 bg-white border-t border-slate-100">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                  <Building2 className="h-4 w-4 text-blue-600" />
                  <span>Studio Rekayasa Software</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed max-w-[85%]">
                  Melayani konsultasi, rekayasa, dan implementasi sistem informasi terintegrasi untuk bisnis di seluruh Indonesia.
                </p>
              </div>
            </div>

            {/* Interactive Animated Floating Badge 1: Top Left */}
            <motion.div
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="absolute -top-5 -left-3 sm:-left-5 bg-white/95 backdrop-blur-md p-3 sm:p-3.5 rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-900/10 flex items-center gap-3 cursor-pointer z-10"
            >
              <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold shrink-0">
                <Activity className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900 leading-snug">99.9% Uptime SLA</p>
                <p className="text-[11px] text-slate-500 mt-0.5">Performa Server Stabil &amp; Cepat</p>
              </div>
            </motion.div>

            {/* Interactive Animated Floating Badge 2: Lowered so it doesn't cover card text */}
            <motion.div
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="absolute -bottom-6 sm:-bottom-7 right-2 sm:right-4 bg-white/95 backdrop-blur-md p-3 sm:p-3.5 rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-900/10 flex items-center gap-3 cursor-pointer z-10"
            >
              <div className="h-10 w-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold shrink-0">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">Standar Keamanan Data</p>
                <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">Enkripsi Data &bull; Proteksi Multi-Lapis</p>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Column: Simplified Narrative, Flexible Value Props & CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 order-1 lg:order-2"
          >
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center rounded-full bg-blue-50/90 border border-blue-200/90 px-3.5 py-1 text-xs sm:text-sm font-semibold text-blue-700 shadow-sm mb-4">
              <span>Startup Teknologi &amp; Rekayasa Software</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-extrabold text-slate-900 tracking-tight leading-[1.2]">
              Partner Rekayasa Software untuk Akselerasi Bisnis Anda
            </h2>

            {/* Concise Narrative */}
            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              Tatanala mengembangkan perangkat lunak dan sistem informasi modern untuk membantu bisnis mengotomasi proses operasional, meningkatkan efisiensi kerja, dan siap bertumbuh lebih cepat.
            </p>

            {/* Key Advantages Grid (Updated: Solusi Fleksibel replacing 100% Hak Milik Klien) */}
            <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-100">
              <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:border-blue-200 transition-colors">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-100/70 text-blue-600 mb-3">
                  <Layers className="h-5 w-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">Arsitektur Scalable</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Fondasi sistem modern berbasis cloud yang cepat, andal, dan siap berkembang.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:border-emerald-200 transition-colors">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100/70 text-emerald-600 mb-3">
                  <Boxes className="h-5 w-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">Solusi Fleksibel</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Mendukung pengembangan kustom sesuai alur kerja maupun sistem siap pakai.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:border-indigo-200 transition-colors">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-100/70 text-indigo-600 mb-3">
                  <Zap className="h-5 w-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">Kolaborasi Tangkas</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Siklus pengerjaan terarah, komunikasi transparan, dan respon teknis cepat.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => openConsult("identitas-startup")}
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-6 py-3.5 text-sm sm:text-base font-bold transition-all shadow-md shadow-blue-500/25 cursor-pointer"
              >
                <span>Konsultasi Kebutuhan Sistem</span>
                <ChevronRight className="h-4 w-4" />
              </button>
              <Link
                href="/tentang-kami"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 px-5 py-3.5 text-sm sm:text-base font-bold transition-all"
              >
                <span>Profil Selengkapnya</span>
                <ArrowUpRight className="h-4 w-4 text-slate-500" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}




