"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BarChart2, CheckCircle2 } from "lucide-react";
import { PILLARS, PROBLEMS } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const PILLAR_STYLES: Record<string, { bg: string; text: string }> = {
  Hulu: { bg: "bg-[#EDF3EC]", text: "text-[#346538]" },
  Tengah: { bg: "bg-[#E1F3FE]", text: "text-[#1F6C9F]" },
  Hilir: { bg: "bg-[#FBF3DB]", text: "text-[#956400]" },
};

export function ProblemSolution() {
  return (
    <section id="solusi" aria-labelledby="solusi-title" className="relative border-b border-[#EAEAEA] bg-[#FBFBFA] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* 12-column header row */}
        <div className="grid grid-cols-1 md:grid-cols-12 lg:gap-x-16 gap-y-6">
          <div className="md:col-start-2 md:col-end-10">
            <SectionHeading
              id="solusi-title"
              eyebrow="Akar Permasalahan"
              title="Menata sistem, menuntaskan kendala operasional"
              description="Bukan sekadar kosmetik visual. Kami padukan strategi pertumbuhan pasar dengan sistem operasional di balik layar."
            />
          </div>
        </div>

        {/* Feature Spotlight: Double-Bezel Hardware Architecture (Columns 2-12) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 lg:gap-x-16 gap-y-10 items-start">
          {/* Left: Double-Bezel Faux-OS Window (Columns 2 to 6) */}
          <div className="md:col-start-2 md:col-end-7">
            <Reveal>
              <div className="rounded-[2rem] border border-black/[0.08] bg-slate-100/70 p-2 sm:p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.03)]">
                <div className="overflow-hidden rounded-[calc(2rem-0.625rem)] border border-black/[0.06] bg-white shadow-[inset_0_1px_1px_rgba(255,255,255,1)]">
                  {/* Window Top Bar */}
                  <div className="flex h-9 items-center justify-between border-b border-[#EAEAEA] bg-[#F9F9F8] px-4">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#E5E5E5]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#E5E5E5]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#E5E5E5]" />
                    </div>
                    <span className="font-mono text-[11px] font-medium text-[#787774]">
                      operations-growth.internal
                    </span>
                    <div className="w-10" />
                  </div>

                  <div className="relative aspect-[4/3] w-full bg-[#F7F6F3]">
                    <Image
                      src="/images/marketing-growth.jpg"
                      alt="Tim marketing dan sistem analis Tatanala memantau dashboard performa bisnis"
                      fill
                      sizes="(max-width: 1024px) 100vw, 500px"
                      className="object-cover object-center grayscale-[12%]"
                    />
                    <div className="absolute inset-x-3.5 bottom-3.5 flex items-center justify-between rounded-xl border border-white/20 bg-emerald-950/90 p-3 text-white backdrop-blur-md">
                      <div className="flex items-center gap-2">
                        <BarChart2 className="h-4 w-4 text-emerald-400" />
                        <span className="font-mono text-xs font-semibold text-emerald-100">Arsitektur Kustom</span>
                      </div>
                      <span className="rounded bg-emerald-800/80 px-2 py-0.5 font-mono text-[10px] font-semibold text-emerald-200">
                        ERP &amp; Funnel
                      </span>
                    </div>
                  </div>

                  <div className="border-t border-[#EAEAEA] bg-[#FBFBFA] p-4 text-xs">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-[#787774] font-medium">Kolaborasi Terarah</p>
                    <p className="mt-1 font-medium text-[#111111]">
                      Marketer dan software engineer berada di satu meja kerja untuk akselerasi bisnis Anda.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: Diagnosis & Pain Points Double-Bezel (Columns 7 to 12) */}
          <div className="md:col-start-7 md:col-end-13">
            <Reveal delay={0.08}>
              <div className="rounded-[2rem] border border-black/[0.08] bg-slate-100/70 p-2 sm:p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.03)]">
                <div className="rounded-[calc(2rem-0.625rem)] border border-black/[0.06] bg-white p-6 sm:p-7 shadow-[inset_0_1px_1px_rgba(255,255,255,1)]">
                  <span className="inline-block rounded-full bg-[#FDEBEC] px-3 py-1 font-mono text-[10px] font-semibold tracking-wider text-[#9F2F2D] uppercase">
                    Diagnosa hambatan usaha
                  </span>
                  <h3 className="mt-3.5 font-serif text-2xl font-normal text-[#111111]">
                    Pencatatan manual tercecer, stok bocor, dan website sepi?
                  </h3>

                  <ul className="mt-6 flex flex-col space-y-3">
                    {PROBLEMS.map((p, i) => (
                      <li
                        key={p.title}
                        className="rounded-xl border border-[#EAEAEA] bg-[#FBFBFA] p-3.5 transition-colors hover:border-[#CCCCCC] hover:bg-white"
                      >
                        <p className="text-xs font-semibold text-[#111111]">
                          <span className="font-mono text-[#787774] mr-2">0{i + 1}.</span>
                          {p.title}
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-[#787774]">{p.detail}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* The 3 Pillars Bento Box with Double-Bezel (Columns 2 to 12) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 lg:gap-x-16 gap-y-6">
          <div className="md:col-start-2 md:col-end-12">
            <div className="rounded-[2rem] border border-black/[0.08] bg-slate-100/70 p-2 sm:p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.03)]">
              <div className="rounded-[calc(2rem-0.625rem)] border border-black/[0.06] bg-white p-6 sm:p-8 shadow-[inset_0_1px_1px_rgba(255,255,255,1)]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#EAEAEA] pb-5">
                  <div>
                    <span className="font-mono text-[11px] font-semibold tracking-wider uppercase text-[#787774]">
                      Pondasi hulu ke hilir
                    </span>
                    <h3 className="mt-1 font-serif text-2xl font-normal text-[#111111]">
                      Tiga pilar solusi terintegrasi Tatanala
                    </h3>
                  </div>
                  <span className="rounded-full bg-[#EDF3EC] px-3 py-1 font-mono text-[11px] font-semibold text-[#346538]">
                    Ekosistem Mandiri
                  </span>
                </div>

                {/* Bento Grid: 3 Equal Pillars */}
                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  {PILLARS.map(({ pillar, title, detail, icon: Icon }) => {
                    const style = PILLAR_STYLES[pillar] ?? { bg: "bg-[#EDF3EC]", text: "text-[#346538]" };
                    return (
                      <div
                        key={pillar}
                        className="group rounded-xl border border-[#EAEAEA] bg-[#FBFBFA] p-5 transition-all duration-300 hover:border-[#CCCCCC] hover:bg-white hover:-translate-y-0.5"
                      >
                        <div className="flex items-center justify-between">
                          <span className={`rounded-full px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider ${style.bg} ${style.text}`}>
                            {pillar}
                          </span>
                          <Icon className="h-4 w-4 text-[#787774] transition-colors group-hover:text-[#111111]" />
                        </div>
                        <h4 className="mt-3.5 font-serif text-lg font-normal text-[#111111]">{title}</h4>
                        <p className="mt-2 text-xs leading-relaxed text-[#787774]">{detail}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
