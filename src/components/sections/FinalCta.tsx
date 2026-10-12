"use client";

import Image from "next/image";
import { CheckCircle2, Clock, Phone, Sparkles } from "lucide-react";
import { SITE } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppComposer } from "@/components/consult/WhatsAppComposer";

export function FinalCta() {
  return (
    <section id="kontak" aria-labelledby="cta-title" className="relative border-b border-black/[0.08] bg-emerald-950 py-[96px] text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* 12-column Header (Columns 2 to 10) */}
        <div className="grid grid-cols-1 md:grid-cols-12 lg:gap-x-20 gap-y-6">
          <div className="md:col-start-2 md:col-end-10">
            <span className="inline-flex items-center gap-2 border border-emerald-700 bg-emerald-900/60 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-emerald-200">
              <span className="h-1.5 w-1.5 rounded-full bg-lime-400" />
              Konsultasi Strategis 1-on-1
            </span>
            <h2 id="cta-title" className="mt-6 font-display text-3xl font-bold leading-[1.12] text-white sm:text-4xl lg:text-5xl">
              Siap Menata Sistem Usaha Anda ke{" "}
              <span className="bg-gradient-to-r from-emerald-300 via-mint-200 to-amber-400 bg-clip-text text-transparent">
                Level Berikutnya?
              </span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-emerald-100/80 sm:text-base">
              Diskusikan kendala alur kerja dan mesin pemasaran Anda langsung dengan tim analis kami. Tanpa komitmen, tanpa biaya.
            </p>
          </div>
        </div>

        {/* 12-column Main Grid: Consultant Persona (Cols 2-6) + WhatsApp Simulator (Cols 7-12) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 lg:gap-x-20 gap-y-12 items-stretch">
          {/* Consultant Persona on Laptop (Columns 2 to 6) */}
          <div className="md:col-start-2 md:col-end-7 flex flex-col justify-between">
            <Reveal>
              <div className="border border-emerald-800 bg-emerald-900/60 p-4 sm:p-5">
                <div className="relative aspect-[4/3] w-full overflow-hidden border border-emerald-800 bg-slate-900">
                  <Image
                    src="/images/marketing-consultant.jpg"
                    alt="Konsultan digital marketing & strategi sistem Tatanala menjelaskan visual dashboard pada laptop"
                    fill
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-x-3 bottom-3 border border-emerald-700/80 bg-emerald-950/90 p-3 text-xs text-white backdrop-blur-sm">
                    <p className="font-semibold text-white">&ldquo;Kami bantu petakan sistem &amp; strategi pemasaran yang tepat.&rdquo;</p>
                    <p className="mt-0.5 font-mono text-[11px] text-amber-400">Tim Konsultan Digital Tatanala</p>
                  </div>
                </div>

                <div className="mt-4 border-t border-emerald-800/80 pt-4">
                  <h3 className="font-display text-base font-bold text-white">Sesi Diagnosa Gratis Meliputi:</h3>
                  <ul className="mt-3 flex flex-col space-y-2 text-xs text-emerald-100">
                    {[
                      "Diagnosa 45 menit: telaah hambatan pencatatan & stok bocor",
                      "Rekomendasi arsitektur sistem informasi atau website siap tender",
                      "Estimasi biaya transparan & blueprint roadmap implementasi",
                      "NDA resmi untuk menjamin kerahasiaan data usaha Anda",
                    ].map((t) => (
                      <li key={t} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-400" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-emerald-200/80 border-t border-emerald-800/80 pt-4">
              <a href={`tel:+${SITE.whatsapp}`} className="inline-flex items-center gap-1.5 hover:text-white">
                <Phone className="h-3.5 w-3.5" /> {SITE.whatsappDisplay}
              </a>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" /> Respons Cepat &lt; 15 menit
              </span>
            </div>
          </div>

          {/* WhatsApp Composer Simulator (Columns 7 to 12) */}
          <div className="md:col-start-7 md:col-end-12">
            <Reveal delay={0.1}>
              <WhatsAppComposer />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
