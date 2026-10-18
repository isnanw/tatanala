"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Sparkles, ShieldCheck, HelpCircle } from "lucide-react";
import { useConsult } from "@/components/consult/ConsultProvider";

const STARTER_FEATURES = [
  "Sistem informasi kustom (3 modul inti operasional)",
  "Inventaris gudang, kasir POS & alur approval",
  "Dashboard realtime multi-cabang & rekap omzet",
  "Hak akses multi-pengguna & audit log staf",
  "Laporan harian otomatis ke WhatsApp owner",
  "Website company profile siap tender (termasuk)",
  "Pelatihan tim intensif & pendampingan 6 bulan",
  "100% hak kepemilikan source code & database",
];

const TIERS = [
  {
    id: "fondasi",
    name: "Paket Fondasi Profil",
    tagline: "Untuk usaha yang ingin tampil kredibel di mata klien & siap tembus tender.",
    price: "Rp 4,9 jt",
    suffix: "sekali bayar",
    badge: "Siap Tender",
    highlightFeature: "Website profil hingga 7 halaman + CMS mandiri + domain/hosting 1 tahun",
  },
  {
    id: "operasional",
    name: "Paket Sistem Operasional",
    tagline: "Solusi tuntas operasional: hilangkan 12 Excel & stop kebocoran stok gudang.",
    price: "Rp 18 jt",
    suffix: "mulai dari",
    badge: "Paling Diminati",
    highlightFeature: "Sistem kustom multi-cabang + laporan otomatis WA + training staf",
  },
  {
    id: "ekosistem",
    name: "Paket Ekosistem Lengkap",
    tagline: "Hulu-ke-hilir: sistem rapi di belakang, mesin omzet kencang di depan.",
    price: "Rp 35 jt",
    suffix: "mulai dari",
    badge: "Full Scale",
    highlightFeature: "Semua modul kustom + SEO Google #1 + Google/Meta Ads + AI Otomasi",
  },
];

export function Pricing() {
  const { openConsult } = useConsult();

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-[#F8FAFC]">
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
              <Sparkles className="h-3.5 w-3.5" />
              <span>Transparan &amp; Tanpa Biaya Siluman</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900"
            >
              Investasi Terukur Sesuai Skala Bisnis
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-3 text-base sm:text-lg text-slate-600 max-w-xl"
            >
              Tanpa biaya perpanjangan paksaan, tanpa vendor lock-in. Seluruh source code dan database sepenuhnya menjadi milik Anda.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <button
              type="button"
              onClick={() => openConsult("biaya-kustom")}
              className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors"
            >
              <span>Butuh Rincian Penawaran Kustom?</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>
        </div>

        {/* Pricing Layout: Featured Card on Left + 3 Stacked Cards on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Featured "Paket Sistem Operasional" Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 rounded-[2.25rem] border-2 border-blue-600/30 bg-white p-8 sm:p-10 shadow-[0_20px_50px_rgba(37,99,235,0.08)] flex flex-col justify-between relative overflow-hidden ring-1 ring-blue-500/15"
          >
            {/* Top Glow Ambient */}
            <div className="absolute top-0 right-0 h-44 w-44 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-xs">
                  <Sparkles className="h-3.5 w-3.5" /> Rekomendasi Utama
                </span>
                <span className="text-xs font-semibold text-slate-400">100% Hak Milik</span>
              </div>

              <h3 className="mt-5 text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Paket Sistem Operasional
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Paling banyak dipilih UMKM &amp; distributor untuk menata stok, alur kasir, dan laporan keuangan multi-cabang.
              </p>

              {/* Price Banner */}
              <div className="mt-6 flex items-baseline gap-2 pb-6 border-b border-slate-100">
                <span className="text-4xl font-extrabold text-blue-600 font-sans tracking-tight">
                  Rp 18 jt
                </span>
                <span className="text-xs text-slate-500 font-medium">mulai dari &bull; sekali bayar</span>
              </div>

              {/* Checklist */}
              <ul className="mt-6 space-y-3.5">
                {STARTER_FEATURES.map((feat) => (
                  <li key={feat} className="flex items-start gap-3 text-xs sm:text-sm font-medium text-slate-700">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white mt-0.5">
                      <Check className="h-3 w-3 stroke-[3]" />
                    </span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <div className="mt-8 pt-6 border-t border-slate-100">
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={() => openConsult("operasional")}
                className="w-full flex items-center justify-center gap-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-sm font-bold shadow-lg shadow-blue-500/25 transition-all"
              >
                <span>Tata Operasional Bisnis Saya</span>
                <ArrowRight className="h-4 w-4" />
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column: 3 Stacked Tier Cards */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-5">
            {TIERS.map((tier, idx) => (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -3 }}
                className="group rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 hover:border-blue-300 hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 cursor-pointer"
                onClick={() => openConsult(tier.id)}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h4 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {tier.name}
                    </h4>
                    <span className="rounded-full bg-blue-50 border border-blue-100 px-3 py-0.5 text-[11px] font-bold text-blue-700">
                      {tier.badge}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed max-w-md">
                    {tier.tagline}
                  </p>
                  <p className="mt-3 text-xs text-slate-500 flex items-center gap-1.5 font-medium">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    {tier.highlightFeature}
                  </p>
                </div>

                {/* Price & Action */}
                <div className="sm:text-right shrink-0">
                  <div className="flex items-baseline sm:justify-end gap-1.5">
                    <span className="text-3xl font-extrabold text-slate-900 font-sans tracking-tight">
                      {tier.price}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      {tier.suffix}
                    </span>
                  </div>
                  <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 group-hover:text-blue-700">
                    <span>Pilih Paket Ini</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Guarantee Note Banner */}
            <div className="rounded-2xl bg-white border border-slate-200/80 p-4 flex items-center justify-between text-xs text-slate-600">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="h-5 w-5 text-emerald-600 shrink-0" />
                <span>
                  <strong>Jaminan Garansi:</strong> Gratis perbaikan bug dan pendampingan implementasi hingga sistem berjalan lancar di tangan tim Anda.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
