"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  className?: string;
  tone?: "light" | "dark";
}

export function LanguageSwitcher({
  className,
  tone = "light",
}: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();

  const isDark = tone === "dark";

  return (
    <div
      role="group"
      aria-label="Pilihan Bahasa / Language Selection"
      className={cn(
        "relative inline-flex items-center p-0.5 rounded-full border transition-all duration-200 select-none",
        isDark
          ? "bg-[#0B251B]/80 border-emerald-800/50 shadow-inner"
          : "bg-slate-100/90 border-slate-200/90 shadow-2xs hover:border-slate-300",
        className
      )}
    >

      {/* Segmented Pill: ID */}
      <button
        type="button"
        role="tab"
        aria-selected={language === "id"}
        aria-label="Bahasa Indonesia"
        onClick={() => setLanguage("id")}
        className={cn(
          "relative px-2.5 py-1 text-xs font-bold tracking-tight rounded-full transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500",
          language === "id"
            ? isDark
              ? "text-white"
              : "text-emerald-950"
            : isDark
              ? "text-emerald-200/60 hover:text-emerald-100"
              : "text-slate-500 hover:text-slate-800"
        )}
      >
        {language === "id" && (
          <motion.span
            layoutId="activeLangIndicator"
            className={cn(
              "absolute inset-0 rounded-full shadow-xs",
              isDark
                ? "bg-emerald-700 border border-emerald-500/40"
                : "bg-white border border-slate-200/70"
            )}
            transition={{ type: "spring", stiffness: 480, damping: 34 }}
          />
        )}
        <span className="relative z-10 flex items-center gap-1">
          <span>ID</span>
        </span>
      </button>

      {/* Segmented Pill: EN */}
      <button
        type="button"
        role="tab"
        aria-selected={language === "en"}
        aria-label="English Language"
        onClick={() => setLanguage("en")}
        className={cn(
          "relative px-2.5 py-1 text-xs font-bold tracking-tight rounded-full transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500",
          language === "en"
            ? isDark
              ? "text-white"
              : "text-emerald-950"
            : isDark
              ? "text-emerald-200/60 hover:text-emerald-100"
              : "text-slate-500 hover:text-slate-800"
        )}
      >
        {language === "en" && (
          <motion.span
            layoutId="activeLangIndicator"
            className={cn(
              "absolute inset-0 rounded-full shadow-xs",
              isDark
                ? "bg-emerald-700 border border-emerald-500/40"
                : "bg-white border border-slate-200/70"
            )}
            transition={{ type: "spring", stiffness: 480, damping: 34 }}
          />
        )}
        <span className="relative z-10 flex items-center gap-1">
          <span>EN</span>
        </span>
      </button>
    </div>
  );
}
