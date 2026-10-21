import { BentoSolutions } from "@/components/sections/BentoSolutions";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { ContactSection } from "@/components/sections/ContactSection";
import { Faq } from "@/components/sections/Faq";
import { FieldDocs } from "@/components/sections/FieldDocs";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Leadership } from "@/components/sections/Leadership";
import { Marquee } from "@/components/sections/Marquee";
import { MobileShowcase } from "@/components/sections/MobileShowcase";
import { Navbar } from "@/components/sections/Navbar";
import { Pricing } from "@/components/sections/Pricing";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { SystemFlow } from "@/components/sections/SystemFlow";
import { VideoTestimonials } from "@/components/sections/VideoTestimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        {/* 1. Hero with 6-card showcase grid */}
        <Hero />
        {/* 2. Marquee partners & tech stack */}
        <Marquee />
        {/* 3. Leadership & Legal Integrity (4 Arch-top Portrait Cards) */}
        <Leadership />
        {/* 4. Bento Solutions Grid */}
        <BentoSolutions />
        {/* 5. System Flowchart Architecture (Diagnosa -> 3 Pillars -> WhatsApp) */}
        <SystemFlow />
        {/* 6. Case Studies with Morphing Modals */}
        <CaseStudies />
        {/* 7. Video Testimonials (3 Vertical Smartphone Cards) */}
        <VideoTestimonials />
        {/* 8. Formal Pricing Section (Deep Navy #07101E Theme) */}
        <Pricing />
        {/* 9. 5-Step Process Timeline */}
        <ProcessTimeline />
        {/* 10. Field Activities & Client Training Documentation Gallery */}
        <FieldDocs />
        {/* 11. Mobile & Multi-Device Accessibility Showcase */}
        <MobileShowcase />
        {/* 12. Formal Corporate FAQ */}
        <Faq />
        {/* 13. Official Inquiry Form & Registered Office Address */}
        <ContactSection />
      </main>
      {/* 14. Formal Corporate Footer */}
      <Footer />
    </>
  );
}

