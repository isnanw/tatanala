"use client";

import { motion } from "framer-motion";
import { MessageSquare, ArrowRight, ShieldCheck, PhoneCall, Clock } from "lucide-react";
import Image from "next/image";
import { useConsult } from "@/components/consult/ConsultProvider";
import { SITE } from "@/data/content";

export function PreFooterSupportBanner() {
  const { openConsult } = useConsult();

  return (
    <section className="py-14 sm:py-20 bg-[#F8FAFC]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Banner Container in Deep Slate/Navy */}
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#07101E] border border-slate-800 p-8 sm:p-12 lg:p-14 text-white shadow-2xl">
          
          {/* Background Aura */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Image: Professional Support Desk Consultant */}
            <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
              <div className="relative w-full max-w-[380px] aspect-[4/3] rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-900 group">
                <Image
                  src="/images/support-consultant.jpg"
                  alt="Layanan Bantuan & Konsultasi Tatanala"
                  fill
                  sizes="(max-width: 768px) 100vw, 380px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Micro badge overlay */}
                <div className="absolute bottom-3 left-3 right-3 bg-slate-900/90 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-slate-700 text-xs sm:text-[13px] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-semibold text-slate-200">Customer Support Desk</span>
                  </div>
                  <span className="font-mono text-blue-400 font-bold">&lt; 15 Mnt Respon</span>
                </div>
              </div>
            </div>

            {/* Right Copy: Compelling Call to Action */}
            <div className="lg:col-span-7 order-1 lg:order-2 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-semibold mb-4">
                <Clock className="h-3.5 w-3.5" />
                <span>Konsultasi Teknis Responsif</span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-4xl font-black tracking-tight text-white leading-tight">
                Masih Bertahan dengan Alur Kerja Manual yang Rentan?
              </h2>

              <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
                Tinggalkan catatan nota yang rentan hilang, rekap absen kertas yang memakan waktu, atau website usang yang gagal meyakinkan panitia tender. Konsultasikan kebutuhan arsitektur digital Anda hari ini.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={() => openConsult("prefooter-konsultasi")}
                  className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white px-7 py-3.5 text-sm sm:text-base font-bold shadow-lg shadow-blue-600/30 transition-all cursor-pointer"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>Konsultasi Sekarang</span>
                  <ArrowRight className="h-4 w-4" />
                </motion.button>

                <a
                  href={`tel:${SITE.whatsapp}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 hover:bg-slate-800 text-slate-200 px-6 py-3.5 text-sm sm:text-base font-semibold transition-colors"
                >
                  <PhoneCall className="h-4 w-4 text-blue-400" />
                  <span>{SITE.whatsappDisplay}</span>
                </a>
              </div>

              <div className="mt-6 flex items-center gap-6 text-xs sm:text-sm text-slate-300 font-medium">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-emerald-400" /> Diskusi Rahasia (NDA Terjamin)
                </span>
                <span>&bull;</span>
                <span>Tanpa Biaya Analisis Awal</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
