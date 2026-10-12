import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Navbar } from "@/components/sections/Navbar";
import { Portfolio } from "@/components/sections/portfolio/Portfolio";
import { Pricing } from "@/components/sections/Pricing";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { TrustMetrics } from "@/components/sections/TrustMetrics";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Marquee />
        <ProblemSolution />
        <Services />
        <Pricing />
        <TrustMetrics />
        <Portfolio />
        <Process />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
