"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Megaphone, Package, Search, Sparkles, TrendingUp } from "lucide-react";
import { EASE_OUT } from "@/lib/utils";

const BARS = [36, 52, 44, 68, 58, 82, 74, 94, 72, 88, 98, 86];

/**
 * Editorial Hero Visual for Columns 9-12:
 * Features a high-definition marketing specialist on laptop,
 * framed by architectural 1px solid borders with zero soft drop shadows.
 */
export function HeroMockup() {
  return (
    <div
      role="img"
      aria-label="Pakar digital marketing Tatanala sedang mengoptimalkan dashboard sistem informasi dan iklan performa pada laptop"
      className="relative w-full"
    >
      {/* Outer Editorial Container with hard 1px border */}
      <div className="relative border border-black/[0.1] bg-slate-50 p-2 sm:p-3">
        {/* Main Photograph */}
        <div className="relative aspect-[4/5] w-full overflow-hidden border border-black/[0.08] bg-slate-900">
          <Image
            src="/images/marketing-specialist.jpg"
            alt="Pakar digital marketing & strategi software Tatanala menganalisis performa bisnis di laptop"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 420px"
            className="object-cover object-center transition-transform duration-500 hover:scale-[1.02]"
          />

          {/* Hard 1px Badge Over Image (Bottom) */}
          <div className="absolute inset-x-3 bottom-3 border border-white/20 bg-emerald-950/90 p-3.5 text-white backdrop-blur-sm">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span className="font-mono text-xs font-semibold tracking-wide uppercase text-emerald-200">
                  Live Operations
                </span>
              </div>
              <span className="font-mono text-[11px] text-amber-400">ROAS 4.6x</span>
            </div>
            <p className="mt-1 font-display text-sm font-bold text-white">
              Sistem Realtime &amp; Iklan Terukur
            </p>
          </div>
        </div>

        {/* Micro Information Strip (Hard 1px borders) */}
        <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
          <div className="border border-black/[0.08] bg-white p-2.5">
            <p className="font-mono text-[10px] uppercase text-slate-500">Trafik Organik</p>
            <p className="font-display text-base font-bold text-emerald-950">+218%</p>
          </div>
          <div className="border border-black/[0.08] bg-white p-2.5">
            <p className="font-mono text-[10px] uppercase text-slate-500">Sinkronisasi</p>
            <p className="font-display text-base font-bold text-emerald-950">4 Cabang</p>
          </div>
        </div>
      </div>
    </div>
  );
}
