import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Newsreader, Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import { ConsultProvider } from "@/components/consult/ConsultProvider";
import { Navbar } from "@/components/sections/Navbar";
import { PageTransitionProvider } from "@/components/providers/PageTransitionProvider";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import { SkipLink } from "@/components/ui/SkipLink";
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
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://tatanala.id"),
  alternates: {
    canonical: "/",
    languages: {
      "id-ID": "/",
      "en-US": "/en",
      "x-default": "/",
    },
  },
  title: "Vieria Techno | Jasa Pembuatan Software & IT Solutions Indonesia",
  description:
    "Software house dan konsultan IT terpercaya di Indonesia. Melayani pembuatan website korporat, sistem informasi custom (ERP), aplikasi bisnis, cloud, dan dashboard otomatisasi.",
  keywords: [
    // Pencarian Bahasa Indonesia
    "jasa pembuatan software",
    "software house Indonesia",
    "sistem informasi custom",
    "konsultan IT Indonesia",
    "jasa pembuatan aplikasi bisnis",
    "pembuatan ERP Indonesia",
    "jasa website perusahaan",
    "rekayasa software",
    "dashboard otomatisasi laporan",
    // Pencarian Bahasa Inggris / Global Google Search
    "custom software development Indonesia",
    "software development company Indonesia",
    "business software solutions",
    "managed IT services Indonesia",
    "cloud infrastructure solutions",
    "IT consulting Indonesia",
    "enterprise software development",
    "business process automation software",
  ],
  openGraph: {
    title: "Vieria Techno | Jasa Pembuatan Software & IT Solutions Indonesia",
    description:
      "Software house dan konsultan IT profesional: Solusi website bisnis, sistem operasional custom, dan dashboard laporan otomatis.",
    url: "/",
    locale: "id_ID",
    alternateLocale: ["en_US"],
    type: "website",
    siteName: "Vieria Techno IT Solutions",
    images: [
      {
        url: "/images/team.jpg",
        width: 1200,
        height: 630,
        alt: "Vieria Techno - Software & IT Solutions Indonesia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vieria Techno | Jasa Pembuatan Software & IT Solutions Indonesia",
    description:
      "Software house dan konsultan IT profesional: Solusi website bisnis, sistem operasional custom, dan dashboard laporan otomatis.",
    images: ["/images/team.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/logo-icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/images/logo-icon.png", sizes: "512x512", type: "image/png" },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#1E5E40",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="id"
      data-scroll-behavior="smooth"
      className={`${jakartaSans.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased scroll-smooth`}
    >
      <body className="bg-[#F8FAFC] text-slate-800 font-sans selection:bg-emerald-100 selection:text-emerald-950">
        <LanguageProvider>
          <SkipLink />
          <ConsultProvider>
            {/* Static Persistent Menu: Never moves or animates on route change */}
            <Navbar />
            <PageTransitionProvider>{children}</PageTransitionProvider>
          </ConsultProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
