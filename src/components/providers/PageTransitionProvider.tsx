"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useScroll, useSpring } from "framer-motion";

export function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {/* Top Subtle Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-600 via-sky-400 to-blue-500 origin-left z-[100] pointer-events-none"
        style={{ scaleX }}
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
