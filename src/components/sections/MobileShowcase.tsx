"use client";

import { motion } from "framer-motion";
import { Smartphone, Tablet, Laptop, CheckCircle2, ShieldCheck, ArrowRight, Zap, BellRing } from "lucide-react";
import Image from "next/image";
import { useConsult } from "@/components/consult/ConsultProvider";

export function MobileShowcase() {
  const { openConsult } = useConsult();

  return (
    <section id="aksesibilitas" className="py-20 sm:py-28 bg-white border-b border-slate-200/80 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200/80 px-4 py-1 text-xs font-semibold text-blue-700 mb-4">
              <Smartphone className="h-3.5 w-3.5" />
              <span>Aksesibilitas Multi-Device &amp; Mobilitas Tinggi</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Akses Kendali Bisnis dari Ponsel, Tablet, &amp; Laptop Kapan Saja
            </h2>

            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              Anda tidak perlu selalu duduk di depan komputer kasir. Seluruh data operasional, otorisasi diskon staf, dan laporan laba kotor harian dapat diakses secara responsif, aman, dan instan dari browser smartphone Anda.
            </p>

            <div className="mt-8 space-y-4">
              {[
                {
                  title: "Aplikasi PWA Ringan Tanpa Membebani Memori HP",
                  desc: "Dapat diinstal langsung ke layar utama smartphone Android / iOS tanpa melalui Play Store yang rumit.",
                },
                {
                  title: "Otorisasi Transaksi & Diskon Kasir Jarak Jauh",
                  desc: "Setujui pengajuan diskon khusus staf kasir langsung via pop-up konfirmasi dalam hitungan detik.",
                },
                {
                  title: "Enkripsi Session SSL & Proteksi Biometrik",
                  desc: "Data terlindungi dengan protokol autentikasi multi-faktor dan logout otomatis jika perangkat tidak aktif.",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100">
              <button
                type="button"
                onClick={() => openConsult("mobile-demo")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-md shadow-blue-600/20"
              >
                <span>Uji Tampilan Responsif Mobile</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>

          {/* Right Mockup Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Phone Frame Mockup */}
              <div className="relative mx-auto rounded-[3rem] border-8 border-slate-900 bg-slate-900 p-2 shadow-2xl shadow-blue-900/20">
                {/* Speaker notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 h-4 w-28 bg-slate-900 rounded-full z-20 flex items-center justify-center">
                  <div className="h-1.5 w-10 bg-slate-700 rounded-full" />
                </div>

                {/* Inner Screen */}
                <div className="rounded-[2.4rem] overflow-hidden bg-slate-950 text-white p-5 pt-8 relative">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center text-[10px] text-slate-400 mb-4 px-2">
                    <span>09:41</span>
                    <div className="flex items-center gap-1">
                      <span>5G</span>
                      <div className="h-2 w-4 border border-slate-400 rounded-sm" />
                    </div>
                  </div>

                  {/* Header in Screen */}
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider">
                        TATANALA ERP
                      </span>
                      <h4 className="text-sm font-bold text-white">
                        Dashboard Owner Realtime
                      </h4>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-blue-600/30 border border-blue-500 text-blue-400 flex items-center justify-center">
                      <BellRing className="h-4 w-4" />
                    </div>
                  </div>

                  {/* Metric Card 1 */}
                  <div className="rounded-2xl bg-slate-900 border border-slate-800 p-4 mb-3">
                    <span className="text-[10px] text-slate-400 uppercase">
                      Omzet Hari Ini (Multi-Cabang)
                    </span>
                    <div className="text-2xl font-black text-emerald-400 mt-1">
                      Rp 48.720.000
                    </div>
                    <div className="text-[10px] text-slate-400 mt-1 flex items-center justify-between">
                      <span>312 transaksi tervalidasi</span>
                      <span className="text-emerald-400 font-bold">↑ 14.2%</span>
                    </div>
                  </div>

                  {/* Branch Status Mini List */}
                  <div className="space-y-2 mb-4">
                    <div className="rounded-xl bg-slate-900/80 border border-slate-800/80 p-3 flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-white">Cabang 01 (Pusat)</div>
                        <div className="text-[10px] text-slate-400">184 Struk • Kasir Aktif</div>
                      </div>
                      <span className="text-xs font-bold text-emerald-400">Rp 29.400.000</span>
                    </div>

                    <div className="rounded-xl bg-slate-900/80 border border-slate-800/80 p-3 flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-white">Cabang 02 (Utara)</div>
                        <div className="text-[10px] text-slate-400">128 Struk • Kasir Aktif</div>
                      </div>
                      <span className="text-xs font-bold text-emerald-400">Rp 19.320.000</span>
                    </div>
                  </div>

                  {/* Quick Action in App */}
                  <div className="rounded-xl bg-blue-600/20 border border-blue-500/40 p-3 text-center">
                    <span className="text-[11px] font-bold text-blue-400">
                      Otorisasi Diskon Staf: 0 Menunggu
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
