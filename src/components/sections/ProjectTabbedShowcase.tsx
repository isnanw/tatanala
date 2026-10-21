"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Building2, 
  Layers, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  ExternalLink,
  Laptop,
  Database,
  BarChart3,
  Server
} from "lucide-react";
import Image from "next/image";
import { useConsult } from "@/components/consult/ConsultProvider";

const PROJECTS = [
  {
    id: "faskes-antrean",
    tabLabel: "Klinik & Faskes",
    category: "Layanan Antrean & Rekam Medis",
    title: "Sistem Antrean Realtime & Rekam Medis Terpadu",
    client: "Fasilitas Kesehatan Rawat Inap & Jalan",
    description: "Digitalisasi menyeluruh antrean pasien dengan kuota per dokter secara realtime, notifikasi status panggilan via WhatsApp, dan modul pencatatan rekam medis terenkripsi yang memangkas waktu tunggu hingga 68%.",
    impact: [
      "Waktu tunggu pasien terpangkas 68%",
      "Zero-patient loss dengan tracking kuota online",
      "Kepatuhan standar enkripsi data rekam medis",
    ],
    techStack: ["Next.js", "PostgreSQL", "Socket.io", "WhatsApp Engine", "Docker"],
    image: "/images/healthcare_it_project_1792301927027.jpg",
  },
  {
    id: "logistik-erp",
    tabLabel: "Logistik & Pergudangan",
    category: "Sistem Informasi Multi-Cabang",
    title: "ERP Operasional Gudang & Distribusi Multi-Cabang",
    client: "Perusahaan Logistik & Distributor Regional",
    description: "Sistem terpusat pelacakan stok opname realtime, integrasi barcode scanner gudang, serta rekonsiliasi faktur keluar-masuk otomatis yang mengeliminasi selisih inventaris barang antar-gudang.",
    impact: [
      "Selisih stok gudang berkurang hingga 0.02%",
      "Laporan mutasi barang otomatis tiap penutupan shift",
      "Hak akses bertingkat aman untuk staf & manajer",
    ],
    techStack: ["TypeScript", "Node.js", "Redis Cache", "PostgreSQL", "Cloud VPS"],
    image: "/images/cloud_infra_opt_1792301866809.jpg",
  },
  {
    id: "tender-portal",
    tabLabel: "Pemerintahan & LPSE",
    category: "Portal Publik & Kredibilitas",
    title: "Portal Kelembagaan Resmi Siap Verifikasi Tender",
    client: "Instansi Pelayanan Publik & Rekanan BUMN",
    description: "Portal berstandar Web2 yang memenuhi seluruh instrumen kurasi kelayakan LPSE, kepatuhan PPID keterbukaan informasi publik, arsitektur audit-ready, serta keamanan SSL bersertifikat.",
    impact: [
      "100% kelolosan verifikasi teknis kurasi LPSE",
      "Core Web Vitals Skor 98/100 pada Google PageSpeed",
      "Waktu respons query & unduhan dokumen < 400ms",
    ],
    techStack: ["Next.js App Router", "Tailwind CSS", "Vercel Enterprise", "Cloudflare"],
    image: "/images/network_security_laptop_1792301886644.jpg",
  },
  {
    id: "hris-geofence",
    tabLabel: "Korporasi & HRIS",
    category: "Tata Kelola SDM & Payroll",
    title: "Sistem Presensi Geofencing & Penggajian Terpadu",
    client: "Korporasi Manufaktur & Jasa Multi-Cabang",
    description: "Aplikasi mobile presensi berbasis GPS radius ketat (anti-fake GPS) dengan modul pengajuan cuti, lembur, dan kompilasi penggajian otomatis yang terhubung langsung ke pembukuan keuangan.",
    impact: [
      "Eliminasi 100% manipulasi jam hadir karyawan",
      "Perhitungan payroll bulanan selesai dalam hitungan menit",
      "Audit trail log kehadiran terenkripsi tanpa celah",
    ],
    techStack: ["Flutter Mobile", "PostgreSQL", "REST API", "Geofence Engine"],
    image: "/images/server-audit.jpg",
  },
];

export function ProjectTabbedShowcase() {
  const [activeTab, setActiveTab] = useState(PROJECTS[0].id);
  const { openConsult } = useConsult();

  const currentProject = PROJECTS.find((p) => p.id === activeTab) || PROJECTS[0];

  return (
    <section id="portofolio-showcase" className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200/80 px-4 py-1.5 rounded-full">
            Studi Kasus &amp; Portofolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mt-3">
            Solusi Nyata dari Berbagai Proyek
          </h2>
          <p className="mt-4 text-slate-700 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Pelajari bagaimana implementasi arsitektur perangkat lunak Tatanala menyelesaikan masalah konkret pada berbagai skala sektor bisnis dan institusi.
          </p>
        </div>

        {/* Tab Pills Selection */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {PROJECTS.map((project) => {
            const isActive = activeTab === project.id;
            return (
              <button
                key={project.id}
                type="button"
                onClick={() => setActiveTab(project.id)}
                className={`px-5 py-2.5 rounded-full text-sm sm:text-base font-bold transition-all cursor-pointer ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-102"
                    : "bg-white text-slate-700 border border-slate-200 hover:border-blue-300 hover:text-blue-600 shadow-2xs"
                }`}
              >
                {project.tabLabel}
              </button>
            );
          })}
        </div>

        {/* Tab Content Card Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProject.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl bg-white border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-10 lg:p-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Project Desktop Mockup / Architecture Image */}
              <div className="lg:col-span-6 relative">
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-slate-900 group">
                  <Image
                    src={currentProject.image}
                    alt={currentProject.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/90 text-white text-xs font-mono px-3 py-1.5 rounded-md border border-slate-700">
                    Live System // Production
                  </div>
                </div>

                {/* Tech Badges */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {currentProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-mono font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Case Details & Metric Impact */}
              <div className="lg:col-span-6 text-left">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200/80 px-3.5 py-1.5 rounded-full">
                  {currentProject.category}
                </span>

                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-3">
                  {currentProject.title}
                </h3>

                <p className="text-sm font-semibold text-slate-600 mt-1.5">
                  Klien: {currentProject.client}
                </p>

                <p className="mt-4 text-slate-700 text-base sm:text-lg leading-relaxed">
                  {currentProject.description}
                </p>

                {/* Impact Points */}
                <div className="mt-6 space-y-3 pt-5 border-t border-slate-100">
                  <p className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-blue-600">
                    Dampak Terukur Proyek:
                  </p>
                  {currentProject.impact.map((imp) => (
                    <div key={imp} className="flex items-center gap-3 text-sm sm:text-base font-semibold text-slate-800">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>{imp}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-8 flex items-center gap-4">
                  <button
                    type="button"
                    onClick={() => openConsult(`proyek-${currentProject.id}`)}
                    className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-6 py-3.5 text-sm sm:text-base font-bold shadow-md shadow-blue-500/25 transition-all cursor-pointer"
                  >
                    <span>Konsultasi Implementasi Serupa</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>

              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
