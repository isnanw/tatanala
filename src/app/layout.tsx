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
  title: "Tatanala - Smarter IT. Stronger Business. | Cloud & Infrastructure Solutions",
  description:
    "We deliver robust cloud, network and IT infrastructure solutions tailored to your business needs. 24/7 managed support, zero-trust security, and scalable cloud systems.",
  keywords: [
    "IT solutions",
    "cloud infrastructure",
    "managed IT services",
    "network security",
    "cloud migration",
    "cybersecurity",
    "enterprise IT",
  ],
  openGraph: {
    title: "Tatanala - Smarter IT. Stronger Business.",
    description: "Robust cloud, network and IT infrastructure solutions tailored to your enterprise.",
    locale: "en_US",
    type: "website",
    siteName: "Tatanala IT Solutions",
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
  themeColor: "#2563EB",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${jakartaSans.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased scroll-smooth`}
    >
      <body className="bg-[#F8FAFC] text-slate-800 font-sans selection:bg-blue-100 selection:text-blue-900">
        <a
          href="#main"
          className="sr-only z-[100] rounded-none border border-blue-600 bg-blue-600 px-6 py-3 text-white focus:not-sr-only focus:fixed focus:top-6 focus:left-6 font-mono text-xs"
        >
          Skip to main content
        </a>
        <ConsultProvider>{children}</ConsultProvider>
      </body>
    </html>
  );
}
