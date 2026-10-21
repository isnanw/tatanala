"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, ChevronRight, ShieldCheck } from "lucide-react";
import { useConsult } from "@/components/consult/ConsultProvider";
import { HeroGridBackground } from "@/components/sections/HeroGridBackground";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
};

const itemAnim: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Hero() {
  const { openConsult } = useConsult();

  return (
    <section
      id="top"
      aria-label="Solusi Rekayasa Digital & Arsitektur Sistem Tatanala"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24 bg-[#F8FAFC]"
    >
      {/* Dedicated Technical Background Component */}
      <HeroGridBackground />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Hero Header (Focused, Authoritative & Formal) */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="text-center max-w-3xl mx-auto"
        >
          {/* Eyebrow Badge: Slogan & Mandate */}
          <motion.div variants={itemAnim} className="mb-5 inline-flex">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/95 border border-blue-200/90 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-700 shadow-xs backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
              </span>
              <ShieldCheck className="h-4 w-4 text-blue-600" />
              <span>Tatanala Enterprise &bull; Menata Sistem, Menuntaskan Kendala</span>
            </span>
          </motion.div>

          {/* Headline - Jelas, Kuat & Menjawab Kebutuhan Bisnis */}
          <motion.h1
            variants={itemAnim}
            className="font-sans text-3xl sm:text-5xl lg:text-[3.3rem] font-extrabold tracking-tight leading-[1.15] text-slate-900"
          >
            Sistem Operasional Usaha Jadi Otomatis untuk{" "}
            <span className="text-blue-600">
              Efisiensi Bisnis Nyata
            </span>
          </motion.h1>

          {/* Subtitle - Bahasa Ringan, Masuk Akal & Langsung ke Manfaat */}
          <motion.p
            variants={itemAnim}
            className="mt-5 text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto"
          >
            Tinggalkan pencatatan manual dan jadwal yang berantakan. Gunakan sistem siap pakai dengan biaya langganan bulanan yang ramah anggaran — mulai dari kelola absensi &amp; gaji karyawan, atur antrean booking otomatis, hingga aplikasi kasir terpadu.
          </motion.p>

          {/* Core Modular Capabilities Pills (Bahasa Sederhana) */}
          <motion.div
            variants={itemAnim}
            className="mt-6 flex flex-wrap items-center justify-center gap-2 max-w-xl mx-auto"
          >
            {[
              "Kelola Karyawan & Gaji (HRD)",
              "Booking & Reservasi Otomatis",
              "Pencatatan Kasir & Penjualan",
              "Bisa Pesan Fitur Khusus",
            ].map((pill) => (
              <span
                key={pill}
                className="px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/80 text-xs font-semibold text-blue-800 shadow-2xs"
              >
                {pill}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemAnim}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="button"
              onClick={() => openConsult("coba-gratis-saas")}
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 text-sm font-bold shadow-lg shadow-blue-500/25 transition-all duration-200 cursor-pointer"
            >
              <span>Konsultasi Gratis / Coba Sistem</span>
              <ArrowRight className="h-4 w-4" />
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 px-7 py-3.5 text-sm font-semibold shadow-2xs transition-all duration-200"
            >
              <span>Pilihan Biaya Langganan</span>
              <ChevronRight className="h-4 w-4 text-slate-400" />
            </motion.a>
          </motion.div>

          {/* Key SaaS Trust & Value Guarantees Bar (Bahasa Jelas) */}
          <motion.div
            variants={itemAnim}
            className="mt-8 flex flex-wrap items-center justify-center gap-y-2.5 gap-x-6 text-xs font-semibold text-slate-700 pt-5 border-t border-slate-200/80"
          >
            <div className="flex items-center gap-2">
              <span className="grid h-5 w-5 place-items-center rounded-md bg-emerald-50 text-[11px] font-bold text-emerald-600 border border-emerald-200">
                ✓
              </span>
              <span>Biaya Bulanan Terjangkau &amp; Bebas Biaya Awal</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="grid h-5 w-5 place-items-center rounded-md bg-blue-50 text-[11px] font-bold text-blue-600 border border-blue-200">
                ✓
              </span>
              <span>Akses Kapan Saja dari HP, Tablet, atau Laptop</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="grid h-5 w-5 place-items-center rounded-md bg-indigo-50 text-[11px] font-bold text-indigo-600 border border-indigo-200">
                ✓
              </span>
              <span>Pendampingan Sampai Tim Anda Bisa Menggunakan</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}


