"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, PlayCircle, Star } from "lucide-react";
import { EASE_OUT } from "@/lib/utils";
import { Button, ButtonLink } from "@/components/ui/Button";
import { useConsult } from "@/components/consult/ConsultProvider";
import { HeroMockup } from "./HeroMockup";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
};

const AVATARS = [
  { i: "RA", c: "bg-emerald-800" },
  { i: "DW", c: "bg-amber-600" },
  { i: "HS", c: "bg-emerald-950" },
  { i: "MK", c: "bg-orange-600" },
];

export function Hero() {
  const { openConsult } = useConsult();

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative border-b border-black/[0.08] bg-white pt-[120px] pb-[96px]"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* 12-column grid with 80px desktop gutters (lg:gap-x-20) */}
        <div className="grid grid-cols-1 md:grid-cols-12 lg:gap-x-20 gap-y-12 items-center">
          {/* Asymmetric Content strictly in columns 2 to 8 */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="md:col-start-2 md:col-end-9 flex flex-col justify-center"
          >
            {/* Eyebrow badge */}
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2 border border-black/[0.08] bg-slate-50 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-emerald-900">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                Rekayasa Sistem &amp; Pemasaran Terukur
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              id="hero-title"
              variants={item}
              className="mt-6 font-display text-[2.5rem] font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.5rem] text-emerald-950"
            >
              Bukan Sekadar Bikin Website.{" "}
              <span className="text-gradient-brand">Kami Tuntaskan Masalah Operasional</span> Bisnis Anda.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg"
            >
              Dari profil perusahaan bereputasi tinggi hingga sistem informasi kustom dan pemasaran terarah (SEO &amp; Ads).
              Kami tata alur teknologi agar usaha Anda berjalan mandiri dan efisien.
            </motion.p>

            {/* CTA Group (Multiple of 24px vertical spacing) */}
            <motion.div variants={item} className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" onClick={() => openConsult()} className="group">
                Diskusi Kebutuhan Anda
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </Button>
              <ButtonLink href="#portofolio" variant="outline" size="lg">
                <PlayCircle className="h-4 w-4" aria-hidden />
                Lihat Contoh Solusi
              </ButtonLink>
            </motion.div>

            {/* Micro value props strip */}
            <motion.div
              variants={item}
              className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-6 font-mono text-xs text-slate-500"
            >
              <span className="inline-flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 bg-emerald-600" /> Blueprint Analisis Gratis
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 bg-emerald-600" /> Source Code Milik Anda
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 bg-amber-500" /> Tanpa Biaya Tersembunyi
              </span>
            </motion.div>

            {/* Trust Metrics Row */}
            <motion.div variants={item} className="mt-12 flex flex-wrap items-center gap-4 border-t border-black/[0.08] pt-6">
              <div className="flex -space-x-2" aria-hidden>
                {AVATARS.map((a) => (
                  <span
                    key={a.i}
                    className={`grid h-8 w-8 place-items-center border border-white text-[11px] font-bold text-white ${a.c}`}
                  >
                    {a.i}
                  </span>
                ))}
              </div>
              <div className="text-xs">
                <div className="flex items-center gap-1 text-amber-500" aria-label="Rating 4,9 dari 5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" aria-hidden />
                  ))}
                  <span className="ml-1 font-mono font-bold text-emerald-950">4.9/5</span>
                </div>
                <p className="text-slate-500">Dipercaya 120+ pengusaha di 14 kota</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Marketing Persona Visual with Laptop in Columns 9 to 12 */}
          <div className="md:col-start-9 md:col-end-13">
            <HeroMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
