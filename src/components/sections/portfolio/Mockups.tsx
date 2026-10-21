import { AlertTriangle, CheckCircle2, ImageOff, Search, TrendingUp } from "lucide-react";
import type { ReactNode } from "react";
import type { MockupKind } from "@/types";

/* Decorative, code-built UI mockups for the portfolio showcase (no image assets needed). */

export function BeforeMock({ kind }: { kind: MockupKind }) {
  if (kind === "website") return <OldWebsite />;
  if (kind === "growth") return <LostInSearch />;
  return <MessySpreadsheet />;
}

export function AfterMock({ kind }: { kind: MockupKind }) {
  if (kind === "website") return <ModernWebsite />;
  if (kind === "growth") return <GrowthDashboard />;
  return <CleanDashboard />;
}

function Chrome({ children, url }: { children: ReactNode; url: string; dark?: boolean }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-lg border border-[#EAEAEA] bg-white">
      <div className="flex items-center gap-2 border-b border-[#EAEAEA] bg-[#F9F9F8] px-3 py-2">
        <span className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-[#E5E5E5]" />
          <span className="h-2 w-2 rounded-full bg-[#E5E5E5]" />
          <span className="h-2 w-2 rounded-full bg-[#E5E5E5]" />
        </span>
        <span className="ml-2 flex-1 truncate font-mono text-[10px] text-[#787774]">{url}</span>
      </div>
      <div className="relative flex-1 overflow-hidden">{children}</div>
    </div>
  );
}

/* ----------------------------- BEFORE ----------------------------- */

function MessySpreadsheet() {
  const cols = ["A", "B", "C", "D", "E", "F"];
  const rows = [
    ["Tgl", "Barang", "Masuk", "Keluar", "Sisa", "Ket"],
    ["02/3", "Beras 5kg", "120", "98", "22", "?"],
    ["02/3", "Minyak 2L", "80", "", "#REF!", "cek"],
    ["03/3", "Gula 1kg", "", "45", "-12", "!!"],
    ["03/3", "Beras 5kg", "60", "71", "#N/A", ""],
    ["04/3", "Tepung", "40", "38", "2", "wa bu sri"],
    ["05/3", "Minyak 2L", "?", "22", "#REF!", ""],
  ];
  return (
    <Chrome url="stok_cabang_FINAL_rev3 (2).xlsx" dark>
      <div className="grid h-full grid-cols-[24px_repeat(6,1fr)] text-[10px] text-slate-600 sm:text-[11px]">
        <span className="border-r border-b border-slate-300 bg-slate-200" />
        {cols.map((c) => (
          <span key={c} className="border-r border-b border-slate-300 bg-slate-200 py-1 text-center font-semibold">
            {c}
          </span>
        ))}
        {rows.map((r, i) => (
          <div key={i} className="contents">
            <span className="border-r border-b border-slate-300 bg-slate-200 py-1.5 text-center">{i + 1}</span>
            {r.map((cell, j) => {
              const err = cell.startsWith("#") || cell.startsWith("-");
              return (
                <span
                  key={j}
                  className={`truncate border-r border-b border-slate-300 px-1 py-1.5 ${i === 0 ? "font-semibold" : ""} ${
                    err ? "bg-rose-100 font-semibold text-rose-600" : "bg-white"
                  }`}
                >
                  {cell}
                </span>
              );
            })}
          </div>
        ))}
      </div>
      <div className="absolute right-4 bottom-4 w-36 rotate-3 rounded-sm bg-yellow-200 p-2.5 text-[10px] leading-snug text-yellow-900 ">
        STOK MINYAK SELISIH 14!! cek gudang solo, tanya admin 😩
      </div>
      <div className="absolute bottom-6 left-6 -rotate-2 rounded-lg bg-white px-2.5 py-1.5 text-[10px] text-slate-500 ">
        12 file • 4 cabang • 3 versi berbeda
      </div>
    </Chrome>
  );
}

function OldWebsite() {
  return (
    <Chrome url="http://arunika-bangun.blogspot.com" dark>
      <div className="h-full bg-[#f4f1e8] p-4 font-serif text-slate-700">
        <div className="border-b-2 border-blue-900 pb-2 text-center">
          <p className="text-lg font-bold text-blue-900">PT ARUNIKA BANGUN PERSADA</p>
          <p className="text-[10px] italic">~ Welcome To Our Website ~</p>
        </div>
        <div className="mt-2 flex justify-center gap-3 text-[10px] text-blue-700 underline">
          <span>Home</span>
          <span>About</span>
          <span>Contact</span>
          <span>Guestbook</span>
        </div>
        <div className="mt-3 grid grid-cols-[1fr_1.4fr] gap-3">
          <div className="grid aspect-square place-items-center border border-dashed border-slate-400 bg-white text-slate-400">
            <ImageOff className="h-6 w-6" />
          </div>
          <div className="space-y-1.5 text-xs leading-snug">
            <p>Kami adalah perusahaan kontraktor yang bergerak di bidang...</p>
            <p className="text-[11px] text-slate-500">Last update: 2016</p>
            <p className="inline-block bg-yellow-200 px-1 text-[11px]">★ Pengunjung ke-000412 ★</p>
          </div>
        </div>
      </div>
      <div className="absolute right-4 bottom-4 flex items-center gap-1.5 rounded-lg bg-rose-600 px-3 py-1.5 text-xs font-semibold text-white">
        <AlertTriangle className="h-3.5 w-3.5" /> Tidak aman • Tidak responsif
      </div>
    </Chrome>
  );
}

function LostInSearch() {
  return (
    <Chrome url="google.com/search?q=dokter+gigi+terdekat" dark>
      <div className="h-full bg-white p-4">
        <div className="flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1.5 text-xs text-slate-600">
          <Search className="h-3.5 w-3.5" /> dokter gigi terdekat
        </div>
        <div className="mt-3 space-y-2.5">
          {["Klinik Gigi Pesaing A", "Klinik Pesaing B", "Direktori Klinik Kota", "Klinik Pesaing C"].map((t) => (
            <div key={t}>
              <p className="text-xs font-medium text-blue-700">{t}</p>
              <div className="mt-1 h-1.5 w-4/5 rounded bg-slate-100" />
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500">
          <span>1</span>
          <span>2</span>
          <span className="rounded bg-rose-100 px-2 py-0.5 font-semibold text-rose-600">3 ← klinik Anda</span>
        </div>
      </div>
      <div className="absolute right-4 bottom-4 rounded-lg bg-white px-3 py-1.5 text-xs text-slate-600 shadow-sm">
        Boost post: 4.120 tayang • <b className="text-rose-600">0 booking</b>
      </div>
    </Chrome>
  );
}

/* ------------------------------ AFTER ------------------------------ */

function CleanDashboard() {
  const bars = [30, 45, 40, 62, 55, 78, 70, 90];
  return (
    <Chrome url="app.sumberpangan.id/dashboard">
      <div className="flex h-full text-xs">
        <aside className="hidden w-24 flex-col gap-2 bg-emerald-950 p-3 sm:flex">
          <span className="mb-2 h-3 w-3 rounded bg-amber-400" />
          {["Dashboard", "Stok", "Penjualan", "Cabang", "Laporan"].map((m, i) => (
            <span key={m} className={`rounded-md px-1.5 py-1 ${i === 0 ? "bg-emerald-700 text-white" : "text-emerald-300/70"}`}>
              {m}
            </span>
          ))}
        </aside>
        <div className="flex flex-1 flex-col gap-2.5 bg-slate-50 p-3">
          <div className="grid grid-cols-3 gap-2">
            {[
              ["Omzet", "Rp 1,2 M", "+18%"],
              ["Selisih Stok", "0,6%", "-92%"],
              ["Order", "4.812", "+31%"],
            ].map(([l, v, d]) => (
              <div key={l} className="rounded-lg border border-slate-100 bg-white p-2 shadow-2xs">
                <p className="text-slate-600 font-medium">{l}</p>
                <p className="font-display text-sm font-bold text-emerald-950">{v}</p>
                <p className="font-semibold text-emerald-600">{d}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-1 flex-col rounded-lg border border-slate-100 bg-white p-2.5">
            <p className="font-semibold text-slate-600">Penjualan Mingguan  -  Semua Cabang</p>
            <div className="mt-2 flex flex-1 items-end gap-1.5">
              {bars.map((h, i) => (
                <span
                  key={i}
                  style={{ height: `${h}%` }}
                  className={`flex-1 rounded-t ${i === bars.length - 1 ? "bg-emerald-600" : "bg-emerald-400/60"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-4 bottom-4 flex items-center gap-1.5 rounded-lg bg-emerald-600 px-2.5 py-1.5 text-[10px] font-semibold text-white ">
        <CheckCircle2 className="h-3 w-3" /> Laporan harian terkirim ke owner
      </div>
    </Chrome>
  );
}

function ModernWebsite() {
  return (
    <Chrome url="https://arunikabangun.co.id">
      <div className="h-full bg-white">
        <div className="relative bg-emerald-950 px-5 pt-4 pb-6 text-white">
          <div className="flex items-center justify-between text-[10px]">
            <span className="font-display font-bold">ARUNIKA</span>
            <span className="flex gap-3 text-emerald-200">
              <span>Proyek</span>
              <span>Legalitas</span>
              <span>Kontak</span>
            </span>
          </div>
          <p className="mt-4 max-w-[70%] font-display text-base leading-tight font-bold sm:text-lg">
            Membangun Infrastruktur Berkelas Nasional
          </p>
          <span className="mt-3 inline-block rounded-full bg-white text-emerald-950 px-3 py-1 text-[10px] font-semibold">
            Unduh Company Profile
          </span>
        </div>
        <div className="grid grid-cols-4 gap-2 p-3">
          {[
            ["120+", "Proyek"],
            ["18 th", "Pengalaman"],
            ["ISO", "9001:2015"],
            ["SBU", "Grade 7"],
          ].map(([v, l]) => (
            <div key={l} className="rounded-lg bg-emerald-50 p-1.5 text-center text-[10px]">
              <p className="font-display font-bold text-emerald-950">{v}</p>
              <p className="text-slate-500">{l}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-2 px-3">
          {["bg-slate-100", "bg-slate-200", "bg-emerald-50"].map((g) => (
            <div key={g} className={`aspect-[4/3] rounded-lg ${g}`} />
          ))}
        </div>
      </div>
      <div className="absolute right-4 bottom-4 rounded-lg bg-white px-2.5 py-1.5 text-[10px] font-semibold text-emerald-700 ">
        Lighthouse 97 • Muat 1,8 dtk
      </div>
    </Chrome>
  );
}

function GrowthDashboard() {
  return (
    <Chrome url="ads.senyumsehat.id/roas">
      <div className="grid h-full grid-rows-[auto_1fr] gap-2.5 bg-slate-50 p-3 text-[10px]">
        <div className="grid grid-cols-3 gap-2">
          {[
            ["Booking", "+312%"],
            ["ROAS", "5.1x"],
            ["Biaya/Pasien", "-64%"],
          ].map(([l, v]) => (
            <div key={l} className="rounded-lg border border-slate-100 bg-white p-2 -sm">
              <p className="text-slate-400">{l}</p>
              <p className="font-display text-sm font-bold text-emerald-700">{v}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-[1.4fr_1fr] gap-2">
          <div className="flex flex-col rounded-lg border border-slate-100 bg-white p-2.5">
            <p className="flex items-center gap-1 font-semibold text-slate-600">
              <TrendingUp className="h-3 w-3 text-emerald-600" /> Prospek WhatsApp
            </p>
            <svg viewBox="0 0 200 80" preserveAspectRatio="none" className="mt-2 w-full flex-1">
              <defs>
                <linearGradient id="growth-fill" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0" stopColor="#10B981" stopOpacity="0.35" />
                  <stop offset="1" stopColor="#10B981" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0 72 L25 66 L50 68 L75 52 L100 48 L125 34 L150 30 L175 14 L200 6 L200 80 L0 80 Z" fill="url(#growth-fill)" />
              <path d="M0 72 L25 66 L50 68 L75 52 L100 48 L125 34 L150 30 L175 14 L200 6" fill="none" stroke="#047857" strokeWidth="2.5" />
            </svg>
          </div>
          <div className="space-y-1.5 rounded-lg border border-slate-100 bg-white p-2.5">
            <p className="font-semibold text-slate-600">Peringkat Google</p>
            {["dokter gigi terdekat", "behel gigi murah", "scaling gigi"].map((k) => (
              <div key={k} className="flex items-center justify-between gap-1">
                <span className="truncate text-slate-500">{k}</span>
                <span className="rounded bg-emerald-100 px-1 font-bold text-emerald-700">#1</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Chrome>
  );
}
