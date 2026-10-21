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
    <section id="portofolio" aria-labelledby="portofolio-title" className="relative border-b border-[#EAEAEA] bg-[#FBFBFA] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* 12-column header (Columns 2 to 12) */}
        <div className="grid grid-cols-1 md:grid-cols-12 lg:gap-x-16 gap-y-6 items-end">
          <div className="md:col-start-2 md:col-end-10">
            <SectionHeading
              id="portofolio-title"
              eyebrow="Studi Kasus"
              align="left"
              title="Dari proses manual jadi sistem tertata"
              description="Bandingkan langsung kondisi sebelum dan sesudah implementasi sistem serta strategi pemasaran kami."
            />
          </div>
          <div className="md:col-start-10 md:col-end-13 flex justify-start md:justify-end gap-2">
            <NavArrow label="Studi kasus sebelumnya" onClick={() => go(index - 1)}>
              <ArrowLeft className="h-4 w-4" aria-hidden />
            </NavArrow>
            <NavArrow label="Studi kasus berikutnya" onClick={() => go(index + 1)}>
              <ArrowRight className="h-4 w-4" aria-hidden />
            </NavArrow>
          </div>
        </div>

        {/* 12-column Showcase Layout (Columns 2 to 12) */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-12 lg:gap-x-16 gap-y-6">
          {/* Left: Case Studies List (Columns 2 to 5) */}
          <div className="md:col-start-2 md:col-end-6">
            <Reveal>
              <ul className="flex flex-col space-y-2.5" aria-label="Daftar studi kasus">
                {CASE_STUDIES.map((c, i) => {
                  const active = i === index;
                  return (
                    <li key={c.id}>
                      <button
                        type="button"
                        onClick={() => go(i)}
                        aria-current={active ? "true" : undefined}
                        className={cn(
                          "w-full rounded-2xl border p-4 text-left transition-all duration-300",
                          active
                            ? "border-[#111111] bg-[#111111] text-white shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
                            : "border-[#EAEAEA] bg-white text-[#2F3437] hover:border-[#CCCCCC] hover:bg-[#F9F9F8]",
                        )}
                      >
                        <span className={cn("font-mono text-xs font-semibold uppercase tracking-wider", active ? "text-blue-300" : "text-[#787774]")}>
                          {c.industry}
                        </span>
                        <p className={cn("mt-1.5 text-base sm:text-lg font-bold leading-snug", active ? "text-white" : "text-[#111111]")}>
                          {c.title}
                        </p>
                        <p className={cn("mt-1 text-xs sm:text-[13px] font-medium", active ? "text-slate-300" : "text-slate-600")}>
                          {c.client}
                        </p>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          </div>

          {/* Right: Double-Bezel Preview Hardware Shell (Columns 6 to 12) */}
          <div className="md:col-start-6 md:col-end-13">
            <Reveal delay={0.08}>
              {/* Outer Shell */}
              <div className="rounded-[2rem] border border-black/[0.08] bg-slate-100/70 p-2 sm:p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.03)]">
                {/* Inner Core */}
                <div className="rounded-[calc(2rem-0.625rem)] border border-black/[0.06] bg-white p-5 sm:p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,1)]">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-[#EAEAEA] pb-4">
                    <p className="max-w-md text-sm sm:text-base text-slate-700 leading-relaxed">{cs.summary}</p>
                    <div role="tablist" aria-label="Tampilan sebelum atau sesudah" className="inline-flex shrink-0 rounded-full border border-[#EAEAEA] bg-[#F9F9F8] p-1">
                      {(["before", "after"] as View[]).map((v) => (
                        <button
                          key={v}
                          role="tab"
                          aria-selected={view === v}
                          onClick={() => setView(v)}
                          className={cn(
                            "rounded-full px-4 py-1.5 text-xs sm:text-sm font-bold uppercase transition-colors cursor-pointer",
                            view === v
                              ? v === "after"
                                ? "bg-[#111111] text-white"
                                : "bg-white text-[#9F2F2D] border border-[#EAEAEA] shadow-xs"
                              : "text-slate-600 hover:text-slate-900",
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
                    className="relative mt-5 aspect-[16/10] cursor-grab active:cursor-grabbing rounded-xl border border-[#EAEAEA] overflow-hidden bg-[#FBFBFA]"
                    aria-hidden
                  >
                    <AnimatePresence mode="wait" custom={direction} initial={false}>
                      <motion.div
                        key={`${cs.id}-${view}`}
                        custom={direction}
                        initial={{ opacity: 0, x: 16 * direction }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -16 * direction }}
                        transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
                        className="absolute inset-0"
                      >
                        {view === "before" ? <BeforeMock kind={cs.mockup} /> : <AfterMock kind={cs.mockup} />}
                      </motion.div>
                    </AnimatePresence>
                  </motion.div>

                  {/* Metrics & Checklist */}
                  <div className="mt-5 border-t border-[#EAEAEA] pt-5 grid gap-5 md:grid-cols-[1fr_auto]">
                    <ul className="flex flex-col space-y-2.5">
                      {(view === "before" ? cs.before : cs.after).map((p) => (
                        <li key={p} className="flex gap-2.5 text-sm sm:text-base text-slate-800 font-medium">
                          {view === "before" ? (
                            <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#9F2F2D]" aria-hidden />
                          ) : (
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#346538]" aria-hidden />
                          )}
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex gap-2.5">
                      {cs.metrics.map((m) => (
                        <div key={m.label} className="rounded-xl border border-[#EAEAEA] bg-[#F9F9F8] px-4 py-2.5 text-center">
                          <p className="font-mono text-base sm:text-lg font-bold text-slate-900">{m.value}</p>
                          <p className="font-mono text-xs font-semibold text-slate-500 uppercase">{m.label}</p>
                        </div>
                      ))}
                    </div>
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
      className="grid h-9 w-9 place-items-center rounded-full border border-[#EAEAEA] bg-white text-[#111111] transition-all hover:bg-[#111111] hover:text-white hover:border-[#111111]"
    >
      {children}
    </button>
  );
}
