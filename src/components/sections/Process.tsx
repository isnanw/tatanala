"use client";

import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/data/content";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Editorial Timeline with 12-column grid, 80px desktop gutters,
 * hard 1px borders, and strictly 24px vertical rhythm.
 */
export function Process() {
  return (
    <section id="alur-kerja" aria-labelledby="alur-title" className="relative border-b border-black/[0.08] bg-white py-[96px]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* 12-column header (Columns 2 to 10) */}
        <div className="grid grid-cols-1 md:grid-cols-12 lg:gap-x-20 gap-y-6">
          <div className="md:col-start-2 md:col-end-10">
            <SectionHeading
              id="alur-title"
              eyebrow="Alur Kerja"
              title={
                <>
                  Transparan dari <span className="text-gradient-brand">Diagnosa hingga Bertumbuh</span>
                </>
              }
              description="Proses terstruktur lima tahap: Anda selalu tahu apa yang sedang dikerjakan, kapan selesai, dan bagaimana tolok ukur hasilnya."
            />
          </div>
        </div>

        {/* 12-column Process Steps (Columns 2 to 12) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 lg:gap-x-20 gap-y-6">
          <div className="md:col-start-2 md:col-end-12">
            <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {PROCESS_STEPS.map((step, i) => {
                const Icon = step.icon;
                return (
                  <li key={step.title} className="flex">
                    <Reveal delay={i * 0.06} className="flex h-full w-full flex-col">
                      <div className="flex h-full flex-col border border-black/[0.08] bg-slate-50 p-5 transition-colors hover:border-emerald-700 hover:bg-white">
                        <div className="flex items-center justify-between border-b border-black/[0.08] pb-3">
                          <span className="font-mono text-xl font-bold text-emerald-950">
                            0{i + 1}
                          </span>
                          <span className="font-mono text-[10px] uppercase font-bold text-amber-700 border border-amber-400/40 bg-amber-400/10 px-2 py-0.5">
                            {step.duration}
                          </span>
                        </div>
                        <div className="mt-4 flex items-center gap-2">
                          <Icon className="h-4 w-4 text-emerald-700" />
                          <h3 className="font-display text-sm font-bold text-emerald-950">{step.title}</h3>
                        </div>
                        <p className="mt-2 text-xs leading-relaxed text-slate-600 flex-1">
                          {step.description}
                        </p>
                      </div>
                    </Reveal>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
