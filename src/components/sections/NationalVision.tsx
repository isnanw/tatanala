"use client";

import { motion } from "framer-motion";
import { Award, Building2, CheckCircle2, ChevronRight, Globe2, ShieldCheck, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useConsult } from "@/components/consult/ConsultProvider";

export function NationalVision() {
  const { openConsult } = useConsult();

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: National Vision & Engineering Principles */}
          <div className="lg:col-span-7">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200/80 px-4 py-1.5 rounded-full">
              Kedaulatan Teknologi &amp; Visi
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mt-4 leading-tight">
              Membangun Kemandirian Sistem Digital Nasional
            </h2>

            <p className="mt-4 text-slate-700 text-base sm:text-lg leading-relaxed">
              Tatanala berakar dari komitmen untuk menghadirkan sistem teknologi informasi yang tangguh, aman, dan berdaulat di Indonesia. Kami membantu bisnis dan institusi memiliki sistem operasional yang dirancang khusus sesuai SOP mereka sendiri.
            </p>

            <p className="mt-3 text-slate-700 text-base leading-relaxed">
              Dengan arsitektur basis data terstruktur dan tim insinyur berstandar tinggi di Yogyakarta, kami siap mendampingi operasional usaha Anda agar berjalan stabil, rapi, dan berkelanjutan.
            </p>

            {/* Metrics */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-100">
              <div>
                <p className="text-3xl sm:text-4xl font-black text-blue-600">100%</p>
                <p className="text-sm font-semibold text-slate-700 mt-1">Kedaulatan &amp; Privasi Data Klien</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-black text-blue-600">99.9%</p>
                <p className="text-sm font-semibold text-slate-700 mt-1">Uptime SLA Infrastruktur Server</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-black text-blue-600">10+</p>
                <p className="text-sm font-semibold text-slate-700 mt-1">Tahun Pengalaman Rekayasa IT</p>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <Link
                href="/tentang-kami"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white px-7 py-3.5 text-sm sm:text-base font-bold transition-all shadow-md"
              >
                <span>Profil Lengkap Perusahaan</span>
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Office & Engineering Facility Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-xl">
              <div className="relative aspect-[4/3] w-full bg-slate-100">
                <Image
                  src="/images/team-office.jpg"
                  alt="Kantor Operasional & Studio Rekayasa Tatanala"
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover"
                />
              </div>

              {/* Bottom Office Info Card */}
              <div className="p-5 sm:p-6 bg-white border-t border-slate-100">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                  <Building2 className="h-4 w-4 text-blue-600" />
                  <span>Kantor Operasional &amp; Engineering Hub</span>
                </div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
                  Yogyakarta, D.I. Yogyakarta, Indonesia. Terbuka untuk kunjungan audit sistem &amp; diskusi teknis tatap muka.
                </p>
              </div>
            </div>

            {/* Floating ISO / Quality Badge */}
            <div className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-slate-200 shadow-xl flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold shrink-0">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900 leading-snug">Standar Enkripsi Teruji</p>
                <p className="text-xs text-slate-600 mt-0.5">PostgreSQL &bull; Next.js &bull; Docker</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
