"use client";

import { motion } from "framer-motion";
import { 
  GitBranch, 
  Search, 
  Workflow, 
  Database, 
  Smartphone, 
  CheckCircle2, 
  ArrowDown, 
  ShieldCheck, 
  MessageSquare,
  Sparkles,
  Server,
  Layers
} from "lucide-react";
import { useConsult } from "@/components/consult/ConsultProvider";

export function SystemFlow() {
  const { openConsult } = useConsult();

  return (
    <section id="arsitektur" className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200/80 px-4 py-1 text-xs font-semibold text-blue-700 mb-4"
          >
            <Workflow className="h-3.5 w-3.5" />
            <span>Topologi Arsitektur Terintegrasi</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900"
          >
            Alur Ekosistem Hulu ke Hilir yang Terkendali Penuh
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto"
          >
            Sistem kami menyelaraskan seluruh lini operasional: dari verifikasi legalitas, manajemen pergudangan, hingga pemantauan omzet otomatis di genggaman Anda.
          </motion.p>
        </div>

        {/* Vertical Flow Diagram Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central connector line */}
          <div className="absolute left-1/2 top-10 bottom-10 w-0.5 bg-gradient-to-b from-blue-300 via-blue-500 to-emerald-500 -translate-x-1/2 hidden md:block" />

          {/* Level 1: Diagnosa & Audit Lapangan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative mb-12"
          >
            <div className="rounded-2xl bg-blue-600 text-white p-6 sm:p-8 shadow-xl max-w-xl mx-auto text-center border border-blue-500">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-700/80 text-[11px] font-bold uppercase tracking-wider mb-3">
                <Search className="h-3.5 w-3.5" />
                <span>Titik Tolak: Diagnosa Lapangan</span>
              </div>
              <h3 className="text-xl font-bold">
                Audit Menyeluruh SOP &amp; Kebocoran Data Manual
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-blue-100">
                Pemeriksaan terhadap alur fisik, mutasi kasir, dan struktur dokumen tender sebelum menentukan spesifikasi teknologi yang akurat.
              </p>
            </div>
          </motion.div>

          {/* Level 2: The 3 Core Pillars (Hulu, Tengah, Hilir) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 mb-12">
            {/* Hulu */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl bg-white border border-slate-200/90 p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-black text-sm mb-4">
                01
              </div>
              <span className="text-[11px] font-extrabold uppercase text-blue-600 tracking-wider">
                Lini Hulu (Reputasi)
              </span>
              <h4 className="text-base font-bold text-slate-900 mt-1">
                Profil Perusahaan Siap Tender
              </h4>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Penyusunan company profile dengan standar kepatuhan verifikasi tender korporasi, legalitas K3, ISO, dan SEO kata kunci B2B.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-[11px] font-semibold text-slate-700">
                <CheckCircle2 className="h-3.5 w-3.5 text-blue-600" />
                <span>Portofolio &amp; Legalitas Resmi</span>
              </div>
            </motion.div>

            {/* Tengah */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl bg-white border-2 border-blue-500 p-6 shadow-xl relative"
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider">
                Inti Operasional
              </div>
              <div className="h-10 w-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black text-sm mb-4">
                02
              </div>
              <span className="text-[11px] font-extrabold uppercase text-blue-600 tracking-wider">
                Lini Tengah (Sistem ERP)
              </span>
              <h4 className="text-base font-bold text-slate-900 mt-1">
                Gudang, POS &amp; Otorisasi
              </h4>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Sinkronisasi stok barang multi-gudang, otorisasi transaksi berjenjang, dan eliminasi 100% pencatatan ganda pada nota fisik.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-[11px] font-semibold text-slate-700">
                <CheckCircle2 className="h-3.5 w-3.5 text-blue-600" />
                <span>Audit Trail Anti-Manipulasi</span>
              </div>
            </motion.div>

            {/* Hilir */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="rounded-2xl bg-white border border-slate-200/90 p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-black text-sm mb-4">
                03
              </div>
              <span className="text-[11px] font-extrabold uppercase text-blue-600 tracking-wider">
                Lini Hilir (Pertumbuhan)
              </span>
              <h4 className="text-base font-bold text-slate-900 mt-1">
                Akuisisi Pasar &amp; Retensi
              </h4>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Mesin iklan terukur Google Ads &amp; Meta Ads dengan pelacakan konversi presisi hingga ke laba bersih per transaksi.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-[11px] font-semibold text-slate-700">
                <CheckCircle2 className="h-3.5 w-3.5 text-blue-600" />
                <span>ROAS &amp; Metrik Akurat</span>
              </div>
            </motion.div>
          </div>

          {/* Level 3: Output Konsolidasi - WhatsApp Executive Reporting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-10 shadow-2xl max-w-2xl mx-auto border border-slate-800">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase text-emerald-400 tracking-widest">
                      Output Konsolidasian
                    </span>
                    <h4 className="text-lg font-bold text-white">
                      Dashboard Otomatis ke WhatsApp Pemilik
                    </h4>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                  Setiap Pukul 21:00 WIB
                </span>
              </div>

              <div className="bg-slate-950 rounded-2xl p-4 font-mono text-xs text-slate-300 border border-slate-800/80 leading-relaxed mb-6">
                <p className="text-emerald-400 font-bold mb-1">
                  [LAPORAN EKSEKUTIF HARIAN - TATANALA AUTOMATION]
                </p>
                <p>• Total Omzet Hari Ini: <span className="text-white font-bold">Rp 48.720.000</span> (↑ 14% vs kemarin)</p>
                <p>• Transaksi Kasir POS: <span className="text-white">312 nota selesai (0 retur tertunda)</span></p>
                <p>• Status Gudang Cabang 1: <span className="text-white">Aman (Selisih fisik: 0 unit)</span></p>
                <p>• Saldo Kas Masuk Rekening: <span className="text-white">Rp 48.720.000 (Tervalidasi VA Bank)</span></p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-slate-400 text-center sm:text-left">
                  Pengawasan penuh bisnis tanpa perlu merekap nota manual tengah malam.
                </span>
                <button
                  type="button"
                  onClick={() => openConsult("arsitektur-demo")}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors shrink-0"
                >
                  Lihat Demo Notifikasi WA
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
