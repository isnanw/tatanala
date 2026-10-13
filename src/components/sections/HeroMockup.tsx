"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/**
 * Double-Bezel (Doppelrand) Architecture + Faux-OS Window Chrome:
 * Outer Shell (rounded-[2rem], hairline border, subtle background, p-2)
 * Inner Core (concentric rounded-[calc(2rem-0.625rem)], inner highlight, Faux-OS controls).
 */
export function HeroMockup() {
  return (
    <div
      role="img"
      aria-label="Pakar digital marketing Tatanala sedang mengoptimalkan dashboard sistem informasi pada laptop"
      className="relative w-full"
    >
      {/* Outer Shell */}
      <div className="rounded-[2rem] border border-black/[0.08] bg-slate-100/80 p-2 sm:p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.04)]">
        {/* Inner Core */}
        <div className="overflow-hidden rounded-[calc(2rem-0.625rem)] border border-black/[0.06] bg-white shadow-[inset_0_1px_1px_rgba(255,255,255,1)]">
          {/* Faux-OS Window Top Bar */}
          <div className="flex h-9 items-center justify-between border-b border-[#EAEAEA] bg-[#F9F9F8] px-4">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#E5E5E5]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#E5E5E5]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#E5E5E5]" />
            </div>
            <span className="font-mono text-[11px] font-medium text-[#787774]">
              tatanala-suite.internal
            </span>
            <div className="w-10" />
          </div>

          {/* Window Content: Editorial Persona Photography */}
          <div className="relative aspect-[4/3] w-full bg-[#F7F6F3]">
            <Image
              src="/images/marketing-specialist.jpg"
              alt="Pakar digital marketing & arsitek sistem Tatanala"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 440px"
              className="object-cover object-center grayscale-[12%] contrast-[1.02]"
            />

            {/* Concentric Floating Pill Status Badge */}
            <div className="absolute inset-x-3.5 bottom-3.5 flex items-center justify-between rounded-xl border border-white/20 bg-emerald-950/90 px-3.5 py-2.5 text-white backdrop-blur-md shadow-[0_4px_16px_rgba(0,0,0,0.12)]">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-xs font-semibold text-emerald-100">
                  Live Operations
                </span>
              </div>
              <span className="rounded bg-emerald-800/80 px-2 py-0.5 font-mono text-[11px] font-semibold text-emerald-200">
                ROAS 4.6x
              </span>
            </div>
          </div>

          {/* Micro-Metrics Row */}
          <div className="grid grid-cols-2 divide-x divide-[#EAEAEA] border-t border-[#EAEAEA] bg-[#FBFBFA] text-xs">
            <div className="p-3.5">
              <p className="font-mono text-[10px] uppercase tracking-wider text-[#787774]">Trafik Organik</p>
              <p className="mt-0.5 font-mono text-base font-semibold text-[#111111]">+218%</p>
            </div>
            <div className="p-3.5">
              <p className="font-mono text-[10px] uppercase tracking-wider text-[#787774]">Sinkronisasi Multi-Cabang</p>
              <p className="mt-0.5 font-mono text-base font-semibold text-[#111111]">4 Lokasi</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
