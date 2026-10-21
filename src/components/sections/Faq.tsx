"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";
import { useState } from "react";
import { FAQS } from "@/data/content";
import { useConsult } from "@/components/consult/ConsultProvider";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { openConsult } = useConsult();

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-slate-200/80">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200/80 px-4 py-1.5 text-xs sm:text-sm font-semibold text-blue-700 mb-4"
          >
            <Sparkles className="h-4 w-4" />
            <span>Tanya Jawab &bull; Transparansi Penuh</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900"
          >
            Pertanyaan Yang Sering Diajukan
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed"
          >
            Jawaban lugas seputar proses pembuatan, waktu pengerjaan, dan skema kerja sama tanpa jebakan biaya tersembunyi.
          </motion.p>
        </div>

        {/* Morphing Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={faq.question}
                layout
                transition={{ layout: { duration: 0.3, type: "spring", stiffness: 300, damping: 30 } }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-white border-blue-300 shadow-md ring-1 ring-blue-500/15"
                    : "bg-white/80 border-slate-200/90 hover:bg-white hover:border-slate-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className={`text-base sm:text-lg font-bold transition-colors ${isOpen ? "text-blue-600" : "text-slate-900"}`}>
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full ml-4 transition-colors ${
                      isOpen ? "bg-blue-50 text-blue-600" : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2 text-base text-slate-700 leading-relaxed border-t border-slate-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 text-center bg-blue-50/60 rounded-3xl border border-blue-200/70 p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-base font-bold text-slate-900">Punya pertanyaan spesifik terkait bisnis Anda?</h4>
            <p className="text-sm text-slate-600 mt-1">Diskusikan langsung dengan tim analis sistem kami via WhatsApp.</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={() => openConsult("faq-chat")}
            className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 text-sm font-bold shrink-0 shadow-md shadow-blue-500/25"
          >
            Tanya via WhatsApp
          </motion.button>
        </div>
      </div>
    </section>
  );
}
