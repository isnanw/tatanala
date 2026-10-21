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
    <section className="pt-10 sm:pt-14 pb-14 sm:pb-20 bg-white border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Authentic Team Photography Collage */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Large Image */}
              <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100">
                <Image
                  src="/images/server-audit.jpg"
                  alt="Audit Sistem & Rekayasa Arsitektur Tatanala"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover"
                />
              </div>

              {/* Secondary Overlapping Image */}
              <div className="hidden sm:block absolute -bottom-8 -right-6 w-3/5 aspect-[4/3] rounded-2xl overflow-hidden border-4 border-white shadow-2xl bg-slate-100">
                <Image
                  src="/images/client-training.jpg"
                  alt="Pelatihan Tim Pengguna Sistem Tatanala"
                  fill
                  sizes="300px"
                  className="object-cover"
                />
              </div>

              {/* Small Overlay Badge */}
              <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md text-white px-4 py-2 rounded-xl border border-slate-700/80 text-xs sm:text-sm font-semibold flex items-center gap-2">
                <FileCheck2 className="h-4 w-4 text-blue-400" />
                <span>Metodologi Agile &amp; UAT</span>
              </div>
            </div>
          </div>

          {/* Right Column: 5 Corporate Value Cards */}
          <div className="lg:col-span-7">
            <div className="mb-8">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200/80 px-4 py-1.5 rounded-full">
                Tata Kelola &amp; Komitmen
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-3">
                Kami Pahami Proses Bisnis Anda Sebelum Merancang Software
              </h2>
              <p className="mt-3 text-slate-700 text-base sm:text-lg leading-relaxed">
                Software yang sukses bukan hanya yang memiliki baris kode rapi, tetapi yang benar-benar mempermudah staf Anda, mencegah kebocoran finansial, dan mempercepat pengambilan keputusan pimpinan.
              </p>
            </div>

            {/* 5 Value Items */}
            <div className="space-y-4">
              {VALUES.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-4 sm:p-5 rounded-2xl border border-slate-200/80 bg-[#F8FAFC] hover:bg-white hover:border-blue-300 hover:shadow-md transition-all duration-200 flex items-start gap-4"
                  >
                    <div className="h-11 w-11 shrink-0 rounded-xl bg-blue-100/70 text-blue-700 flex items-center justify-center font-bold">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Section Action */}
            <div className="mt-8 pt-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={() => openConsult("audit-proses-bisnis")}
                className="inline-flex items-center gap-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 text-sm sm:text-base font-bold shadow-md shadow-blue-500/25 transition-all cursor-pointer"
              >
                <span>Mulai Audit Kebutuhan Sistem Anda</span>
                <ArrowRight className="h-4 w-4" />
              </motion.button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
