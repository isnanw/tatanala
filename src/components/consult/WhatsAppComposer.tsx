"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCheck, MessageCircle, Send, ShieldCheck } from "lucide-react";
import { useId, useMemo, useState } from "react";
import { CONSULT_TOPICS, SITE } from "@/data/content";
import { cn, EASE_OUT, waLink } from "@/lib/utils";
import { ButtonIconBadge, ButtonLink } from "@/components/ui/Button";

interface WhatsAppComposerProps {
  initialTopic?: string;
  className?: string;
  onSend?: () => void;
}

function joinIndo(items: string[]) {
  if (items.length <= 1) return items[0] ?? "";
  return `${items.slice(0, -1).join(", ")} serta ${items[items.length - 1]}`;
}

/**
 * Double-Bezel Machined WhatsApp message simulator:
 * User selects problems, inputs company/name, views live chat preview with concentric radii and button-in-button CTA.
 */
export function WhatsAppComposer({ initialTopic, className, onSend }: WhatsAppComposerProps) {
  const uid = useId();
  const [topics, setTopics] = useState<string[]>(initialTopic ? [initialTopic] : ["sistem"]);
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");

  const message = useMemo(() => {
    const picked = CONSULT_TOPICS.filter((t) => topics.includes(t.id)).map((t) => t.message);
    const who = name.trim() ? `saya ${name.trim()}` : "saya";
    const from = business.trim() ? ` dari ${business.trim()}` : "";
    const need = picked.length ? joinIndo(picked) : "kebutuhan digital usaha saya";
    return `Halo Tatanala, ${who}${from}. Saya ingin berdiskusi tentang ${need}. Kapan bisa dijadwalkan sesi konsultasi gratis?`;
  }, [topics, name, business]);

  const toggle = (id: string) =>
    setTopics((prev) => (prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]));

  return (
    <div className={cn("rounded-[2rem] border border-black/[0.08] bg-slate-100/70 p-2 sm:p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.03)]", className)}>
      <div className="grid gap-6 rounded-[calc(2rem-0.625rem)] border border-black/[0.06] bg-white p-5 sm:p-7 text-left shadow-[inset_0_1px_1px_rgba(255,255,255,1)] md:grid-cols-2">
        {/* Form */}
        <div className="flex flex-col justify-between space-y-6">
          <div>
            <fieldset>
              <legend className="text-sm font-bold uppercase tracking-wider text-slate-900">
                Apa kendala utama bisnis Anda?
              </legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {CONSULT_TOPICS.map((t) => {
                  const active = topics.includes(t.id);
                  return (
                    <button
                      key={t.id}
                      type="button"
                      aria-pressed={active}
                      onClick={() => toggle(t.id)}
                      className={cn(
                        "rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-semibold transition-colors cursor-pointer",
                        active
                          ? "bg-blue-600 text-white shadow-xs"
                          : "border border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300 hover:text-slate-900",
                      )}
                    >
                      {t.label}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label htmlFor={`${uid}-name`} className="text-sm font-semibold text-slate-700">
                Nama Anda
                <input
                  id={`${uid}-name`}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="cth. Budi"
                  autoComplete="name"
                  className="mt-1.5 block h-11 w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 text-sm text-slate-900 outline-none transition focus:border-blue-600 focus:bg-white"
                />
              </label>
              <label htmlFor={`${uid}-biz`} className="text-sm font-semibold text-slate-700">
                Nama Usaha
                <input
                  id={`${uid}-biz`}
                  value={business}
                  onChange={(e) => setBusiness(e.target.value)}
                  placeholder="cth. CV Maju Jaya"
                  autoComplete="organization"
                  className="mt-1.5 block h-11 w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 text-sm text-slate-900 outline-none transition focus:border-blue-600 focus:bg-white"
                />
              </label>
            </div>
          </div>

          <div className="flex flex-col space-y-2.5 border-t border-slate-200 pt-4">
            <ButtonLink
              href={waLink(SITE.whatsapp, message)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onSend}
              size="md"
              className="w-full justify-between group"
            >
              <span>Kirim via WhatsApp</span>
              <ButtonIconBadge>
                <Send className="h-4 w-4 text-white" aria-hidden />
              </ButtonIconBadge>
            </ButtonLink>
            <p className="flex items-center justify-center gap-1.5 text-xs sm:text-sm text-slate-600 font-medium">
              <ShieldCheck className="h-4 w-4 text-emerald-600" aria-hidden />
              Konsultasi awal gratis • Tanpa komitmen
            </p>
          </div>
        </div>

        {/* Live chat preview with faux window chrome */}
        <div
          className="relative flex min-h-[300px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-[#F8FAFC]"
          aria-live="polite"
          aria-label="Pratinjau pesan WhatsApp"
        >
          <div className="flex items-center gap-3 border-b border-slate-200 bg-white px-4 py-3 text-slate-900">
            <span className="relative grid h-8 w-8 place-items-center rounded-lg bg-blue-50 border border-blue-100">
              <MessageCircle className="h-4 w-4 text-blue-600" aria-hidden />
              <span className="absolute -right-0.5 -bottom-0.5 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-bold text-slate-900">Tim Konsultan Tatanala</p>
              <p className="text-xs text-slate-500 font-normal">online • respon cepat</p>
            </div>
          </div>

          <div className="flex flex-1 flex-col justify-end gap-3 p-4">
            <div className="ml-auto max-w-[90%] rounded-xl border border-slate-200 bg-white p-3.5 text-sm leading-relaxed text-slate-800 shadow-2xs">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                  key={message}
                  initial={{ opacity: 0.4 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2, ease: EASE_OUT }}
                >
                  {message}
                </motion.span>
              </AnimatePresence>
              <span className="mt-1.5 flex items-center justify-end gap-1 font-mono text-xs text-slate-400">
                09.41 <CheckCheck className="h-3.5 w-3.5 text-blue-500" aria-hidden />
              </span>
            </div>

            <div className="max-w-[85%] rounded-xl border border-slate-200 bg-slate-100/90 p-3.5 text-sm leading-relaxed text-slate-700">
              Halo, terima kasih sudah menghubungi Tatanala. Kami siapkan sesi diagnosa alur sistem gratis untuk Anda.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
