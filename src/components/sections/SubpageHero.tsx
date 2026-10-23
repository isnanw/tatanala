"use client";

import { 
  ChevronRight, 
  ArrowRight, 
  ArrowUpRight, 
  Globe2, 
  Boxes, 
  Rocket, 
  Wallet, 
  Landmark, 
  ShoppingBag, 
  ShieldCheck, 
  Layers, 
  Headphones, 
  MessageSquare, 
  Mail, 
  FileCheck2,
  LucideIcon
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useConsult } from "@/components/consult/ConsultProvider";
import { localize, localizeHref, useLanguage } from "@/components/providers/LanguageProvider";

const ICON_MAP: Record<string, LucideIcon> = {
  globe: Globe2,
  boxes: Boxes,
  rocket: Rocket,
  wallet: Wallet,
  landmark: Landmark,
  shopping: ShoppingBag,
  shield: ShieldCheck,
  layers: Layers,
  headphones: Headphones,
  message: MessageSquare,
  mail: Mail,
  fileCheck: FileCheck2,
};

export interface KeyPointItem {
  iconName: string;
  badge?: string;
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
  consultTopic?: string;
}

export interface SubpageHeroProps {
  breadcrumb: string;
  badge?: string;
  title: string;
  description: string;
  headerBgImage?: string;
  points: KeyPointItem[];
}

export function SubpageHero({
  breadcrumb,
  badge,
  title,
  description,
  headerBgImage = "/images/server-audit.jpg",
  points,
}: SubpageHeroProps) {
  const { openConsult } = useConsult();
  const { language } = useLanguage();

  return (
    <div className="relative w-full bg-[#F8FAFC]">
      
      {/* 1. Header Banner: Compact, Image-tinted, Dark Brand Navy with Backdrop */}
      <section className="relative w-full overflow-hidden bg-[#07101E] pt-28 sm:pt-36 pb-36 sm:pb-44 text-white">
        
        {/* Photographic Backdrop: Bright, vibrant, and clearly visible with subtle parallax zoom */}
        <motion.div 
          initial={{ scale: 1.08, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 0.75 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 pointer-events-none select-none overflow-hidden"
        >
          <Image
            src={headerBgImage}
            alt="Hero Backdrop"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
            loading="eager"
          />
          {/* Subtle Deep Navy Overlay & Vignette (Allows image to be bright and unmistakable while text stays sharp) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#07101E]/90 via-[#07101E]/60 to-[#07101E]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07101E] via-transparent to-black/30" />
        </motion.div>

        {/* Content Inside Header */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <motion.nav 
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            aria-label={localize("Breadcrumb", language)}
            className="flex items-center gap-2 text-xs sm:text-sm text-slate-300/80 mb-4 sm:mb-5"
          >
            <Link href={localizeHref("/", language)} className="hover:text-blue-400 transition-colors">
              {localize("Beranda", language)}
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
            <span className="text-blue-400 font-semibold">{localize(breadcrumb, language)}</span>
          </motion.nav>

          {/* Title & Description */}
          <div className="max-w-3xl">
            {badge && (
              <motion.span 
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.05 }}
                className="inline-block text-xs font-bold uppercase tracking-wider text-blue-400 mb-2"
              >
                {localize(badge, language)}
              </motion.span>
            )}
            <motion.h1 
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight"
            >
              {localize(title, language)}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-3.5 text-sm sm:text-base text-slate-300 leading-relaxed font-normal max-w-2xl"
            >
              {localize(description, language)}
            </motion.p>
          </div>

        </div>

      </section>

      {/* 2. Overlapping White Sheet Container: Cuts and Overlaps the Header Boundary with 3 Core Page Points */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-24 sm:-mt-32">
        <motion.div 
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl sm:rounded-3xl bg-white p-5 sm:p-7 lg:p-8 shadow-[0_20px_50px_rgba(15,23,42,0.12)] border border-slate-200/90"
        >
          
          {/* 3 Key Points Grid with Rich Varied Animations (Repeating on Scroll Up & Down) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {points.map((pt, idx) => {
              const Icon = ICON_MAP[pt.iconName] || Globe2;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 24, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ 
                    duration: 0.45, 
                    delay: idx * 0.08, 
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    y: -6, 
                    scale: 1.015,
                    boxShadow: "0 20px 35px -10px rgba(37, 99, 235, 0.15)",
                    transition: { duration: 0.2, ease: "easeOut" } 
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative rounded-2xl bg-[#F8FAFC] hover:bg-white border border-slate-200/80 hover:border-blue-400/80 p-6 flex flex-col justify-between transition-colors shadow-2xs hover:shadow-xl transform-gpu"
                >
                  <div>
                    {/* Top row: Icon and Badge with hover micro-animations */}
                    <div className="flex items-center justify-between mb-4">
                      <motion.div 
                        whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }}
                        transition={{ duration: 0.35 }}
                        className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 text-white flex items-center justify-center shadow-md shadow-blue-500/25 group-hover:shadow-blue-500/40"
                      >
                        <Icon className="h-6 w-6 transition-transform group-hover:scale-110" />
                      </motion.div>
                      {pt.badge && (
                        <motion.span 
                          whileHover={{ scale: 1.05 }}
                          className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-100/70 group-hover:bg-blue-600 group-hover:text-white px-2.5 py-1 rounded-full border border-blue-200/60 transition-colors duration-200"
                        >
                          {localize(pt.badge, language)}
                        </motion.span>
                      )}
                    </div>

                    {/* Title & Description */}
                    <h2 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                      {localize(pt.title, language)}
                    </h2>
                    <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {localize(pt.description, language)}
                    </p>
                  </div>

                  {/* Action Link / Button at bottom */}
                  {pt.actionLabel && (
                    <div className="mt-5 pt-4 border-t border-slate-200/60">
                      {pt.consultTopic ? (
                        <button
                          type="button"
                          onClick={() => openConsult(pt.consultTopic)}
                          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700 cursor-pointer group/btn"
                        >
                          <span>{localize(pt.actionLabel, language)}</span>
                          <ArrowRight className="h-3.5 w-3.5 group-hover/btn:translate-x-1.5 transition-transform duration-200" />
                        </button>
                      ) : pt.actionHref ? (
                        <Link
                          href={pt.actionHref}
                          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700 group/btn"
                        >
                          <span>{pt.actionLabel}</span>
                          <ArrowRight className="h-3.5 w-3.5 group-hover/btn:translate-x-1.5 transition-transform duration-200" />
                        </Link>
                      ) : null}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

        </motion.div>
      </div>

    </div>
  );
}
