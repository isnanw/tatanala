import { BusinessProcessGuarantee } from "@/components/sections/BusinessProcessGuarantee";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { ContactSection } from "@/components/sections/ContactSection";
import { ExecutiveTestimonial } from "@/components/sections/ExecutiveTestimonial";
import { Faq } from "@/components/sections/Faq";
import { FieldDocs } from "@/components/sections/FieldDocs";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Leadership } from "@/components/sections/Leadership";
import { NationalVision } from "@/components/sections/NationalVision";
import { Navbar } from "@/components/sections/Navbar";
import { PreFooterSupportBanner } from "@/components/sections/PreFooterSupportBanner";
import { ProjectTabbedShowcase } from "@/components/sections/ProjectTabbedShowcase";
import { ThreePillarSolutions } from "@/components/sections/ThreePillarSolutions";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        {/* 1. Split Hero Section with integrated Client Logos Bar */}
        <Hero />

        {/* 2. Kedaulatan Teknologi & Visi (Company Identity & Core Principles) */}
        <NationalVision />

        {/* 3. 3-Pillar Solution Cards (Web, Sistem Custom, Dashboard Otomatis) */}
        <ThreePillarSolutions />

        {/* 4. Kami Pahami Proses Bisnis Anda Sebelum Merancang Software */}
        <BusinessProcessGuarantee />

        {/* 5. Solusi Nyata Dari Berbagai Proyek (Tabbed Showcase) */}
        <ProjectTabbedShowcase />

        {/* 7. Executive Centered Testimonial with Concentric Rings */}
        <ExecutiveTestimonial />

        {/* 8. Field Activities & Engineering Quality Gallery */}
        <FieldDocs />

        {/* 9. Leadership & Legal Integrity */}
        <Leadership />

        {/* 10. Formal Corporate FAQ Accordion */}
        <Faq />

        {/* 11. Pre-Footer Support Banner ("Masih Bertahan dengan Alur Kerja Manual yang Rentan?") */}
        <PreFooterSupportBanner />

        {/* 12. Official Inquiry Form & Registered Office Address */}
        <ContactSection />
      </main>

      {/* 13. Comprehensive Multi-Column Enterprise Sitemap Footer */}
      <Footer />
    </>
  );
}
