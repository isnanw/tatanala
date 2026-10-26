"use client";

import { motion, useScroll } from "framer-motion";
import { usePathname } from "next/navigation";

export function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();

  return (
    <>
      {/* Top Subtle Scroll Progress Bar - Direct GPU Transform (No Heavy Spring Physics Lag) */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-emerald-700 via-amber-400 to-emerald-500 origin-left z-[100] pointer-events-none transform-gpu"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Smooth, Crisp Page Enter Animation on Route Change (No Blur / No Jitter) */}
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.25,
          ease: "easeOut",
        }}
        className="w-full"
      >
        {children}
      </motion.div>
    </>
  );
}
