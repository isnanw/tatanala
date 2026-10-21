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
  Lock
} from "lucide-react";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    serviceType: "sistem-operasional",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="kontak" className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200/80 px-4 py-1 text-xs font-semibold text-blue-700 mb-4"
          >
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Kanal Komunikasi &amp; Konsultasi Kebutuhan Sistem</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900"
          >
            Konsultasikan Kebutuhan Sistem &amp; Draf Kontrak Anda
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto"
          >
            Sampaikan permasalahan operasional atau target tender Anda. Tim konsultan senior kami akan menyusun telaah kebutuhan teknis (SRS) dan proposal resmi dalam waktu 1x24 jam kerja.
          </motion.p>
        </div>

        {/* 2 Column Form & Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Office Address & Formal Credentials */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="rounded-3xl bg-white border border-slate-200/90 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                Kantor Pusat &amp; Rekayasa Sistem
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="h-11 w-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-[13px] font-bold text-slate-500 uppercase tracking-wider">
                      Alamat Operasional
                    </h4>
                    <p className="text-sm sm:text-base font-semibold text-slate-900 mt-1 leading-relaxed">
                      Jl. Palagan Tentara Pelajar Km. 9, Sleman, D.I. Yogyakarta 55581, Indonesia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-11 w-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-[13px] font-bold text-slate-500 uppercase tracking-wider">
                      WhatsApp Helpdesk Resmi
                    </h4>
                    <p className="text-sm sm:text-base font-semibold text-slate-900 mt-1">
                      +62 812-3456-7890 (Layanan Prioritas B2B)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-11 w-11 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-[13px] font-bold text-slate-500 uppercase tracking-wider">
                      Surat Elektronik Korporasi
                    </h4>
                    <p className="text-sm sm:text-base font-semibold text-slate-900 mt-1">
                      kontrak@tatanala.com / tender@tatanala.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-11 w-11 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-[13px] font-bold text-slate-500 uppercase tracking-wider">
                      Jam Kerja Pelayanan Teknis
                    </h4>
                    <p className="text-sm sm:text-base font-semibold text-slate-900 mt-1 leading-relaxed">
                      Senin – Jumat: 08.30 – 17.30 WIB<br />
                      <span className="text-xs sm:text-sm text-slate-600 font-normal">Sistem pemantauan server cloud berjalan kontinu 24/7.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Legal Security Badge */}
            <div className="rounded-2xl bg-blue-50/80 border border-blue-200/80 p-5 flex items-center gap-3.5">
              <Lock className="h-5 w-5 text-blue-600 shrink-0" />
              <p className="text-xs sm:text-sm text-blue-950 font-medium leading-relaxed">
                Seluruh data perusahaan, dokumen tender, dan skema bisnis yang Anda sampaikan dilindungi secara hukum di bawah klausul Kerahasiaan Informasi (Non-Disclosure Agreement).
              </p>
            </div>
          </motion.div>

          {/* Right Column: Formal Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-10 shadow-sm">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                Formulir Permohonan Telaah Sistem Resmi
              </h3>
              <p className="text-sm sm:text-base text-slate-600 mb-6 leading-relaxed">
                Mohon melengkapi profil entitas bisnis Anda untuk memastikan alokasi konsultan yang relevan.
              </p>

              {submitted ? (
                <div className="py-12 text-center">
                  <div className="h-16 w-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-200">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Permohonan Telah Diterima Tim Konsultan
                  </h4>
                  <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-md mx-auto leading-relaxed">
                    Terima kasih atas kepercayaan Anda. Insinyur solusi Tatanala akan mempelajari profil kebutuhan usaha Anda dan menghubungi nomor WhatsApp terdaftar dalam waktu maksimal 1x24 jam kerja.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-slate-800 mb-1.5">
                        Nama Lengkap Penanggung Jawab *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Contoh: Hendrawan Santoso"
                        className="w-full h-11 px-4 rounded-xl border border-slate-300 text-sm sm:text-base text-slate-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-800 mb-1.5">
                        Nama Perusahaan / Entitas Usaha *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Contoh: PT Tri Pilar Manunggal"
                        className="w-full h-11 px-4 rounded-xl border border-slate-300 text-sm sm:text-base text-slate-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-slate-800 mb-1.5">
                        Nomor WhatsApp Aktif *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="0812-xxxx-xxxx"
                        className="w-full h-11 px-4 rounded-xl border border-slate-300 text-sm sm:text-base text-slate-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-800 mb-1.5">
                        Alamat Email Bisnis *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="nama@perusahaan.com"
                        className="w-full h-11 px-4 rounded-xl border border-slate-300 text-sm sm:text-base text-slate-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-800 mb-1.5">
                      Fokus Kebutuhan Solusi *
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full h-11 px-4 rounded-xl border border-slate-300 text-sm sm:text-base text-slate-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
                    >
                      <option value="sistem-operasional">Paket Sistem Operasional (ERP, Gudang, Kasir POS, Notif WA)</option>
                      <option value="fondasi-profil">Paket Fondasi Profil (Website Company Profile Standar Tender LPSE)</option>
                      <option value="ekosistem-terpadu">Paket Ekosistem Terpadu (Sistem Kustom + Mesin Iklan Omzet B2B)</option>
                      <option value="audit-lapangan">Permohonan Audit Lapangan Langsung / Kunjungan Onsite</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-800 mb-1.5">
                      Deskripsi Masalah / Ruang Lingkup Sistem yang Diharapkan
                    </label>
                    <textarea
                      rows={4}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Jelaskan secara singkat kendala operasional Anda (misal: stok sering selisih, 12 Excel tercecer, butuh web profil untuk tender minggu depan)..."
                      className="w-full p-4 rounded-xl border border-slate-300 text-sm sm:text-base text-slate-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none leading-relaxed"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm sm:text-base transition-all shadow-md shadow-blue-600/20 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="h-4 w-4" />
                    <span>Kirim Permohonan Telaah Resmi</span>
                  </button>

                  <p className="text-xs sm:text-sm text-slate-600 text-center leading-relaxed">
                    Dengan mengirimkan form ini, data Anda terikat dalam klausul kerahasiaan NDA resmi Tatanala.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
