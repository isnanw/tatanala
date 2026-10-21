"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Building2, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  ShieldCheck, 
  CheckCircle2, 
  FileCheck2,
  Lock,
  Headphones,
  Calendar,
  MessageSquare,
  HelpCircle,
  ExternalLink
} from "lucide-react";
import Image from "next/image";
import { SITE } from "@/data/content";

export function ContactHero() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    org: "",
    role: "",
    phone: "",
    email: "",
    type: "sistem-informasi-erp",
    budgetRange: "standar-proyek",
    timeline: "1-3-bulan",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24 bg-[#F8FAFC]">
      {/* Background Architectural Grid Lines */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 select-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(37, 99, 235, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(37, 99, 235, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 90% 65% at 50% 30%, #000 40%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Eyebrow & Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200/90 px-4 py-1 text-xs font-bold uppercase tracking-wider text-blue-700 mb-4"
          >
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Pusat Konsultasi Resmi &amp; Penjadwalan Audit SRS</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 leading-tight"
          >
            Mulai Konsultasi Arsitektur Digital &amp;{" "}
            <span className="text-blue-600">Draf Kontrak Resmi</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto"
          >
            Sampaikan permasalahan alur data, integrasi sistem, atau pengadaan proyek kelembagaan Anda. Insinyur senior kami menyusun telaah kebutuhan sistem (SRS) dalam 1x24 jam kerja.
          </motion.p>
        </div>

        {/* 2-Column Corporate Grid: Left Contact Info, Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column (5 Cols): Office Credentials & Immediate Hotline */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Headquarters Card */}
            <div className="rounded-3xl bg-white border border-slate-200/90 p-7 sm:p-8 shadow-sm">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">
                <Building2 className="h-4 w-4" />
                <span>Kantor Operasional &amp; Engineering Hub</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                Tatanala &bull; Studio Rekayasa Sistem Digital
              </h2>
              <p className="text-base text-slate-700 leading-relaxed font-normal">
                {SITE.address}
              </p>

              <div className="mt-6 pt-6 border-t border-slate-100 space-y-4 text-sm text-slate-700 font-medium">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-xl bg-blue-50 text-blue-600 grid place-items-center shrink-0">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-slate-500 block text-xs font-medium">Surel Korespondensi Resmi</span>
                    <a href={`mailto:${SITE.email}`} className="text-sm sm:text-base font-semibold text-slate-900 hover:text-blue-600">
                      {SITE.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-xl bg-emerald-50 text-emerald-600 grid place-items-center shrink-0">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-slate-500 block text-xs font-medium">WhatsApp &amp; Hotline Korporat</span>
                    <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base font-semibold text-slate-900 hover:text-emerald-600">
                      {SITE.whatsappDisplay} (Respon Cepat)
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-xl bg-slate-100 text-slate-600 grid place-items-center shrink-0">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-slate-500 block text-xs font-medium">Jam Operasional Kantor</span>
                    <span className="text-sm sm:text-base font-semibold text-slate-900">Senin &ndash; Jumat, 08:30 &ndash; 17:30 WIB</span>
                  </div>
                </div>
              </div>

              {/* Fast WhatsApp CTA Button */}
              <div className="mt-7">
                <a
                  href={`https://wa.me/${SITE.whatsapp}?text=Halo%20Tatanala,%20saya%20ingin%20konsultasi%20kebutuhan%20sistem`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm sm:text-base font-bold flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20 transition-all"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>Hubungi via WhatsApp Resmi</span>
                </a>
              </div>
            </div>

            {/* Legal Commitment & NDA Assurance */}
            <div className="rounded-3xl bg-slate-900 text-white p-7 sm:p-8 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider mb-2">
                  <Lock className="h-4 w-4" />
                  <span>Jaminan Kerahasiaan &amp; Legalitas</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Non-Disclosure Agreement (NDA)
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Seluruh data alur bisnis, dokumen keuangan, dan skema operasional yang Anda sampaikan terlindungi oleh kesepakatan kerahasiaan bermaterai. Kami tidak membagikan informasi Anda kepada pihak ketiga.
                </p>

                <div className="mt-5 space-y-2 text-xs text-slate-300 pt-4 border-t border-slate-800">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-blue-400 shrink-0" />
                    <span>Perjanjian Kontrak Kerja &amp; Surat Tugas Tertulis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-blue-400 shrink-0" />
                    <span>Perjanjian Kerahasiaan Data (NDA) Bermaterai</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-blue-400 shrink-0" />
                    <span>Keamanan Data &amp; Kontrol Akses Mandiri</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column (7 Cols): Comprehensive Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-10 shadow-xl shadow-slate-200/40">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="h-16 w-16 rounded-full bg-emerald-50 text-emerald-600 grid place-items-center mx-auto">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Permohonan Konsultasi Diterima</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Terima kasih telah mempercayai Tatanala. Insinyur sistem kami akan meninjau data kebutuhan Anda dan menghubungi Anda via WhatsApp/Surel dalam waktu 1x24 jam kerja.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      Kirim Permohonan Lain
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-slate-100 pb-4 mb-2">
                    <h3 className="text-lg font-bold text-slate-900">
                      Formulir Pengajuan Spesifikasi Kebutuhan Sistem (SRS)
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Lengkapi informasi di bawah ini untuk mempermudah arsitek kami menganalisis kompleksitas arsitektur Anda.
                    </p>
                  </div>

                  {/* Name & Organization */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        Nama Lengkap <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: Hendra Wijaya, S.T."
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        Nama Lembaga / Perusahaan <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: PT Sinergi Abadi / Dinas PPID"
                        value={form.org}
                        onChange={(e) => setForm({ ...form, org: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        Nomor WhatsApp Aktif <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="0812-XXXX-XXXX"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-800 mb-1.5">
                        Alamat Surel (Email Bisnis) <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="nama@perusahaan.co.id"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all"
                      />
                    </div>
                  </div>

                  {/* Service Pillar Selection */}
                  <div>
                    <label className="block text-sm font-bold text-slate-800 mb-1.5">
                      Kategori Kebutuhan Sistem
                    </label>
                    <select
                      value={form.type}
                      onChange={(e) => setForm({ ...form, type: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm sm:text-base bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all"
                    >
                      <option value="sistem-operasional-custom">Sistem Operasional Custom (Stok, Transaksi, SOP)</option>
                      <option value="website-portal-bisnis">Website &amp; Portal Bisnis Profesional</option>
                      <option value="dashboard-laporan-otomatis">Dashboard Monitoring &amp; Laporan Bisnis Otomatis</option>
                      <option value="manajemen-sdm-tim">Sistem Administrasi &amp; Manajemen Tim</option>
                      <option value="konsultasi-alur-kerja">Konsultasi Pemetaan Alur Sistem Digital</option>
                    </select>
                  </div>

                  {/* Problem & Scope Description */}
                  <div>
                    <label className="block text-sm font-bold text-slate-800 mb-1.5">
                      Deskripsi Masalah / Ruang Lingkup Sistem yang Diharapkan
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Jelaskan alur kendala saat ini, jumlah cabang/pengguna, atau fitur spesifik yang Anda butuhkan..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base font-bold flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 transition-all cursor-pointer"
                    >
                      <Send className="h-4 w-4" />
                      <span>Kirimkan Spesifikasi Kebutuhan Proyek</span>
                    </button>
                    <p className="text-xs sm:text-sm text-center text-slate-600 mt-2.5">
                      Seluruh pengajuan bersifat rahasia dan langsung ditangani oleh tim insinyur teknis internal.
                    </p>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
