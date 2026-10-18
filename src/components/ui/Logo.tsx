import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  tone?: "light" | "dark";
  showText?: boolean;
}

/** Modern IT Solutions "Tatanala" brand logo matching reference mockup */
export function Logo({ className, tone = "light", showText = true }: LogoProps) {
  const isDark = tone === "dark";
  return (
    <span className={cn("inline-flex items-center gap-2.5 group select-none", className)}>
      <span className="relative flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-700 to-blue-500 shadow-md shadow-blue-500/25">
        <svg viewBox="0 0 24 24" fill="none" className="h-4.5 w-4.5 text-white" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
        <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-sky-400 ring-2 ring-white" />
      </span>
      {showText && (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              "font-sans text-base font-bold tracking-tight",
              isDark ? "text-white" : "text-slate-900",
            )}
          >
            tatanala<span className="text-blue-600">.</span>
          </span>
          <span
            className={cn(
              "text-[9px] font-semibold uppercase tracking-widest mt-0.5",
              isDark ? "text-slate-400" : "text-slate-400",
            )}
          >
            IT Solutions
          </span>
        </span>
      )}
    </span>
  );
}

