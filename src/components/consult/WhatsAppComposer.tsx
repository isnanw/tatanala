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
              <legend className="font-mono text-xs font-semibold uppercase text-[#111111]">
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
                        "rounded-full px-3 py-1 font-mono text-xs font-medium transition-colors",
                        active
                          ? "bg-[#111111] text-white"
                          : "border border-[#EAEAEA] bg-[#FBFBFA] text-[#787774] hover:border-[#D4D4D4] hover:text-[#111111]",
                      )}
                    >
                      {t.label}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label htmlFor={`${uid}-name`} className="font-mono text-xs font-medium text-[#787774]">
                Nama Anda
                <input
                  id={`${uid}-name`}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="cth. Budi"
                  autoComplete="name"
                  className="mt-1.5 block h-10 w-full rounded-xl border border-[#EAEAEA] bg-[#FBFBFA] px-3 text-xs text-[#111111] outline-none transition focus:border-[#111111] focus:bg-white"
                />
              </label>
              <label htmlFor={`${uid}-biz`} className="font-mono text-xs font-medium text-[#787774]">
                Nama Usaha
                <input
                  id={`${uid}-biz`}
                  value={business}
                  onChange={(e) => setBusiness(e.target.value)}
                  placeholder="cth. CV Maju Jaya"
                  autoComplete="organization"
                  className="mt-1.5 block h-10 w-full rounded-xl border border-[#EAEAEA] bg-[#FBFBFA] px-3 text-xs text-[#111111] outline-none transition focus:border-[#111111] focus:bg-white"
                />
              </label>
            </div>
          </div>

          <div className="flex flex-col space-y-2.5 border-t border-[#EAEAEA] pt-4">
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
                <Send className="h-3.5 w-3.5 text-white" aria-hidden />
              </ButtonIconBadge>
            </ButtonLink>
            <p className="flex items-center justify-center gap-1.5 font-mono text-[11px] text-[#787774]">
              <ShieldCheck className="h-3.5 w-3.5 text-[#346538]" aria-hidden />
              Konsultasi awal gratis • Tanpa komitmen
            </p>
          </div>
        </div>

        {/* Live chat preview with faux window chrome */}
        <div
          className="relative flex min-h-[300px] flex-col overflow-hidden rounded-xl border border-[#EAEAEA] bg-[#FBFBFA]"
          aria-live="polite"
          aria-label="Pratinjau pesan WhatsApp"
        >
          <div className="flex items-center gap-2.5 border-b border-[#EAEAEA] bg-white px-4 py-3 text-[#111111]">
            <span className="relative grid h-7 w-7 place-items-center rounded-lg bg-[#F7F6F3] border border-[#EAEAEA]">
              <MessageCircle className="h-3.5 w-3.5 text-[#111111]" aria-hidden />
              <span className="absolute -right-0.5 -bottom-0.5 h-2 w-2 rounded-full bg-[#346538]" />
            </span>
            <div className="leading-tight">
              <p className="font-mono text-xs font-semibold text-[#111111]">Tim Konsultan Tatanala</p>
              <p className="text-[10px] text-[#787774]">online • respon cepat</p>
            </div>
          </div>

          <div className="flex flex-1 flex-col justify-end gap-3 p-4">
            <div className="ml-auto max-w-[90%] rounded-xl border border-[#EAEAEA] bg-white p-3 text-xs leading-relaxed text-[#2F3437] shadow-[0_1px_4px_rgba(0,0,0,0.02)]">
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
              <span className="mt-1 flex items-center justify-end gap-1 font-mono text-[9px] text-[#787774]">
                09.41 <CheckCheck className="h-3 w-3 text-[#1F6C9F]" aria-hidden />
              </span>
            </div>

            <div className="max-w-[85%] rounded-xl border border-[#EAEAEA] bg-[#F7F6F3] p-3 text-xs leading-relaxed text-[#787774]">
              Halo, terima kasih sudah menghubungi Tatanala. Kami siapkan sesi diagnosa alur sistem gratis untuk Anda.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
