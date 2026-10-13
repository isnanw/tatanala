"use client";

import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { INDUSTRIES, TRUST_STATS } from "@/data/content";
import type { TrustStat } from "@/types";
import { Reveal } from "@/components/ui/Reveal";

function CountUp({ stat }: { stat: TrustStat }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [val, setVal] = useState(stat.value);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(stat.value === 0 ? 100 : 0, stat.value, {
      duration: 1.6,
      ease: [0.32, 0.72, 0, 1],
      onUpdate: setVal,
    });
    return () => controls.stop();
  }, [inView, stat.value]);

  const formatted = val.toLocaleString("id-ID", {
    minimumFractionDigits: stat.decimals ?? 0,
    maximumFractionDigits: stat.decimals ?? 0,
  });

  return (
    <span ref={ref} className="font-mono tabular-nums">
      {stat.prefix}
      {formatted}
      {stat.suffix}
    </span>
  );
}

export function TrustMetrics() {
  return (
    <section aria-labelledby="trust-title" className="relative border-b border-[#EAEAEA] bg-[#FBFBFA] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <h2 id="trust-title" className="sr-only">
          Bukti dan metrik kepercayaan
        </h2>

        {/* 12-column layout (Columns 2 to 12) */}
        <div className="grid grid-cols-1 md:grid-cols-12 lg:gap-x-16 gap-y-10">
          {/* Stats Double-Bezel Card (Cols 2 to 12) */}
          <div className="md:col-start-2 md:col-end-12">
            <Reveal>
              {/* Outer Shell */}
              <div className="rounded-[2rem] border border-black/[0.08] bg-slate-100/70 p-2 sm:p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.03)]">
                {/* Inner Core */}
                <div className="rounded-[calc(2rem-0.625rem)] border border-black/[0.06] bg-white p-6 sm:p-8 shadow-[inset_0_1px_1px_rgba(255,255,255,1)]">
                  <div className="flex items-center justify-between border-b border-[#EAEAEA] pb-4">
                    <span className="font-mono text-xs uppercase font-semibold tracking-wider text-[#787774]">
                      Indikator Performa &amp; SLA
                    </span>
                    <span className="rounded-full bg-[#EDF3EC] px-2.5 py-0.5 font-mono text-[10px] font-semibold text-[#346538]">
                      Audited 2026
                    </span>
                  </div>

                  <div className="mt-6 grid gap-6 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#EAEAEA]">
                    {TRUST_STATS.map((s, idx) => {
                      const Icon = s.icon;
                      return (
                        <div key={s.label} className={idx > 0 ? "pt-6 md:pt-0 md:pl-6" : ""}>
                          <div className="flex items-center gap-2">
                            <Icon className="h-4 w-4 text-[#787774]" />
                            <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#787774]">{s.label}</p>
                          </div>
                          <p className="mt-2 font-mono text-3xl sm:text-4xl font-semibold tracking-tight text-[#111111]">
                            <CountUp stat={s} />
                          </p>
                          <p className="mt-1.5 text-xs text-[#787774] leading-relaxed">{s.description}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Industry Strip with Floating Squircles */}
            <div className="mt-10">
              <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#787774] font-medium">
                Dipercaya pelaku usaha lintas sektor
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                {INDUSTRIES.map(({ label, icon: Icon }) => (
                  <div
                    key={label}
                    className="flex items-center justify-center gap-2 rounded-xl border border-[#EAEAEA] bg-white px-3.5 py-3.5 transition-all duration-300 hover:border-[#CCCCCC] hover:-translate-y-0.5 shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
                  >
                    <Icon className="h-3.5 w-3.5 text-[#787774]" />
                    <span className="font-mono text-xs text-[#2F3437]">{label}</span>
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
