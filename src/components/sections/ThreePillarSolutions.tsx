"use client";

import { motion } from "framer-motion";
import { 
  Globe2, 
  Layers, 
  BarChart3, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2
} from "lucide-react";
import { useConsult } from "@/components/consult/ConsultProvider";

interface Pillar {
  id: string;
  title: string;
  subtitle: string;
  badge?: string;
  description: string;
  icon: typeof Globe2;
  gradient: string;
  isFeatured?: boolean;
  btnColor: string;
  features: string[];
  consultTag: string;
}

const PILLARS: Pillar[] = [
  {
    id: "website-portal",
    title: "Website & Portal Bisnis",
    subtitle: "Kredibilitas & Siap Tender",
    description: "Bangun citra profesional yang meyakinkan bagi calon klien, mitra, maupun instansi. Menampilkan profil usaha, legalitas, katalog layanan, dan galeri portofolio secara rapi, berbobot, dan mudah ditemukan di pencarian Google.",
    icon: Globe2,
    gradient: "from-blue-600 to-sky-500",
    btnColor: "bg-slate-900 hover:bg-blue-600 text-white shadow-slate-900/15",
    features: [
      "Tampilan Eksklusif, Cepat & Siap Verifikasi Tender",
      "Mudah Ditemukan Calon Klien di Google (SEO Lokal & Nasional)",
      "Katalog Portofolio & Informasi Legalitas Terstruktur",
      "Mudah Dikelola Mandiri Tanpa Ketergantungan Koding",
    ],
    consultTag: "profil",
  },
  {
    id: "sistem-operasional",
    title: "Sistem Operasional Custom",
    subtitle: "Dibuat Persis Sesuai SOP Anda",
    badge: "100% Sesuai Kebutuhan",
    isFeatured: true,
    description: "Tinggalkan software kaku yang memaksa tim Anda mengubah kebiasaan kerja. Kami kembangkan sistem berbasis web yang dirancang khusus mengikuti alur kerja nyata usaha Anda — mulai dari alur staf internal hingga pelayanan pelanggan.",
    icon: Layers,
    gradient: "from-blue-600 via-indigo-600 to-blue-700",
    btnColor: "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/25",
    features: [
      "Dibuat Khusus Mengikuti Alur Kerja (SOP) Nyata Usaha Anda",
      "Contoh HRD: Presensi GPS, Shift Kerja, Cuti & Hitung Payroll Otomatis",
      "Contoh Booking: Reservasi Jadwal 24/7 Bebas Bentrok & Antrean Live",
      "Otomasi Notifikasi WhatsApp, Hak Akses Staf & Data Aman Terenkripsi",
    ],
    consultTag: "sistem",
  },
  {
    id: "dashboard-laporan",
    title: "Dashboard & Laporan Otomatis",
    subtitle: "Visibilitas & Keputusan Cepat",
    description: "Pantau perkembangan bisnis dalam satu layar ringkas tanpa perlu menunggu rekap manual berhari-hari. Dapatkan informasi pendapatan, pengeluaran, kehadiran karyawan, dan kinerja operasional secara akurat dan real-time.",
    icon: BarChart3,
    gradient: "from-sky-600 to-teal-500",
    btnColor: "bg-slate-900 hover:bg-sky-600 text-white shadow-slate-900/15",
    features: [
      "Rekap Laporan Pendapatan & Biaya Operasional Otomatis",
      "Pantau Jam Kerja & Produktivitas Tim dari Satu Dasbor",
      "Riwayat Transaksi Jelas & Bebas Selisih Angka",
      "Unduh Laporan ke Excel atau PDF dalam 1 Kali Klik",
    ],
    consultTag: "sistem",
  },
];

export function ThreePillarSolutions() {
  const { openConsult } = useConsult();

  return (
    <section id="solusi" className="relative py-20 sm:py-28 bg-[#F8FAFC] border-b border-slate-200/80 overflow-hidden">
      {/* Subtle ambient backdrop */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[480px] bg-gradient-to-tr from-blue-200/20 via-sky-200/15 to-transparent blur-3xl rounded-full" 
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-blue-50/90 border border-blue-200/90 px-4 py-1.5 text-xs sm:text-sm font-semibold text-blue-700 mb-4 shadow-sm"
          >
            <ShieldCheck className="h-4 w-4 text-blue-600" />
            <span>Pilar Solusi Utama</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold tracking-tight text-slate-900 leading-[1.2]"
          >
            Solusi Software yang Menjawab Kebutuhan Nyata Usaha Anda
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            Membantu bisnis dan instansi Anda beralih dari proses manual yang lambat ke sistem digital yang rapi, mudah digunakan oleh seluruh staf, dan siap mendukung pertumbuhan operasional.
          </motion.p>
        </div>

        {/* 3 Pillar Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isFeatured = pillar.isFeatured;

            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 group ${
                  isFeatured
                    ? "bg-gradient-to-b from-blue-50/50 via-white to-white border-2 border-blue-500/80 shadow-xl shadow-blue-500/10 ring-1 ring-blue-500/20 lg:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/15"
                    : "bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:shadow-slate-200/60 hover:border-slate-300"
                }`}
              >
                {/* Floating Special Badge for Featured Pillar */}
                {pillar.badge && (
                  <div className="absolute -top-3.5 right-6 z-10">
                    <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white text-xs font-bold shadow-md shadow-blue-500/25 tracking-wide">
                      {pillar.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Top Bar: Icon Container + Counter */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`h-14 w-14 rounded-2xl bg-gradient-to-tr ${pillar.gradient} text-white flex items-center justify-center shadow-md shadow-blue-500/15 group-hover:scale-105 transition-transform duration-300`}>
                      <Icon className="h-7 w-7" />
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-400 bg-slate-100/90 border border-slate-200/60 px-2.5 py-1 rounded-md">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Eyebrow & Title */}
                  <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1.5">
                    {pillar.subtitle}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-snug">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Features List with clear visual rhythm */}
                  <div className="mt-6 pt-6 border-t border-slate-100">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3.5">
                      Keunggulan & Cakupan
                    </div>
                    <ul className="space-y-3">
                      {pillar.features.map((item) => {
                        const parts = item.split(":");
                        const hasPrefix = parts.length > 1;

                        return (
                          <li key={item} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                            <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 border border-blue-200/60 mt-0.5">
                              <CheckCircle2 className="h-3.5 w-3.5" />
                            </div>
                            <span>
                              {hasPrefix ? (
                                <>
                                  <strong className="font-semibold text-slate-900">{parts[0]}:</strong>{" "}
                                  <span>{parts.slice(1).join(":")}</span>
                                </>
                              ) : (
                                item
                              )}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    onClick={() => openConsult(pillar.consultTag)}
                    className={`w-full py-3.5 px-5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 ${pillar.btnColor} shadow-md transition-all duration-200 cursor-pointer group/btn`}
                  >
                    <span>Konsultasi Sekarang</span>
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
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

