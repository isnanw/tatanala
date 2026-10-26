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
  title: "Jasa Software & Custom IT Solutions Indonesia | Vieria Techno",
  description:
    "Vieria Techno menyediakan jasa software, sistem informasi custom, cloud, dan infrastruktur IT di Indonesia. Custom software and managed IT solutions built for business growth.",
  keywords: [
    "jasa pembuatan software",
    "software house Indonesia",
    "sistem informasi custom",
    "konsultan IT Indonesia",
    "jasa pembuatan aplikasi bisnis",
    "custom software development Indonesia",
    "software development company Indonesia",
    "business software solutions",
    "managed IT services",
    "cloud infrastructure solutions",
    "IT consulting Indonesia",
    "enterprise software development",
    "IT solutions",
    "cloud infrastructure",
    "managed IT services",
    "network security",
    "cloud migration",
    "cybersecurity",
    "enterprise IT",
  ],
  openGraph: {
    title: "Vieria Techno | Software & IT Solutions for Business",
    description: "Jasa software dan solusi IT bisnis dari Indonesia. Custom software and managed IT solutions built for business growth.",
    locale: "id_ID",
    alternateLocale: ["en_US"],
    type: "website",
    siteName: "Vieria Techno IT Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vieria Techno | Software & IT Solutions for Business",
    description: "Jasa software dan solusi IT bisnis dari Indonesia. Custom software and managed IT solutions built for business growth.",
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
      <body className="bg-[#F8FAFC] text-slate-800 font-sans selection:bg-blue-100 selection:text-blue-900">
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
