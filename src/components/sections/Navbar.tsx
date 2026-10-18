"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowRight, Menu, MessageSquare, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { useConsult } from "@/components/consult/ConsultProvider";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Solusi", href: "#solusi" },
  { label: "Layanan", href: "#layanan" },
  { label: "Portofolio", href: "#portofolio" },
  { label: "Alur Kerja", href: "#alur-kerja" },
  { label: "Biaya", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const { openConsult } = useConsult();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Solusi");

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 20));

  return (
    <header className="fixed inset-x-0 top-0 z-50 pointer-events-none pt-4 sm:pt-6 px-4 sm:px-8">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "pointer-events-auto mx-auto flex items-center justify-between max-w-6xl rounded-full border transition-all duration-300 px-4 sm:px-6",
          scrolled
            ? "h-16 bg-white/90 backdrop-blur-xl border-slate-200/90 shadow-[0_10px_30px_rgba(15,23,42,0.06)]"
            : "h-16 sm:h-18 bg-white/75 backdrop-blur-md border-slate-200/60 shadow-[0_4px_20px_rgba(15,23,42,0.03)]",
        )}
      >
        {/* Logo */}
        <a href="#top" aria-label="Tatanala Kembali ke Atas" className="outline-none flex items-center">
          <Logo />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = activeItem === item.label;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setActiveItem(item.label)}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
                  isActive
                    ? "bg-slate-100 text-slate-900 font-semibold"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50",
                )}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Button */}
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={() => openConsult("bingung")}
            className="hidden sm:inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 text-xs font-semibold shadow-md shadow-blue-500/20 transition-all duration-200"
          >
            <MessageSquare className="h-3.5 w-3.5" />
            <span>Konsultasi Gratis</span>
          </motion.button>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Buka Menu Navigasi"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 md:hidden hover:bg-slate-50 transition-colors"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto mt-2 mx-auto max-w-sm rounded-3xl border border-slate-200 bg-white/95 p-5 shadow-2xl backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => {
                    setActiveItem(item.label);
                    setMobileOpen(false);
                  }}
                  className="rounded-xl px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    openConsult("bingung");
                  }}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-sm font-semibold text-white shadow-md shadow-blue-500/25 active:scale-95"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>Konsultasi Masalah Bisnis</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
