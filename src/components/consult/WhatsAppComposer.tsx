"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCheck, MessageCircle, Send, ShieldCheck } from "lucide-react";
import { useId, useMemo, useState } from "react";
import { CONSULT_TOPICS, SITE } from "@/data/content";
import { cn, EASE_OUT, waLink } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/Button";

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
 * Interactive WhatsApp message simulator:
 * User selects problems, inputs company/name, views live chat preview with hard 1px borders, zero shadows.
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
    <div className={cn("grid gap-6 border border-black/[0.1] bg-white p-5 text-left sm:p-7 md:grid-cols-2", className)}>
      {/* Form */}
      <div className="flex flex-col justify-between space-y-6">
        <div>
          <fieldset>
            <legend className="font-mono text-xs font-bold uppercase text-emerald-950">
              Apa kendala utama bisnis Anda?
            </legend>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {CONSULT_TOPICS.map((t) => {
                const active = topics.includes(t.id);
                return (
                  <button
                    key={t.id}
                    type="button"
                    aria-pressed={active}
                    onClick={() => toggle(t.id)}
                    className={cn(
                      "border px-3 py-1 font-mono text-xs font-medium transition-colors",
                      active
                        ? "border-emerald-900 bg-emerald-950 text-white"
                        : "border-black/[0.08] bg-slate-50 text-slate-700 hover:border-emerald-700 hover:text-emerald-900",
                    )}
                  >
                    {t.label}
                  </button>
                );
              })}
            </div>
          </fieldset>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label htmlFor={`${uid}-name`} className="font-mono text-xs font-semibold text-emerald-950">
              Nama Anda
              <input
                id={`${uid}-name`}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="cth. Budi"
                autoComplete="name"
                className="mt-1.5 block h-10 w-full border border-black/[0.1] bg-slate-50 px-3 text-xs text-slate-900 outline-none transition focus:border-emerald-700 focus:bg-white"
              />
            </label>
            <label htmlFor={`${uid}-biz`} className="font-mono text-xs font-semibold text-emerald-950">
              Nama Usaha
              <input
                id={`${uid}-biz`}
                value={business}
                onChange={(e) => setBusiness(e.target.value)}
                placeholder="cth. CV Maju Jaya"
                autoComplete="organization"
                className="mt-1.5 block h-10 w-full border border-black/[0.1] bg-slate-50 px-3 text-xs text-slate-900 outline-none transition focus:border-emerald-700 focus:bg-white"
              />
            </label>
          </div>
        </div>

        <div className="flex flex-col space-y-2 border-t border-black/[0.08] pt-4">
          <ButtonLink
            href={waLink(SITE.whatsapp, message)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onSend}
            size="md"
            className="w-full"
          >
            <Send className="h-4 w-4" aria-hidden /> Kirim via WhatsApp
          </ButtonLink>
          <p className="flex items-center justify-center gap-1.5 font-mono text-[11px] text-slate-500">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-700" aria-hidden />
            Konsultasi awal gratis • Tanpa komitmen
          </p>
        </div>
      </div>

      {/* Live chat preview with hard 1px border */}
      <div
        className="relative flex min-h-[300px] flex-col border border-emerald-900/20 bg-[#ECF5EF]"
        aria-live="polite"
        aria-label="Pratinjau pesan WhatsApp"
      >
        <div className="flex items-center gap-3 border-b border-emerald-900/10 bg-emerald-900 px-4 py-3 text-white">
          <span className="relative grid h-8 w-8 place-items-center bg-emerald-700">
            <MessageCircle className="h-4 w-4" aria-hidden />
            <span className="absolute -right-0.5 -bottom-0.5 h-2 w-2 border border-emerald-900 bg-lime-400" />
          </span>
          <div className="leading-tight">
            <p className="font-mono text-xs font-bold text-white">Tim Konsultan Tatanala</p>
            <p className="text-[10px] text-emerald-200">online • balas &lt; 15 menit</p>
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-end gap-3 p-4">
          <div className="ml-auto max-w-[90%] border border-emerald-300 bg-[#D9FDD3] p-3 text-xs leading-relaxed text-slate-900">
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
            <span className="mt-1 flex items-center justify-end gap-1 font-mono text-[9px] text-slate-500">
              09.41 <CheckCheck className="h-3.5 w-3.5 text-sky-600" aria-hidden />
            </span>
          </div>

          <div className="max-w-[85%] border border-black/[0.08] bg-white p-3 text-xs leading-relaxed text-slate-700">
            Halo! 👋 Terima kasih sudah menghubungi Tatanala. Kami siapkan sesi diagnosa alur sistem gratis untuk Anda.
          </div>
        </div>
      </div>
    </div>
  );
}
