"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { NAV_LINKS } from "@/data/content";
import { useActiveSection, useEscape, useLockBody } from "@/lib/hooks";
import { cn, EASE_OUT } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { useConsult } from "@/components/consult/ConsultProvider";

const SECTION_IDS = NAV_LINKS.map((l) => l.href.slice(1));

export function Navbar() {
  const { openConsult } = useConsult();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 16));
  useLockBody(mobileOpen);
  useEscape(mobileOpen, () => setMobileOpen(false));

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur-md transition-colors duration-200 border-b border-black/[0.08]">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8">
        <a href="#top" aria-label="Tatanala — kembali ke atas" className="outline-none">
          <Logo />
        </a>

        <ul className="hidden items-center gap-2 lg:flex" onMouseLeave={() => setHovered(null)}>
          {NAV_LINKS.map((link) => {
            const id = link.href.slice(1);
            const isActive = active === id;
            return (
              <li key={link.href} className="relative">
                <a
                  href={link.href}
                  onMouseEnter={() => setHovered(id)}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "relative z-10 block rounded-lg px-4 py-2 text-sm font-semibold tracking-tight transition-colors",
                    isActive ? "text-emerald-950" : "text-slate-600 hover:text-emerald-950",
                  )}
                >
                  {link.label}
                </a>
                {hovered === id && (
                  <motion.span
                    layoutId="nav-hover"
                    className="absolute inset-0 rounded-lg bg-black/[0.04]"
                    transition={{ type: "spring", stiffness: 450, damping: 30 }}
                  />
                )}
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute -bottom-2.5 left-1/2 h-0.5 w-6 -translate-x-1/2 bg-amber-500"
                  />
                )}
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <Button size="sm" onClick={() => openConsult()} className="hidden sm:inline-flex">
            <MessageCircle className="h-4 w-4" aria-hidden />
            Konsultasi Masalah
          </Button>
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
            className="grid h-10 w-10 place-items-center rounded-lg border border-black/[0.1] bg-white text-emerald-950 lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: EASE_OUT }}
            className="border-b border-black/[0.08] bg-white px-6 py-6 lg:hidden"
          >
            <ul className="flex flex-col space-y-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-4 py-3 text-base font-semibold text-emerald-950 hover:bg-slate-50"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <Button
              className="mt-6 w-full"
              onClick={() => {
                setMobileOpen(false);
                openConsult();
              }}
            >
              <MessageCircle className="h-4 w-4" aria-hidden /> Konsultasi Masalah
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
