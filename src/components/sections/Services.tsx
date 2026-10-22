"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Boxes, Globe2, Rocket, CheckCircle2, X, ShieldCheck, Cpu, Zap } from "lucide-react";
import { useState } from "react";
import { useConsult } from "@/components/consult/ConsultProvider";
import { useEscape, useLockBody } from "@/lib/hooks";
import { ShapeDivider } from "@/components/ui/ShapeDivider";

interface PillarItem {
  id: string;
  pillar: string;
  title: string;
  icon: typeof Globe2;
  badge: string;
  metric: string;
  metricLabel: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  techStack: string[];
  highlighted?: boolean;
}

const PILLARS_DATA: PillarItem[] = [
  {
    id: "profil",
    pillar: "Pilar Hulu",
    title: "Website Profil Berbobot & Siap Tender",
    icon: Globe2,
    badge: "Reputasi Instan",
    metric: "< 2 Detik",
    metricLabel: "Kecepatan Muat Mobile",
    shortDesc:
      "Situs profil yang dirancang layaknya proposal bisnis: mematahkan keraguan calon klien, menampilkan legalitas & sertifikasi, serta siap tembus verifikasi tender BUMN.",
    fullDesc:
      "Website bukan sekadar brosur online. Bagi kontraktor, manufaktur, dan konsultan, website adalah garda depan evaluasi tender. Kami merancang arsitektur web yang lolos verifikasi SBU/LPSE, memuat di bawah 2 detik di jaringan seluler, dan menyajikan portofolio secara terverifikasi.",
    deliverables: [
      "Desain UI/UX eksklusif berorientasi kredibilitas bisnis",
      "Halaman legalitas, struktur organisasi, dan galeri proyek tender",
      "Headless CMS mandiri  -  update berita & portofolio tanpa programmer",
      "Hosting Cloud CDN global + domain .com / .id + SSL kelas A+",
      "Formulir penawaran langsung terintegrasi ke WhatsApp admin",
    ],
    techStack: ["Next.js App Router", "TailwindCSS", "Edge CDN", "Core Web Vitals 95+"],
  },
  {
    id: "sistem",
    pillar: "Pilar Tengah",
    title: "Sistem Informasi & Operasional Kustom",
    icon: Boxes,
    badge: "100% Sesuai SOP",
    metric: "100% Akurat",
    metricLabel: "Sesuai Alur Nyata",
    shortDesc:
      "Dirancang khusus persis mengikuti alur kerja dan SOP nyata usaha Anda — bukan software kaku. Adapun contoh penerapan terbukti yang kami bangun mencakup Sistem HRD (presensi & payroll) dan Booking Realtime.",
    fullDesc:
      "Software generik di pasaran seringkali kaku dan memaksa tim Anda mengubah kebiasaan kerja. Di Tatanala, kami memetakan alur fisik bisnis Anda untuk membangun sistem custom yang fleksibel. Contoh implementasi yang kami kembangkan mulai dari otomasi HRD (presensi GPS, kelola shift, cuti & slip gaji otomatis) hingga mesin reservasi layanan pelanggan (booking mandiri 24/7 dan layar antrean realtime).",
    deliverables: [
      "Arsitektur Custom: Dibuat khusus mengikuti SOP & alur kerja unik bisnis Anda",
      "Contoh Modul HRD: Presensi GPS anti-titip absen, pengaturan shift & cuti digital",
      "Contoh Modul Payroll: Kalkulasi gaji pokok, lembur, BPJS & slip gaji otomatis",
      "Contoh Modul Booking Realtime: Reservasi mandiri 24/7 tanpa bentrok jadwal",
      "Layar Monitor Antrean Live & Bot WhatsApp: Pantau antrean & notifikasi otomatis",
    ],
    techStack: ["PostgreSQL", "Node.js / Go", "REST & WebSocket", "Automated Daily Backup"],
    highlighted: true,
  },
  {
    id: "pertumbuhan",
    pillar: "Pilar Hilir",
    title: "Pertumbuhan Terarah (SEO & Ads Terukur)",
    icon: Rocket,
    badge: "Mesin Prospek",
    metric: "4.6x Rata-rata",
    metricLabel: "ROAS Iklan Nyata",
    shortDesc:
      "Mendatangkan prospek berkualitas setiap hari. Strategi SEO dominasi halaman #1 Google dan iklan digital terarah yang dilacak hingga rupiah transaksi di WhatsApp.",
    fullDesc:
      "Banyak bisnis membakar anggaran iklan tanpa tahu berapa pasien atau klien yang benar-benar melakukan transaksi. Kami membangun pelacakan hulu-ke-hilir: setiap klik iklan dilacak hingga chat WhatsApp dan konversi riil di CRM bisnis Anda.",
    deliverables: [
      "Audit SEO teknis menyeluruh & optimasi Core Web Vitals",
      "Riset kata kunci niat beli tinggi (commercial intent keywords)",
      "Setup kampanye iklan Google Search, PMax, & Meta Ads",
      "Integrasi Conversion API & pelacakan chat WhatsApp ke CRM",
      "Dashboard laporan ROAS & biaya per prospek realtime",
    ],
    techStack: ["Google Ads PMax", "Meta Conversion API", "Google Search Console", "Looker Studio"],
  },
];

export function Services() {
  const { openConsult } = useConsult();
  const [selectedService, setSelectedService] = useState<PillarItem | null>(null);
  const [shake, setShake] = useState(false);

  useLockBody(Boolean(selectedService));
  useEscape(Boolean(selectedService), () => setSelectedService(null));

  const triggerShake = () => {
    setShake(true);
    setTimeout(() => setShake(false), 450);
  };

  return (
    <section id="layanan" className="relative py-20 sm:py-28 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200/80 px-4 py-1 text-xs font-semibold text-blue-700 mb-4"
          >
            <Boxes className="h-3.5 w-3.5" />
            <span>Ekosistem Hulu ke Hilir</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900"
          >
            Layanan Terintegrasi Tatanala
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto"
          >
            Klik kartu di bawah untuk melihat rincian alur arsitektur, deliverables, dan teknologi pendukungnya melalui animasi morphing.
          </motion.p>
        </div>

        {/* 3 Pillars Cards with layoutId morphing */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PILLARS_DATA.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <motion.div
                key={srv.id}
                layoutId={`service-card-${srv.id}`}
                onClick={() => setSelectedService(srv)}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className={`group relative rounded-[2.25rem] border p-8 flex flex-col justify-between transition-all duration-300 cursor-pointer ${
                  srv.highlighted
                    ? "border-blue-600/30 bg-blue-50/25 shadow-[0_20px_50px_rgba(37,99,235,0.08)] ring-1 ring-blue-500/20"
                    : "border-slate-200/90 bg-[#F8FAFC] hover:bg-white hover:border-blue-300 hover:shadow-2xl"
                }`}
              >
                <div>
                  {/* Top Bar Pill */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                      {srv.pillar}
                    </span>
                    <span className="text-xs sm:text-[13px] font-semibold text-slate-600">
                      {srv.badge}
                    </span>
                  </div>

                  {/* Icon Badge */}
                  <motion.div
                    layoutId={`service-icon-${srv.id}`}
                    className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100/80 border border-blue-200 text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-xs"
                  >
                    <Icon className="h-8 w-8" />
                  </motion.div>

                  {/* Title & Description with layoutId */}
                  <motion.h3
                    layoutId={`service-title-${srv.id}`}
                    className="text-xl font-bold text-slate-900 tracking-tight leading-snug"
                  >
                    {srv.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`service-desc-${srv.id}`}
                    className="mt-3 text-sm leading-relaxed text-slate-600"
                  >
                    {srv.shortDesc}
                  </motion.p>

                  {/* Key Metric Strip */}
                  <div className="mt-5 rounded-2xl bg-white border border-slate-200/70 p-3.5 flex items-center justify-between shadow-2xs">
                    <div>
                      <p className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
                        {srv.metricLabel}
                      </p>
                      <p className="text-base font-bold text-slate-900 mt-0.5">
                        {srv.metric}
                      </p>
                    </div>
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  </div>

                  {/* Deliverables Checklist Preview */}
                  <ul className="mt-6 space-y-3 pt-6 border-t border-slate-200/80">
                    {srv.deliverables.slice(0, 3).map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm font-medium text-slate-800 leading-snug">
                        <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA: Click to Expand Morphing */}
                <div className="mt-8 pt-4">
                  <div className="w-full flex items-center justify-center gap-2 rounded-full bg-slate-900 group-hover:bg-blue-600 text-white py-3.5 text-sm font-bold transition-colors duration-200 shadow-sm">
                    <span>Buka Rincian &amp; Arsitektur</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Morphing Modal Expansion */}
        <AnimatePresence>
          {selectedService && (
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
                layoutId={`service-card-${selectedService.id}`}
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
                {/* Close Button - Sticky at top right so it's always visible while scrolling */}
                <div className="sticky top-0 z-30 flex justify-end -mt-2 -mr-2 pointer-events-none pb-2">
                  <button
                    type="button"
                    onClick={() => setSelectedService(null)}
                    aria-label="Tutup Detail (Esc)"
                    className="pointer-events-auto grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white/95 hover:bg-slate-100 text-slate-700 transition-colors shadow-md backdrop-blur-md"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Header Info */}
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    layoutId={`service-icon-${selectedService.id}`}
                    className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                  >
                    <selectedService.icon className="h-8 w-8" />
                  </motion.div>
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                      {selectedService.pillar} &bull; {selectedService.badge}
                    </span>
                    <motion.h3
                      layoutId={`service-title-${selectedService.id}`}
                      className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight"
                    >
                      {selectedService.title}
                    </motion.h3>
                  </div>
                </div>

                {/* Short and Full Description */}
                <motion.p
                  layoutId={`service-desc-${selectedService.id}`}
                  className="text-base sm:text-lg text-slate-700 leading-relaxed"
                >
                  {selectedService.shortDesc}
                </motion.p>

                <p className="mt-4 text-base text-slate-700 leading-relaxed bg-slate-50 border border-slate-200/80 rounded-2xl p-5">
                  {selectedService.fullDesc}
                </p>

                {/* Deliverables in Full */}
                <div className="mt-8">
                  <h4 className="text-base font-bold uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-blue-600" />
                    Deliverables &amp; Output Nyata:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {selectedService.deliverables.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 text-sm font-medium text-slate-800 shadow-2xs leading-snug"
                      >
                        <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Chips */}
                <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm font-bold text-slate-700 mr-1 flex items-center gap-1.5">
                      <Cpu className="h-4 w-4 text-blue-600" /> Teknologi:
                    </span>
                    {selectedService.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-slate-100 border border-slate-200/80 px-3.5 py-1.5 font-mono text-xs font-semibold text-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Direct Consult Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    onClick={() => {
                      const id = selectedService.id;
                      setSelectedService(null);
                      openConsult(id);
                    }}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 text-sm sm:text-base font-bold shadow-lg shadow-blue-500/25 transition-all"
                  >
                    <span>Konsultasi Solusi Ini di WhatsApp</span>
                    <ArrowRight className="h-4 w-4" />
                  </motion.button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* Smooth Shape Divider transitioning to #F8FAFC */}
      <ShapeDivider
        variant="curve"
        position="bottom"
        nextBgColor="#F8FAFC"
        secondaryColor="rgba(37, 99, 235, 0.04)"
      />
    </section>
  );
}
