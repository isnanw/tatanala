"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, ShieldCheck, TrendingUp, Users, Zap, Database, Server } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export function HeroDashboard() {
  const [hoveredBar, setHoveredBar] = useState<number | null>(4);
  const [counter, setCounter] = useState(0);

  // Animated counter for live transactions
  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prev) => (prev >= 18420 ? 18420 : prev + 340));
    }, 30);
    return () => clearInterval(timer);
  }, []);

  const BARS = [
    { label: "Sen", val: 58, labelVal: "Rp 14.2M" },
    { label: "Sel", val: 46, labelVal: "Rp 11.5M" },
    { label: "Rab", val: 72, labelVal: "Rp 18.0M" },
    { label: "Kam", val: 86, labelVal: "Rp 21.4M" },
    { label: "Jum", val: 98, labelVal: "Rp 24.8M", highlighted: true },
    { label: "Sab", val: 64, labelVal: "Rp 16.0M" },
    { label: "Min", val: 78, labelVal: "Rp 19.5M" },
  ];

  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      {/* Animated ambient background glow */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -inset-4 bg-gradient-to-tr from-blue-600/15 via-sky-400/15 to-indigo-500/15 rounded-[2.5rem] blur-2xl -z-10"
      />

      {/* Main Container Card */}
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
        className="rounded-[2rem] border border-slate-200/90 bg-white p-5 sm:p-7 shadow-[0_20px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl"
      >
        {/* Top Header */}
        <div className="flex items-center justify-between pb-5 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <h3 className="text-sm font-bold text-slate-900 tracking-tight">
                Tatanala ERP &bull; Monitoring Multi-Cabang
              </h3>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Sinkronisasi data stok &amp; transaksi 4 cabang realtime
            </p>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 border border-emerald-200/60 shadow-xs">
            <TrendingUp className="h-3 w-3" />
            +42.6% Omzet
          </span>
        </div>

        {/* Bar Chart Section */}
        <div className="pt-6 pb-4">
          <div className="flex items-end justify-between gap-2 h-40 sm:h-44 px-2">
            {BARS.map((bar, idx) => {
              const isHovered = hoveredBar === idx;
              return (
                <div
                  key={bar.label}
                  className="flex flex-col items-center flex-1 h-full justify-end cursor-pointer group"
                  onMouseEnter={() => setHoveredBar(idx)}
                >
                  {/* Tooltip */}
                  <motion.div
                    animate={isHovered ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 4, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="mb-2 rounded-md bg-slate-900 text-white px-2 py-0.5 text-[10px] font-mono shadow-md pointer-events-none"
                  >
                    {bar.labelVal}
                  </motion.div>

                  {/* Bar Pill */}
                  <div className="w-full max-w-[28px] sm:max-w-[34px] bg-slate-100 rounded-full h-full flex items-end p-1 overflow-hidden">
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: `${bar.val}%` }}
                      transition={{ duration: 0.9, delay: idx * 0.07, ease: [0.16, 1, 0.3, 1] }}
                      className={`w-full rounded-full transition-colors duration-300 ${
                        bar.highlighted
                          ? "bg-gradient-to-t from-blue-700 to-blue-500 shadow-md shadow-blue-500/50"
                          : "bg-blue-500/80 group-hover:bg-blue-600"
                      }`}
                    />
                  </div>

                  <span className="mt-2 text-[11px] font-medium text-slate-500 group-hover:text-slate-900 transition-colors">
                    {bar.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom 3 Mini Metric Cards */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-100">
          {/* Card 1: Keamanan & Uptime Database */}
          <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-3.5 flex flex-col justify-between hover:bg-white hover:border-blue-200 transition-all shadow-xs">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold text-slate-600">Database &amp; Uptime</span>
              <ShieldCheck className="h-4 w-4 text-blue-600" />
            </div>
            <div className="mt-3 flex items-center justify-between">
              <div>
                <p className="text-base font-bold text-slate-900">99.8%</p>
                <p className="text-[10px] text-emerald-600 font-semibold flex items-center gap-0.5">
                  <CheckCircle2 className="h-2.5 w-2.5" /> Cloud Backup
                </p>
              </div>
              {/* Circular Gauge */}
              <div className="relative h-9 w-9">
                <svg className="h-full w-full -rotate-90" viewBox="0 0 36 36">
                  <circle cx="18" cy="18" r="14" fill="none" stroke="#E2E8F0" strokeWidth="3" />
                  <motion.circle
                    cx="18"
                    cy="18"
                    r="14"
                    fill="none"
                    stroke="#2563EB"
                    strokeWidth="3"
                    strokeDasharray="88"
                    initial={{ strokeDashoffset: 88 }}
                    animate={{ strokeDashoffset: 4 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Card 2: Pengguna & Cabang Aktif */}
          <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-3.5 flex flex-col justify-between hover:bg-white hover:border-blue-200 transition-all shadow-xs">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold text-slate-600">User &amp; Kasir</span>
              <Users className="h-4 w-4 text-blue-600" />
            </div>
            <div className="mt-3">
              <div className="flex items-center -space-x-2">
                <div className="relative h-7 w-7 rounded-full border-2 border-white overflow-hidden bg-blue-100">
                  <Image src="/images/avatar-david.jpg" alt="Admin" fill sizes="28px" className="object-cover" />
                </div>
                <div className="relative h-7 w-7 rounded-full border-2 border-white overflow-hidden bg-sky-100">
                  <Image src="/images/avatar-sarah.jpg" alt="Kasir" fill sizes="28px" className="object-cover" />
                </div>
                <div className="grid h-7 w-7 place-items-center rounded-full border-2 border-white bg-blue-600 text-[10px] font-bold text-white shadow-xs">
                  4 Cabang
                </div>
              </div>
              <p className="mt-1 text-[10px] font-semibold text-slate-500">28 Staf Online</p>
            </div>
          </div>

          {/* Card 3: Rekap Transaksi */}
          <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-3.5 flex flex-col justify-between hover:bg-white hover:border-blue-200 transition-all shadow-xs">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold text-slate-600">Rekap Transaksi</span>
              <Zap className="h-4 w-4 text-blue-600" />
            </div>
            <div className="mt-2">
              <p className="text-base font-bold text-slate-900 font-mono">
                {counter > 0 ? counter.toLocaleString("id-ID") : "18.420"}
              </p>
              {/* Dynamic Sparkline */}
              <div className="mt-1 h-5 w-full">
                <svg viewBox="0 0 100 24" fill="none" className="w-full h-full stroke-blue-600 stroke-2">
                  <motion.path
                    d="M0 18 Q 20 6, 40 14 T 70 4 T 100 2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
