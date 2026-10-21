"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { useConsult } from "@/components/consult/ConsultProvider";

export function ThreePillarSolutions() {
  const { openConsult } = useConsult();

  return (
    <section id="solusi" className="relative pt-3 sm:pt-4 pb-8 sm:pb-10 bg-[#F8FAFC] border-b border-slate-200/80 overflow-hidden">
      {/* Subtle ambient lighting */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-blue-200/20 via-amber-100/15 to-transparent blur-3xl rounded-full" 
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Refined Executive Typography (Soft, Prestigious & Comfortable) */}
        <div className="text-center max-w-3xl mx-auto mb-5 sm:mb-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50/90 border border-blue-200/80 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-blue-800 mb-2.5 shadow-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            <span>Pilar Solusi Terintegrasi</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-bold tracking-tight text-[#0F172A] leading-tight">
            Solusi Rekayasa Software yang{" "}
            <span className="text-blue-600">
              Menjawab Kebutuhan Nyata
            </span>{" "}
            Bisnis Anda
          </h2>

          <p className="mt-2 text-sm sm:text-[15px] text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Membantu bisnis Anda bertransformasi dari alur kerja manual yang lambat ke ekosistem sistem digital yang rapi, mudah digunakan oleh seluruh tim, dan siap menopang pertumbuhan skala besar.
          </p>
        </div>

        {/* 3-Tier Solution Card Grid - High Visual Harmony */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6 items-end max-w-6xl mx-auto">
          
          {/* ============================================================== */}
          {/* CARD 1: WEBSITE & PORTAL BISNIS (Left - Rich Terracotta)       */}
          {/* ============================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
            className="relative rounded-xl overflow-hidden border border-slate-200/90 bg-white shadow-md hover:shadow-2xl hover:border-[#C2562B]/50 transition-all duration-300 flex flex-col justify-between group cursor-default"
          >
            {/* Top Right Angled Corner Ribbon */}
            <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden pointer-events-none z-10">
              <div className="absolute top-4 -right-8 w-28 bg-[#1E293B] text-white text-[10px] font-bold text-center py-1 uppercase tracking-wider rotate-45 shadow-sm">
                PORTAL
              </div>
            </div>

            {/* Solid Colored Header Block with Crisp White Typography */}
            <div className="bg-[#C2562B] group-hover:bg-[#B34C24] transition-colors duration-300 text-white p-5 sm:p-6 text-center">
              <h3 className="text-lg sm:text-xl font-bold uppercase tracking-wider text-white">
                WEBSITE &amp; PORTAL
              </h3>
              <p className="text-xs sm:text-[13px] font-medium text-white/90 mt-1 tracking-normal">
                Kredibilitas &amp; Profil Klien
              </p>
            </div>

            {/* Alternating Striped Rows with Comfortable Contrast */}
            <div className="flex-1 flex flex-col text-slate-600 text-xs sm:text-[13px]">
              {/* Row 1: Intro Description */}
              <div className="py-3 px-4 text-center bg-white border-b border-slate-100 leading-relaxed font-normal text-slate-600">
                Profil usaha, legalitas, katalog layanan, dan galeri portofolio siap verifikasi tender.
              </div>

              {/* Row 2 */}
              <div className="py-2.5 px-4 text-center bg-slate-50/80 hover:bg-[#C2562B]/10 hover:text-slate-900 border-b border-slate-100 font-medium text-slate-700 transition-colors cursor-default">
                Tampilan Eksklusif, Cepat &amp; Mobile-Responsive
              </div>

              {/* Row 3 */}
              <div className="py-2.5 px-4 text-center bg-white hover:bg-[#C2562B]/10 hover:text-slate-900 border-b border-slate-100 font-medium text-slate-700 transition-colors cursor-default">
                Mudah Ditemukan Calon Klien di Google (SEO)
              </div>

              {/* Row 4 */}
              <div className="py-2.5 px-4 text-center bg-slate-50/80 hover:bg-[#C2562B]/10 hover:text-slate-900 border-b border-slate-100 font-medium text-slate-700 transition-colors cursor-default">
                Katalog Portofolio &amp; Legalitas Terstruktur
              </div>

              {/* Row 5 */}
              <div className="py-2.5 px-4 text-center bg-white hover:bg-[#C2562B]/10 hover:text-slate-900 border-b border-slate-100 font-medium text-slate-700 transition-colors cursor-default">
                Dapat Dikelola Mandiri Tanpa Koding
              </div>
            </div>

            {/* Bottom Button Action */}
            <div className="p-4 sm:p-5 bg-white flex justify-center border-t border-slate-50">
              <motion.button
                type="button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => openConsult("profil")}
                className="w-full sm:w-auto min-w-[180px] py-2.5 px-6 rounded-md bg-[#C2562B] hover:bg-[#A94720] text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md hover:shadow-[#C2562B]/30"
              >
                KONSULTASI
              </motion.button>
            </div>
          </motion.div>

          {/* ============================================================== */}
          {/* CARD 2: SISTEM OPERASIONAL (Center - Warm Ochre Gold)          */}
          {/* ============================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, transition: { duration: 0.25, ease: "easeOut" } }}
            className="relative rounded-xl overflow-hidden border-2 border-[#D9822B] bg-white shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between lg:-translate-y-2.5 z-10 group cursor-default"
          >
            {/* Top Right Angled Corner Ribbon */}
            <div className="absolute top-0 right-0 w-28 h-28 overflow-hidden pointer-events-none z-10">
              <div className="absolute top-5 -right-8 w-32 bg-[#4C1D95] text-white text-[10px] font-bold text-center py-1 uppercase tracking-wider rotate-45 shadow-md">
                CUSTOM
              </div>
            </div>

            {/* Solid Colored Header Block with Crisp White Typography */}
            <div className="bg-[#D9822B] group-hover:bg-[#C27324] transition-colors duration-300 text-white p-6 sm:p-7 text-center">
              <h3 className="text-lg sm:text-[1.4rem] font-bold uppercase tracking-wider text-white">
                SISTEM OPERASIONAL
              </h3>
              <p className="text-xs sm:text-[13px] font-medium text-white/95 mt-1 tracking-normal">
                Dibuat Khusus Sesuai SOP Anda
              </p>
            </div>

            {/* Alternating Striped Rows */}
            <div className="flex-1 flex flex-col text-slate-700 text-xs sm:text-[13px]">
              {/* Row 1: Intro Description */}
              <div className="py-3 px-4 text-center bg-white border-b border-slate-100 leading-relaxed font-medium text-slate-700">
                Dirancang khusus mengikuti alur kerja (SOP) nyata usaha Anda — dari tim internal hingga klien.
              </div>

              {/* Row 2 */}
              <div className="py-2.5 px-4 text-center bg-amber-50/50 hover:bg-amber-100/60 border-b border-slate-100 font-semibold text-slate-800 transition-colors cursor-default">
                Alur Kerja &amp; Database Sesuai SOP Usaha
              </div>

              {/* Row 3 (HRD Example) */}
              <div className="py-2.5 px-4 text-center bg-white hover:bg-amber-50/60 border-b border-slate-100 font-semibold text-slate-800 transition-colors cursor-default">
                <span className="text-[#B45309] font-bold">Contoh HRD:</span> Presensi GPS, Shift &amp; Payroll
              </div>

              {/* Row 4 (Booking Example) */}
              <div className="py-2.5 px-4 text-center bg-amber-50/50 hover:bg-amber-100/60 border-b border-slate-100 font-semibold text-slate-800 transition-colors cursor-default">
                <span className="text-[#B45309] font-bold">Contoh Booking:</span> Reservasi 24/7 &amp; Antrean Realtime
              </div>

              {/* Row 5 */}
              <div className="py-2.5 px-4 text-center bg-white hover:bg-amber-50/60 border-b border-slate-100 font-semibold text-slate-800 transition-colors cursor-default">
                Otomasi Notifikasi WA &amp; Hak Akses Staf
              </div>
            </div>

            {/* Bottom Button Action */}
            <div className="p-4 sm:p-5 bg-white flex justify-center border-t border-slate-50">
              <motion.button
                type="button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => openConsult("sistem")}
                className="w-full sm:w-auto min-w-[180px] py-2.5 px-6 rounded-md bg-[#D9822B] hover:bg-[#C27324] text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md hover:shadow-[#D9822B]/30"
              >
                KONSULTASI
              </motion.button>
            </div>
          </motion.div>

          {/* ============================================================== */}
          {/* CARD 3: DASHBOARD & LAPORAN (Right - Modern Royal Blue)        */}
          {/* ============================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
            className="relative rounded-xl overflow-hidden border border-slate-200/90 bg-white shadow-md hover:shadow-2xl hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between group cursor-default"
          >
            {/* Top Right Angled Corner Ribbon */}
            <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden pointer-events-none z-10">
              <div className="absolute top-4 -right-8 w-28 bg-[#991B1B] text-white text-[10px] font-bold text-center py-1 uppercase tracking-wider rotate-45 shadow-sm">
                REALTIME
              </div>
            </div>

            {/* Solid Colored Header Block with Crisp White Typography */}
            <div className="bg-[#2563EB] group-hover:bg-[#1D4ED8] transition-colors duration-300 text-white p-5 sm:p-6 text-center">
              <h3 className="text-lg sm:text-xl font-bold uppercase tracking-wider text-white">
                DASHBOARD &amp; LAPORAN
              </h3>
              <p className="text-xs sm:text-[13px] font-medium text-white/90 mt-1 tracking-normal">
                Visibilitas &amp; Analitik Otomatis
              </p>
            </div>

            {/* Alternating Striped Rows */}
            <div className="flex-1 flex flex-col text-slate-600 text-xs sm:text-[13px]">
              {/* Row 1: Intro Description */}
              <div className="py-3 px-4 text-center bg-white border-b border-slate-100 leading-relaxed font-normal text-slate-600">
                Pantau omzet, biaya, kehadiran tim, dan performa operasional dalam satu layar tanpa rekap manual.
              </div>

              {/* Row 2 */}
              <div className="py-2.5 px-4 text-center bg-slate-50/80 hover:bg-blue-50 hover:text-slate-900 border-b border-slate-100 font-medium text-slate-700 transition-colors cursor-default">
                Rekap Pendapatan &amp; Biaya Operasional Otomatis
              </div>

              {/* Row 3 */}
              <div className="py-2.5 px-4 text-center bg-white hover:bg-blue-50 hover:text-slate-900 border-b border-slate-100 font-medium text-slate-700 transition-colors cursor-default">
                Pantau Jam Kerja &amp; Produktivitas Tim Terpadu
              </div>

              {/* Row 4 */}
              <div className="py-2.5 px-4 text-center bg-slate-50/80 hover:bg-blue-50 hover:text-slate-900 border-b border-slate-100 font-medium text-slate-700 transition-colors cursor-default">
                Riwayat Transaksi Jelas &amp; Bebas Selisih
              </div>

              {/* Row 5 */}
              <div className="py-2.5 px-4 text-center bg-white hover:bg-blue-50 hover:text-slate-900 border-b border-slate-100 font-medium text-slate-700 transition-colors cursor-default">
                Ekspor Laporan ke Excel &amp; PDF Sekali Klik
              </div>
            </div>

            {/* Bottom Button Action */}
            <div className="p-4 sm:p-5 bg-white flex justify-center border-t border-slate-50">
              <motion.button
                type="button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => openConsult("sistem")}
                className="w-full sm:w-auto min-w-[180px] py-2.5 px-6 rounded-md bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md hover:shadow-blue-500/30"
              >
                KONSULTASI
              </motion.button>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}



