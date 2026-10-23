"use client";

import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ShapeDividerProps {
  variant?: "curve" | "wave" | "slant" | "arch";
  position?: "top" | "bottom";
  nextBgColor: string; // color of the adjacent section (e.g. "#F8FAFC", "#FFFFFF", "#07101E")
  secondaryColor?: string; // subtle layered accent wave
  className?: string;
  flipX?: boolean;
  ornament?: {
    icon?: LucideIcon;
    label?: string;
  };
}

export function ShapeDivider({
  variant = "curve",
  position = "bottom",
  nextBgColor = "#F8FAFC",
  secondaryColor,
  className = "",
  flipX = false,
  ornament,
}: ShapeDividerProps) {
  const isBottom = position === "bottom";

  return (
    <div
      aria-hidden="true"
      className={`absolute left-0 right-0 w-full overflow-hidden leading-none pointer-events-none select-none z-10 ${
        isBottom ? "bottom-0" : "top-0"
      } ${className}`}
      style={{
        transform: `${flipX ? "scaleX(-1)" : ""} ${!isBottom ? "rotate(180deg)" : ""}`,
      }}
    >
      {/* 1. Smooth Gentle Curve / Arch */}
      {variant === "curve" && (
        <svg
          viewBox="0 0 1440 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="relative block w-full h-8 sm:h-12 lg:h-16"
        >
          {secondaryColor && (
            <path
              d="M0,16 C360,56 1080,56 1440,16 L1440,64 L0,64 Z"
              fill={secondaryColor}
            />
          )}
          <path
            d="M0,28 C360,64 1080,64 1440,28 L1440,64 L0,64 Z"
            fill={nextBgColor}
          />
        </svg>
      )}

      {/* 2. Dynamic Sinusoidal Wave */}
      {variant === "wave" && (
        <svg
          viewBox="0 0 1440 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="relative block w-full h-9 sm:h-14 lg:h-18"
        >
          {secondaryColor && (
            <path
              d="M0,18 C280,55 540,5 820,38 C1100,72 1300,24 1440,42 L1440,72 L0,72 Z"
              fill={secondaryColor}
            />
          )}
          <path
            d="M0,32 C260,68 520,16 800,48 C1080,80 1280,30 1440,50 L1440,72 L0,72 Z"
            fill={nextBgColor}
          />
        </svg>
      )}

      {/* 3. Modern Angled Slant */}
      {variant === "slant" && (
        <svg
          viewBox="0 0 1440 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="relative block w-full h-7 sm:h-10 lg:h-14"
        >
          {secondaryColor && (
            <polygon points="0,0 1440,24 1440,56 0,56" fill={secondaryColor} />
          )}
          <polygon points="0,18 1440,38 1440,56 0,56" fill={nextBgColor} />
        </svg>
      )}

      {/* 4. Elegant Convex Arch */}
      {variant === "arch" && (
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="relative block w-full h-8 sm:h-12 lg:h-16"
        >
          <path
            d="M0,0 Q720,60 1440,0 L1440,60 L0,60 Z"
            fill={nextBgColor}
          />
        </svg>
      )}

      {/* Optional Floating Boundary Ornament */}
      {ornament && (
        <div className="absolute inset-x-0 bottom-2 sm:bottom-3 flex justify-center items-center pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 8 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-xs text-slate-700 transform-gpu"
          >
            {ornament.icon && (
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                <ornament.icon className="h-2.5 w-2.5" />
              </span>
            )}
            {ornament.label && (
              <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-slate-600 font-mono">
                {ornament.label}
              </span>
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
}
