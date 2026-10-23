"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  CheckCircle2, 
  Wallet,
  Cpu,
  LayoutTemplate,
  Landmark,
  ShoppingBag,
  Maximize2,
  X,
  Lock,
  ShieldCheck,
  Building2,
  Sparkles
} from "lucide-react";
import Image from "next/image";
import { useConsult } from "@/components/consult/ConsultProvider";
import { useEscape, useLockBody } from "@/lib/hooks";
import { ShapeDivider } from "@/components/ui/ShapeDivider";
import { localize, useLanguage } from "@/components/providers/LanguageProvider";

interface ProjectItem {
  id: string;
  tabLabel: string;
  category: string;
  client: string;
  systemName: string;
  title: string;
  description: string;
  highlights: {
    title: string;
    desc: string;
  }[];
  capabilities: string[];
  image: string;
  icon: typeof Wallet;
}

const PROJECTS: ProjectItem[] = [
  {
    id: "pettycash",
    tabLabel: "Petty Cash RS",
    category: "Keuangan & SIMRS",
    client: "RS Provita Jayapura",
    systemName: "SIMRS Provita — Sub-Modul Petty Cash",
    title: "Sistem Informasi Kas Kecil Rumah Sakit Terintegrasi",
    description: "Sub-modul keuangan terintegrasi dalam arsitektur SIMRS RS Provita Jayapura. Mencatat, mengotorisasi, dan merekonsiliasi pengeluaran operasional harian secara akuntabel, transparan, dan terproteksi penuh di jaringan intranet tertutup rumah sakit.",
    highlights: [
      {
        title: "Rekonsiliasi Otomatis",
        desc: "Sinkronisasi saldo pembukuan harian bebas selisih kalkulasi kas operasional.",
      },
      {
        title: "Approval Digital Bertingkat",
        desc: "Otorisasi nota berjenjang antar-staf hingga manajer keuangan secara akuntabel.",
      },
      {
        title: "Isolasi Jaringan Intranet",
        desc: "Data transaksi finansial terisolasi aman dari jaringan internet publik luar.",
      },
    ],
    capabilities: [
      "Sub-modul SIMRS",
      "Audit Trail Keuangan",
      "Approval Bertingkat",
      "Intranet Tertutup",
    ],
    image: "/images/projects/pettycash.png",
    icon: Wallet,
  },
  {
    id: "recehku",
    tabLabel: "Recehku Finansial AI",
    category: "Fintek & Pipeline AI",
    client: "Platform Finansial Mandiri",
    systemName: "Recehku Financial Web Application",
    title: "Aplikasi Manajemen Finansial Reaktif & Pipeline AI",
    description: "Platform web finansial yang memadukan antarmuka reaktif dengan pipeline pemrosesan AI. Memproses pencatatan transaksi harian, mengotomasi kategorisasi pos pengeluaran berbasis AI, serta menyajikan proyeksi anggaran bulanan secara presisi melalui REST API teroptimasi.",
    highlights: [
      {
        title: "Kategorisasi AI Otomatis",
        desc: "Klasifikasi pos transaksi instan dan cerdas tanpa entri kategori manual berulang.",
      },
      {
        title: "Proyeksi Anggaran Bulanan",
        desc: "Kalkulasi prediksi arus kas masa depan berdasarkan tren pengeluaran historis.",
      },
      {
        title: "REST API Reaktif Cepat",
        desc: "Respon antarmuka gesit dengan sinkronisasi data real-time antar-perangkat.",
      },
    ],
    capabilities: [
      "Pipeline AI Otomatis",
      "REST API Teroptimasi",
      "UI Reaktif",
      "Proyeksi Anggaran",
    ],
    image: "/images/projects/recehku.png",
    icon: Cpu,
  },
  {
    id: "compro",
    tabLabel: "Company Profile CMS",
    category: "CMS Korporasi & Modular",
    client: "Korporasi & Bisnis Mitra",
    systemName: "Corporate Dynamic CMS & Modular Portal",
    title: "CMS Perusahaan Full Dinamis & Page Builder Modular",
    description: "Sistem manajemen konten portal perusahaan yang dirancang full dinamis. Dilengkapi blok komponen visual modular sehingga halaman profil korporasi tampil variatif, profesional, fleksibel diperbarui mandiri, dan tidak monoton dalam satu format kaku.",
    highlights: [
      {
        title: "Komponen Dinamis Non-Monoton",
        desc: "Penyusunan tata letak variatif dan dinamis tanpa format kaku yang membosankan.",
      },
      {
        title: "Manajemen Konten Mandiri",
        desc: "Pembaruan teks, profil, dan portofolio mandiri tanpa ketergantungan koding.",
      },
      {
        title: "Kecepatan Muat & SEO Optimal",
        desc: "Struktur rendering cepat dan teroptimasi penuh untuk mesin pencari.",
      },
    ],
    capabilities: [
      "CMS Full Dinamis",
      "Modular Page Builder",
      "Format Non-Monoton",
      "SEO Ready",
    ],
    image: "/images/projects/compro.png",
    icon: LayoutTemplate,
  },
  {
    id: "lapor",
    tabLabel: "Situs LAPOR",
    category: "Pemerintahan & Publik",
    client: "Instansi Pemerintahan",
    systemName: "Sistem Informasi Publik & Aduan LAPOR",
    title: "Portal Pengaduan & Aspirasi Publik Terintegrasi",
    description: "Portal kelembagaan resmi pengelolaan aspirasi dan pengaduan masyarakat. Dibangun dengan standar kepatuhan informasi publik, pelacakan tiket aduan transparan, verifikasi berkas terstruktur, serta alur disposisi penanganan terpadu antar-dinas teknis.",
    highlights: [
      {
        title: "Pelacakan Tiket Transparan",
        desc: "Masyarakat dan petugas memantau progres disposisi aduan secara akuntabel.",
      },
      {
        title: "Disposisi Antar-Dinas Terpadu",
        desc: "Penerusan tiket otomatis ke satuan kerja teknis terkait secara terdokumentasi.",
      },
      {
        title: "Standar Tata Kelola Publik",
        desc: "Kepatuhan penuh terhadap regulasi keterbukaan informasi dan pelayanan prima.",
      },
    ],
    capabilities: [
      "Tracking Tiket Aduan",
      "Disposisi Antar-Dinas",
      "Verifikasi Berkas",
      "Tata Kelola Publik",
    ],
    image: "/images/projects/lapor.png",
    icon: Landmark,
  },
  {
    id: "flower",
    tabLabel: "Florist E-Commerce",
    category: "E-Commerce & Retail",
    client: "Luxury Florist & Retail",
    systemName: "Luxury Florist E-Commerce Platform",
    title: "Platform E-Commerce Modern & Katalog Interaktif Florist",
    description: "Platform e-commerce modern untuk florist mewah dengan katalog produk interaktif. Dilengkapi sistem taksonomi botani dinamis, drawer keranjang belanja instan tanpa reload halaman, flash deal countdown, serta validasi formulir checkout responsif.",
    highlights: [
      {
        title: "Instant Cart Drawer",
        desc: "Interaksi belanja mulus tanpa reload halaman untuk konversi pemesanan maksimal.",
      },
      {
        title: "Taksonomi Botani Dinamis",
        desc: "Navigasi katalog cerdas berbasis jenis bunga, warna, dan perayaan spesial.",
      },
      {
        title: "Checkout Cepat & Responsif",
        desc: "Validasi data penerima dan jam kirim instan yang mempercepat transaksi.",
      },
    ],
    capabilities: [
      "Instant Cart Drawer",
      "Taksonomi Botani",
      "Flash Deal Interaktif",
      "Optimasi Konversi",
    ],
    image: "/images/projects/flower.png",
    icon: ShoppingBag,
  },
];

export function ProjectTabbedShowcase() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState(PROJECTS[0].id);
  const [lightboxImage, setLightboxImage] = useState<ProjectItem | null>(null);
  const { openConsult } = useConsult();

  useLockBody(Boolean(lightboxImage));
  useEscape(Boolean(lightboxImage), () => setLightboxImage(null));

  const currentProject = PROJECTS.find((p) => p.id === activeTab) || PROJECTS[0];

  return (
    <section 
      id="portofolio-showcase" 
      className="relative scroll-mt-24 pt-14 sm:pt-20 pb-20 sm:pb-28 bg-white overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-7 sm:mb-9 transform-gpu"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200/80 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-blue-800 mb-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            <span>{localize("Studi Kasus & Portofolio", language)}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F172A] tracking-tight leading-tight">
            {localize("Solusi Rekayasa Software Teruji di Lapangan", language)}
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            {localize("Implementasi nyata yang kami rancang untuk memecahkan hambatan operasional, keuangan, dan tata kelola digital klien secara presisi.", language)}
          </p>
        </motion.div>

        {/* Executive Segmented Navigation Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 15, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="flex justify-center mb-8 transform-gpu"
        >
          <div className="bg-slate-200/80 p-1 rounded-2xl border border-slate-200 inline-flex flex-wrap items-center justify-center gap-1 shadow-2xs">
            {PROJECTS.map((project) => {
              const isActive = activeTab === project.id;
              const Icon = project.icon;
              return (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => setActiveTab(project.id)}
                  className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-[13px] font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? "bg-white text-slate-900 shadow-sm border border-slate-200/80"
                      : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
                  }`}
                >
                  <Icon className={`h-4 w-4 ${isActive ? "text-blue-600" : "text-slate-400"}`} />
                  <span>{localize(project.tabLabel, language)}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  )}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Floating Spotlight Canvas Container */}
        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="transform-gpu"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-slate-900/5 overflow-hidden"
            >
            {/* Mac Window Chrome Header */}
            <div className="h-11 px-4 sm:px-6 bg-slate-100/90 border-b border-slate-200/80 flex items-center justify-between relative z-20">
              {/* Traffic Light Dots */}
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
              </div>

              {/* System Name Address Bar */}
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-slate-200/90 text-[11px] font-semibold text-slate-700 shadow-2xs max-w-[260px] sm:max-w-md truncate">
                <Lock className="w-3 h-3 text-emerald-600 shrink-0" />
                <span className="truncate">{localize(currentProject.systemName, language)}</span>
              </div>

              {/* Verified Badge */}
              <div className="hidden sm:flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-emerald-50 border border-emerald-200/80 text-[11px] font-semibold text-emerald-700">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>{localize("Terverifikasi", language)}</span>
              </div>
            </div>

            {/* Canvas Stage: Full Width Edge-to-Edge Screenshot + Floating Detail Card */}
            <div className="relative min-h-[460px] sm:min-h-[540px] lg:min-h-[580px] bg-slate-50 flex flex-col lg:block overflow-hidden">
              
              {/* Edge-to-Edge Screenshot Canvas Viewport (Zero Letterbox / Zero Black Gap) */}
              <div 
                onClick={() => setLightboxImage(currentProject)}
                className="group relative w-full h-[320px] sm:h-[420px] lg:absolute lg:inset-0 lg:h-full cursor-zoom-in bg-white"
              >
                <Image
                  src={currentProject.image}
                  alt={localize(currentProject.title, language)}
                  fill
                  sizes="(max-width: 1024px) 100vw, 1280px"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.01]"
                  priority
                />
                
                {/* Floating Top-Left Zoom Indicator Pill */}
                <div className="absolute top-4 left-4 z-10 pointer-events-none">
                  <div className="bg-[#0F172A]/85 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-md flex items-center gap-2 backdrop-blur-xs border border-slate-700/60">
                    <Maximize2 className="w-3.5 h-3.5 text-blue-400" />
                    <span>{localize("Klik gambar untuk perbesar", language)}</span>
                  </div>
                </div>
              </div>

              {/* Floating Story & Metrics Card (Overlay on Right Side on Desktop) */}
              <div className="p-4 sm:p-6 lg:p-0 lg:absolute lg:top-5 lg:right-5 lg:bottom-5 lg:w-[440px] xl:w-[480px] z-20 pointer-events-auto">
                <div className="h-full bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/90 shadow-2xl p-5 sm:p-6 flex flex-col justify-between">
                  
                  <div>
                    {/* Category Pill & Client Header */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200/80 px-3 py-0.5 rounded-full">
                        {localize(currentProject.category, language)}
                      </span>
                      <span className="text-xs font-semibold text-slate-600 flex items-center gap-1">
                        <Building2 className="w-3.5 h-3.5 text-slate-400" />
                        <span className="truncate max-w-[180px]">{localize(currentProject.client, language)}</span>
                      </span>
                    </div>

                    {/* Project Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] tracking-tight leading-snug mt-1.5">
                      {localize(currentProject.title, language)}
                    </h3>

                    {/* Editorial Description */}
                    <p className="mt-2 text-slate-600 text-xs sm:text-[13px] leading-relaxed line-clamp-3">
                      {localize(currentProject.description, language)}
                    </p>

                    {/* Value Highlights */}
                    <div className="mt-4 pt-3.5 border-t border-slate-100">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-800 mb-2">
                        {localize("Dampak & Keunggulan Operasional:", language)}
                      </p>
                      <div className="space-y-1.5">
                        {currentProject.highlights.map((item, idx) => (
                          <div 
                            key={idx}
                            className="p-2 sm:p-2.5 rounded-xl bg-slate-50/90 hover:bg-blue-50/40 border border-slate-200/70 transition-colors flex items-start gap-2.5"
                          >
                            <div className="h-5 w-5 rounded-md bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                              <CheckCircle2 className="h-3.5 w-3.5" />
                            </div>
                            <div>
                              <h4 className="text-xs font-bold text-slate-900 leading-snug">
                                {localize(item.title, language)}
                              </h4>
                              <p className="text-[11.5px] text-slate-600 mt-0.5 leading-relaxed">
                                {localize(item.desc, language)}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Architecture Tags Strip */}
                    <div className="mt-3.5 pt-3 border-t border-slate-100 flex flex-wrap items-center gap-1.5">
                      {currentProject.capabilities.map((cap) => (
                        <span
                          key={cap}
                          className="px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200/80 text-slate-700 text-[11px] font-medium"
                        >
                          {localize(cap, language)}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => openConsult(`proyek-${currentProject.id}`)}
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 text-xs sm:text-sm font-bold shadow-sm transition-all cursor-pointer"
                    >
                      <span>{localize("Konsultasi Proyek", language)}</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>

                    <button
                      type="button"
                      onClick={() => setLightboxImage(currentProject)}
                      className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 px-3 py-2.5 text-xs sm:text-sm font-semibold transition-all cursor-pointer border border-slate-200 shadow-2xs"
                    >
                      <Maximize2 className="h-4 w-4 text-slate-500" />
                      <span>{localize("Perbesar", language)}</span>
                    </button>
                  </div>

                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>
        </motion.div>

      </div>

      {/* Lightbox Modal for High-Resolution Screenshot Inspection */}
      <AnimatePresence>
        {lightboxImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-slate-950/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-5xl bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-200 bg-slate-50">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      {localize(lightboxImage.title, language)}
                    </h4>
                    <p className="text-xs text-slate-500">
                      {localize(lightboxImage.client, language)} &bull; {localize(lightboxImage.category, language)}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setLightboxImage(null)}
                  aria-label={localize("Tutup", language)}
                  className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body - Full High-Res Screenshot */}
              <div className="relative flex-1 min-h-[350px] sm:min-h-[500px] bg-slate-100/60 p-4 overflow-auto flex items-center justify-center">
                <div className="relative w-full h-[65vh] bg-white rounded-xl border border-slate-200/80 shadow-sm overflow-hidden">
                  <Image
                    src={lightboxImage.image}
                    alt={localize(lightboxImage.title, language)}
                    fill
                    className="object-contain p-2"
                    sizes="1200px"
                  />
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3.5 border-t border-slate-200 bg-slate-50">
                <div className="flex flex-wrap items-center gap-1.5">
                  {lightboxImage.capabilities.map((cap) => (
                    <span
                      key={cap}
                      className="px-2.5 py-1 rounded bg-white border border-slate-200 text-slate-700 text-xs font-medium shadow-2xs"
                    >
                      {localize(cap, language)}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => {
                    const id = lightboxImage.id;
                    setLightboxImage(null);
                    openConsult(`proyek-${id}`);
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  <span>{localize("Konsultasi Proyek Ini", language)}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Modern Dynamic Slant Divider transitioning into #F8FAFC */}
      <ShapeDivider
        variant="slant"
        position="bottom"
        nextBgColor="#F8FAFC"
        secondaryColor="rgba(37, 99, 235, 0.04)"
      />
    </section>
  );
}
