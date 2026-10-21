"use client";

import { motion } from "framer-motion";

export function HeroGridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {/* 1. Definitive CSS Grid Lines - Subtle, Thin, Soft Focus */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(37, 99, 235, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(37, 99, 235, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)",
        }}
      />

      {/* 2. Major Accent Grid with Very Soft Contrast */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(37, 99, 235, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(37, 99, 235, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "192px 192px",
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 70%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 70%, transparent 100%)",
        }}
      />

      {/* 3. Subtle Technical Accent Target Crosses (+) */}
      <div className="absolute top-[96px] left-[192px] text-blue-500/40 font-mono text-xs">+</div>
      <div className="absolute top-[96px] right-[192px] text-blue-500/40 font-mono text-xs">+</div>
      <div className="absolute top-[288px] left-[192px] text-blue-500/30 font-mono text-xs">+</div>
      <div className="absolute top-[288px] right-[192px] text-blue-500/30 font-mono text-xs">+</div>

      {/* 4. Left Feature Box (Bahasa Mudah Dipahami) */}
      <div className="hidden lg:flex absolute top-32 left-8 flex-col gap-1.5 text-xs text-slate-600 bg-white/95 border border-slate-200/90 p-4 rounded-2xl shadow-xs backdrop-blur-md max-w-[210px]">
        <div className="flex items-center gap-2 text-blue-700 font-bold text-xs">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Sistem Siap Pakai</span>
        </div>
        <p className="text-[11px] text-slate-500 mt-1">Kelola usaha jadi otomatis tanpa ribet:</p>
        <span className="text-[11px] font-medium text-slate-700">• Absensi &amp; Gaji Karyawan (HRD)</span>
        <span className="text-[11px] font-medium text-slate-700">• Booking Jadwal Otomatis</span>
        <span className="text-[11px] font-medium text-slate-700">• Aplikasi Web Sesuai Permintaan</span>
      </div>

      {/* 5. Right Feature Box (Bahasa Mudah Dipahami) */}
      <div className="hidden lg:flex absolute top-32 right-8 flex-col gap-1.5 text-xs text-slate-600 bg-white/95 border border-slate-200/90 p-4 rounded-2xl shadow-xs backdrop-blur-md text-right max-w-[210px]">
        <div className="flex items-center justify-end gap-2 text-blue-700 font-bold text-xs">
          <span>Hemat &amp; Fleksibel</span>
          <span className="h-2 w-2 rounded-full bg-blue-600" />
        </div>
        <p className="text-[11px] text-slate-500 mt-1">Tanpa biaya server mahal di awal:</p>
        <span className="text-[11px] font-medium text-slate-700">Langganan bulanan terjangkau •</span>
        <span className="text-[11px] font-medium text-slate-700">Bisa berhenti kapan saja •</span>
        <span className="text-[11px] font-medium text-slate-700">Gratis update &amp; bantuan teknis •</span>
      </div>

      {/* 6. Concentric Focal Radar Circles around the Center Headline */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[640px] h-[640px] rounded-full border border-blue-500/15 pointer-events-none" />
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[880px] h-[880px] rounded-full border border-blue-400/10 border-dashed pointer-events-none" />

      {/* 7. Luminous Blue Atmospheric Glow Mesh */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.55, 0.75, 0.55],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-36 left-1/2 -translate-x-1/2 w-[850px] h-[520px] rounded-full bg-gradient-to-b from-blue-300/40 via-sky-200/25 to-transparent blur-3xl -z-10"
      />
      <div className="absolute top-40 -left-20 w-[380px] h-[380px] rounded-full bg-blue-200/30 blur-3xl -z-10" />
      <div className="absolute top-40 -right-20 w-[380px] h-[380px] rounded-full bg-sky-200/30 blur-3xl -z-10" />
    </div>
  );
}
