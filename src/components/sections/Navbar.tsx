"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowRight, Menu, MessageSquare, ShieldCheck, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { useConsult } from "@/components/consult/ConsultProvider";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Beranda", href: "/" },
  { label: "Layanan & Solusi", href: "/layanan" },
  { label: "Portofolio", href: "/portofolio" },
  { label: "Tentang Kami", href: "/tentang-kami" },
  { label: "Kontak", href: "/kontak" },
];

export function Navbar() {
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
    <header className="fixed inset-x-0 top-0 z-50 pointer-events-none pt-4 sm:pt-6 px-4 sm:px-8">
      <div
        className={cn(
          "pointer-events-auto mx-auto flex items-center justify-between max-w-6xl rounded-full border transition-all duration-300 px-4 sm:px-6 transform-gpu",
          scrolled
            ? "h-16 bg-white/95 backdrop-blur-md sm:backdrop-blur-xl border-slate-200/90 shadow-[0_12px_36px_rgba(15,23,42,0.08)]"
            : "h-16 sm:h-18 bg-white/90 backdrop-blur-sm sm:backdrop-blur-md border-slate-200/70 shadow-[0_4px_24px_rgba(15,23,42,0.04)]",
        )}
      >
        {/* Brand Logo */}
        <Link href="/" aria-label="Tatanala Beranda" className="outline-none flex items-center">
          <Logo />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-semibold tracking-normal transition-all duration-200",
                  isActive
                    ? "bg-blue-50 text-blue-700 font-bold border border-blue-200/80"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Button */}
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={() => openConsult("navbar-konsultasi")}
            className="hidden sm:inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 text-sm font-bold tracking-normal shadow-md shadow-blue-500/25 transition-all duration-200 cursor-pointer"
          >
            <ShieldCheck className="h-4 w-4" />
            <span>Jadwalkan Konsultasi</span>
          </motion.button>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Buka Menu Navigasi"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 lg:hidden hover:bg-slate-50 transition-colors shadow-2xs"
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
            className="pointer-events-auto mt-2 mx-auto max-w-sm rounded-3xl border border-slate-200 bg-white/95 p-5 shadow-2xl backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col gap-1.5">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "rounded-xl px-4 py-3 text-sm font-semibold transition-colors",
                    pathname === item.href
                      ? "bg-blue-50 text-blue-700 font-bold"
                      : "text-slate-800 hover:bg-slate-50",
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-3 mt-1 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    openConsult("navbar-konsultasi");
                  }}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-3.5 text-sm font-bold text-white shadow-md shadow-blue-500/25 active:scale-95 cursor-pointer"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>Jadwalkan Konsultasi Resmi</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
