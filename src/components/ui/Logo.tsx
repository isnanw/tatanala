import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  tone?: "light" | "dark";
  showText?: boolean;
}

/** Utilitarian minimalist "Tatanala" mark with crisp geometric geometry and zero gradients. */
export function Logo({ className, tone = "light", showText = true }: LogoProps) {
  const isDark = tone === "dark";
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg viewBox="0 0 32 32" className="h-7 w-7 shrink-0" aria-hidden>
        <rect width="32" height="32" rx="6" fill={isDark ? "#FFFFFF" : "#111111"} />
        <path d="M7 8h18v4h-7v12h-4V12H7z" fill={isDark ? "#111111" : "#FFFFFF"} />
        <rect x="20" y="16" width="5" height="8" rx="1.5" fill="#346538" />
      </svg>
      {showText && (
        <span
          className={cn(
            "font-serif text-lg font-normal tracking-[-0.02em]",
            isDark ? "text-white" : "text-[#111111]",
          )}
        >
          tatanala<span className="text-[#787774]">.</span>
        </span>
      )}
    </span>
  );
}
