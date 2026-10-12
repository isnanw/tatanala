import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import { ConsultProvider } from "@/components/consult/ConsultProvider";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tatanala — Menata Sistem, Menuntaskan Kendala | Software House & Digital Studio",
  description:
    "Tatanala adalah digital tech studio & software house end-to-end: website company profile, sistem informasi kustom (ERP, inventaris, POS), SEO, dan Google/Meta Ads terukur untuk pengusaha & UMKM.",
  keywords: [
    "software house",
    "jasa pembuatan website company profile",
    "sistem informasi kustom",
    "ERP UMKM",
    "jasa SEO",
    "Google Ads",
    "Meta Ads",
  ],
  openGraph: {
    title: "Tatanala — Menata Sistem, Menuntaskan Kendala",
    description: "Bukan sekadar bikin website. Kami tuntaskan masalah operasional bisnis Anda.",
    locale: "id_ID",
    type: "website",
    siteName: "Tatanala",
  },
};

export const viewport: Viewport = {
  themeColor: "#064E3B",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${jakartaSans.variable} ${spaceGrotesk.variable} antialiased`}>
      <body className="bg-white text-slate-800 font-sans selection:bg-emerald-100 selection:text-emerald-950">
        <a
          href="#main"
          className="sr-only z-[100] rounded-none border border-black bg-emerald-950 px-6 py-3 text-white focus:not-sr-only focus:fixed focus:top-6 focus:left-6"
        >
          Lewati ke konten utama
        </a>
        <ConsultProvider>{children}</ConsultProvider>
      </body>
    </html>
  );
}
