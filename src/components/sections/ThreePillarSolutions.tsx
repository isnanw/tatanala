"use client";

import { motion } from "framer-motion";
import { Globe2, Layers, BarChart3, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { useConsult } from "@/components/consult/ConsultProvider";

const PILLARS = [
  {
    id: "website-portal",
    title: "Website & Portal Bisnis",
    subtitle: "Kredibilitas & Kepercayaan",
    description: "Bangun citra profesional yang meyakinkan bagi calon klien, mitra, maupun instansi. Menampilkan profil usaha, katalog produk/layanan, dan legalitas secara rapi, cepat, dan mudah ditemukan di pencarian Google.",
    icon: Globe2,
    gradient: "from-blue-600 to-sky-500",
    bgCard: "bg-white",
    borderCard: "border-blue-200",
    btnColor: "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/25",
    features: [
      "Tampilan Modern, Cepat & Terpercaya",
      "Mudah Ditemukan Calon Klien di Google (SEO)",
      "Katalog Produk & Informasi Layanan Jelas",
      "Mudah Dikelola Sendiri Tanpa Skill Koding",
    ],
    consultTag: "profil",
  },
  {
    id: "sistem-operasional",
    title: "Sistem Operasional Custom",
    subtitle: "Efisiensi Alur Kerja",
    description: "Tinggalkan pencatatan manual dan tumpukan file Excel yang rentan salah hitung. Kami kembangkan sistem berbasis web yang mengikuti alur kerja asli tim Anda — mulai dari pencatatan harian, stok barang, hingga tugas operasional.",
    icon: Layers,
    gradient: "from-indigo-600 to-blue-600",
    bgCard: "bg-white",
    borderCard: "border-indigo-200",
    btnColor: "bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-500/25",
    features: [
      "Dibuat Persis Sesuai Alur Kerja (SOP) Usaha Anda",
      "Pencatatan Transaksi & Kontrol Stok Lebih Rapi",
      "Aman dari Risiko Data Hilang atau Tertimpa",
      "Akses Mudah dari Browser Laptop Kapan Saja",
    ],
    consultTag: "sistem",
  },
  {
    id: "dashboard-laporan",
    title: "Dashboard & Laporan Otomatis",
    subtitle: "Visibilitas & Keputusan Cepat",
    description: "Pantau perkembangan bisnis dalam satu layar ringkas tanpa perlu menunggu rekap manual berhari-hari. Dapatkan informasi pendapatan, pengeluaran, dan kinerja operasional secara akurat dan real-time.",
    icon: BarChart3,
    gradient: "from-sky-600 to-teal-500",
    bgCard: "bg-white",
    borderCard: "border-sky-200",
    btnColor: "bg-sky-600 hover:bg-sky-700 text-white shadow-sky-500/25",
    features: [
      "Rekap Laporan Pendapatan & Biaya Otomatis",
      "Pantau Kinerja Seluruh Tim dari Satu Layar",
      "Riwayat Transaksi Jelas & Anti-Selisih",
      "Unduh Laporan ke Excel atau PDF dalam 1 Klik",
    ],
    consultTag: "sistem",
  },
];

export function ThreePillarSolutions() {
  const { openConsult } = useConsult();

  return (
    <section id="solusi" className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200/90 px-4 py-1.5 text-xs sm:text-sm font-semibold text-blue-700 mb-4"
          >
            <ShieldCheck className="h-4 w-4" />
            <span>Pilar Solusi Utama</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight"
          >
            Solusi Software yang Menjawab Kebutuhan Nyata Usaha Anda
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed"
          >
            Membantu bisnis dan instansi Anda beralih dari proses manual yang lambat ke sistem digital yang rapi, mudah digunakan oleh seluruh staf, dan siap mendukung pertumbuhan operasional.
          </motion.p>
        </div>

        {/* 3 Pillar Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`relative rounded-3xl ${pillar.bgCard} border ${pillar.borderCard} p-8 flex flex-col justify-between shadow-lg shadow-slate-200/60 hover:shadow-xl transition-all duration-300 group`}
              >
                <div>
                  {/* Top Badge Icon */}
                  <div className={`h-16 w-16 rounded-2xl bg-gradient-to-tr ${pillar.gradient} text-white flex items-center justify-center mb-6 shadow-md shadow-blue-500/15`}>
                    <Icon className="h-8 w-8" />
                  </div>

                  {/* Title & Subtitle */}
                  <p className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-blue-600">
                    {pillar.subtitle}
                  </p>
                  <h3 className="text-2xl font-black text-slate-900 mt-1.5 mb-3 leading-snug">
                    {pillar.title}
                  </h3>

                  {/* Description - HIG Body Standard (16px) */}
                  <p className="text-slate-700 text-base leading-relaxed mb-6 font-normal">
                    {pillar.description}
                  </p>

                  {/* Checklist - Clear Legible Text (14px) */}
                  <div className="space-y-3 pt-5 border-t border-slate-100">
                    {pillar.features.map((item) => (
                      <div key={item} className="flex items-start gap-3 text-sm font-semibold text-slate-800 leading-snug">
                        <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <div className="pt-8 mt-6">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    onClick={() => openConsult(pillar.consultTag)}
                    className={`w-full py-4 px-5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 ${pillar.btnColor} shadow-md transition-all duration-200 cursor-pointer`}
                  >
                    <span>Konsultasi {pillar.title}</span>
                    <ArrowRight className="h-4 w-4" />
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

