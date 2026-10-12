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
    <section id="layanan" aria-labelledby="layanan-title" className="relative border-b border-black/[0.08] bg-white py-[96px]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* 12-column Header (columns 2 to 10) */}
        <div className="grid grid-cols-1 md:grid-cols-12 lg:gap-x-20 gap-y-6">
          <div className="md:col-start-2 md:col-end-10">
            <SectionHeading
              id="layanan-title"
              eyebrow="Layanan Inti"
              title={
                <>
                  Satu Studio, <span className="text-gradient-brand">Hulu ke Hilir</span>
                </>
              }
              description="Pilih titik masuk Anda. Klik setiap layanan untuk meninjau deliverables dan arsitektur teknologi yang kami gunakan."
            />
          </div>
        </div>

        {/* Filter Bar (Columns 2 to 12) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 lg:gap-x-20 gap-y-6">
          <div className="md:col-start-2 md:col-end-12">
            <div
              role="tablist"
              aria-label="Filter layanan berdasarkan pilar"
              className="inline-flex flex-wrap gap-2 border border-black/[0.08] bg-slate-50 p-1.5"
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
                      "relative px-4 py-2 font-mono text-xs font-semibold tracking-wider uppercase transition-colors",
                      active ? "bg-emerald-950 text-white" : "text-slate-600 hover:text-emerald-950",
                    )}
                  >
                    <span>
                      {f.id}
                      <span className={cn("ml-2 text-[10px]", active ? "text-emerald-300" : "text-slate-400")}>
                        ({f.hint})
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* 2x2 Architectural Grid with Hard 1px Borders (Columns 2 to 12) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 lg:gap-x-20 gap-y-6">
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
  return (
    <motion.button
      type="button"
      layoutId={`card-${service.id}`}
      onClick={() => onSelect(service)}
      aria-haspopup="dialog"
      aria-label={`${service.title} — lihat detail`}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.99 }}
      transition={spring}
      className="group relative flex h-full w-full flex-col border border-black/[0.08] bg-white p-6 text-left transition-colors hover:border-emerald-700 hover:bg-slate-50/50 sm:p-8"
    >
      <div className="flex items-start justify-between">
        <span className="grid h-12 w-12 place-items-center border border-black/[0.08] bg-emerald-950 text-emerald-300">
          <Icon className="h-5 w-5" aria-hidden />
        </span>
        <span className="font-mono text-2xl font-bold text-slate-300 group-hover:text-emerald-900 transition-colors">
          0{index + 1}
        </span>
      </div>

      <div className="mt-6">
        <span className="border border-black/[0.08] bg-slate-100 px-2.5 py-1 font-mono text-[10px] font-bold tracking-wider text-emerald-900 uppercase">
          {service.pillar} • {service.tag}
        </span>
        <motion.h3
          layoutId={`title-${service.id}`}
          className="mt-3 font-display text-xl font-bold tracking-tight text-emerald-950 sm:text-2xl"
        >
          {service.title}
        </motion.h3>
        <motion.p layoutId={`desc-${service.id}`} className="mt-2 text-sm leading-relaxed text-slate-600">
          {service.shortDesc}
        </motion.p>
      </div>

      <div className="mt-auto flex items-end justify-between border-t border-black/[0.08] pt-6 mt-6">
        <div>
          <p className="font-mono text-xs uppercase text-slate-500">{service.metric.label}</p>
          <p className="font-display text-2xl font-bold text-emerald-900">{service.metric.value}</p>
        </div>
        <span className="grid h-10 w-10 place-items-center border border-black/[0.08] bg-white text-emerald-900 transition-colors group-hover:bg-emerald-950 group-hover:text-white">
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </span>
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
        className="absolute inset-0 bg-emerald-950/60 backdrop-blur-sm"
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
        className="relative max-h-[90vh] w-full max-w-3xl overflow-hidden border border-black/[0.12] bg-white"
      >
        <div className="max-h-[90vh] overflow-y-auto p-6 sm:p-10">
          <div className="flex items-start justify-between gap-4">
            <span className="grid h-12 w-12 place-items-center border border-black/[0.08] bg-emerald-950 text-emerald-300">
              <Icon className="h-6 w-6" aria-hidden />
            </span>
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              aria-label="Tutup detail layanan"
              className="grid h-10 w-10 place-items-center border border-black/[0.08] bg-white text-emerald-900 hover:bg-slate-100 transition-colors"
            >
              <X className="h-5 w-5" aria-hidden />
            </button>
          </div>

          <motion.h3
            layoutId={`title-${service.id}`}
            id={`detail-title-${service.id}`}
            className="mt-6 font-display text-2xl font-bold text-emerald-950 sm:text-3xl"
          >
            {service.title}
          </motion.h3>
          <motion.p layoutId={`desc-${service.id}`} className="mt-2 text-base font-semibold text-emerald-700">
            {service.shortDesc}
          </motion.p>

          <div className="mt-6 border-t border-black/[0.08] pt-6">
            <p className="leading-relaxed text-slate-600 text-sm sm:text-base">{service.longDesc}</p>

            <div className="mt-6 grid gap-6 md:grid-cols-[1.4fr_1fr]">
              <div>
                <h4 className="font-mono text-xs font-bold tracking-wider text-emerald-950 uppercase">Deliverables</h4>
                <ul className="mt-4 flex flex-col space-y-2.5">
                  {service.deliverables.map((d) => (
                    <li key={d} className="flex gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <div className="border border-emerald-900 bg-emerald-950 p-4 text-white">
                  <p className="font-mono text-xs text-emerald-300 uppercase">{service.metric.label}</p>
                  <p className="mt-1 font-display text-3xl font-bold text-amber-400">{service.metric.value}</p>
                </div>
                <div>
                  <h4 className="font-mono text-xs font-bold tracking-wider text-emerald-950 uppercase">Tech Highlights</h4>
                  <ul className="mt-2.5 flex flex-wrap gap-1.5">
                    {service.tech.map((t) => (
                      <li key={t} className="border border-black/[0.08] bg-slate-50 px-2.5 py-1 font-mono text-[11px] font-semibold text-emerald-900">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 border-t border-black/[0.08] pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-slate-500">Konsultasikan kebutuhan spesifik sistem dan website Anda.</p>
              <Button
                onClick={() => {
                  close();
                  openConsult(CONSULT_TOPIC[service.id]);
                }}
              >
                <MessageCircle className="h-4 w-4" aria-hidden /> Konsultasi Layanan Ini
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
