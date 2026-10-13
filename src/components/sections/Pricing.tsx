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

const TIER_TOPIC: Record<string, string> = {
  fondasi: "profil",
  operasional: "sistem",
  ekosistem: "bingung",
};

export function Pricing() {
  const { openConsult } = useConsult();

  return (
    <section id="paket" aria-labelledby="paket-title" className="relative border-b border-[#EAEAEA] bg-[#FBFBFA] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* 12-column header (Columns 2 to 10) */}
        <div className="grid grid-cols-1 md:grid-cols-12 lg:gap-x-16 gap-y-6">
          <div className="md:col-start-2 md:col-end-10">
            <SectionHeading
              id="paket-title"
              eyebrow="Struktur Investasi"
              title="Investasi transparan, tanpa biaya tersembunyi"
              description="Mulai dari kebutuhan paling mendesak, lalu kembangkan ekosistem digital Anda secara bertahap dengan pendampingan penuh."
            />
          </div>
        </div>

        {/* 3-Column Double-Bezel Machined Pricing Cards (Columns 2 to 12) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 lg:gap-x-16 gap-y-6">
          <div className="md:col-start-2 md:col-end-12">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 items-stretch">
              {PRICING.map((tier, idx) => {
                const isRecommended = tier.recommended;
                return (
                  <Reveal key={tier.id} delay={idx * 0.06} className="flex h-full">
                    {/* Double-Bezel: Outer Shell */}
                    <div
                      className={cn(
                        "relative flex h-full w-full flex-col rounded-[2rem] p-2 transition-all duration-300",
                        isRecommended
                          ? "border border-emerald-800 bg-emerald-900/30 shadow-[0_24px_60px_rgba(4,120,87,0.14)]"
                          : "border border-black/[0.08] bg-slate-100/70 shadow-[0_16px_40px_rgba(0,0,0,0.03)]",
                      )}
                    >
                      {/* Double-Bezel: Inner Core with Concentric Radius */}
                      <div
                        className={cn(
                          "flex h-full w-full flex-col rounded-[calc(2rem-0.5rem)] p-6 sm:p-7",
                          isRecommended
                            ? "border border-emerald-700/60 bg-emerald-950 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]"
                            : "border border-black/[0.06] bg-white text-slate-900 shadow-[inset_0_1px_1px_rgba(255,255,255,1)]",
                        )}
                      >
                        {/* Eyebrow / Pillar Tag */}
                        <div className="flex h-7 items-center justify-between">
                          {isRecommended ? (
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                              <Crown className="h-3 w-3" /> Paling Direkomendasikan
                            </span>
                          ) : (
                            <span className="rounded-full bg-[#EDF3EC] px-3 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-[#346538]">
                              Pilar {tier.pillars.join(" + ")}
                            </span>
                          )}
                          {isRecommended && (
                            <span className="font-mono text-[11px] text-emerald-300">Pilar Hulu + Tengah</span>
                          )}
                        </div>

                        {/* Title & Tagline */}
                        <div className="mt-5 min-h-[68px]">
                          <h3
                            className={cn(
                              "font-serif text-2xl font-normal tracking-tight",
                              isRecommended ? "text-white" : "text-[#111111]",
                            )}
                          >
                            {tier.name}
                          </h3>
                          <p
                            className={cn(
                              "mt-1.5 text-xs leading-relaxed",
                              isRecommended ? "text-emerald-100/80" : "text-[#787774]",
                            )}
                          >
                            {tier.tagline}
                          </p>
                        </div>

                        {/* Price Block */}
                        <div
                          className={cn(
                            "mt-5 border-y py-4",
                            isRecommended ? "border-white/10" : "border-[#EAEAEA]",
                          )}
                        >
                          <p
                            className={cn(
                              "font-mono text-[10px] uppercase tracking-wider",
                              isRecommended ? "text-emerald-300" : "text-[#787774]",
                            )}
                          >
                            {tier.priceSuffix}
                          </p>
                          <p
                            className={cn(
                              "mt-0.5 font-mono text-3xl font-semibold tracking-tight",
                              isRecommended ? "text-white" : "text-[#111111]",
                            )}
                          >
                            {tier.price}
                          </p>
                        </div>

                        {/* Feature List */}
                        <div className="mt-6 flex-1">
                          <p
                            className={cn(
                              "font-mono text-[10px] font-semibold uppercase tracking-wider",
                              isRecommended ? "text-emerald-300" : "text-[#787774]",
                            )}
                          >
                            Cakupan Deliverables:
                          </p>
                          <ul className="mt-3 flex flex-col space-y-2.5">
                            {tier.features.map((feature) => (
                              <li
                                key={feature}
                                className={cn(
                                  "flex items-start gap-2.5 text-xs",
                                  isRecommended ? "text-emerald-100" : "text-[#2F3437]",
                                )}
                              >
                                <span
                                  className={cn(
                                    "grid h-4 w-4 shrink-0 place-items-center rounded mt-0.5",
                                    isRecommended
                                      ? "bg-emerald-800 text-emerald-200"
                                      : "bg-[#EDF3EC] text-[#346538]",
                                  )}
                                >
                                  <Check className="h-2.5 w-2.5 stroke-[2.5]" />
                                </span>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Pinned CTA Button */}
                        <div
                          className={cn(
                            "mt-8 border-t pt-5",
                            isRecommended ? "border-white/10" : "border-[#EAEAEA]",
                          )}
                        >
                          <Button
                            variant={isRecommended ? "primary" : "outline"}
                            size="md"
                            className="w-full justify-center"
                            onClick={() => openConsult(TIER_TOPIC[tier.id])}
                          >
                            {tier.cta}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>

        {/* Note strip */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-12 lg:gap-x-16">
          <div className="md:col-start-2 md:col-end-12">
            <div className="flex items-center gap-2.5 rounded-xl border border-[#EAEAEA] bg-[#F9F9F8] p-4 text-xs text-[#787774] font-mono">
              <Info className="h-4 w-4 shrink-0 text-[#111111]" />
              <span>Harga final disesuaikan setelah blueprint diagnosa 45 menit gratis. Pembayaran bertahap per milestone tersedia.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
