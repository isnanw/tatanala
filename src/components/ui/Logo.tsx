import { useId } from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  tone?: "light" | "dark";
  showText?: boolean;
}

/** Geometric "T" built from architectural blocks — structure (emerald) + momentum (amber). */
export function Logo({ className, tone = "light", showText = true }: LogoProps) {
  const id = useId();
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg viewBox="0 0 40 40" className="h-9 w-9 shrink-0" aria-hidden>
        <defs>
          <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#047857" />
            <stop offset="1" stopColor="#064E3B" />
          </linearGradient>
        </defs>
        <rect width="40" height="40" rx="11" fill={`url(#${id}-bg)`} />
        <path d="M9 11h22v5h-8.5v14h-5V16H9z" fill="#A7F3D0" />
        <rect x="25" y="20" width="6" height="10" rx="1.6" fill="#F59E0B" />
        <rect x="9" y="24" width="6" height="6" rx="1.6" fill="#10B981" />
      </svg>
      {showText && (
        <span
          className={cn(
            "font-display text-xl font-extrabold tracking-tight",
            tone === "dark" ? "text-white" : "text-emerald-950",
          )}
        >
          Tata<span className={tone === "dark" ? "text-emerald-300" : "text-emerald-600"}>nala</span>
        </span>
      )}
    </span>
  );
}
