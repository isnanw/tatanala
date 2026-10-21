"use client";

import { motion } from "framer-motion";
import { 
  Building2, 
  ShieldCheck, 
  Zap, 
  Database, 
  Layers, 
  FileCheck2, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  LockKeyhole 
} from "lucide-react";
import Image from "next/image";
import { useConsult } from "@/components/consult/ConsultProvider";

export function BentoSolutions() {
  const { openConsult } = useConsult();

  return (
    <section id="keunggulan" className="py-20 sm:py-28 bg-white border-b border-slate-200/80">
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
            <span>Standar Rekayasa &amp; Disiplin Eksekusi</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900"
          >
            Parameter Rekayasa yang Membedakan Kami dari Software Instan
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto"
          >
            Kami menolak jalan pintas template murah. Setiap modul dibangun atas dasar audit mendalam alur operasional, kepatuhan audit legalitas, dan keamanan data tingkat tinggi.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Card 1: Large Featured Card (Span 2 Cols, Span 2 Rows) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 lg:col-span-2 rounded-3xl bg-slate-900 text-white p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden group shadow-lg"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-widest mb-4">
                <FileCheck2 className="h-4 w-4" />
                <span>Kredibilitas Tender Korporasi</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                Website Profil yang Memenuhi Standar Uji Prakualifikasi &amp; Tender BUMN
              </h3>
              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
                Format struktural kami memastikan kelengkapan izin legalitas (K3, SBU, ISO, LPSE), portofolio proyek terverifikasi, dan profil direksi tersaji formal demi memenangkan penilaian panitia lelang dan verifikasi vendor korporasi.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Lolos Uji LPSE", "Struktur Tata Kelola Resmi", "Dokumentasi Sertifikasi", "Responsif Multi-Device"].map((badge) => (
                  <span key={badge} className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-medium text-slate-200">
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative z-10 mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
              <div>
                <div className="text-2xl font-black text-white">100%</div>
                <div className="text-xs text-slate-400">Tingkat kelulusan berkas verifikasi profil</div>
              </div>
              <button
                type="button"
                onClick={() => openConsult("bento-tender")}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-colors"
              >
                <span>Pelajari Standar Tender</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </motion.div>

          {/* Card 2: ERP & Gudang */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-1 lg:col-span-2 rounded-3xl bg-white border border-slate-200/90 p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-widest mb-4">
                <Database className="h-4 w-4" />
                <span>Single Source of Truth</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Penyatuan Multi-Gudang &amp; Eliminasi 12 File Excel Terpisah
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Stok barang, mutasi antar cabang, hingga catatan retur terkonsolidasi realtime. Mencegah manipulasi kuantitas oleh oknum lapangan dengan audit trail berenkripsi.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold text-slate-900">Selisih Stok: Nol Toleransi</span>
              <span className="text-emerald-600 font-bold bg-emerald-50 px-2.5 py-1 rounded-md">Audit Terintegrasi</span>
            </div>
          </motion.div>

          {/* Card 3: WhatsApp Engine */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-3xl bg-white border border-slate-200/90 p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <div>
              <div className="h-10 w-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <Zap className="h-5 w-5" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">
                Executive WhatsApp Reporting
              </h4>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Rekap laba kotor, sisa kasir cabang, dan stok kritis terkirim otomatis ke WhatsApp direksi setiap pukul 21:00 WIB.
              </p>
            </div>
            <div className="mt-6 text-[11px] font-semibold text-emerald-700 bg-emerald-50/70 p-2.5 rounded-xl border border-emerald-100">
              Tanpa perlu login portal manual
            </div>
          </motion.div>

          {/* Card 4: Sub-2s Speed & CDN */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="rounded-3xl bg-white border border-slate-200/90 p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <div>
              <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <Clock className="h-5 w-5" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">
                Responsifitas Kilat &lt; 1.8 Detik
              </h4>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Dioptimasi dengan server edge Next.js &amp; caching layer mandiri. Menghilangkan komplain pelanggan saat jam sibuk transaksi.
              </p>
            </div>
            <div className="mt-6 text-[11px] font-semibold text-blue-700 bg-blue-50/70 p-2.5 rounded-xl border border-blue-100">
              Core Web Vitals Skor 98+
            </div>
          </motion.div>

          {/* Card 5: Full Legal IP Ownership */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-2 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6"
          >
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-blue-200 uppercase tracking-widest mb-2">
                <LockKeyhole className="h-4 w-4" />
                <span>Kedaulatan Aset Digital</span>
              </div>
              <h4 className="text-xl font-bold text-white">
                100% Hak Cipta Kode Sumber &amp; Basis Data Milik Anda
              </h4>
              <p className="mt-1 text-xs sm:text-sm text-blue-100 max-w-md">
                Kami tidak menyandera sistem Anda. Saat serah terima selesai, seluruh hak kepemilikan mutlak beralih ke badan hukum usaha Anda.
              </p>
            </div>

            <button
              type="button"
              onClick={() => openConsult("bento-kedaulatan")}
              className="px-5 py-3 rounded-xl bg-white text-blue-700 hover:bg-blue-50 font-bold text-xs shrink-0 transition-all shadow-lg"
            >
              Klaim Kepemilikan Penuh
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
