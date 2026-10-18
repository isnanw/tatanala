"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { CheckCircle2, ShieldCheck, Sparkles, TrendingUp, Users, ArrowRight } from "lucide-react";
import { useConsult } from "@/components/consult/ConsultProvider";

export function About() {
  const { openConsult } = useConsult();
  const [activeTab, setActiveTab] = useState<"visi" | "misi" | "nilai">("visi");

  const TAB_CONTENT = {
    visi: {
      text: "Membangun ekosistem teknologi yang mandiri bagi pelaku usaha: dari hulu (profil bisnis kredibel & siap tender), tengah (sistem operasional rapi tanpa kertas & anti-bocor stok), hingga hilir (mesin pertumbuhan iklan & SEO terukur).",
      points: [
        "Sistem mengikuti cara kerja bisnis Anda, bukan sebaliknya",
        "Arsitektur cloud modern dengan 100% hak milik data & source code",
      ],
    },
    misi: {
      text: "Menghilangkan ketergantungan pada catatan manual tercecer, 12 file Excel terpisah, dan software generik yang kaku. Kami membangun sistem yang menyatukan alur kerja kasir, gudang, dan rekap omzet ke dalam satu dashboard realtime.",
      points: [
        "Laporan harian otomatis ke WhatsApp owner",
        "Hak akses bertingkat per staf & audit log aktivitas transparan",
      ],
    },
    nilai: {
      text: "Transparansi mutlak tanpa biaya tersembunyi. Kami bekerja layaknya mitra rekayasa in-house yang mendampingi tim Anda hingga sistem benar-benar dipakai sehari-hari.",
      points: [
        "Jaminan garansi perbaikan & pendampingan langsung",
        "Blueprint analisis gratis sebelum sebaris kode ditulis",
      ],
    },
  };

  const STATS = [
    { value: "99.8%", label: "Uptime Sistem", desc: "Cloud terpantau 24/7" },
    { value: "3x", label: "Efisiensi Kerja", desc: "Rekap laporan otomatis" },
    { value: "-92%", label: "Selisih Stok", desc: "Audit gudang transparan" },
    { value: "Rp 0", label: "Biaya Tersembunyi", desc: "Proposal transparan di awal" },
  ];

  return (
    <section id="solusi" className="py-20 sm:py-28 bg-[#F8FAFC]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200/80 px-4 py-1 text-xs font-semibold text-blue-700 mb-4"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Rekayasa Sistem Berbasis Masalah Riil</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900"
          >
            Menata Bisnis Lewat Rekayasa Sistem
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto"
          >
            Bukan template instan. Kami petakan alur kerja Anda yang sebenarnya, membedah kendala di lapangan, lalu merancang software yang tepat sasaran.
          </motion.p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Team Office Photography with kinetic frame */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] border border-slate-200/90 shadow-[0_20px_50px_rgba(15,23,42,0.08)] bg-slate-100 group">
              <Image
                src="/images/team-office.jpg"
                alt="Tim arsitek software dan konsultan Tatanala"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />

              {/* Floating Overlay Pill Badge */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs rounded-2xl border border-white/60 bg-white/95 p-4 backdrop-blur-md shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-blue-600 text-white shrink-0 shadow-md shadow-blue-500/25">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Arsitektur Teruji</p>
                    <p className="text-[11px] text-slate-500">Next.js &bull; PostgreSQL &bull; Cloud Sync</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Tabs & Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            {/* Tab Switcher Pills */}
            <div className="inline-flex rounded-full bg-slate-100 p-1.5 self-start border border-slate-200/80 mb-6 shadow-2xs">
              {(["visi", "misi", "nilai"] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`rounded-full px-6 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Description with Animated Crossfade */}
            <div className="min-h-[140px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="text-base sm:text-lg leading-relaxed text-slate-700">
                    {TAB_CONTENT[activeTab].text}
                  </p>
                  <div className="mt-4 flex flex-col gap-2.5">
                    {TAB_CONTENT[activeTab].points.map((pt) => (
                      <span key={pt} className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-800">
                        <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
                        {pt}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* 4 Stats Boxes */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-slate-200/90">
              {STATS.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="flex flex-col"
                >
                  <span className="font-sans text-2xl sm:text-3xl font-extrabold tracking-tight text-blue-600">
                    {stat.value}
                  </span>
                  <span className="mt-1 text-xs font-bold text-slate-800">
                    {stat.label}
                  </span>
                  <span className="text-[11px] text-slate-500 mt-0.5">
                    {stat.desc}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
