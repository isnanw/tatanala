"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, TrendingUp, XCircle, X, ShieldCheck, Database } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useConsult } from "@/components/consult/ConsultProvider";
import { useEscape, useLockBody } from "@/lib/hooks";
import { ShapeDivider } from "@/components/ui/ShapeDivider";

interface CaseItem {
  id: string;
  client: string;
  category: string;
  title: string;
  summary: string;
  before: string;
  after: string;
  metricValue: string;
  metricLabel: string;
  image: string;
  fullStory: string;
  features: string[];
}

const CASES: CaseItem[] = [
  {
    id: "distributor-sembako",
    client: "CV Sumber Pangan Lestari",
    category: "Distributor Sembako &bull; 4 Cabang",
    title: "ERP Mini Gudang & Penjualan Multi-Cabang",
    summary:
      "Mengganti 12 file Excel terpisah dan nota manual dengan satu sistem realtime untuk owner, admin gudang, dan tim sales.",
    before: "Selisih stok 7% per bulan & rekap omzet butuh 3 hari kerja",
    after: "Selisih stok turun hingga -92%, laporan otomatis ke WA owner tiap sore",
    metricValue: "-92%",
    metricLabel: "Selisih Stok",
    image: "/images/case-cloud-infra.jpg",
    fullStory:
      "CV Sumber Pangan Lestari memiliki 4 cabang distributor sembako di berbagai wilayah Jawa. Sebelum menggunakan Tatanala, setiap cabang mencatat penjualan di buku nota dan menginput ke Excel terpisah. Stok gudang seringkali tidak klop dengan data penjualan, dan rekap bulanan memakan waktu 3 hari lembur bagi owner. Tatanala merancang sistem ERP berbasis cloud yang mensinkronkan stok per detik, mencatat mutasi per staf, dan mengirim rekap omzet otomatis via bot notifikasi tiap pukul 18.00.",
    features: [
      "Sinkronisasi database cloud multi-cabang secara realtime",
      "Pencatatan mutasi stok per user admin gudang",
      "Notifikasi WhatsApp otomatis harian ke owner",
      "Dashboard performa sales & rekap margin laba bersih",
    ],
  },
  {
    id: "kontraktor-bumn",
    client: "PT Arunika Bangun Persada",
    category: "Kontraktor Sipil &bull; Siap Tender",
    title: "Company Profile Siap Tender & Verifikasi SBU",
    summary:
      "Website lama tanpa portofolio diganti situs profil berbobot dengan legalitas, sertifikasi, dan galeri proyek terverifikasi.",
    before: "Website template 2016 lambat, klien tender meragukan kredibilitas",
    after: "Skor Lighthouse 97, memuat < 1,8 detik, lolos prakualifikasi 3 tender BUMN",
    metricValue: "3 Tender",
    metricLabel: "Lolos BUMN",
    image: "/images/case-network-security.jpg",
    fullStory:
      "PT Arunika Bangun Persada sering tersandung pada tahap evaluasi prakualifikasi lelang tender proyek BUMN karena website lama lambat, tidak mobile-friendly, dan tidak memiliki struktur dokumentasi sertifikasi SBU/K3. Tatanala merancang ulang website dari nol dengan Next.js, menata galeri portofolio proyek dengan bukti verifikasi, dan memastikan kecepatan muat di bawah 1,8 detik.",
    features: [
      "Struktur halaman siap verifikasi LPSE & tender",
      "Skor Google Lighthouse 97/100 di jaringan mobile",
      "Arsitektur keamanan SSL Grade A+ dan proteksi DDoS",
      "CMS mudah untuk tim internal mengunggah berita proyek",
    ],
  },
  {
    id: "klinik-gigi",
    client: "Klinik Gigi Senyum Sehat",
    category: "Kesehatan &bull; SEO & Ads",
    title: "Mesin Prospek Booking Pasien dari Google & Meta",
    summary:
      "SEO lokal mendominasi kata kunci pencarian dokter gigi + iklan digital terhubung ke WhatsApp dengan tracking biaya per pasien nyata.",
    before: "Tidak muncul di Google, iklan boost post boncos tanpa data konversi",
    after: "Peringkat #1 untuk 14 kata kunci lokal, booking via WhatsApp melonjak drastis",
    metricValue: "+312%",
    metricLabel: "Booking Online",
    image: "/images/case-healthcare.jpg",
    fullStory:
      "Klinik Gigi Senyum Sehat sebelumnya mengandalkan boost post media sosial tanpa pelacakan data, sehingga biaya iklan terbuang sia-sia tanpa tahu berapa pasien yang benar-benar datang. Tatanala mengimplementasikan strategi SEO lokal pada Google Business Profile dan merancang kampanye iklan digital yang melacak setiap chat WhatsApp hingga terkonfirmasi booking dokter.",
    features: [
      "Dominasi peringkat #1 Google Maps & SEO lokal",
      "Pelacakan konversi WhatsApp Conversion API",
      "Landing page khusus booking dengan CTA terarah",
      "Dashboard analitik ROAS dan biaya per pasien baru",
    ],
  },
  {
    id: "manufaktur-presisi",
    client: "PT Manufaktur Presisi Teknik",
    category: "Manufaktur &bull; Alur Produksi",
    title: "Digitalisasi Alur SPK & Inventaris Bahan Baku",
    summary:
      "Sistem pemantauan Surat Perintah Kerja (SPK) realtime dengan scan barcode dan kalkulasi otomatis sisa bahan baku logam.",
    before: "Status pengerjaan dicek manual lewat telepon, sering terjadi miskomunikasi",
    after: "Progress pengerjaan terpantau per stasiun kerja, pemborosan bahan turun 38%",
    metricValue: "-38%",
    metricLabel: "Waste Material",
    image: "/images/case-hybrid-cloud.jpg",
    fullStory:
      "Pabrik fabrikasi logam ini sering mengalami pemborosan bahan baku pelat baja karena pemotongan tidak terencana dan status SPK tercecer di lantai produksi. Tatanala membangun aplikasi berbasis tablet industri di tiap stasiun kerja yang memandu pemotongan bahan baku secara optimal dan mencatat status pengerjaan secara otomatis.",
    features: [
      "Pelacakan SPK realtime dengan scan barcode",
      "Algoritma kalkulasi optimal pemotongan pelat logam",
      "Dashboard monitor antrean produksi di ruang manajer",
      "Audit log waktu kerja dan sisa bahan baku",
    ],
  },
];

export function CaseStudies() {
  const { openConsult } = useConsult();
  const [selectedCase, setSelectedCase] = useState<CaseItem | null>(null);
  const [shake, setShake] = useState(false);

  useLockBody(Boolean(selectedCase));
  useEscape(Boolean(selectedCase), () => setSelectedCase(null));

  const triggerShake = () => {
    setShake(true);
    setTimeout(() => setShake(false), 450);
  };

  return (
    <section id="portofolio" className="relative py-20 sm:py-28 bg-[#F8FAFC] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200/80 px-4 py-1 text-xs font-semibold text-blue-700 mb-4"
            >
              <TrendingUp className="h-3.5 w-3.5" />
              <span>Studi Kasus Riil</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900"
            >
              Hasil Nyata, Dampak Terukur
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-3 text-base sm:text-lg text-slate-600 max-w-xl"
            >
              Klik kartu studi kasus untuk melihat cerita lengkap, arsitektur teknis, dan hasil transformasinya melalui animasi morphing.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <button
              type="button"
              onClick={() => openConsult("portofolio")}
              className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors"
            >
              <span>Pelajari Semua Solusi</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>
        </div>

        {/* 2x2 Grid with layoutId morphing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CASES.map((item, idx) => (
            <motion.div
              key={item.id}
              layoutId={`case-card-${item.id}`}
              onClick={() => setSelectedCase(item)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="group flex flex-col rounded-[2.25rem] border border-slate-200/90 bg-white overflow-hidden shadow-xs hover:shadow-2xl hover:border-blue-300 transition-all duration-300 cursor-pointer"
            >
              {/* Image Preview with Metric Badge */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                <motion.div layoutId={`case-img-${item.id}`} className="relative h-full w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </motion.div>

                {/* Metric Overlay Badge */}
                <div className="absolute top-4 right-4 rounded-full bg-slate-900/90 backdrop-blur-md px-4 py-2 text-xs sm:text-sm font-bold text-white shadow-lg flex items-center gap-2">
                  <span className="text-blue-400 font-extrabold">{item.metricValue}</span>
                  <span className="text-slate-200 font-medium">{item.metricLabel}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center justify-between text-sm font-semibold text-slate-600 mb-2.5">
                    <span
                      className="text-blue-600 font-bold uppercase tracking-wider text-xs sm:text-[13px]"
                      dangerouslySetInnerHTML={{ __html: item.category }}
                    />
                    <span className="text-slate-600 font-semibold">{item.client}</span>
                  </div>

                  <motion.h3
                    layoutId={`case-title-${item.id}`}
                    className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug"
                  >
                    {item.title}
                  </motion.h3>
                  <p className="mt-3 text-base leading-relaxed text-slate-700 font-normal">
                    {item.summary}
                  </p>

                  {/* Before vs After comparison */}
                  <div className="mt-5 rounded-2xl bg-[#F8FAFC] border border-slate-200/70 p-4 sm:p-5 space-y-2.5 text-sm leading-snug">
                    <div className="flex items-start gap-2.5 text-rose-800">
                      <XCircle className="h-4 w-4 shrink-0 mt-0.5 text-rose-500" />
                      <span><strong>Sebelum:</strong> {item.before}</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-emerald-900">
                      <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-emerald-600" />
                      <span><strong>Sesudah:</strong> {item.after}</span>
                    </div>
                  </div>
                </div>

                {/* Action Link */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 group-hover:text-blue-700">
                    <span>Lihat Rincian Studi Kasus</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Morphing Modal for Case Study Details */}
        <AnimatePresence>
          {selectedCase && (
            <div className="fixed inset-0 z-[90] flex items-center justify-center p-3 sm:p-6 overflow-hidden">
              {/* Backdrop - Clicking outside triggers shake, does NOT close */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={triggerShake}
                className="fixed inset-0 bg-slate-950/70 backdrop-blur-md cursor-not-allowed"
              />

              {/* Morphed Card Modal with shake animation and internal scrolling */}
              <motion.div
                layoutId={`case-card-${selectedCase.id}`}
                animate={
                  shake
                    ? {
                        x: [-12, 12, -8, 8, -4, 4, 0],
                        transition: { duration: 0.45, ease: "easeInOut" },
                      }
                    : { x: 0 }
                }
                className="relative z-10 w-full max-w-3xl max-h-[85vh] overflow-y-auto custom-scrollbar rounded-[2.5rem] bg-white p-6 sm:p-10 shadow-2xl border border-slate-200 my-auto overscroll-contain"
              >
                {/* Close Button - Sticky at top right */}
                <div className="sticky top-0 z-30 flex justify-end -mt-2 -mr-2 pointer-events-none pb-2">
                  <button
                    type="button"
                    onClick={() => setSelectedCase(null)}
                    aria-label="Tutup Studi Kasus (Esc)"
                    className="pointer-events-auto grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white/95 hover:bg-slate-100 text-slate-700 transition-colors shadow-md backdrop-blur-md"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Header Image */}
                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-100 mb-6">
                  <motion.div layoutId={`case-img-${selectedCase.id}`} className="relative h-full w-full">
                    <Image
                      src={selectedCase.image}
                      alt={selectedCase.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 768px"
                      className="object-cover"
                    />
                  </motion.div>
                  <div className="absolute top-4 left-4 rounded-full bg-slate-900/90 backdrop-blur-md px-4 py-1.5 text-xs font-bold text-white shadow-lg">
                    {selectedCase.client}
                  </div>
                </div>

                {/* Title & Category */}
                <span
                  className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-600"
                  dangerouslySetInnerHTML={{ __html: selectedCase.category }}
                />
                <motion.h3
                  layoutId={`case-title-${selectedCase.id}`}
                  className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  {selectedCase.title}
                </motion.h3>

                {/* Full Story */}
                <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed bg-slate-50 border border-slate-200/80 rounded-2xl p-5">
                  {selectedCase.fullStory}
                </p>

                {/* Key Solutions Built */}
                <div className="mt-6">
                  <h4 className="text-base font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-blue-600" />
                    Solusi Yang Kami Bangun:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedCase.features.map((feat) => (
                      <div
                        key={feat}
                        className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white p-3.5 text-sm font-medium text-slate-800 leading-snug"
                      >
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="mt-8 pt-6 border-t border-slate-200/80 flex items-center justify-between gap-4">
                  <div>
                    <span className="text-2xl sm:text-3xl font-extrabold text-blue-600 font-sans">
                      {selectedCase.metricValue}
                    </span>
                    <span className="text-sm text-slate-600 font-semibold ml-2">
                      {selectedCase.metricLabel}
                    </span>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    onClick={() => {
                      const id = selectedCase.id;
                      setSelectedCase(null);
                      openConsult(id);
                    }}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 text-sm sm:text-base font-bold shadow-lg shadow-blue-500/25"
                  >
                    <span>Konsultasi Solusi Serupa di WhatsApp</span>
                    <ArrowRight className="h-4 w-4" />
                  </motion.button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* Smooth Shape Divider transitioning into White */}
      <ShapeDivider
        variant="curve"
        position="bottom"
        nextBgColor="#FFFFFF"
        secondaryColor="rgba(37, 99, 235, 0.04)"
      />
    </section>
  );
}
