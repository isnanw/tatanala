"use client";

import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Editorial Timeline with 12-column grid, warm bone background,
 * and crisp 1px solid #EAEAEA borders.
 */
export function Process() {
  return (
    <section id="alur-kerja" aria-labelledby="alur-title" className="relative border-b border-[#EAEAEA] bg-[#FBFBFA] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* 12-column header (Columns 2 to 10) */}
        <div className="grid grid-cols-1 md:grid-cols-12 lg:gap-x-16 gap-y-6">
          <div className="md:col-start-2 md:col-end-10">
            <SectionHeading
              id="alur-title"
              eyebrow="Alur Kerja"
              title="Transparan dari diagnosa hingga bertumbuh"
              description="Proses terstruktur lima tahap: Anda selalu tahu apa yang sedang dikerjakan, kapan selesai, dan bagaimana tolok ukur hasilnya."
            />
          </div>
        </div>

        {/* 12-column Process Steps (Columns 2 to 12) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 lg:gap-x-16 gap-y-6">
          <div className="md:col-start-2 md:col-end-12">
            <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {PROCESS_STEPS.map((step, i) => {
                const Icon = step.icon;
                return (
                  <li key={step.title} className="flex">
                    <Reveal delay={i * 0.05} className="flex h-full w-full flex-col">
                      <div className="flex h-full flex-col rounded-lg border border-[#EAEAEA] bg-white p-5 transition-colors hover:border-[#D4D4D4] shadow-[0_1px_4px_rgba(0,0,0,0.02)]">
                        <div className="flex items-center justify-between border-b border-[#EAEAEA] pb-3">
                          <span className="font-mono text-lg font-semibold text-[#111111]">
                            0{i + 1}
                          </span>
                          <span className="rounded bg-[#F7F6F3] font-mono text-[10px] uppercase font-medium text-[#787774] px-2 py-0.5">
                            {step.duration}
                          </span>
                        </div>
                        <div className="mt-3.5 flex items-center gap-2">
                          <Icon className="h-4 w-4 text-[#787774]" />
                          <h3 className="font-serif text-base font-normal text-[#111111]">{step.title}</h3>
                        </div>
                        <p className="mt-2 text-xs leading-relaxed text-[#787774] flex-1">
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
