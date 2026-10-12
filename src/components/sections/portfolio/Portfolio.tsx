"use client";

import { AnimatePresence, motion, type PanInfo } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import { useState, type ReactNode } from "react";
import { CASE_STUDIES } from "@/data/content";
import { cn, EASE_OUT } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { AfterMock, BeforeMock } from "./Mockups";

type View = "before" | "after";

export function Portfolio() {
  const [index, setIndex] = useState(0);
  const [view, setView] = useState<View>("after");
  const [direction, setDirection] = useState(1);
  const cs = CASE_STUDIES[index];

  const go = (next: number) => {
    const n = (next + CASE_STUDIES.length) % CASE_STUDIES.length;
    setDirection(next > index ? 1 : -1);
    setIndex(n);
    setView("after");
  };

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -60) go(index + 1);
    else if (info.offset.x > 60) go(index - 1);
  };

  return (
    <section id="portofolio" aria-labelledby="portofolio-title" className="relative border-b border-black/[0.08] bg-white py-[96px]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* 12-column header (Columns 2 to 12) */}
        <div className="grid grid-cols-1 md:grid-cols-12 lg:gap-x-20 gap-y-6 items-end">
          <div className="md:col-start-2 md:col-end-10">
            <SectionHeading
              id="portofolio-title"
              align="left"
              eyebrow="Showcase Solusi"
              title={
                <>
                  Dari Kacau Jadi <span className="text-gradient-brand">Tertata</span>
                </>
              }
              description="Bandingkan langsung kondisi sebelum dan sesudah implementasi sistem &amp; strategi pemasaran kami."
            />
          </div>
          <div className="md:col-start-10 md:col-end-12 flex justify-start md:justify-end gap-2">
            <NavArrow label="Studi kasus sebelumnya" onClick={() => go(index - 1)}>
              <ArrowLeft className="h-4 w-4" aria-hidden />
            </NavArrow>
            <NavArrow label="Studi kasus berikutnya" onClick={() => go(index + 1)}>
              <ArrowRight className="h-4 w-4" aria-hidden />
            </NavArrow>
          </div>
        </div>

        {/* 12-column Showcase Layout (Columns 2 to 12) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 lg:gap-x-20 gap-y-6">
          {/* Left: Case Studies List (Columns 2 to 5) */}
          <div className="md:col-start-2 md:col-end-6">
            <Reveal>
              <ul className="flex flex-col space-y-3" aria-label="Daftar studi kasus">
                {CASE_STUDIES.map((c, i) => {
                  const active = i === index;
                  return (
                    <li key={c.id}>
                      <button
                        type="button"
                        onClick={() => go(i)}
                        aria-current={active ? "true" : undefined}
                        className={cn(
                          "w-full border p-4 text-left transition-colors",
                          active
                            ? "border-emerald-800 bg-emerald-950 text-white"
                            : "border-black/[0.08] bg-slate-50 text-slate-800 hover:border-black/20 hover:bg-white",
                        )}
                      >
                        <span className={cn("font-mono text-[10px] font-bold uppercase", active ? "text-amber-400" : "text-slate-400")}>
                          {c.industry}
                        </span>
                        <p className={cn("mt-1 font-display font-bold text-base leading-snug", active ? "text-white" : "text-emerald-950")}>
                          {c.title}
                        </p>
                        <p className={cn("mt-1 text-xs", active ? "text-emerald-200/80" : "text-slate-500")}>
                          {c.client}
                        </p>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          </div>

          {/* Right: Interactive Before/After Preview Panel (Columns 6 to 12) */}
          <div className="md:col-start-6 md:col-end-12">
            <Reveal delay={0.08}>
              <div className="border border-black/[0.08] bg-white p-5 sm:p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-black/[0.08] pb-4">
                  <p className="max-w-md text-xs sm:text-sm text-slate-600 leading-relaxed">{cs.summary}</p>
                  <div role="tablist" aria-label="Tampilan sebelum atau sesudah" className="inline-flex shrink-0 border border-black/[0.1] bg-slate-100 p-1">
                    {(["before", "after"] as View[]).map((v) => (
                      <button
                        key={v}
                        role="tab"
                        aria-selected={view === v}
                        onClick={() => setView(v)}
                        className={cn(
                          "px-3 py-1 font-mono text-xs font-semibold uppercase transition-colors",
                          view === v ? (v === "after" ? "bg-emerald-950 text-white" : "bg-white text-rose-700") : "text-slate-500",
                        )}
                      >
                        {v === "before" ? "Sebelum" : "Sesudah"}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Preview Canvas */}
                <motion.div
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.15}
                  onDragEnd={onDragEnd}
                  className="relative mt-6 aspect-[16/10] cursor-grab active:cursor-grabbing"
                  aria-hidden
                >
                  <AnimatePresence mode="wait" custom={direction} initial={false}>
                    <motion.div
                      key={`${cs.id}-${view}`}
                      custom={direction}
                      initial={{ opacity: 0, x: 20 * direction }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 * direction }}
                      transition={{ duration: 0.35, ease: EASE_OUT }}
                      className="absolute inset-0"
                    >
                      {view === "before" ? <BeforeMock kind={cs.mockup} /> : <AfterMock kind={cs.mockup} />}
                    </motion.div>
                  </AnimatePresence>
                </motion.div>

                {/* Metrics & Checklist */}
                <div className="mt-6 border-t border-black/[0.08] pt-6 grid gap-6 md:grid-cols-[1fr_auto]">
                  <ul className="flex flex-col space-y-2">
                    {(view === "before" ? cs.before : cs.after).map((p) => (
                      <li key={p} className="flex gap-2 text-xs sm:text-sm text-slate-700">
                        {view === "before" ? (
                          <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-rose-500" aria-hidden />
                        ) : (
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden />
                        )}
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-2">
                    {cs.metrics.map((m) => (
                      <div key={m.label} className="border border-black/[0.08] bg-slate-50 px-3.5 py-2.5 text-center">
                        <p className="font-display text-lg font-bold text-emerald-950">{m.value}</p>
                        <p className="font-mono text-[10px] text-slate-500 uppercase">{m.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function NavArrow({ children, label, onClick }: { children: ReactNode; label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="grid h-10 w-10 place-items-center border border-black/[0.1] bg-white text-emerald-950 transition-colors hover:bg-emerald-950 hover:text-white"
    >
      {children}
    </button>
  );
}
