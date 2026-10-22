"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, Award, FileCode, Users, CheckCircle2, Lock, ArrowRight } from "lucide-react";
import { useConsult } from "@/components/consult/ConsultProvider";

const LEADERS = [
  {
    name: "Ir. David Prasetyo, M.Kom.",
    role: "Chief Technology Officer",
    credential: "Ex-Lead Cloud Architect • 12+ Thn",
    responsibility: "Penanggung jawab arsitektur enterprise, skalabilitas microservices, dan keandalan sistem 99.8% uptime.",
    image: "/images/avatar-david.jpg",
  },
  {
    name: "Sarah Amanda, S.Kom., CISSP",
    role: "Head of Information Security",
    credential: "Cybersecurity & SecOps Specialist",
    responsibility: "Memastikan enkripsi AES-256 data aplikasi, kontrol akses bertingkat, dan audit log anti-bocor.",
    image: "/images/avatar-sarah.jpg",
  },
  {
    name: "Reza Firmansyah, S.T.",
    role: "Principal Solutions Engineer",
    credential: "ERP & Supply Chain System Lead",
    responsibility: "Memimpin perancangan alur ERP hulu-hilir, eliminasi rekonsiliasi manual, dan sinkronisasi multi-gudang.",
    image: "/images/marketing-consultant.jpg",
  },
  {
    name: "Bramantyo Wicaksono",
    role: "Head of Infrastructure & SLA",
    credential: "DevOps & Cloud Database Specialist",
    responsibility: "Menjamin ketersediaan infrastruktur cloud berkecepatan < 1.8 detik dan integrasi WhatsApp reporting engine.",
    image: "/images/marketing-specialist.jpg",
  },
];

const METRICS = [
  { value: "100%", label: "Kedaulatan Data Klien", desc: "Data transaksi terenkripsi & tersimpan privat" },
  { value: "SLA", label: "Dukungan & Pemeliharaan", desc: "Layanan purnajual terikat kontrak resmi" },
  { value: "99.8%", label: "Komitmen SLA Uptime", desc: "Infrastruktur cloud dipantau kontinu" },
  { value: "100%", label: "Kepatuhan Hukum", desc: "Perjanjian Kerahasiaan (NDA) bermaterai" },
];

export function Leadership() {
  const { openConsult } = useConsult();

  return (
    <section id="rekayasa" className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200/80 px-4 py-1 text-xs font-semibold text-blue-700 mb-4"
          >
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Integritas Rekayasa &amp; Akuntabilitas Legal</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900"
          >
            Didukung Praktisi Berintegritas Tinggi, Bukan Tim Lepas Anonim
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto"
          >
            Transformasi sistem Anda dikawal langsung oleh arsitek software, auditor keamanan data, dan konsultan proses bisnis bersertifikasi dengan pertanggungjawaban kontraktual yang mengikat.
          </motion.p>
        </div>

        {/* 4 Arch-Pill Portrait Cards Grid with Varied 3D & Spring Hover */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {LEADERS.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 30, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: [0.34, 1.56, 0.64, 1]
              }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.25, ease: "easeOut" } 
              }}
              className="group rounded-3xl bg-white border border-slate-200/90 p-5 shadow-sm hover:shadow-2xl hover:border-blue-400 transition-all duration-300 flex flex-col"
            >
              {/* Arch-shaped top portrait frame with image zoom */}
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-t-[3rem] rounded-b-2xl bg-gradient-to-b from-blue-100/50 to-slate-200/60 mb-5">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-top group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-xs sm:text-[13px] font-semibold text-white tracking-wide">
                    {leader.credential}
                  </span>
                </div>
              </div>

              {/* Leader Meta */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <span className="inline-block px-3 py-1 rounded-md bg-blue-50 text-xs font-bold text-blue-700 tracking-tight uppercase mb-2 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
                    {leader.role}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {leader.name}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed font-normal">
                    {leader.responsibility}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Accountability Statement & Formal Guarantees Bar */}
        <div className="rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-10 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            {METRICS.map((metric, idx) => (
              <div key={metric.label} className={idx > 0 ? "pt-4 sm:pt-0 sm:pl-6" : ""}>
                <div className="text-3xl sm:text-4xl font-extrabold text-blue-600 tracking-tight">
                  {metric.value}
                </div>
                <div className="text-sm sm:text-base font-bold text-slate-900 mt-1">
                  {metric.label}
                </div>
                <div className="text-xs sm:text-sm text-slate-600 mt-0.5 font-normal">
                  {metric.desc}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <FileCode className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm sm:text-base font-bold text-slate-900">
                  Transparansi Kontrak &amp; Serah Terima Menyeluruh
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Seluruh dokumentasi alur, kredensial akses akun admin, dan panduan operasional diserahkan lengkap untuk menjamin kemandirian tim Anda.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => openConsult("rekayasa-arsitektur")}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base font-bold transition-all shadow-md shadow-blue-500/20 shrink-0 cursor-pointer"
            >
              <span>Jadwalkan Diskusi Kebutuhan</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
