"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles, ShieldCheck } from "lucide-react";
import { useConsult } from "@/components/consult/ConsultProvider";

export function FinalCta() {
  const { openConsult } = useConsult();

  return (
    <section className="py-16 sm:py-24 bg-[#F8FAFC]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2.5rem] bg-[#0A0F1D] px-6 py-20 sm:px-16 sm:py-28 text-center shadow-2xl border border-slate-800"
        >
          {/* Animated Ambient Radial Glows */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.35, 0.2],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-blue-600 blur-3xl pointer-events-none"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-sky-500 blur-3xl pointer-events-none"
          />

          {/* Content */}
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            {/* Pill */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full bg-blue-900/50 border border-blue-500/30 px-4 py-1.5 text-xs font-semibold text-blue-300 mb-6 shadow-sm"
            >
              <Sparkles className="h-3.5 w-3.5 text-blue-400" />
              <span>Diagnosa Gratis &bull; Tanpa Komitmen</span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight"
            >
              Siap Menata Sistem Operasional Bisnis Anda?
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-5 max-w-xl text-base sm:text-lg text-slate-300 leading-relaxed"
            >
              Ceritakan kendala nota manual, selisih stok gudang, atau kebutuhan website tender Anda. Kami bantu petakan solusinya secara cuma-cuma.
            </motion.p>

            {/* Center Blue Pill Button with spring animation */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-10"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="button"
                onClick={() => openConsult("bingung")}
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-blue-600 hover:bg-blue-500 active:scale-95 text-white px-9 py-4 text-sm font-bold shadow-xl shadow-blue-600/30 transition-all duration-200"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Konsultasikan Masalah Anda Sekarang</span>
                <ArrowRight className="h-4 w-4" />
              </motion.button>
            </motion.div>

            {/* Trust points */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-emerald-400" /> 100% Hak Milik Source Code
              </span>
              <span>&bull;</span>
              <span>Blueprint Alur Kerja Gratis</span>
              <span>&bull;</span>
              <span>Respon WhatsApp Cepat</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
