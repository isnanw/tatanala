"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart2,
  CheckCircle2,
  CircleAlert,
  Cpu,
  Layers,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { PILLARS, PROBLEMS } from "@/data/content";
import { EASE_OUT } from "@/lib/utils";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProblemSolution() {
  return (
    <section id="solusi" aria-labelledby="solusi-title" className="relative border-b border-black/[0.08] bg-white py-[96px]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* 12-column header row */}
        <div className="grid grid-cols-1 md:grid-cols-12 lg:gap-x-20 gap-y-6">
          <div className="md:col-start-2 md:col-end-10">
            <SectionHeading
              id="solusi-title"
              eyebrow="The Tatanala Difference"
              title={
                <>
                  Menata Sistem, <span className="text-gradient-brand">Menuntaskan Kendala.</span>
                </>
              }
              description="Bukan sekadar kosmetik visual. Kami padukan strategi pertumbuhan pasar (marketing) dengan sistem operasional di balik layar (software engineering)."
            />
          </div>
        </div>

        {/* Feature Spotlight: Human Marketing & Tech Strategist with Laptop (Columns 2-12) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 lg:gap-x-20 gap-y-12 items-center">
          {/* Left: Photograph with hard 1px borders (Columns 2 to 6) */}
          <div className="md:col-start-2 md:col-end-7">
            <Reveal>
              <div className="relative border border-black/[0.1] bg-slate-50 p-2 sm:p-3">
                <div className="relative aspect-[4/3] w-full overflow-hidden border border-black/[0.08] bg-slate-900">
                  <Image
                    src="/images/marketing-growth.jpg"
                    alt="Tim marketing dan sistem analis Tatanala memantau dashboard performa bisnis pada laptop"
                    fill
                    sizes="(max-width: 1024px) 100vw, 520px"
                    className="object-cover object-center transition-transform duration-500 hover:scale-[1.02]"
                  />
                  {/* Hard 1px Badge overlay */}
                  <div className="absolute inset-x-3 bottom-3 border border-white/20 bg-emerald-950/90 p-3 text-white backdrop-blur-sm">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <BarChart2 className="h-4 w-4 text-emerald-400" />
                        <span className="font-mono uppercase font-bold text-emerald-200">Arsitektur Kustom</span>
                      </div>
                      <span className="font-mono text-amber-400">ERP &amp; Funnel</span>
                    </div>
                  </div>
                </div>

                <div className="mt-2 border border-black/[0.08] bg-white p-3 text-xs">
                  <p className="font-mono text-[10px] uppercase text-slate-500">Kolaborasi Langsung</p>
                  <p className="font-semibold text-emerald-950">
                    Marketer &amp; Software Engineer berada di satu meja kerja untuk bisnis Anda.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: Diagnosis & The 3 Pillars (Columns 7 to 12) */}
          <div className="md:col-start-7 md:col-end-12">
            <Reveal delay={0.1}>
              <div className="border border-black/[0.08] bg-slate-50 p-6 sm:p-8">
                <span className="font-mono text-xs font-semibold tracking-wider text-rose-700 uppercase">
                  Masalah Umum Pengusaha
                </span>
                <h3 className="mt-3 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                  Pencatatan manual tercecer, stok bocor, dan website sepi?
                </h3>

                <ul className="mt-6 flex flex-col space-y-3">
                  {PROBLEMS.map((p, i) => (
                    <li key={p.title} className="border border-black/[0.08] bg-white p-3.5 text-xs sm:text-sm">
                      <p className="font-semibold text-slate-800">
                        <span className="font-mono font-bold text-rose-600 mr-2">0{i + 1}.</span>
                        {p.title}
                      </p>
                      <p className="mt-1 text-slate-500 text-xs leading-relaxed">{p.detail}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>

        {/* The 3 Pillars Editorial Bento (Columns 2 to 12) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 lg:gap-x-20 gap-y-6">
          <div className="md:col-start-2 md:col-end-12">
            <div className="border border-black/[0.08] bg-emerald-950 p-6 sm:p-8 text-white">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
                <div>
                  <span className="font-mono text-xs font-semibold tracking-wider text-amber-400 uppercase">
                    Pondasi Hulu ke Hilir
                  </span>
                  <h3 className="mt-1 text-2xl font-bold tracking-tight text-white">
                    Tiga Pilar Solusi Terintegrasi Tatanala
                  </h3>
                </div>
                <span className="font-mono text-xs text-emerald-300">Ekosistem Mandiri</span>
              </div>

              {/* Bento Grid layout with hard 1px borders */}
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {PILLARS.map(({ pillar, title, detail, icon: Icon }) => (
                  <div
                    key={pillar}
                    className="border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/10"
                  >
                    <div className="flex items-center justify-between">
                      <span className="border border-amber-400/40 bg-amber-400/10 px-2 py-0.5 font-mono text-[11px] font-bold tracking-wider text-amber-300 uppercase">
                        {pillar}
                      </span>
                      <Icon className="h-5 w-5 text-emerald-400" />
                    </div>
                    <h4 className="mt-4 font-display text-base font-bold text-white">{title}</h4>
                    <p className="mt-2 text-xs leading-relaxed text-emerald-100/75">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
