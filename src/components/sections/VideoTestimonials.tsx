"use client";

import { motion } from "framer-motion";
import { Play, Star, ShieldCheck, Quote, Building } from "lucide-react";
import Image from "next/image";
import { useConsult } from "@/components/consult/ConsultProvider";

const VIDEO_TESTIMONIALS = [
  {
    name: "Hendrawan Santoso",
    title: "Direktur Utama",
    company: "PT Tri Pilar Manunggal (Distributor Logistik)",
    industry: "Logistik & Pergudangan",
    quote: "Selama 6 tahun kami tersiksa oleh 14 file Excel terpisah dan nota manual yang sering hilang. Setelah Tatanala membangun sistem terpusat, selisih stok gudang turun hingga 0% dan rekap harian langsung masuk ke WhatsApp saya setiap malam.",
    impact: "Efisiensi +280% • Selisih Stok 0%",
    image: "/images/marketing-specialist.jpg",
    duration: "02:14",
  },
  {
    name: "dr. Ratna Kartika, Sp.A",
    title: "Managing Director",
    company: "Klinik Utama Medika Sejahtera",
    industry: "Fasilitas Kesehatan Terakreditasi",
    quote: "Kepatuhan rekam medis digital adalah syarat mutlak audit Kemenkes. Tatanala tidak hanya membuat software antrean, tapi mendampingi seluruh perawat dan dokter hingga sistem ini berjalan disiplin tanpa kendala.",
    impact: "Lolos Akreditasi Paripurna • 0 Antrean Menumpuk",
    image: "/images/marketing-consultant.jpg",
    duration: "01:48",
  },
  {
    name: "Bambang Sudiro",
    title: "Owner & Pendiri",
    company: "Cahaya Abadi Hardware (4 Cabang Retail)",
    industry: "Retail & Distribusi Grosir",
    quote: "Sebelumnya saya tidak pernah tenang saat meninggalkan toko karena kecurigaan nota fiktif kasir. Dengan audit trail Tatanala, setiap rupiah mutasi kas tercatat realtime. Ketenangan operasional ini tidak ternilai.",
    impact: "Omzet Terpantau 24/7 • Kebocoran Dana 0%",
    image: "/images/avatar-david.jpg",
    duration: "03:05",
  },
];

export function VideoTestimonials() {
  const { openConsult } = useConsult();

  return (
    <section id="testimoni" className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200/80 px-4 py-1 text-xs font-semibold text-blue-700 mb-4"
          >
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Kesaksian Otentik Pemimpin Bisnis</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900"
          >
            Fakta Pembuktian dari Klien yang Telah Mandiri Secara Sistem
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto"
          >
            Dengarkan langsung evaluasi para direksi dan pemilik usaha mengenai integritas kerja, kepatuhan jadwal, dan dampak finansial sistem rekayasa Tatanala.
          </motion.p>
        </div>

        {/* 3 Vertical Smartphone-like Video Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VIDEO_TESTIMONIALS.map((testi, index) => (
            <motion.div
              key={testi.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              className="rounded-3xl bg-white border border-slate-200/90 shadow-md hover:shadow-xl hover:border-blue-300 transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Top Vertical Video Frame (9:16 aspect ratio feel, cropped gracefully) */}
              <div className="relative aspect-[4/5] w-full bg-slate-900 overflow-hidden group">
                <Image
                  src={testi.image}
                  alt={testi.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-top opacity-85 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                {/* Duration Tag */}
                <div className="absolute top-4 right-4 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-[11px] font-mono text-white">
                  {testi.duration}
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    type="button"
                    onClick={() => openConsult("video-testimoni")}
                    aria-label={`Putar video kesaksian ${testi.name}`}
                    className="h-16 w-16 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-blue-500 transition-all duration-300"
                  >
                    <Play className="h-6 w-6 ml-1 fill-white" />
                  </button>
                </div>

                {/* Bottom Overlay Meta on the Video */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400 bg-blue-950/70 px-2 py-0.5 rounded border border-blue-800">
                    {testi.industry}
                  </span>
                  <div className="text-base font-bold text-white mt-1">
                    {testi.name}
                  </div>
                  <div className="text-xs text-slate-300">
                    {testi.title} • {testi.company}
                  </div>
                </div>
              </div>

              {/* Bottom Quote & Tangible Impact */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                    &ldquo;{testi.quote}&rdquo;
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100">
                  <div className="text-[11px] font-bold text-blue-700 bg-blue-50/80 px-3 py-1.5 rounded-lg border border-blue-100 text-center">
                    Hasil Terukur: {testi.impact}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
