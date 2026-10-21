"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";

export function ExecutiveTestimonial() {
  return (
    <section className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-slate-200/80 relative overflow-hidden">
      {/* Decorative concentric arcs matching the reference layout */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-blue-200/50 pointer-events-none -z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-slate-200/40 pointer-events-none -z-0" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Eyebrow Label */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs sm:text-[13px] font-bold mb-6">
          <span>Testimoni Kemitraan</span>
        </div>

        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-8">
          Pengalaman Bekerja Sama dalam Membangun Software
        </h2>

        {/* Big Concentric Quote Box */}
        <div className="relative py-10 px-6 sm:px-12 bg-white rounded-3xl border border-slate-200 shadow-xl">
          
          {/* Top Left Quote Icon Accent */}
          <div className="absolute -top-6 left-8 h-12 w-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/30">
            <Quote className="h-6 w-6" />
          </div>

          {/* Testimonial Quote */}
          <blockquote className="text-base sm:text-xl lg:text-2xl text-slate-800 font-medium leading-relaxed italic max-w-3xl mx-auto pt-2">
            &ldquo;Tatanala berhasil merancang dan mendigitalkan alur operasional kami dari yang sebelumnya bergantung pada catatan tersebar menjadi satu dasbor terpadu. Komitmen mereka terhadap ketepatan jadwal milestone, kestabilan server, dan pendampingan implementasi langsung memberikan rasa aman yang jarang kami temukan pada vendor lain.&rdquo;
          </blockquote>

          {/* Client Avatar & Identity */}
          <div className="mt-8 flex flex-col items-center justify-center">
            <div className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-blue-600 shadow-md mb-3 bg-slate-100">
              <Image
                src="/images/avatar-david.jpg"
                alt="David Kurniawan"
                fill
                sizes="64px"
                className="object-cover"
              />
            </div>
            <div className="font-bold text-slate-900 text-base sm:text-lg">David Kurniawan, S.T.</div>
            <div className="text-xs sm:text-sm text-slate-600 mt-1">Direktur Operasional &bull; PT Sinergi Logistik Nusantara</div>
          </div>
        </div>

      </div>
    </section>
  );
}
