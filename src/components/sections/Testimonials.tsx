"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Sparkles } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const TESTIMONIALS = [
  {
    id: "hendra",
    name: "Hendra Kusuma",
    role: "Owner",
    company: "CV Sumber Pangan Lestari (Distributor 4 Cabang)",
    avatar: "/images/avatar-david.jpg",
    quote:
      "Dulu rekap bulanan makan waktu 3 hari dan stok selalu selisih. Setelah Tatanala bangun sistem ERP mini, mutasi gudang tercatat rapi per staf, dan tiap sore laporan omzet otomatis masuk ke WhatsApp saya.",
    impact: "-92% Selisih Stok",
  },
  {
    id: "bambang",
    name: "Ir. Bambang Sugiarto",
    role: "Direktur Utama",
    company: "PT Arunika Bangun Persada (Kontraktor Sipil)",
    avatar: "/images/avatar-sarah.jpg",
    quote:
      "Website profil lama kami sering diragukan panitia tender karena lambat dan tidak ada bukti legalitas SBU. Setelah diredesain Tatanala, kecepatan muat di bawah 1,8 detik dan kami lolos prakualifikasi 3 tender BUMN.",
    impact: "Lolos 3 Tender BUMN",
  },
  {
    id: "amanda",
    name: "drg. Amanda Putri",
    role: "Founder & Lead Dentist",
    company: "Klinik Gigi Senyum Sehat",
    avatar: "/images/marketing-consultant.jpg",
    quote:
      "SEO lokal dan kampanye iklan dari Tatanala benar-benar terukur. Kami bisa tahu persis biaya per pasien baru, dan antrean booking via WhatsApp sekarang konsisten penuh tiap minggu.",
    impact: "ROAS 5.1x Nyata",
  },
  {
    id: "aditya",
    name: "Aditya Pratama",
    role: "COO",
    company: "Logistik Nusantara Mandiri",
    avatar: "/images/marketing-specialist.jpg",
    quote:
      "Bukan software house yang sekadar jualan template jadi. Tim Tatanala benar-benar membedah alur nota jalan kami dan membuat sistem yang sangat intuitif untuk staf operasional di lapangan.",
    impact: "Efisiensi 3x Lipat",
  },
  {
    id: "rina",
    name: "Rina Wijaya",
    role: "Head of Operations",
    company: "Retail Modern Yogyakarta",
    avatar: "/images/marketing-growth.jpg",
    quote:
      "Yang paling kami apresiasi adalah transparansi: source code 100% milik kami, server di akun kami, dan tidak ada biaya langganan bulanan tersembunyi. Benar-benar mitra rekayasa terpercaya.",
    impact: "100% Hak Milik",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => setCurrentIndex((c) => (c === 0 ? TESTIMONIALS.length - 1 : c - 1));
  const next = () => setCurrentIndex((c) => (c === TESTIMONIALS.length - 1 ? 0 : c + 1));

  const active = TESTIMONIALS[currentIndex];

  return (
    <section id="testimoni" className="py-20 sm:py-28 bg-white border-b border-slate-200/80">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200/80 px-4 py-1 text-xs font-semibold text-blue-700 mb-4"
        >
          <Sparkles className="h-3.5 w-3.5" />
          <span>Pengalaman Pemilik Usaha</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900"
        >
          Apa Kata Para Pemilik Bisnis
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-3 text-base sm:text-lg text-slate-600 max-w-xl mx-auto"
        >
          Kisah nyata transformasi operasional dan pertumbuhan dari bisnis yang telah menata sistemnya bersama Tatanala.
        </motion.p>

        {/* Client Avatars Selector Row */}
        <div className="mt-12 flex items-center justify-center gap-3 sm:gap-5">
          {TESTIMONIALS.map((client, idx) => {
            const isSelected = currentIndex === idx;
            return (
              <button
                key={client.id}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Lihat ulasan dari ${client.name}`}
                className={`relative rounded-full transition-all duration-300 focus:outline-hidden ${
                  isSelected
                    ? "scale-125 ring-4 ring-blue-600 ring-offset-4 shadow-lg z-10"
                    : "opacity-60 hover:opacity-100 hover:scale-105"
                }`}
              >
                <div className="relative h-12 w-12 sm:h-14 sm:w-14 overflow-hidden rounded-full border border-slate-200 bg-slate-100">
                  <Image
                    src={client.avatar}
                    alt={client.name}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Testimonial Quote */}
        <div className="relative mt-12 max-w-3xl mx-auto min-h-[190px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center"
            >
              <span className="inline-block rounded-full bg-blue-50 text-blue-700 border border-blue-100 px-3.5 py-1 text-xs font-bold mb-4">
                Hasil: {active.impact}
              </span>

              <p className="text-xl sm:text-2xl font-medium leading-relaxed text-slate-800 italic">
                “{active.quote}”
              </p>

              <div className="mt-8 flex flex-col items-center">
                <span className="text-base font-bold text-slate-900">{active.name}</span>
                <span className="text-xs font-semibold text-slate-500 mt-0.5">
                  {active.role} &middot; <span className="text-blue-600">{active.company}</span>
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Indicator Dots & Prev/Next Buttons */}
        <div className="mt-10 flex items-center justify-center gap-6">
          <motion.button
            whileTap={{ scale: 0.9 }}
            type="button"
            onClick={prev}
            aria-label="Ulasan Sebelumnya"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 shadow-xs transition-all"
          >
            <ChevronLeft className="h-5 w-5" />
          </motion.button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Ulasan ke-${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? "w-8 bg-blue-600" : "w-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

          <motion.button
            whileTap={{ scale: 0.9 }}
            type="button"
            onClick={next}
            aria-label="Ulasan Selanjutnya"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 shadow-xs transition-all"
          >
            <ChevronRight className="h-5 w-5" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
