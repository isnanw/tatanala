"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, Sparkles } from "lucide-react";
import Image from "next/image";
import { useConsult } from "@/components/consult/ConsultProvider";

export function Blog() {
  const { openConsult } = useConsult();

  return (
    <section id="insights" className="py-20 sm:py-28 bg-white border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200/80 px-4 py-1 text-xs font-semibold text-blue-700 mb-4"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>Wawasan Rekayasa &amp; Operasional</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900"
            >
              Wawasan &amp; Catatan Rekayasa
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-3 text-base sm:text-lg text-slate-600 max-w-xl"
            >
              Catatan lapangan insinyur dan konsultan Tatanala mengenai otomasi alur kerja, arsitektur software, dan strategi pertumbuhan.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <button
              type="button"
              onClick={() => openConsult("blog")}
              className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors"
            >
              <span>Diskusi Topik Rekayasa</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Big Feature Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -6 }}
            className="lg:col-span-5 rounded-[2rem] border border-slate-200/90 bg-[#F8FAFC] overflow-hidden shadow-xs hover:shadow-2xl hover:border-blue-200 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            onClick={() => openConsult("artikel-arsitektur-erp")}
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-900">
              <Image
                src="/images/blog-future-cyber.jpg"
                alt="Bedah Arsitektur Sistem Informasi Multi-Cabang"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white shadow-md">
                Rekayasa Sistem
              </div>
            </div>

            <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center gap-3 text-xs font-semibold text-slate-400 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" /> 16 Okt 2026
                  </span>
                  <span>&middot;</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" /> 5 mnt baca
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors tracking-tight leading-snug">
                  Sinkronisasi Realtime Kasir, Gudang, &amp; WhatsApp Owner
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Bagaimana arsitektur database modern menghentikan kebocoran stok antar-cabang tanpa membebani kasir di meja depan.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 group-hover:text-blue-700">
                  <span>Baca Selengkapnya</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 2 Top Cards + 1 Bottom Wide Card */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-8">
            {/* Top 2 Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Card 1: Tender BUMN */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -4 }}
                className="rounded-3xl border border-slate-200/90 bg-[#F8FAFC] overflow-hidden shadow-xs hover:shadow-lg hover:border-blue-200 transition-all duration-300 group cursor-pointer flex flex-col"
                onClick={() => openConsult("artikel-tender-bumn")}
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <Image
                    src="/images/blog-cloud-sketch.jpg"
                    alt="Standar Website Siap Tender"
                    fill
                    sizes="(max-width: 640px) 100vw, 30vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 rounded-full bg-slate-900/80 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-semibold text-white">
                    Profil Bisnis
                  </div>
                </div>
                <div className="p-5 flex flex-col justify-between flex-1">
                  <div>
                    <span className="text-[11px] font-medium text-slate-400">12 Okt 2026</span>
                    <h4 className="mt-1 text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                      Standar Website Siap Tembus Tender BUMN
                    </h4>
                    <p className="mt-2 text-xs text-slate-600 line-clamp-2">
                      Checklist halaman legalitas, sertifikasi SBU, dan Core Web Vitals penentu kelayakan.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-200/60">
                    <span className="text-xs font-bold text-blue-600 group-hover:text-blue-700 inline-flex items-center gap-1">
                      Pelajari panduan <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Card 2: SEO Niat Beli */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                whileHover={{ y: -4 }}
                className="rounded-3xl border border-slate-200/90 bg-[#F8FAFC] overflow-hidden shadow-xs hover:shadow-lg hover:border-blue-200 transition-all duration-300 group cursor-pointer flex flex-col"
                onClick={() => openConsult("artikel-seo-niat-beli")}
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <Image
                    src="/images/blog-it-strategy.jpg"
                    alt="SEO Niat Beli vs SEO Trafik Kosong"
                    fill
                    sizes="(max-width: 640px) 100vw, 30vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 rounded-full bg-slate-900/80 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-semibold text-white">
                    SEO Organik
                  </div>
                </div>
                <div className="p-5 flex flex-col justify-between flex-1">
                  <div>
                    <span className="text-[11px] font-medium text-slate-400">08 Okt 2026</span>
                    <h4 className="mt-1 text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                      SEO Niat Beli: Jaring Klien Tanpa Iklan
                    </h4>
                    <p className="mt-2 text-xs text-slate-600 line-clamp-2">
                      Riset kata kunci komersial yang langsung mendatangkan chat WhatsApp minta penawaran.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-200/60">
                    <span className="text-xs font-bold text-blue-600 group-hover:text-blue-700 inline-flex items-center gap-1">
                      Pelajari panduan <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Bottom Wide Card: Kegagalan ERP */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              whileHover={{ y: -4 }}
              className="rounded-3xl border border-slate-200/90 bg-[#F8FAFC] overflow-hidden shadow-xs hover:shadow-lg hover:border-blue-200 transition-all duration-300 group cursor-pointer flex flex-col sm:flex-row items-center"
              onClick={() => openConsult("artikel-kegagalan-erp")}
            >
              <div className="relative aspect-[16/10] sm:aspect-square w-full sm:w-56 shrink-0 overflow-hidden bg-slate-100">
                <Image
                  src="/images/blog-enterprise-it.jpg"
                  alt="Mengapa Banyak Software ERP Gagal Diterapkan di Lapangan?"
                  fill
                  sizes="(max-width: 640px) 100vw, 220px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-2">
                    <span className="text-blue-600 font-bold uppercase tracking-wider text-[11px]">Kajian Lapangan</span>
                    <span>&middot;</span>
                    <span>30 Sep 2026</span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                    Mengapa Banyak Software ERP Gagal Diterapkan di UMKM?
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    Penyebab utama resistensi staf terhadap software baru dan cara mendesain antarmuka yang langsung dipahami admin tanpa perlu berkali-kali training.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/60">
                  <span className="text-xs font-bold text-blue-600 group-hover:text-blue-700 inline-flex items-center gap-1">
                    Baca studi lapangan <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
