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
      ease: [0.22, 1, 0.36, 1],
      onUpdate: setVal,
    });
    return () => controls.stop();
  }, [inView, stat.value]);

  const formatted = val.toLocaleString("id-ID", {
    minimumFractionDigits: stat.decimals ?? 0,
    maximumFractionDigits: stat.decimals ?? 0,
  });

  return (
    <span ref={ref} className="tabular-nums">
      {stat.prefix}
      {formatted}
      {stat.suffix}
    </span>
  );
}

export function TrustMetrics() {
  return (
    <section aria-labelledby="trust-title" className="relative border-b border-black/[0.08] bg-white py-[96px]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <h2 id="trust-title" className="sr-only">
          Bukti dan metrik kepercayaan
        </h2>

        {/* 12-column layout (Columns 2 to 12) */}
        <div className="grid grid-cols-1 md:grid-cols-12 lg:gap-x-20 gap-y-12">
          {/* Stats Architectural Strip in Dark Emerald */}
          <div className="md:col-start-2 md:col-end-12">
            <Reveal>
              <div className="border border-emerald-900 bg-emerald-950 p-6 sm:p-10 text-white">
                <div className="border-b border-white/10 pb-6 flex items-center justify-between">
                  <span className="font-mono text-xs uppercase text-amber-400 font-bold tracking-wider">
                    Indikator Performa &amp; SLA
                  </span>
                  <span className="font-mono text-xs text-emerald-300">Audited 2026</span>
                </div>

                <div className="mt-8 grid gap-8 md:grid-cols-3">
                  {TRUST_STATS.map((s) => {
                    const Icon = s.icon;
                    return (
                      <div key={s.label} className="border-l border-white/10 pl-6">
                        <div className="flex items-center gap-3">
                          <Icon className="h-5 w-5 text-emerald-400" />
                          <p className="font-mono text-xs text-amber-300 font-bold uppercase">{s.label}</p>
                        </div>
                        <p className="mt-3 font-display text-4xl font-extrabold tracking-tight text-white">
                          <CountUp stat={s} />
                        </p>
                        <p className="mt-2 text-xs text-emerald-100/70 leading-relaxed">{s.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Reveal>

            {/* Industry Strip with Hard 1px Borders */}
            <div className="mt-12">
              <p className="font-mono text-xs uppercase tracking-wider text-slate-500 font-bold">
                Dipercaya pelaku usaha lintas sektor
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                {INDUSTRIES.map(({ label, icon: Icon }) => (
                  <div
                    key={label}
                    className="flex items-center justify-center gap-2 border border-black/[0.08] bg-slate-50 px-4 py-4 transition-colors hover:border-emerald-600 hover:bg-white"
                  >
                    <Icon className="h-4 w-4 text-slate-500" />
                    <span className="font-mono text-xs font-bold text-slate-700">{label}</span>
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
