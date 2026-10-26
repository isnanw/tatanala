import type { Metadata } from "next";
import { Footer } from "@/components/sections/Footer";
import { Leadership } from "@/components/sections/Leadership";
import { SubpageHero } from "@/components/sections/SubpageHero";
import { NationalVision } from "@/components/sections/NationalVision";
import { BusinessProcessGuarantee } from "@/components/sections/BusinessProcessGuarantee";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";

export const metadata: Metadata = {
  alternates: {
    canonical: "/tentang-kami",
    languages: { "id-ID": "/tentang-kami", "en-US": "/en/about", "x-default": "/tentang-kami" },
  },
  title: "Tentang Vieria Techno | Software Engineering Company Indonesia",
  description:
    "Mengenal Vieria Techno: studio rekayasa perangkat lunak dan penyedia solusi sistem informasi yang siap melayani sistem custom maupun platform siap pakai.",
  keywords: [
    "Tentang Vieria Techno",
    "Software House Indonesia",
    "Konsultan IT Terpercaya",
    "Solusi Sistem Informasi",
    "Studio Rekayasa Software",
    "software engineering company Indonesia",
    "IT solutions provider Indonesia",
    "custom software development partner",
    "trusted software development company",
  ],
};

export default function TentangKamiPage() {
  return (
    <>
      <main className="bg-[#F8FAFC]">
        {/* Modern Executive Subpage Hero with 3 Engineering Values */}
        <SubpageHero
          breadcrumb="Tentang Vieria Techno"
          badge="Profil Studio Rekayasa &amp; Komitmen Teknis"
          title="Membangun Kepercayaan Melalui Rekayasa Software yang Andal"
          description="Vieria Techno hadir sebagai mitra rekayasa perangkat lunak bagi bisnis dan organisasi di Indonesia yang mengutamakan kerapian arsitektur, keamanan data, dan keandalan sistem jangka panjang."
          headerBgImage="/images/team-office.jpg"
          points={[
            {
              iconName: "shield",
              badge: "Kedaulatan & NDA",
              title: "Kedaulatan Data & Privasi",
              description: "Seluruh data bisnis, skema keuangan, dan alur operasional klien dilindungi NDA bermaterai dengan kontrol hak akses mandiri.",
              actionLabel: "Tinjau Komitmen Legal",
              actionHref: "#kepemimpinan",
            },
            {
              iconName: "layers",
              badge: "Arsitektur Bersih",
              title: "Transparansi Rekayasa",
              description: "Pengembangan sistem mengacu pada dokumen SRS terstruktur. Tanpa fitur tersembunyi dan mudah diintegrasikan ke ekosistem internal.",
              actionLabel: "Lihat 5 Tahap Kerja",
              actionHref: "#metodologi",
            },
            {
              iconName: "headphones",
              badge: "Garansi & SLA",
              title: "Pendampingan & Pelatihan",
              description: "Kami mendampingi operasional pasca-rilis dengan pelatihan staf menyeluruh, garansi bug 100%, serta hotline respon cepat.",
              actionLabel: "Pelajari Jaminan SLA",
              actionHref: "#jaminan-proses",
            },
          ]}
        />

        {/* National Digital Vision */}
        <NationalVision />

        {/* Leadership & Legal Standing */}
        <Leadership />

        {/* Business Process & Quality Guarantee */}
        <BusinessProcessGuarantee />

        {/* 5-Step Execution Methodology */}
        <ProcessTimeline />
      </main>
      <Footer />
    </>
  );
}
