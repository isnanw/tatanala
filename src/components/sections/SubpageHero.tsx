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
import { useConsult } from "@/components/consult/ConsultProvider";

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

  return (
    <div className="relative w-full bg-[#F8FAFC]">
      
      {/* 1. Header Banner: Compact, Image-tinted, Dark Brand Navy with Backdrop */}
      <section className="relative w-full overflow-hidden bg-[#07101E] pt-28 sm:pt-36 pb-36 sm:pb-44 text-white">
        
        {/* Photographic Backdrop: Bright, vibrant, and clearly visible */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          <Image
            src={headerBgImage}
            alt="Hero Backdrop"
            fill
            sizes="100vw"
            className="object-cover object-center opacity-75"
            priority
          />
          {/* Subtle Deep Navy Overlay & Vignette (Allows image to be bright and unmistakable while text stays sharp) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#07101E]/90 via-[#07101E]/60 to-[#07101E]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07101E] via-transparent to-black/30" />
        </div>

        {/* Content Inside Header */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-slate-300/80 mb-4 sm:mb-5">
            <Link href="/" className="hover:text-blue-400 transition-colors">
              Beranda
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
            <span className="text-blue-400 font-semibold">{breadcrumb}</span>
          </nav>

          {/* Title & Description */}
          <div className="max-w-3xl">
            {badge && (
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">
                {badge}
              </span>
            )}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              {title}
            </h1>
            <p className="mt-3.5 text-sm sm:text-base text-slate-300 leading-relaxed font-normal max-w-2xl">
              {description}
            </p>
          </div>

        </div>

      </section>

      {/* 2. Overlapping White Sheet Container: Cuts and Overlaps the Header Boundary with 3 Core Page Points */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-24 sm:-mt-32">
        <div className="rounded-2xl sm:rounded-3xl bg-white p-5 sm:p-7 lg:p-8 shadow-[0_20px_50px_rgba(15,23,42,0.12)] border border-slate-200/90">
          
          {/* 3 Key Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {points.map((pt, idx) => {
              const Icon = ICON_MAP[pt.iconName] || Globe2;
              return (
                <div
                  key={idx}
                  className="group relative rounded-2xl bg-[#F8FAFC] hover:bg-blue-50/40 border border-slate-200/80 hover:border-blue-300/80 p-6 flex flex-col justify-between transition-all duration-200 shadow-2xs hover:shadow-md"
                >
                  <div>
                    {/* Top row: Icon and Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-12 w-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                        <Icon className="h-6 w-6" />
                      </div>
                      {pt.badge && (
                        <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-100/70 px-2.5 py-1 rounded-full border border-blue-200/60">
                          {pt.badge}
                        </span>
                      )}
                    </div>

                    {/* Title & Description */}
                    <h2 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                      {pt.title}
                    </h2>
                    <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {pt.description}
                    </p>
                  </div>

                  {/* Action Link / Button at bottom */}
                  {pt.actionLabel && (
                    <div className="mt-5 pt-4 border-t border-slate-200/60">
                      {pt.consultTopic ? (
                        <button
                          type="button"
                          onClick={() => openConsult(pt.consultTopic)}
                          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700 cursor-pointer"
                        >
                          <span>{pt.actionLabel}</span>
                          <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                        </button>
                      ) : pt.actionHref ? (
                        <Link
                          href={pt.actionHref}
                          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700"
                        >
                          <span>{pt.actionLabel}</span>
                          <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      ) : null}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>

    </div>
  );
}
