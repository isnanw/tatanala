"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface TestimonialItem {
  id: string;
  logo: string;
  logoAlt: string;
  quote: string;
  avatar: string;
  authorName: string;
  authorRole: string;
  authorOrg: string;
}

const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "provita",
    logo: "/images/client/provitas.png",
    logoAlt: "RS Provita Jayapura",
    quote:
      "Kami merasakan komitmen rekayasa yang sangat profesional dari Tatanala. Integrasi sub-modul petty cash ke dalam jaringan intranet SIMRS RS Provita membuat rekonsiliasi kas operasional harian bebas dari selisih pembukuan, alur otorisasi nota tertata digital, dan data keuangan kami tetap terproteksi aman di jaringan tertutup.",
    avatar: "/images/avatar-david.jpg",
    authorName: "dr. Fransiskus Xaverius, Sp.PK",
    authorRole: "Koordinator SIMRS & Pengelolaan Keuangan",
    authorOrg: "RS Provita Jayapura",
  },
  {
    id: "recehku",
    logo: "/images/client/recehku.png",
    logoAlt: "Recehku Financial AI",
    quote:
      "Kolaborasi rekayasa software bersama Tatanala melahirkan antarmuka web manajemen finansial yang luar biasa reaktif. Pipeline pemrosesan AI yang mereka bangun mampu mengotomasi kategorisasi transaksi pengeluaran secara cerdas dalam hitungan milidetik, dengan kestabilan REST API yang andal saat beban transaksi tinggi.",
    avatar: "/images/support-consultant.jpg",
    authorName: "Reza Adityatama, M.Sc.",
    authorRole: "Founder & Lead Product Engineer",
    authorOrg: "Recehku Financial Intelligence",
  },
  {
    id: "alger",
    logo: "/images/client/pt-alger.png",
    logoAlt: "PT Alger Karya Pratama",
    quote:
      "Kebutuhan portal perusahaan kami yang dinamis dijawab tuntas oleh Tatanala. Kami tidak lagi terkunci dalam template kaku yang monoton. Arsitektur modular page builder memungkinkan tim internal kami mempublikasikan update profil bisnis dan dokumen tender secara mandiri dengan kecepatan muat dan skor SEO yang prima.",
    avatar: "/images/marketing-specialist.jpg",
    authorName: "Ir. Bambang Hermanto",
    authorRole: "Direktur Pengembangan Korporasi",
    authorOrg: "PT Alger Karya Pratama",
  },
];

export function ExecutiveTestimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section 
      id="testimoni" 
      className="scroll-mt-24 py-20 sm:py-28 bg-[#F8FAFC] border-b border-slate-200/80 relative overflow-hidden"
    >
      {/* Top Right Decorative Dot Matrix */}
      <div className="absolute top-8 right-8 sm:right-16 hidden sm:grid grid-cols-8 gap-2 opacity-40 pointer-events-none -z-0">
        {Array.from({ length: 24 }).map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 rounded-full bg-blue-400" />
        ))}
      </div>

      {/* Decorative Concentric Rings Matching Reference Layout */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full border border-blue-200/40 pointer-events-none -z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[640px] rounded-full border border-blue-200/30 pointer-events-none -z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[860px] h-[860px] rounded-full border border-slate-200/50 pointer-events-none -z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] rounded-full border border-slate-200/30 pointer-events-none -z-0" />

      {/* Large Watermark Quotation Marks on the Sides */}
      <div className="absolute left-4 sm:left-8 lg:left-14 top-1/2 -translate-y-1/2 text-[100px] sm:text-[140px] lg:text-[180px] font-serif font-bold text-blue-200/35 select-none pointer-events-none leading-none -z-0">
        &ldquo;
      </div>
      <div className="absolute right-4 sm:right-8 lg:right-14 top-1/2 -translate-y-1/2 text-[100px] sm:text-[140px] lg:text-[180px] font-serif font-bold text-blue-200/35 select-none pointer-events-none leading-none -z-0">
        &rdquo;
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-600 mb-2">
            Apa Kata Klien Kami
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
            Pengalaman bekerja sama dalam membangun software
          </h2>
        </div>

        {/* Carousel Content Stage */}
        <div className="relative flex items-center justify-between gap-4 sm:gap-8">
          
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Testimoni Sebelumnya"
            className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-blue-600/70 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-200 flex items-center justify-center shadow-xs cursor-pointer z-20"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Center Dynamic Testimonial Display */}
          <div className="flex-1 min-h-[300px] sm:min-h-[260px] flex flex-col items-center justify-center text-center px-2 sm:px-6">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: direction * 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -30 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="w-full flex flex-col items-center"
              >
                {/* Client Logo */}
                <div className="relative h-9 w-28 sm:h-10 sm:w-32 mb-5 flex items-center justify-center">
                  <Image
                    src={current.logo}
                    alt={current.logoAlt}
                    fill
                    className="object-contain"
                    sizes="128px"
                  />
                </div>

                {/* Quote Text */}
                <p className="text-sm sm:text-base lg:text-[17px] text-slate-700 font-normal leading-relaxed max-w-2xl sm:max-w-3xl mx-auto">
                  {current.quote}
                </p>

                {/* Author Avatar & Identity */}
                <div className="mt-6 flex flex-col items-center">
                  <div className="relative h-14 w-14 rounded-full overflow-hidden border-2 border-slate-200 shadow-sm mb-2 bg-slate-100">
                    <Image
                      src={current.avatar}
                      alt={current.authorName}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                  <h4 className="font-bold text-[#0F172A] text-sm sm:text-base">
                    {current.authorName}
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5 max-w-md">
                    {current.authorRole} &bull; {current.authorOrg}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Testimoni Selanjutnya"
            className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-blue-600/70 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-200 flex items-center justify-center shadow-xs cursor-pointer z-20"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

        </div>

        {/* Bottom Pagination Dots */}
        <div className="mt-8 sm:mt-10 flex items-center justify-center gap-2">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              aria-label={`Slide ${idx + 1}`}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                idx === currentIndex
                  ? "w-2.5 h-2.5 bg-blue-600 scale-110"
                  : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
