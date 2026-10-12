"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useId, useState } from "react";
import { FAQS } from "@/data/content";
import { cn, EASE_OUT } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const uid = useId();

  return (
    <section id="faq" aria-labelledby="faq-title" className="relative border-b border-black/[0.08] bg-white py-[96px]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* 12-column header (Columns 2 to 10) */}
        <div className="grid grid-cols-1 md:grid-cols-12 lg:gap-x-20 gap-y-6">
          <div className="md:col-start-2 md:col-end-10">
            <SectionHeading
              id="faq-title"
              eyebrow="FAQ"
              title="Pertanyaan yang Sering Diajukan"
              description="Pertanyaan umum seputar skema kerja sama, hak kepemilikan source code, dan SLA pemeliharaan sistem."
            />
          </div>
        </div>

        {/* 12-column Accordion (Columns 2 to 12) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 lg:gap-x-20 gap-y-6">
          <div className="md:col-start-2 md:col-end-12 flex flex-col space-y-3">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              const panelId = `${uid}-panel-${i}`;
              const btnId = `${uid}-btn-${i}`;
              return (
                <div
                  key={f.question}
                  className={cn(
                    "border transition-colors",
                    isOpen ? "border-emerald-800 bg-slate-50/60" : "border-black/[0.08] bg-white hover:border-black/20",
                  )}
                >
                  <h3>
                    <button
                      id={btnId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left font-display text-base font-bold text-emerald-950 sm:p-6"
                    >
                      <span>{f.question}</span>
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.25, ease: EASE_OUT }}
                        className={cn(
                          "grid h-8 w-8 shrink-0 place-items-center border transition-colors",
                          isOpen ? "border-amber-600 bg-amber-500 text-white" : "border-black/[0.1] bg-white text-emerald-950",
                        )}
                      >
                        <Plus className="h-4 w-4" aria-hidden />
                      </motion.span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={btnId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: EASE_OUT }}
                        className="overflow-hidden"
                      >
                        <p className="border-t border-black/[0.06] p-5 text-xs sm:text-sm leading-relaxed text-slate-600 sm:p-6">
                          {f.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
