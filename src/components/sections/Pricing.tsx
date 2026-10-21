"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, ShieldCheck, Lock, FileCode, Clock, Server, Database } from "lucide-react";
import { useConsult } from "@/components/consult/ConsultProvider";

const TIERS = [
  {
    id: "fondasi",
    name: "Paket Fondasi Profil",
    tagline: "Dirancang khusus bagi korporasi dan kontraktor yang memerlukan kredibilitas legal dan kelulusan audit tender.",
    price: "Rp 4.900.000",
    period: "Investasi Sekali Bayar (Tanpa Royalti)",
    badge: "Siap Audit Tender",
    popular: false,
    deliverables: [
      "Website profil perusahaan arsitektur modern (hingga 7 halaman resmi)",
      "Kepatuhan struktur dokumen ISO, K3, SBU, & kelengkapan LPSE BUMN",
      "Sistem CMS mandiri (akses pengelolaan teks & portofolio independen)",
      "Domain corporate (.com / .co.id) & SSL Enkripsi 256-bit selama 1 tahun",
      "Setup email resmi bisnis profesional (nama@perusahaananda.com)",
      "Optimasi teknis SEO standar Google (indeksasi dalam 48 jam kerja)",
      "Garansi pemeliharaan sistem & perbaikan bug selama 3 bulan",
      "100% kepemilikan source code & arsip digital diserahkan penuh",
    ],
  },
  {
    id: "operasional",
    name: "Paket Sistem Operasional",
    tagline: "Pemberantasan tuntas pembukuan manual, penghapusan 12 file Excel tercecer, dan penataan stok multi-cabang.",
    price: "Rp 18.000.000",
    period: "Mulai Dari (Sesuai Kompleksitas Alur)",
    badge: "Paling Banyak Diimplementasikan",
    popular: true,
    deliverables: [
      "Seluruh modul pada Paket Fondasi Profil (sudah termasuk)",
      "Aplikasi ERP kustom berbasis cloud: modul gudang, POS kasir, & approval",
      "Penyatuan mutasi multi-cabang secara realtime tanpa jeda rekonsiliasi",
      "Fitur Executive Reporting otomatis langsung ke WhatsApp direksi (pukul 21:00)",
      "Audit trail anti-manipulasi: log aktivitas staf tercatat permanen",
      "Hak akses berjenjang (Owner, Manajer Operasional, Kasir, Staff Gudang)",
      "Pelatihan intensif tim lapangan (SOP tertulis + video tutorial in-house)",
      "Pendampingan operasional eksklusif & SLA responsif selama 6 bulan",
      "Serah terima total basis data, skema database, dan repositori server",
    ],
  },
  {
    id: "ekosistem",
    name: "Paket Ekosistem Terpadu",
    tagline: "Transformasi total hulu ke hilir: sistem operasional rapi di internal, mesin akuisisi omzet agresif di pasar eksternal.",
    price: "Rp 35.000.000",
    period: "Mulai Dari (Solusi Skala Penuh)",
    badge: "Kedaulatan Usaha Penuh",
    popular: false,
    deliverables: [
      "Seluruh modul kustom Paket Sistem Operasional tanpa batas fitur",
      "Pembangunan Portal Pelanggan B2B / Aplikasi Mobile PWA mandiri",
      "Integrasi Payment Gateway resmi (Virtual Account perbankan, QRIS dinamis)",
      "Setup kampanye akuisisi pasar (Google Search Ads & Meta Ads terarah)",
      "Optimasi SEO otoritas tinggi untuk dominasi kata kunci komersial di Google",
      "Arsitektur server Dedicated Cloud dengan jaminan SLA Uptime 99.8%",
      "Inhouse dedicated technical account manager & audit sistem berkala",
      "Perjanjian Kerahasiaan Informasi (NDA) legal bermaterai & garansi 12 bulan",
    ],
  },
];

const FORMAL_GUARANTEES = [
  {
    title: "Akad Kontrak & Legalitas Berbadan Hukum",
    desc: "Setiap kesepakatan dilindungi kontrak formal bermaterai dengan klausul ruang lingkup pekerjaan, jadwal eksekusi tertulis, dan denda keterlambatan.",
    icon: ShieldCheck,
  },
  {
    title: "100% Kedaulatan Data & Kode Sumber",
    desc: "Hak cipta software dan basis data mutlak beralih ke perusahaan Anda tanpa klausul royalti tahunan yang membebani neraca keuangan Anda di kemudian hari.",
    icon: Database,
  },
  {
    title: "Garansi Teknis & Komitmen Uptime SLA",
    desc: "Dukungan insinyur siaga untuk memastikan sistem beroperasi tanpa gangguan pada jam sibuk operasional transaksi bisnis Anda.",
    icon: Clock,
  },
];

export function Pricing() {
  const { openConsult } = useConsult();

  return (
    <section id="investasi" className="py-20 sm:py-28 bg-[#07101E] text-white border-y border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 border border-blue-400/30 px-4 py-1 text-xs font-semibold text-blue-400 mb-4"
          >
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Struktur Investasi Transparan &amp; Mengikat</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white"
          >
            Pilihan Paket Investasi Sesuai Kebutuhan Strategis Usaha
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto"
          >
            Tanpa biaya siluman. Tanpa keterikatan biaya langganan software vendor. Satu kali investasi untuk kepemilikan aset digital permanen.
          </motion.p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 items-stretch">
          {TIERS.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                tier.popular
                  ? "bg-[#0C1A33] border-2 border-blue-500 shadow-2xl shadow-blue-900/50 scale-100 lg:-translate-y-2"
                  : "bg-[#091528] border border-slate-800 shadow-lg hover:border-slate-700"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[11px] font-extrabold px-4 py-1 rounded-full uppercase tracking-wider shadow-md">
                  {tier.badge}
                </div>
              )}

              <div>
                {!tier.popular && (
                  <span className="inline-block px-3 py-0.5 rounded-full bg-slate-800 text-[11px] font-bold text-slate-300 mb-3">
                    {tier.badge}
                  </span>
                )}

                <h3 className="text-xl font-bold text-white mt-1">
                  {tier.name}
                </h3>
                <p className="mt-2 text-xs text-slate-400 leading-relaxed min-h-[40px]">
                  {tier.tagline}
                </p>

                {/* Price Display */}
                <div className="mt-6 pt-6 border-t border-slate-800">
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    {tier.price}
                  </div>
                  <div className="text-xs text-blue-400 font-medium mt-1">
                    {tier.period}
                  </div>
                </div>

                {/* Deliverables List */}
                <div className="mt-6 pt-6 border-t border-slate-800/80 space-y-3">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-300">
                    Spesifikasi Lingkup Kerja Resmi:
                  </p>
                  {tier.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-6 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => openConsult(tier.id)}
                  className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 ${
                    tier.popular
                      ? "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30"
                      : "bg-slate-800 hover:bg-slate-700 text-white border border-slate-700"
                  }`}
                >
                  <span>Pilih Paket &amp; Minta Draf Kontrak</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3 Bottom Formal Guarantee Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-slate-800">
          {FORMAL_GUARANTEES.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-2xl bg-[#091528] border border-slate-800 p-6 flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
