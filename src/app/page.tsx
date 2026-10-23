import { BusinessProcessGuarantee } from "@/components/sections/BusinessProcessGuarantee";
import { ExecutiveTestimonial } from "@/components/sections/ExecutiveTestimonial";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { NationalVision } from "@/components/sections/NationalVision";
import { ProjectTabbedShowcase } from "@/components/sections/ProjectTabbedShowcase";

export default function Home() {
  return (
    <>
      <main id="main">
        {/* 1. Split Hero Section with integrated Client Logos Bar */}
        <Hero />

        {/* 2. Kedaulatan Teknologi & Visi (Company Identity & Core Principles) */}
        <NationalVision />

        {/* 3. Kami Pahami Proses Bisnis Anda Sebelum Merancang Software */}
        <BusinessProcessGuarantee />

        {/* 4. Solusi Nyata Dari Berbagai Proyek (Tabbed Showcase) */}
        <ProjectTabbedShowcase />

        {/* 5. Executive Centered Testimonial with Concentric Rings */}
        <ExecutiveTestimonial />
      </main>

      {/* 6. Comprehensive Multi-Column Enterprise Sitemap Footer */}
      <Footer />
    </>
  );
}
