"use client";

import { motion } from "framer-motion";
import { Camera, Users, CheckCircle2, ShieldCheck, ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";
import { useConsult } from "@/components/consult/ConsultProvider";

const GALLERY_PHOTOS = [
  {
    title: "Pelatihan & Simulasi Operasional Staf Kasir Lapangan",
    desc: "Pendampingan langsung di lokasi bisnis klien hingga staf mahir menginput transaksi tanpa kesalahan.",
    image: "/images/client-training.jpg",
    tag: "Pendampingan Lapangan",
  },
  {
    title: "Inspeksi Infrastruktur Server & Audit Keamanan Jaringan",
    desc: "Pengecekan rack server fisik, konfigurasi firewall, dan redundansi cloud database bersama tim TI internal.",
    image: "/images/server-audit.jpg",
    tag: "Audit Keamanan & Jaringan",
  },
  {
    title: "Sesi Diskusi Strategis & Pemetaan Masalah Bersama Direksi",
    desc: "Merumuskan solusi atas masalah 12 file Excel terpisah bersama jajaran pengambil keputusan.",
    image: "/images/team-office.jpg",
    tag: "Konsultasi Eksekutif",
  },
  {
    title: "Simulasi Uji Beban & Keandalan Transaksi Kasir POS",
    desc: "Memastikan sistem tetap responsif di bawah 1.8 detik saat lonjakan transaksi jam sibuk operasional.",
    image: "/images/case-network-security.jpg",
    tag: "Pengujian Stres Sistem",
  },
];

export function FieldDocs() {
  const { openConsult } = useConsult();

  return (
    <section id="aktivitas" className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200/80 px-4 py-1 text-xs font-semibold text-blue-700 mb-4"
          >
            <Camera className="h-3.5 w-3.5" />
            <span>Dokumentasi Otentik Kunjungan &amp; Pelatihan</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900"
          >
            Bukti Keterlibatan Nyata di Lapangan, Bukan Janji Virtual
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto"
          >
            Insinyur Tatanala hadir langsung di lokasi usaha Anda: mengecek rak server, mendampingi kasir, dan membimbing staf gudang hingga sistem benar-benar berjalan disiplin.
          </motion.p>
        </div>

        {/* 4-Item Grid of Field Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {GALLERY_PHOTOS.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="rounded-3xl bg-white border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-lg transition-all group flex flex-col"
            >
              <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-semibold border border-white/20">
                    {item.tag}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Onsite Audit Callout Card */}
        <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-500/40 text-xs font-bold uppercase tracking-wider mb-3">
              Layanan Audit Lapangan Eksklusif
            </span>
            <h3 className="text-2xl font-bold">
              Ingin Tim Insinyur Kami Meninjau Langsung Kantor / Gudang Anda?
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-blue-100 leading-relaxed">
              Kami melayani kunjungan onsite untuk inspeksi infrastruktur fisik, pemetaan alur operasional, dan wawancara kebutuhan sistem langsung dengan penanggung jawab operasional Anda.
            </p>
          </div>

          <button
            type="button"
            onClick={() => openConsult("audit-onsite")}
            className="px-6 py-3.5 rounded-xl bg-white text-blue-700 hover:bg-blue-50 font-extrabold text-xs shrink-0 transition-all shadow-lg shadow-black/10"
          >
            Ajukan Jadwal Kunjungan Onsite
          </button>
        </div>
      </div>
    </section>
  );
}
