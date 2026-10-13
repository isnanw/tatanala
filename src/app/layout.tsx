import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Newsreader, Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
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

const newsreader = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tatanala - Menata Sistem, Menuntaskan Kendala | Software House & Digital Studio",
  description:
    "Tatanala adalah studio rekayasa software & pemasaran digital utilitarian: profil perusahaan, sistem informasi kustom (ERP, inventaris, POS), SEO, dan periklanan terarah.",
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
    title: "Tatanala - Menata Sistem, Menuntaskan Kendala",
    description: "Bukan sekadar bikin website. Kami tuntaskan masalah operasional bisnis Anda.",
    locale: "id_ID",
    type: "website",
    siteName: "Tatanala",
  },
};

export const viewport: Viewport = {
  themeColor: "#111111",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="id"
      className={`${jakartaSans.variable} ${spaceGrotesk.variable} ${newsreader.variable} ${jetbrainsMono.variable} antialiased scroll-smooth`}
    >
      <body className="bg-[#FBFBFA] text-[#2F3437] font-sans selection:bg-[#EDF3EC] selection:text-[#346538]">
        <a
          href="#main"
          className="sr-only z-[100] rounded-none border border-[#111111] bg-[#111111] px-6 py-3 text-white focus:not-sr-only focus:fixed focus:top-6 focus:left-6 font-mono text-xs"
        >
          Lewati ke konten utama
        </a>
        <ConsultProvider>{children}</ConsultProvider>
      </body>
    </html>
  );
}
