"use client";

import Image from "next/image";
import { useState } from "react";

const CLIENTS = [
  // { name: "Kabupaten Mimika", src: "/images/client/kabupaten-mimika.png", width: 80, height: 105 },
  { name: "PT Alger Karya Pratama", src: "/images/client/pt-alger.png", width: 230, height: 35 },
  { name: "Provitas", src: "/images/client/provitas.png", width: 100, height: 100 },
  { name: "KBPII", src: "/images/client/kbpii.png", width: 120, height: 46 },
  { name: "Kabupaten Puncak", src: "/images/client/kabupaten-puncak.png", width: 75, height: 110 },
  { name: "Recehku", src: "/images/client/recehku.png", width: 90, height: 90 },
  { name: "PT TRIJAYA ABADI SOLUTION", src: "/images/client/tas.png", width: 110, height: 62 },
];

export function PartnerLogos() {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicated twice for seamless pure CSS infinite marquee
  const duplicated = [...CLIENTS, ...CLIENTS];

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

      {/* Animated Marquee Strip - Pure CSS Compositor Animation (0% JS Main Thread Overhead) */}
      <div className="flex w-max items-center py-1.5 overflow-hidden">
        <div
          style={{ animationPlayState: isPaused ? "paused" : "running" }}
          className="flex items-center gap-14 sm:gap-20 pr-14 sm:pr-20 animate-[marquee_45s_linear_infinite] transform-gpu will-change-transform"
        >
          {duplicated.map((client, idx) => (
            <div
              key={`${client.name}-${idx}`}
              className="flex items-center justify-center shrink-0 opacity-75 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
              title={client.name}
            >
              <Image
                src={client.src}
                alt={client.name}
                width={client.width}
                height={client.height}
                loading="eager"
                priority={idx < 4}
                className="h-7 sm:h-8 w-auto max-h-8 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export { PartnerLogos as ClientLogos };
