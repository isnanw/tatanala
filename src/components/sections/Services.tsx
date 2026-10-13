"use client";

import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, MessageCircle, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { SERVICES } from "@/data/content";
import { useEscape, useLockBody } from "@/lib/hooks";
import { cn } from "@/lib/utils";
import type { Pillar, Service } from "@/types";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useConsult } from "@/components/consult/ConsultProvider";

type Filter = "Semua" | Pillar;
const FILTERS: { id: Filter; hint: string }[] = [
  { id: "Semua", hint: "Semua" },
  { id: "Hulu", hint: "Kredibilitas" },
  { id: "Tengah", hint: "Operasional" },
  { id: "Hilir", hint: "Pertumbuhan" },
];

const PILLAR_STYLES: Record<string, { bg: string; text: string }> = {
  Hulu: { bg: "bg-[#EDF3EC]", text: "text-[#346538]" },
  Tengah: { bg: "bg-[#E1F3FE]", text: "text-[#1F6C9F]" },
  Hilir: { bg: "bg-[#FBF3DB]", text: "text-[#956400]" },
};

const CONSULT_TOPIC: Record<string, string> = {
  "company-profile": "profil",
  "information-system": "sistem",
  seo: "seo",
  ads: "ads",
};

const spring = { type: "spring", stiffness: 350, damping: 28 } as const;

export function Services() {
  const [filter, setFilter] = useState<Filter>("Semua");
  const [selected, setSelected] = useState<Service | null>(null);
  const visible = SERVICES.filter((s) => filter === "Semua" || s.pillar === filter);

  return (
    <section id="layanan" aria-labelledby="layanan-title" className="relative border-b border-[#EAEAEA] bg-[#FBFBFA] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* 12-column Header (columns 2 to 10) */}
        <div className="grid grid-cols-1 md:grid-cols-12 lg:gap-x-16 gap-y-6">
          <div className="md:col-start-2 md:col-end-10">
            <SectionHeading
              id="layanan-title"
              eyebrow="Layanan Inti"
              title="Satu studio, hulu ke hilir"
              description="Pilih titik masuk Anda. Tinjau deliverables dan arsitektur teknologi yang kami gunakan untuk tiap kebutuhan usaha."
            />
          </div>
        </div>

        {/* Filter Bar (Columns 2 to 12) */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-12 lg:gap-x-16 gap-y-6">
          <div className="md:col-start-2 md:col-end-12">
            <div
              role="tablist"
              aria-label="Filter layanan berdasarkan pilar"
              className="inline-flex flex-wrap gap-1 rounded-full border border-[#EAEAEA] bg-white p-1"
            >
              {FILTERS.map((f) => {
                const active = filter === f.id;
                return (
                  <button
                    key={f.id}
                    role="tab"
                    aria-selected={active}
                    onClick={() => setFilter(f.id)}
                    className={cn(
                      "rounded-full px-4 py-1.5 font-mono text-xs font-medium tracking-wide transition-colors",
                      active
                        ? "bg-[#111111] text-white"
                        : "text-[#787774] hover:text-[#111111] hover:bg-[#F7F6F3]",
                    )}
                  >
                    <span>
                      {f.id}
                      <span className={cn("ml-1.5 text-[10px]", active ? "text-[#EAEAEA]" : "text-[#A8A8A8]")}>
                        ({f.hint})
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* 2x2 Double-Bezel Bento Grid with Concentric Radii (Columns 2 to 12) */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-12 lg:gap-x-16 gap-y-6">
          <div className="md:col-start-2 md:col-end-12">
            <LayoutGroup id="services">
              <motion.ul layout className="grid gap-6 md:grid-cols-2">
                <AnimatePresence mode="popLayout" initial={false}>
                  {visible.map((service) => (
                    <motion.li
                      key={service.id}
                      layout
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={spring}
                    >
                      <ServiceCard
                        service={service}
                        index={SERVICES.indexOf(service)}
                        onSelect={setSelected}
                      />
                    </motion.li>
                  ))}
                </AnimatePresence>
              </motion.ul>

              <AnimatePresence>
                {selected && <ServiceDetail key={selected.id} service={selected} onClose={() => setSelected(null)} />}
              </AnimatePresence>
            </LayoutGroup>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
  onSelect,
}: {
  service: Service;
  index: number;
  onSelect: (s: Service) => void;
}) {
  const Icon = service.icon;
  const style = PILLAR_STYLES[service.pillar] ?? { bg: "bg-[#EDF3EC]", text: "text-[#346538]" };

  return (
    <motion.button
      type="button"
      layoutId={`card-${service.id}`}
      onClick={() => onSelect(service)}
      aria-haspopup="dialog"
      aria-label={`${service.title} - lihat detail`}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.2, ease: [0.32, 0.72, 0, 1] }}
      className="group relative flex h-full w-full flex-col rounded-[2rem] border border-black/[0.08] bg-slate-100/70 p-2 sm:p-2.5 text-left transition-colors hover:border-[#CCCCCC] shadow-[0_20px_50px_rgba(0,0,0,0.03)]"
    >
      <div className="flex h-full w-full flex-col rounded-[calc(2rem-0.625rem)] border border-black/[0.06] bg-white p-6 sm:p-7 shadow-[inset_0_1px_1px_rgba(255,255,255,1)]">
        <div className="flex items-start justify-between">
          <span className="grid h-10 w-10 place-items-center rounded-xl border border-[#EAEAEA] bg-[#FBFBFA] text-[#111111]">
            <Icon className="h-4.5 w-4.5" aria-hidden />
          </span>
          <span className="font-mono text-xl font-normal text-[#D4D4D4] group-hover:text-[#111111] transition-colors">
            0{index + 1}
          </span>
        </div>

        <div className="mt-5">
          <span className={`inline-block rounded-full px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider ${style.bg} ${style.text}`}>
            {service.pillar} • {service.tag}
          </span>
          <motion.h3
            layoutId={`title-${service.id}`}
            className="mt-3 font-serif text-2xl font-normal text-[#111111]"
          >
            {service.title}
          </motion.h3>
          <motion.p layoutId={`desc-${service.id}`} className="mt-2 text-xs leading-relaxed text-[#787774] sm:text-sm">
            {service.shortDesc}
          </motion.p>
        </div>

        <div className="mt-auto flex items-end justify-between border-t border-[#EAEAEA] pt-5 mt-6">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-wider text-[#787774] font-medium">{service.metric.label}</p>
            <p className="font-mono text-2xl font-semibold text-[#111111]">{service.metric.value}</p>
          </div>
          <span className="grid h-9 w-9 place-items-center rounded-full border border-[#EAEAEA] bg-[#FBFBFA] text-[#111111] transition-all group-hover:bg-[#111111] group-hover:text-white group-hover:border-[#111111] group-hover:scale-105">
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </span>
        </div>
      </div>
    </motion.button>
  );
}

function ServiceDetail({ service, onClose }: { service: Service; onClose: () => void }) {
  const { openConsult } = useConsult();
  const closeRef = useRef<HTMLButtonElement>(null);
  const Icon = service.icon;
  const close = useCallback(() => onClose(), [onClose]);

  useLockBody(true);
  useEscape(true, close);
  useEffect(() => closeRef.current?.focus(), []);

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6">
      <motion.div
        className="absolute inset-0 bg-[#111111]/40 backdrop-blur-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={close}
        aria-hidden
      />
      <motion.div
        layoutId={`card-${service.id}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`detail-title-${service.id}`}
        transition={spring}
        className="relative max-h-[90vh] w-full max-w-2xl overflow-hidden rounded-[2rem] border border-black/[0.08] bg-slate-100/80 p-2 shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
      >
        <div className="max-h-[90vh] overflow-y-auto rounded-[calc(2rem-0.5rem)] border border-black/[0.06] bg-white p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <span className="grid h-10 w-10 place-items-center rounded-xl border border-[#EAEAEA] bg-[#FBFBFA] text-[#111111]">
              <Icon className="h-5 w-5" aria-hidden />
            </span>
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              aria-label="Tutup detail layanan"
              className="grid h-8 w-8 place-items-center rounded-full border border-[#EAEAEA] bg-white text-[#111111] hover:bg-[#F7F6F3] transition-colors"
            >
              <X className="h-4 w-4" aria-hidden />
            </button>
          </div>

          <motion.h3
            layoutId={`title-${service.id}`}
            id={`detail-title-${service.id}`}
            className="mt-5 font-serif text-2xl font-normal text-[#111111] sm:text-3xl"
          >
            {service.title}
          </motion.h3>
          <motion.p layoutId={`desc-${service.id}`} className="mt-1 text-sm font-medium text-[#787774]">
            {service.shortDesc}
          </motion.p>

          <div className="mt-6 border-t border-[#EAEAEA] pt-5">
            <p className="leading-relaxed text-[#2F3437] text-sm">{service.longDesc}</p>

            <div className="mt-6 grid gap-6 md:grid-cols-[1.4fr_1fr]">
              <div>
                <h4 className="font-mono text-xs font-semibold tracking-wider text-[#111111] uppercase">Deliverables</h4>
                <ul className="mt-3 flex flex-col space-y-2">
                  {service.deliverables.map((d) => (
                    <li key={d} className="flex gap-2 text-xs text-[#2F3437]">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#346538]" aria-hidden />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-3">
                <div className="rounded-xl border border-[#EAEAEA] bg-[#FBFBFA] p-3.5">
                  <p className="font-mono text-[10px] text-[#787774] uppercase">{service.metric.label}</p>
                  <p className="mt-0.5 font-mono text-2xl font-semibold text-[#111111]">{service.metric.value}</p>
                </div>
                <div>
                  <h4 className="font-mono text-xs font-semibold tracking-wider text-[#111111] uppercase">Tech Highlights</h4>
                  <ul className="mt-2 flex flex-wrap gap-1.5">
                    {service.tech.map((t) => (
                      <li key={t} className="rounded-md border border-[#EAEAEA] bg-[#FBFBFA] px-2 py-0.5 font-mono text-[10px] text-[#2F3437]">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 border-t border-[#EAEAEA] pt-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-[#787774]">Konsultasikan kebutuhan spesifik sistem dan website Anda.</p>
              <Button
                size="sm"
                onClick={() => {
                  close();
                  openConsult(CONSULT_TOPIC[service.id]);
                }}
              >
                <MessageCircle className="h-3.5 w-3.5" aria-hidden /> Konsultasi Layanan Ini
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
