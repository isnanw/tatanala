"use client";

import { ArrowUp, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { SITE } from "@/data/content";

const FOOTER_LINKS = [
  { label: "Solusi", href: "#solusi" },
  { label: "Layanan", href: "#layanan" },
  { label: "Portofolio", href: "#portofolio" },
  { label: "Alur Kerja", href: "#alur-kerja" },
  { label: "Biaya", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden bg-[#0A0F1D] text-slate-400 pt-16 pb-12 border-t border-slate-800">
      {/* Background Watermark Typography */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 pointer-events-none select-none opacity-[0.03] whitespace-nowrap">
        <span className="font-sans text-[13vw] font-black uppercase tracking-tighter text-white">
          TATANALA
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 pb-12 border-b border-slate-800/80">
          {/* Logo & Description */}
          <div className="max-w-md">
            <Logo tone="dark" />
            <p className="mt-4 text-xs sm:text-sm text-slate-400 leading-relaxed">
              Studio rekayasa software &amp; pemasaran digital terarah: profil bisnis siap tender, sistem informasi operasional kustom (ERP, inventaris, POS), dan pertumbuhan terukur hingga rupiah.
            </p>
            <div className="mt-4 flex flex-col gap-1.5 text-xs text-slate-400">
              <span className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-blue-500" /> {SITE.address}
              </span>
              <span className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-blue-500" /> {SITE.email}
              </span>
              <span className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-blue-500" /> {SITE.whatsappDisplay}
              </span>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-wrap items-center gap-6 text-xs sm:text-sm font-medium">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-400 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Tatanala"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-800 bg-slate-900/60 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-800 bg-slate-900/60 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
            >
              <svg className="h-4 w-4 fill-currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-800 bg-slate-900/60 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
            >
              <svg className="h-4 w-4 fill-currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Kembali ke atas"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-800 bg-slate-900/60 text-slate-400 hover:text-white hover:border-slate-700 transition-colors ml-2"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; 2026 Tatanala. Menata Sistem, Menuntaskan Kendala. Hak cipta dilindungi.</p>
          <div className="flex items-center gap-6">
            <a href="#kebijakan" className="hover:text-slate-400 transition-colors">Kebijakan Privasi</a>
            <a href="#syarat" className="hover:text-slate-400 transition-colors">Syarat &amp; Ketentuan</a>
            <a href="#keamanan" className="hover:text-slate-400 transition-colors">Standar Keamanan Kode</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
