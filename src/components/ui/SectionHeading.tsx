import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  id?: string;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  id,
  className,
}: SectionHeadingProps) {
  const dark = tone === "dark";
  return (
    <Reveal className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      <span
        className={cn(
          "inline-flex items-center gap-2 rounded-md border px-3 py-1 font-mono text-xs font-semibold uppercase tracking-[0.12em]",
          dark
            ? "border-emerald-700/80 bg-emerald-900/60 text-emerald-200"
            : "border-black/[0.08] bg-slate-50 text-emerald-900",
        )}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-amber-500" aria-hidden />
        {eyebrow}
      </span>
      <h2
        id={id}
        className={cn(
          "mt-6 text-3xl font-bold tracking-tight leading-[1.15] sm:text-4xl lg:text-[2.65rem]",
          dark ? "text-white" : "text-emerald-950",
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("mt-6 text-base leading-relaxed sm:text-lg", dark ? "text-emerald-100/80" : "text-slate-600")}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
