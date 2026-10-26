"use client";

import { motion } from "framer-motion";
import { CheckCircle2, GitCommit, FileSpreadsheet, Code2, Users2, ShieldCheck, ArrowRight } from "lucide-react";
import { useConsult } from "@/components/consult/ConsultProvider";
import { ShapeDivider } from "@/components/ui/ShapeDivider";
import { localize, useLanguage } from "@/components/providers/LanguageProvider";

const STEPS = [
  {
    step: "01",
    title: "Audit Alur Kerja & Forensik Data Lapangan",
    desc: "Insinyur kami membedah seluruh alur transaksi nyata, memeriksa berkas Excel yang bermasalah, dan memetakan titik kebocoran kasir serta inventaris gudang.",
    output: "Dokumen Blueprint Kebutuhan Sistem (SRS)",
  },
  {
    step: "02",
    title: "Penyusunan Kontrak Kerja & Kesepakatan NDA",
    desc: "Penetapan jadwal rilis mingguan (milestone), jaminan garansi hukum, dan penandatanganan Perjanjian Kerahasiaan Data bermaterai sebelum kode pertama ditulis.",
    output: "Dokumen Kesepakatan Kontrak Kerja & Perjanjian NDA",
  },
  {
    step: "03",
    title: "Rekayasa Arsitektur & Pengembangan Modular",
    desc: "Pembangunan software berstandar modern, basis data terenkripsi, integrasi notifikasi sistem, serta antarmuka responsif multi-device.",
    output: "Sistem Teruji Bebas Celah Keamanan",
  },
  {
    step: "04",
    title: "Pelatihan Tim & Uji Coba Lapangan (UAT)",
    desc: "Pendampingan langsung kepada staf gudang, kasir, dan manajer operasional hingga tidak ada satupun personel yang bingung mengoperasikan sistem.",
    output: "Berita Acara Uji Terima (UAT Sign-off)",
  },
  {
    step: "05",
    title: "Peluncuran Sistem & Jaminan SLA Operasional",
    desc: "Aktivasi sistem ke lingkungan produksi, penyerahan akses operasional resmi, serta pendampingan berkala dengan jaminan SLA pemeliharaan berkelanjutan.",
    output: "Sistem Aktif & Terproteksi SLA Penuh",
  },
];

export function ProcessTimeline() {
  const { openConsult } = useConsult();
  const { language } = useLanguage();

  return (
    <section id="alur-kerja" className="relative py-20 sm:py-28 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200/80 px-4 py-1 text-xs font-semibold text-emerald-800 mb-4"
          >
            <GitCommit className="h-3.5 w-3.5" />
            <span>{localize("Metodologi Eksekusi Terstruktur", language)}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900"
          >
            {localize("Alur Implementasi 5 Langkah Menuju Kemandirian Sistem", language)}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto"
          >
            {localize("Tanpa spekulasi, tanpa keterlambatan sepihak. Setiap fase memiliki tolok ukur keluaran (deliverables) tertulis yang diverifikasi bersama direksi Anda.", language)}
          </motion.p>
        </div>

        {/* 5-Step Process Timeline Horizontal / Vertical */}
        <div className="relative">
          {/* Connecting line on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-emerald-100 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {STEPS.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ 
                  duration: 0.4, 
                  delay: idx * 0.06,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  y: -6, 
                  scale: 1.015,
                  boxShadow: "0 15px 30px -10px rgba(16,185,129,0.15)",
                  transition: { duration: 0.2 } 
                }}
                className="group rounded-2xl bg-white border border-slate-200/90 p-5 shadow-sm hover:border-emerald-400 transition-colors flex flex-col justify-between transform-gpu"
              >
                <div>
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="h-10 w-10 rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-700 text-white font-extrabold flex items-center justify-center text-sm shadow-md shadow-emerald-600/20 mb-4"
                  >
                    {step.step}
                  </motion.div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
                    {localize(step.title, language)}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed font-normal">
                    {localize(step.desc, language)}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-0.5">
                    {localize("Keluaran Fase:", language)}
                  </span>
                  <span className="text-xs sm:text-[13px] font-semibold text-slate-800">
                    {localize(step.output, language)}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA trigger */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => openConsult("timeline-audit")}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm sm:text-base font-bold transition-all shadow-md shadow-emerald-600/20 cursor-pointer"
          >
            <span>{localize("Mulai Fase 1: Diagnosa Sistem Tanpa Biaya", language)}</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Smooth Transition Arch into Dark Corporate Footer */}
      <ShapeDivider
        variant="arch"
        position="bottom"
        nextBgColor="#06140F"
      />
    </section>
  );
}
