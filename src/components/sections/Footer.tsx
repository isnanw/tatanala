"use client";

import { ArrowUp, Mail, Phone, MapPin, MessageCircle, ShieldCheck, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { SITE } from "@/data/content";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden bg-[#07101E] text-slate-400 pt-16 pb-12 border-t border-slate-800">
      {/* Background Watermark Typography */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 pointer-events-none select-none opacity-[0.02] whitespace-nowrap">
        <span className="font-sans text-[13vw] font-black uppercase tracking-tighter text-white">
          TATANALA
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Multi-Column Sitemap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Brand Info & Identity (Span 4) */}
          <div className="lg:col-span-4">
            <Logo tone="dark" />
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-sm">
              Software House &amp; Konsultan Rekayasa Sistem Digital: Solusi website bisnis profesional, sistem operasional custom, dan dashboard laporan otomatis.
            </p>

            <div className="mt-5 space-y-2.5 text-sm text-slate-300">
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-blue-400 shrink-0" /> {SITE.address}
              </span>
              <span className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-400 shrink-0" /> {SITE.email}
              </span>
              <span className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-blue-400 shrink-0" /> {SITE.whatsappDisplay}
              </span>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-xs font-semibold text-blue-300">
                <ShieldCheck className="h-4 w-4 text-blue-400" /> Keamanan Data &amp; Privasi Terjaga
              </span>
            </div>
          </div>

          {/* Col 2: Pilar Solusi & Layanan (Span 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Pilar Solusi Software
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <Link href="/layanan" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="h-3.5 w-3.5 text-slate-500" />
                  <span>Website &amp; Portal Bisnis</span>
                </Link>
              </li>
              <li>
                <Link href="/layanan" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="h-3.5 w-3.5 text-slate-500" />
                  <span>Sistem Operasional Custom</span>
                </Link>
              </li>
              <li>
                <Link href="/layanan" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="h-3.5 w-3.5 text-slate-500" />
                  <span>Dashboard &amp; Laporan Otomatis</span>
                </Link>
              </li>
              <li>
                <Link href="/layanan" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="h-3.5 w-3.5 text-slate-500" />
                  <span>Manajemen Stok &amp; Transaksi</span>
                </Link>
              </li>
              <li>
                <Link href="/layanan" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="h-3.5 w-3.5 text-slate-500" />
                  <span>Digitalisasi Alur Kerja Bisnis</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Industri & Sektor Klien (Span 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Sektor &amp; Industri Klien
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <span className="hover:text-white transition-colors">Institusi Pemerintah &amp; Lembaga</span>
              </li>
              <li>
                <span className="hover:text-white transition-colors">Klinik &amp; Fasilitas Pelayanan Kesehatan</span>
              </li>
              <li>
                <span className="hover:text-white transition-colors">Perusahaan Distribusi &amp; Logistik</span>
              </li>
              <li>
                <span className="hover:text-white transition-colors">Manufaktur &amp; Rantai Pasok Retail</span>
              </li>
              <li>
                <span className="hover:text-white transition-colors">Perusahaan Jasa &amp; Konsultan Bisnis</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Navigasi Multipage & Legal (Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Perusahaan
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <Link href="/" className="hover:text-blue-400 transition-colors">Beranda</Link>
              </li>
              <li>
                <Link href="/tentang-kami" className="hover:text-blue-400 transition-colors">Tentang Kami</Link>
              </li>
              <li>
                <Link href="/layanan" className="hover:text-blue-400 transition-colors">Semua Layanan</Link>
              </li>
              <li>
                <Link href="/portofolio" className="hover:text-blue-400 transition-colors">Portofolio &amp; Kasus</Link>
              </li>
              <li>
                <Link href="/kontak" className="hover:text-blue-400 transition-colors">Kontak Resmi</Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-400">
          <p>&copy; 2026 Tatanala. Menata Sistem, Menuntaskan Kendala. Seluruh hak cipta dilindungi undang-undang.</p>
          
          <div className="flex items-center gap-6">
            <Link href="/tentang-kami" className="hover:text-white transition-colors">SLA &amp; Garansi</Link>
            <Link href="/tentang-kami" className="hover:text-white transition-colors">Keamanan Kode</Link>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Kembali ke atas"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-800 bg-slate-900/60 text-slate-400 hover:text-white hover:border-slate-700 transition-colors ml-2"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
