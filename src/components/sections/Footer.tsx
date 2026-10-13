import { Mail, MapPin, MessageCircle } from "lucide-react";
import type { SVGProps } from "react";
import { NAV_LINKS, SITE } from "@/data/content";
import { waLink } from "@/lib/utils";
import { Logo } from "@/components/ui/Logo";

const YEAR = 2026;

function Instagram(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

function Linkedin(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#F7F6F3] text-[#2F3437] border-t border-[#EAEAEA]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 py-16 sm:py-20">
        {/* 12-column layout (Columns 2 to 12) */}
        <div className="grid grid-cols-1 md:grid-cols-12 lg:gap-x-16 gap-y-10">
          {/* Brand info (Columns 2 to 5) */}
          <div className="md:col-start-2 md:col-end-6">
            <Logo tone="light" />
            <p className="mt-4 max-w-xs text-xs leading-relaxed text-[#787774]">
              Studio rekayasa software &amp; strategi pemasaran digital.{" "}
              <span className="text-[#111111] font-medium">{SITE.tagline}</span>
            </p>
            <div className="mt-5 flex gap-2">
              {[
                { href: "https://instagram.com", label: "Instagram Tatanala", icon: Instagram },
                { href: "https://linkedin.com", label: "LinkedIn Tatanala", icon: Linkedin },
                { href: waLink(SITE.whatsapp, "Halo Tatanala!"), label: "WhatsApp Tatanala", icon: MessageCircle },
              ].map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-8 w-8 place-items-center rounded-md border border-[#EAEAEA] bg-white text-[#787774] transition-colors hover:border-[#111111] hover:bg-[#111111] hover:text-white"
                >
                  <Icon className="h-3.5 w-3.5" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links (Columns 6 to 8) */}
          <div className="md:col-start-6 md:col-end-9">
            <h2 className="font-mono text-xs font-semibold tracking-wider text-[#111111] uppercase">Navigasi</h2>
            <ul className="mt-4 flex flex-col space-y-2 text-xs">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-[#787774] transition-colors hover:text-[#111111]">
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#paket" className="text-[#787774] transition-colors hover:text-[#111111]">
                  Paket Solusi
                </a>
              </li>
            </ul>
          </div>

          {/* Contact (Columns 9 to 12) */}
          <div className="md:col-start-9 md:col-end-13">
            <h2 className="font-mono text-xs font-semibold tracking-wider text-[#111111] uppercase">Kontak</h2>
            <ul className="mt-4 flex flex-col space-y-2.5 text-xs">
              <li>
                <a
                  href={waLink(SITE.whatsapp, "Halo Tatanala!")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-[#787774] hover:text-[#111111]"
                >
                  <MessageCircle className="mt-0.5 h-3.5 w-3.5 text-[#111111]" />
                  <span>{SITE.whatsappDisplay}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="flex items-start gap-2.5 text-[#787774] hover:text-[#111111]">
                  <Mail className="mt-0.5 h-3.5 w-3.5 text-[#111111]" />
                  <span>{SITE.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-[#787774]">
                <MapPin className="mt-0.5 h-3.5 w-3.5 text-[#111111]" />
                <span>{SITE.address}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-[#EAEAEA] bg-[#F4F3EF]">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 py-5">
          <div className="grid grid-cols-1 md:grid-cols-12 lg:gap-x-16">
            <div className="md:col-start-2 md:col-end-12 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-[11px] text-[#787774]">
              <p>© {YEAR} Tatanala. Seluruh hak cipta dilindungi.</p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-[#111111]">Kebijakan Privasi</a>
                <a href="#" className="hover:text-[#111111]">Syarat Layanan</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
