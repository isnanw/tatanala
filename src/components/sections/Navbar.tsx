"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useState } from "react";
import { NAV_LINKS } from "@/data/content";
import { useActiveSection, useEscape, useLockBody } from "@/lib/hooks";
import { cn, EASE_OUT } from "@/lib/utils";
import { Logo } from "@/components/ui/Logo";
import { useConsult } from "@/components/consult/ConsultProvider";

const SECTION_IDS = NAV_LINKS.map((l) => l.href.slice(1));

export function Navbar() {
  const { openConsult } = useConsult();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 20));
  useLockBody(mobileOpen);
  useEscape(mobileOpen, () => setMobileOpen(false));

  return (
    <header className="fixed inset-x-0 top-0 z-50 pointer-events-none pt-4 sm:pt-6 px-4 sm:px-6">
      <div
        className={cn(
          "pointer-events-auto mx-auto flex items-center justify-between max-w-5xl rounded-full border transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] px-4 sm:px-6",
          scrolled
            ? "h-16 bg-white/95 backdrop-blur-2xl border-[#EAEAEA] shadow-[0_12px_36px_rgba(0,0,0,0.06)]"
            : "h-16 sm:h-18 bg-[#FBFBFA]/90 backdrop-blur-md border-[#EAEAEA] shadow-[0_4px_20px_rgba(0,0,0,0.03)]",
        )}
      >
        <a href="#top" aria-label="Tatanala - kembali ke atas" className="outline-none flex items-center">
          <Logo />
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden items-center gap-1.5 sm:flex">
          {NAV_LINKS.map((link) => {
            const id = link.href.slice(1);
            const isActive = active === id;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "block rounded-full px-4 py-1.5 text-xs font-medium tracking-wide transition-colors font-mono",
                    isActive
                      ? "bg-[#111111] text-white font-semibold"
                      : "text-[#787774] hover:text-[#111111] hover:bg-[#F4F4F3]",
                  )}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Fluid Island CTA Button with Nested Icon */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => openConsult()}
            className="group hidden sm:inline-flex items-center gap-2.5 rounded-full bg-[#111111] pl-4.5 pr-2 py-1.5 text-xs font-semibold text-white transition-all duration-300 hover:bg-[#262626] active:scale-[0.98]"
          >
            <span>Konsultasi</span>
            <span className="grid h-7 w-7 place-items-center rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-105">
              <MessageCircle className="h-3.5 w-3.5 text-white" aria-hidden />
            </span>
          </button>

          {/* Morphing Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
            className="relative grid h-10 w-10 place-items-center rounded-full border border-[#EAEAEA] bg-white text-[#111111] sm:hidden"
          >
            <div className="relative h-4 w-4">
              <span
                className={cn(
                  "absolute h-0.5 w-4 bg-[#111111] transition-all duration-300",
                  mobileOpen ? "top-1.5 rotate-45" : "top-0.5",
                )}
              />
              <span
                className={cn(
                  "absolute h-0.5 w-4 bg-[#111111] transition-all duration-300",
                  mobileOpen ? "top-1.5 -rotate-45" : "bottom-0.5",
                )}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Staggered Mask Mobile Menu Expansion */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
            className="pointer-events-auto mx-auto mt-3 max-w-5xl overflow-hidden rounded-2xl border border-[#EAEAEA] bg-white/95 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.08)] backdrop-blur-2xl sm:hidden"
          >
            <ul className="flex flex-col space-y-2">
              {NAV_LINKS.map((link, idx) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 + 0.1, duration: 0.25 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-4 py-2.5 text-sm font-medium text-[#111111] hover:bg-[#F7F6F3]"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <button
              type="button"
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-[#111111] py-3 text-xs font-semibold text-white uppercase tracking-wider font-mono"
              onClick={() => {
                setMobileOpen(false);
                openConsult();
              }}
            >
              <MessageCircle className="h-4 w-4" aria-hidden /> Konsultasi Masalah
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
