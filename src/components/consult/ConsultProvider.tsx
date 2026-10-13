"use client";

import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { X } from "lucide-react";
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { useEscape, useLockBody } from "@/lib/hooks";
import { EASE_OUT } from "@/lib/utils";
import { WhatsAppComposer } from "./WhatsAppComposer";

interface ConsultContextValue {
  openConsult: (topicId?: string) => void;
}

const ConsultContext = createContext<ConsultContextValue | null>(null);

export function useConsult() {
  const ctx = useContext(ConsultContext);
  if (!ctx) throw new Error("useConsult must be used inside <ConsultProvider>");
  return ctx;
}

/** App-wide provider: exposes `openConsult()` and renders the WhatsApp consultation modal. */
export function ConsultProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<{ open: boolean; topic?: string; nonce: number }>({ open: false, nonce: 0 });

  const openConsult = useCallback(
    (topic?: string) => setState((s) => ({ open: true, topic, nonce: s.nonce + 1 })),
    [],
  );
  const close = useCallback(() => setState((s) => ({ ...s, open: false })), []);
  const value = useMemo(() => ({ openConsult }), [openConsult]);

  return (
    <MotionConfig reducedMotion="user">
      <ConsultContext.Provider value={value}>
        {children}
        <ConsultModal open={state.open} topic={state.topic} nonce={state.nonce} onClose={close} />
      </ConsultContext.Provider>
    </MotionConfig>
  );
}

function ConsultModal({
  open,
  topic,
  nonce,
  onClose,
}: {
  open: boolean;
  topic?: string;
  nonce: number;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  useLockBody(open);
  useEscape(open, onClose);
  useEffect(() => {
    if (open) closeRef.current?.focus();
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-end justify-center p-3 sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-[#111111]/40 backdrop-blur-xs" onClick={onClose} aria-hidden />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="consult-title"
            className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-xl border border-[#EAEAEA] bg-white p-3 sm:p-4 shadow-[0_16px_40px_rgba(0,0,0,0.08)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.2, ease: EASE_OUT }}
          >
            <div className="flex items-start justify-between gap-4 px-4 pt-3 pb-2 sm:px-5">
              <div>
                <h2 id="consult-title" className="font-serif text-2xl font-normal text-[#111111]">
                  Konsultasikan masalah bisnis Anda
                </h2>
                <p className="mt-1 text-xs text-[#787774]">
                  Ceritakan kendalanya, kami bantu petakan solusinya — gratis.
                </p>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Tutup"
                className="grid h-8 w-8 shrink-0 place-items-center rounded-md border border-[#EAEAEA] bg-white text-[#111111] hover:bg-[#F7F6F3] transition-colors"
              >
                <X className="h-4 w-4" aria-hidden />
              </button>
            </div>
            <WhatsAppComposer key={nonce} initialTopic={topic} onSend={onClose} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
