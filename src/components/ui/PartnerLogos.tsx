"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const PARTNERS = [
  { name: "Bank BRI", src: "/images/partners/bank-bri.png", width: 140, height: 40 },
  { name: "Bank Indonesia", src: "/images/partners/bank-indonesia.png", width: 160, height: 40 },
  { name: "BNI", src: "/images/partners/bank-bni.png", width: 110, height: 40 },
  { name: "Bank Mandiri", src: "/images/partners/bank-mandiri.png", width: 130, height: 40 },
  { name: "Bank BCA", src: "/images/partners/bank-bca.png", width: 115, height: 40 },
  { name: "Telin Telkom Group", src: "/images/partners/telin.png", width: 115, height: 40 },
  { name: "Universitas Gadjah Mada", src: "/images/partners/ugm.png", width: 155, height: 40 },
  { name: "Recare Professional", src: "/images/partners/recare.png", width: 130, height: 40 },
];

export function PartnerLogos() {
  const [isPaused, setIsPaused] = useState(false);

  // Quadruple array to guarantee zero gap on any screen size
  const duplicated = [...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS];

  return (
    <div
      className="relative w-full overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* Soft gradient edge masks */}
      <div className="pointer-events-none absolute left-0 inset-y-0 w-12 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 inset-y-0 w-12 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

      {/* Animated Marquee Strip */}
      <div className="flex w-max items-center py-1">
        <motion.div
          animate={isPaused ? {} : { x: ["0%", "-50%"] }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex items-center gap-12 sm:gap-16 pr-12 sm:pr-16"
        >
          {duplicated.map((partner, idx) => (
            <div
              key={`${partner.name}-${idx}`}
              className="flex items-center justify-center shrink-0 opacity-85 hover:opacity-100 transition-all duration-300 hover:scale-105 cursor-pointer"
              title={partner.name}
            >
              <Image
                src={partner.src}
                alt={partner.name}
                width={partner.width}
                height={partner.height}
                className="h-7 sm:h-8 w-auto object-contain transition-all duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
