"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useId, useState } from "react";
import { FAQS } from "@/data/content";
import { cn, EASE_OUT } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const uid = useId();

  return (
    <section id="faq" aria-labelledby="faq-title" className="relative border-b border-[#EAEAEA] bg-[#FBFBFA] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* 12-column header (Columns 2 to 10) */}
        <div className="grid grid-cols-1 md:grid-cols-12 lg:gap-x-16 gap-y-6">
          <div className="md:col-start-2 md:col-end-10">
            <SectionHeading
              id="faq-title"
              eyebrow="Tanya Jawab"
              title="Pertanyaan yang sering diajukan"
              description="Pertanyaan umum seputar skema kerja sama, hak kepemilikan source code, dan SLA pemeliharaan sistem."
            />
          </div>
        </div>

        {/* 12-column Editorial Accordion: stripped container boxes, separated only by border-bottom (Columns 2 to 12) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 lg:gap-x-16 gap-y-6">
          <div className="md:col-start-2 md:col-end-12 divide-y divide-[#EAEAEA] border-t border-b border-[#EAEAEA]">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              const panelId = `${uid}-panel-${i}`;
              const btnId = `${uid}-btn-${i}`;
              return (
                <div key={f.question} className="py-2">
                  <h3>
                    <button
                      id={btnId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 py-4 text-left transition-colors hover:text-[#111111]"
                    >
                      <span className={cn("font-serif text-lg sm:text-xl font-normal transition-colors", isOpen ? "text-[#111111]" : "text-[#2F3437]")}>
                        {f.question}
                      </span>
                      <span className="grid h-6 w-6 shrink-0 place-items-center text-[#787774]">
                        {isOpen ? (
                          <Minus className="h-4 w-4 text-[#111111]" aria-hidden />
                        ) : (
                          <Plus className="h-4 w-4 text-[#787774]" aria-hidden />
                        )}
                      </span>
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
                        transition={{ duration: 0.25, ease: EASE_OUT }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 text-xs sm:text-sm leading-relaxed text-[#787774] max-w-3xl">
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
