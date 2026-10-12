"use client";

import { motion } from "framer-motion";
import { Check, Crown, Info } from "lucide-react";
import { PRICING } from "@/data/content";
import { cn } from "@/lib/utils";
import type { Pillar, PricingTier } from "@/types";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useConsult } from "@/components/consult/ConsultProvider";

const ALL_PILLARS: Pillar[] = ["Hulu", "Tengah", "Hilir"];
const TIER_TOPIC: Record<string, string> = { fondasi: "profil", operasional: "sistem", ekosistem: "bingung" };

export function Pricing() {
  const { openConsult } = useConsult();
  const fondasiTier = PRICING.find((p) => p.id === "fondasi")!;
  const operasionalTier = PRICING.find((p) => p.id === "operasional")!;
  const ekosistemTier = PRICING.find((p) => p.id === "ekosistem")!;

  return (
    <section id="paket" aria-labelledby="paket-title" className="relative border-b border-black/[0.08] bg-white py-[96px]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* 12-column header (Columns 2 to 10) */}
        <div className="grid grid-cols-1 md:grid-cols-12 lg:gap-x-20 gap-y-6">
          <div className="md:col-start-2 md:col-end-10">
            <SectionHeading
              id="paket-title"
              eyebrow="Paket Solusi Terpadu"
              title={
                <>
                  Investasi Jelas, <span className="text-gradient-brand">Tanpa Biaya Tersembunyi</span>
                </>
              }
              description="Mulai dari kebutuhan paling mendesak, lalu kembangkan ekosistem digital Anda secara bertahap dengan pendampingan penuh."
            />
          </div>
        </div>

        {/* Asymmetric Tiered Layout (Not a generic three-up white row!) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 lg:gap-x-20 gap-y-6 items-stretch">
          {/* Flagship: Paket Sistem Operasional (Columns 2 to 7) */}
          <div className="md:col-start-2 md:col-end-8 flex flex-col">
            <Reveal className="h-full">
              <div className="flex h-full flex-col border border-emerald-900 bg-emerald-950 p-6 text-white sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 border border-amber-400/40 bg-amber-400/10 px-3 py-1 font-mono text-xs font-bold text-amber-300 uppercase">
                    <Crown className="h-3.5 w-3.5" /> Paling Direkomendasikan
                  </span>
                  <span className="font-mono text-xs text-emerald-300">Pilar Hulu + Tengah</span>
                </div>

                <div className="mt-6 border-b border-white/10 pb-6">
                  <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                    {operasionalTier.name}
                  </h3>
                  <p className="mt-2 text-sm text-emerald-100/80 leading-relaxed">
                    {operasionalTier.tagline}
                  </p>
                  <div className="mt-6">
                    <p className="font-mono text-xs text-emerald-300 uppercase">{operasionalTier.priceSuffix}</p>
                    <p className="font-display text-4xl font-extrabold text-white tracking-tight">
                      {operasionalTier.price}
                    </p>
                  </div>
                </div>

                <ul className="mt-6 flex flex-1 flex-col space-y-3">
                  {operasionalTier.features.map((f) => (
                    <li key={f} className="flex gap-3 text-xs sm:text-sm text-emerald-100">
                      <span className="grid h-5 w-5 shrink-0 place-items-center bg-emerald-800 text-emerald-200">
                        <Check className="h-3 w-3 stroke-[3]" />
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <Button
                    size="lg"
                    className="w-full"
                    onClick={() => openConsult(TIER_TOPIC[operasionalTier.id])}
                  >
                    {operasionalTier.cta}
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Secondary Stack: Fondasi Profil & Ekosistem Lengkap (Columns 8 to 12) */}
          <div className="md:col-start-8 md:col-end-12 flex flex-col justify-between gap-6">
            {/* Tier 1: Fondasi Profil */}
            <Reveal delay={0.08} className="flex-1">
              <div className="flex h-full flex-col border border-black/[0.08] bg-slate-50 p-6 sm:p-7">
                <div className="flex items-center justify-between">
                  <h4 className="font-display text-lg font-bold text-emerald-950">{fondasiTier.name}</h4>
                  <span className="font-mono text-[11px] font-semibold text-emerald-700 uppercase">Hulu</span>
                </div>
                <p className="mt-1 text-xs text-slate-600">{fondasiTier.tagline}</p>
                <div className="mt-4 border-b border-black/[0.08] pb-4">
                  <p className="font-mono text-[10px] text-slate-500 uppercase">{fondasiTier.priceSuffix}</p>
                  <p className="font-display text-2xl font-bold text-emerald-950">{fondasiTier.price}</p>
                </div>
                <ul className="mt-4 flex flex-1 flex-col space-y-2 text-xs text-slate-700">
                  {fondasiTier.features.slice(0, 4).map((f) => (
                    <li key={f} className="flex gap-2">
                      <Check className="h-4 w-4 shrink-0 text-emerald-600" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-4 border-t border-black/[0.08]">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={() => openConsult(TIER_TOPIC[fondasiTier.id])}
                  >
                    {fondasiTier.cta}
                  </Button>
                </div>
              </div>
            </Reveal>

            {/* Tier 3: Ekosistem Lengkap */}
            <Reveal delay={0.16} className="flex-1">
              <div className="flex h-full flex-col border border-black/[0.08] bg-slate-50 p-6 sm:p-7">
                <div className="flex items-center justify-between">
                  <h4 className="font-display text-lg font-bold text-emerald-950">{ekosistemTier.name}</h4>
                  <span className="font-mono text-[11px] font-semibold text-amber-700 uppercase">Hulu + Tengah + Hilir</span>
                </div>
                <p className="mt-1 text-xs text-slate-600">{ekosistemTier.tagline}</p>
                <div className="mt-4 border-b border-black/[0.08] pb-4">
                  <p className="font-mono text-[10px] text-slate-500 uppercase">{ekosistemTier.priceSuffix}</p>
                  <p className="font-display text-2xl font-bold text-emerald-950">{ekosistemTier.price}</p>
                </div>
                <ul className="mt-4 flex flex-1 flex-col space-y-2 text-xs text-slate-700">
                  {ekosistemTier.features.slice(0, 4).map((f) => (
                    <li key={f} className="flex gap-2">
                      <Check className="h-4 w-4 shrink-0 text-emerald-600" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-4 border-t border-black/[0.08]">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={() => openConsult(TIER_TOPIC[ekosistemTier.id])}
                  >
                    {ekosistemTier.cta}
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Note strip */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 lg:gap-x-20">
          <div className="md:col-start-2 md:col-end-12">
            <div className="flex items-center gap-2 border border-black/[0.08] bg-slate-50 p-4 text-xs text-slate-600 font-mono">
              <Info className="h-4 w-4 shrink-0 text-emerald-700" />
              <span>Harga final ditentukan setelah sesi diagnosa gratis. Pembayaran bertahap per milestone tersedia.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
