"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowRight, Menu, MessageSquare, ShieldCheck, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { useConsult } from "@/components/consult/ConsultProvider";
import { cn } from "@/lib/utils";
import { localize, localizeHref, useLanguage } from "@/components/providers/LanguageProvider";

const NAV_ITEMS = [
  { label: "Beranda", href: "/" },
  { label: "Layanan & Solusi", href: "/layanan" },
  { label: "Portofolio", href: "/portofolio" },
  { label: "Tentang Kami", href: "/tentang-kami" },
  { label: "Kontak", href: "/kontak" },
];

export function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const { openConsult } = useConsult();
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const isScrolled = y > 20;
    setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
  });

  return (
    <header className="fixed inset-x-0 top-0 z-50 pointer-events-none pt-4 sm:pt-6 px-5 sm:px-8">
      <div
        className={cn(
          "pointer-events-auto mx-auto flex items-center justify-between max-w-6xl rounded-full border transition-all duration-300 px-5 sm:px-6 transform-gpu",
          scrolled
            ? "h-16 bg-white/95 backdrop-blur-md sm:backdrop-blur-xl border-slate-200/90 shadow-[0_12px_36px_rgba(15,23,42,0.08)]"
            : "h-16 sm:h-18 bg-white/90 backdrop-blur-sm sm:backdrop-blur-md border-slate-200/70 shadow-[0_4px_24px_rgba(15,23,42,0.04)]",
        )}
      >
        {/* Brand Logo */}
        <Link href={localizeHref("/", language)} aria-label={localize("Vieria Techno Beranda", language)} className="outline-none flex items-center">
          <Logo />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => {
            const href = localizeHref(item.href, language);
            const isActive = pathname === href;
            return (
              <Link
                key={item.label}
                href={href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-semibold tracking-normal transition-all duration-200",
                  isActive
                    ? "bg-emerald-50 text-emerald-800 font-bold border border-emerald-200/80"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50",
                )}
              >
                {localize(item.label, language)}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Button */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <button
            type="button"
            onClick={toggleLanguage}
            aria-label={language === "id" ? "Switch to English" : "Ganti ke Bahasa Indonesia"}
            className="rounded-full border border-slate-200 bg-white px-3.5 py-2.5 text-xs font-bold text-slate-700 transition-colors hover:border-emerald-300 hover:text-emerald-700 sm:px-3 sm:py-2"
          >
            {language === "id" ? "ID | EN" : "EN | ID"}
          </button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={() => openConsult("navbar-konsultasi")}
            className="hidden sm:inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 text-sm font-bold tracking-normal shadow-md shadow-emerald-600/25 transition-all duration-200 cursor-pointer"
          >
            <ShieldCheck className="h-4 w-4" />
            <span>{localize("Jadwalkan Konsultasi", language)}</span>
          </motion.button>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={localize("Buka Menu Navigasi", language)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 lg:hidden hover:bg-slate-50 transition-colors shadow-2xs sm:h-10 sm:w-10"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto mt-3 mx-auto max-w-sm rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-2xl backdrop-blur-2xl lg:hidden sm:mt-2 sm:p-5"
          >
            <div className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={localizeHref(item.href, language)}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "rounded-xl px-4 py-3.5 text-sm font-semibold transition-colors",
                    pathname === localizeHref(item.href, language)
                      ? "bg-emerald-50 text-emerald-800 font-bold"
                      : "text-slate-800 hover:bg-slate-50",
                  )}
                >
                  {localize(item.label, language)}
                </Link>
              ))}
              <div className="pt-3 mt-1 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    openConsult("navbar-konsultasi");
                  }}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 py-3.5 text-sm font-bold text-white shadow-md shadow-emerald-600/25 active:scale-95 cursor-pointer"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>{localize("Jadwalkan Konsultasi Resmi", language)}</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
