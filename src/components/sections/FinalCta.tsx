"use client";

import Image from "next/image";
import { CheckCircle2, Clock, Phone } from "lucide-react";
import { SITE } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppComposer } from "@/components/consult/WhatsAppComposer";

export function FinalCta() {
  return (
    <section id="kontak" aria-labelledby="cta-title" className="relative border-b border-[#EAEAEA] bg-[#FBFBFA] py-24 sm:py-28 text-[#2F3437]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* 12-column Header (Columns 2 to 10) */}
        <div className="grid grid-cols-1 md:grid-cols-12 lg:gap-x-16 gap-y-6">
          <div className="md:col-start-2 md:col-end-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-900/15 bg-[#EDF3EC] px-3.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#064E3B]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#064E3B]" />
              Konsultasi Strategis 1-on-1
            </span>
            <h2 id="cta-title" className="mt-5 font-serif text-3xl font-normal leading-[1.12] text-[#111111] sm:text-4xl lg:text-5xl">
              Siap menata sistem usaha Anda ke level berikutnya?
            </h2>
            <p className="mt-3.5 text-base leading-relaxed text-[#787774] max-w-2xl">
              Diskusikan kendala alur kerja dan mesin pemasaran Anda langsung dengan tim analis kami. Tanpa komitmen, tanpa biaya.
            </p>
          </div>
        </div>

        {/* 12-column Main Grid: Double-Bezel Hardware Architecture (Cols 2-12) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 lg:gap-x-16 gap-y-10 items-start">
          {/* Consultant Persona on Laptop (Columns 2 to 6) */}
          <div className="md:col-start-2 md:col-end-7 flex flex-col justify-between">
            <Reveal>
              {/* Double-Bezel: Outer Shell */}
              <div className="rounded-[2rem] border border-black/[0.08] bg-slate-100/70 p-2 sm:p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.03)]">
                {/* Double-Bezel: Inner Core with Concentric Radius */}
                <div className="rounded-[calc(2rem-0.625rem)] border border-black/[0.06] bg-white p-4 sm:p-5 shadow-[inset_0_1px_1px_rgba(255,255,255,1)]">
                  {/* Window Top Bar */}
                  <div className="flex h-8 items-center justify-between border-b border-[#EAEAEA] bg-[#F9F9F8] px-3.5 -mx-4 -mt-4 mb-4 sm:-mx-5 sm:-mt-5 rounded-t-[calc(2rem-0.6875rem)]">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-[#E5E5E5]" />
                      <span className="h-2 w-2 rounded-full bg-[#E5E5E5]" />
                      <span className="h-2 w-2 rounded-full bg-[#E5E5E5]" />
                    </div>
                    <span className="font-mono text-[10px] text-[#787774]">
                      consultation-brief.internal
                    </span>
                    <div className="w-8" />
                  </div>

                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#F7F6F3]">
                    <Image
                      src="/images/marketing-consultant.jpg"
                      alt="Konsultan digital marketing & strategi sistem Tatanala"
                      fill
                      sizes="(max-width: 1024px) 100vw, 480px"
                      className="object-cover object-center grayscale-[12%]"
                    />
                    <div className="absolute inset-x-3 bottom-3 rounded-lg border border-[#EAEAEA] bg-white/95 p-3 text-xs text-[#111111] backdrop-blur-sm shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
                      <p className="font-serif italic text-[#111111]">&ldquo;Kami bantu petakan sistem &amp; strategi pemasaran yang tepat.&rdquo;</p>
                      <p className="mt-1 font-mono text-[10px] text-[#787774] font-medium">Tim Konsultan Digital Tatanala</p>
                    </div>
                  </div>

                  <div className="mt-4 border-t border-[#EAEAEA] pt-4">
                    <h3 className="font-serif text-base font-normal text-[#111111]">Sesi Diagnosa Gratis Meliputi:</h3>
                    <ul className="mt-3 flex flex-col space-y-2 text-xs text-[#2F3437]">
                      {[
                        "Diagnosa 45 menit: telaah hambatan pencatatan & stok bocor",
                        "Rekomendasi arsitektur sistem informasi atau website siap tender",
                        "Estimasi biaya transparan & blueprint roadmap implementasi",
                        "NDA resmi untuk menjamin kerahasiaan data usaha Anda",
                      ].map((t) => (
                        <li key={t} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#346538]" />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[#787774] border-t border-[#EAEAEA] pt-4">
              <a href={`tel:+${SITE.whatsapp}`} className="inline-flex items-center gap-1.5 hover:text-[#111111]">
                <Phone className="h-3.5 w-3.5 text-[#111111]" /> {SITE.whatsappDisplay}
              </a>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-[#111111]" /> Respons cepat &lt; 15 menit
              </span>
            </div>
          </div>

          {/* WhatsApp Composer Simulator (Columns 7 to 12) */}
          <div className="md:col-start-7 md:col-end-13">
            <Reveal delay={0.08}>
              <WhatsAppComposer />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
