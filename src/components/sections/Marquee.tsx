"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Bot,
  Boxes,
  Globe2,
  Megaphone,
  MessageCircle,
  SearchCheck,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const CAPABILITIES = [
  { label: "Sistem Informasi Kustom", icon: Boxes },
  { label: "Website Profil Siap Tender", icon: Globe2 },
  { label: "Optimasi SEO Organik #1", icon: SearchCheck },
  { label: "Google & Meta Ads Terukur", icon: Megaphone },
  { label: "Integrasi AI & Otomasi Kerja", icon: Bot },
  { label: "Dashboard Realtime Multi-Cabang", icon: BarChart3 },
  { label: "Notifikasi Otomatis WhatsApp", icon: MessageCircle },
  { label: "Arsitektur Zero-Downtime Cloud", icon: ShieldCheck },
];

export function Marquee() {
  const duplicated = [...CAPABILITIES, ...CAPABILITIES, ...CAPABILITIES];

  return (
    <section
      aria-label="Kemampuan & Fokus Solusi Tatanala"
      className="relative overflow-hidden border-y border-slate-200/80 bg-white py-6"
    >
      <div className="flex w-max">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex items-center gap-8 pr-8 select-none"
        >
          {duplicated.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={`${item.label}-${idx}`}
                className="flex items-center gap-2.5 rounded-full border border-slate-200/90 bg-[#F8FAFC] px-4 py-2 text-xs font-semibold text-slate-700 shadow-2xs hover:border-blue-300 hover:text-blue-600 transition-colors"
              >
                <span className="grid h-5 w-5 place-items-center rounded-full bg-blue-100/80 text-blue-600">
                  <Icon className="h-3 w-3" />
                </span>
                <span>{item.label}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
