"use client";

import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  Users2, 
  Wrench, 
  ArrowRight, 
  Award,
  FileCheck2
} from "lucide-react";
import Image from "next/image";
import { useConsult } from "@/components/consult/ConsultProvider";
import { ShapeDivider } from "@/components/ui/ShapeDivider";

const VALUES = [
  {
    title: "Konsultatif",
    desc: "Kami tidak langsung menjual software kaku. Kami mengaudit alur kerja riil Anda, memetakan celah data, dan menyusun spesifikasi kebutuhan sistem (SRS) yang tepat guna.",
    icon: Users2,
  },
  {
    title: "Bergaransi & SLA Maintenance",
    desc: "Dukungan purnajual terikat perjanjian resmi (SLA), perbaikan bug berkala, dan pemantauan performa server cloud agar sistem Anda terus aktif tanpa henti.",
    icon: ShieldCheck,
  },
  {
    title: "Berpengalaman & Teruji",
    desc: "Berpengalaman menangani implementasi sistem informasi pada sektor korporasi logistik, fasilitas kesehatan, antrean publik, hingga portal siap tender LPSE.",
    icon: Award,
  },
  {
    title: "Tim Profesional In-House",
    desc: "Dikerjakan oleh insinyur perangkat lunak dan arsitek data internal berpengalaman, bukan tenaga alih daya lepas (freelancer liar) yang berisiko mangkir.",
    icon: Wrench,
  },
  {
    title: "Project On-Time Berdasarkan Kontrak",
    desc: "Penetapan jadwal rilis modular bertahap (milestone) dengan sanksi keterlambatan terikat hukum, menjamin proyek Anda tuntas tepat waktu.",
    icon: Clock,
  },
];

export function BusinessProcessGuarantee() {
  const { openConsult } = useConsult();

  return (
    <section id="proses-bisnis" className="relative pt-14 sm:pt-20 pb-20 sm:pb-28 bg-[#F8FAFC] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with repeating scroll animation */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-3xl mb-6 sm:mb-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50/90 border border-blue-200/80 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-blue-800 mb-2 shadow-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            <span>Tata Kelola &amp; Komitmen</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-bold text-[#0F172A] tracking-tight leading-tight">
            Kami Pahami Proses Bisnis Anda Sebelum Merancang Software
          </h2>
          <p className="mt-1.5 text-slate-600 text-sm sm:text-base leading-relaxed">
            Software yang sukses bukan hanya yang memiliki baris kode rapi, tetapi yang benar-benar mempermudah staf Anda, mencegah kebocoran operasional, dan mempercepat pengambilan keputusan pimpinan.
          </p>
        </motion.div>

        {/* 2-Column Content Grid: Left Cards & Right Image Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left Column: 5 Corporate Value Cards */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-2.5 order-2 lg:order-1">
            {VALUES.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -16, scale: 0.98 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ delay: idx * 0.05, duration: 0.3 }}
                  whileHover={{ x: 4, transition: { duration: 0.15 } }}
                  className="p-3 sm:p-3.5 rounded-xl border border-slate-200/90 bg-white hover:border-blue-400 hover:shadow-md transition-all duration-200 flex items-start gap-3.5 group cursor-default shadow-xs"
                >
                  <div className="h-8 w-8 shrink-0 rounded-lg bg-blue-100/70 text-blue-700 flex items-center justify-center font-bold group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200 mt-0.5">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-[#0F172A] group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-0.5 text-xs text-slate-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}

            {/* Bottom Action CTA */}
            <div className="pt-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={() => openConsult("audit-proses-bisnis")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold shadow-md shadow-blue-500/25 transition-all cursor-pointer"
              >
                <span>Mulai Audit Kebutuhan Sistem Anda</span>
                <ArrowRight className="h-4 w-4" />
              </motion.button>
            </div>
          </div>

          {/* Right Column: Authentic Photography Showcase with repeating scroll trigger */}
          <div className="lg:col-span-5 flex flex-col justify-between order-1 lg:order-2">
            <motion.div 
              initial={{ opacity: 0, x: 20, scale: 0.96 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="relative w-full h-full min-h-[380px] sm:min-h-[440px] rounded-2xl overflow-hidden border border-slate-200/90 shadow-md group flex flex-col"
            >
              {/* Primary Large Image */}
              <div className="relative flex-1 w-full bg-slate-100 min-h-[260px]">
                <Image
                  src="/images/server-audit.jpg"
                  alt="Audit Sistem & Rekayasa Arsitektur Tatanala"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
                />
                {/* Small Overlay Badge */}
                <div className="absolute top-3.5 left-3.5 bg-slate-900/90 backdrop-blur-md text-white px-3 py-1 rounded-md border border-slate-700/80 text-xs font-medium flex items-center gap-1.5 shadow-sm">
                  <FileCheck2 className="h-3.5 w-3.5 text-blue-400" />
                  <span>Metodologi Agile &amp; UAT</span>
                </div>
              </div>

              {/* Bottom Inset Showcase Strip */}
              <div className="relative h-32 sm:h-36 bg-slate-50 border-t border-slate-200/80 p-3.5 flex items-center gap-3.5">
                <div className="relative w-28 sm:w-32 h-full rounded-xl overflow-hidden border border-slate-200 shrink-0">
                  <Image
                    src="/images/client-training.jpg"
                    alt="Pelatihan Tim Pengguna Sistem Tatanala"
                    fill
                    sizes="150px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-[#0F172A] leading-snug">Pendampingan &amp; Pelatihan</p>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-relaxed">
                    Pelatihan langsung untuk seluruh staf hingga mahir mengoperasikan sistem.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>

      {/* Smooth Dynamic Wave Shape Divider transitioning into White */}
      <ShapeDivider
        variant="wave"
        position="bottom"
        nextBgColor="#FFFFFF"
        secondaryColor="rgba(37, 99, 235, 0.05)"
      />
    </section>
  );
}
