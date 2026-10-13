"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { EASE_OUT } from "@/lib/utils";
import { Button, ButtonIconBadge, ButtonLink } from "@/components/ui/Button";
import { useConsult } from "@/components/consult/ConsultProvider";
import { HeroMockup } from "./HeroMockup";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.32, 0.72, 0, 1] } },
};

const AVATARS = ["RA", "DW", "HS", "MK"];

export function Hero() {
  const { openConsult } = useConsult();

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative border-b border-[#EAEAEA] bg-[#FBFBFA] pt-[156px] pb-[104px]"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 lg:gap-x-16 gap-y-12 items-center">
          {/* Asymmetric Editorial Hero Content (Cols 2-8) */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="md:col-start-2 md:col-end-9 flex flex-col justify-center"
          >
            {/* Microscopic pill-shaped eyebrow badge (Section 4.C) */}
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-900/15 bg-[#EDF3EC] px-3.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#064E3B]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#064E3B]" />
                Rekayasa Sistem &amp; Pemasaran Terukur
              </span>
            </motion.div>

            {/* Editorial Serif Headline */}
            <motion.h1
              id="hero-title"
              variants={item}
              className="mt-6 font-serif text-[2.85rem] font-normal leading-[1.06] tracking-[-0.03em] sm:text-5xl lg:text-[4.25rem] text-[#111111]"
            >
              Bukan sekadar membuat website.{" "}
              <span className="italic text-[#787774]">Kami menata sistem</span> dan pertumbuhan operasional bisnis Anda.
            </motion.h1>

            {/* Subtitle with generous line-height */}
            <motion.p
              variants={item}
              className="mt-6 max-w-[60ch] text-base leading-[1.65] text-[#787774] sm:text-lg"
            >
              Dari profil perusahaan berdaya pikat tinggi hingga arsitektur ERP kustom dan periklanan terarah.
              Teknologi dirancang untuk berjalan mandiri, terkendali, dan terukur.
            </motion.p>

            {/* Nested CTA & Button-in-Button Trailing Icon Architecture (Section 4.B) */}
            <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" onClick={() => openConsult()}>
                <span>Diskusi Kebutuhan Anda</span>
                <ButtonIconBadge>
                  <ArrowRight className="h-4 w-4 text-white" aria-hidden />
                </ButtonIconBadge>
              </Button>
              <ButtonLink href="#portofolio" variant="outline" size="lg">
                <span>Tinjau Portofolio</span>
                <ArrowUpRight className="h-4 w-4 text-[#787774]" aria-hidden />
              </ButtonLink>
            </motion.div>

            {/* Keystroke & Micro-Specs Strip */}
            <motion.div
              variants={item}
              className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-5 font-mono text-xs text-[#787774]"
            >
              <span className="inline-flex items-center gap-1.5">
                <kbd className="rounded border border-[#EAEAEA] bg-[#F7F6F3] px-1.5 py-0.5 text-[10px] text-[#2F3437]">B</kbd>
                Blueprint Analisis Gratis
              </span>
              <span className="inline-flex items-center gap-1.5">
                <kbd className="rounded border border-[#EAEAEA] bg-[#F7F6F3] px-1.5 py-0.5 text-[10px] text-[#2F3437]">S</kbd>
                100% Hak Milik Source Code
              </span>
              <span className="inline-flex items-center gap-1.5">
                <kbd className="rounded border border-[#EAEAEA] bg-[#F7F6F3] px-1.5 py-0.5 text-[10px] text-[#2F3437]">0</kbd>
                Tanpa Biaya Tersembunyi
              </span>
            </motion.div>

            {/* Trust & Meta Row with Squircles */}
            <motion.div
              variants={item}
              className="mt-10 flex flex-wrap items-center gap-4 border-t border-[#EAEAEA] pt-6"
            >
              <div className="flex -space-x-1.5" aria-hidden>
                {AVATARS.map((initials) => (
                  <span
                    key={initials}
                    className="grid h-7 w-7 place-items-center rounded-lg border border-[#EAEAEA] bg-white font-mono text-[10px] font-semibold text-[#111111] shadow-xs"
                  >
                    {initials}
                  </span>
                ))}
              </div>
              <div className="text-xs text-[#787774]">
                <span className="font-mono font-semibold text-[#111111]">4.9 / 5.0</span>
                <span className="mx-2 text-[#D4D4D4]">•</span>
                <span>Dipercaya 120+ pemilik usaha di 14 kota</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Persona Visual with Double-Bezel Hardware Architecture in Cols 9-12 */}
          <div className="md:col-start-9 md:col-end-13">
            <HeroMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
