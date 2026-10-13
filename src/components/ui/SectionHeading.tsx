import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
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
  id,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full bg-[#EDF3EC] px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.05em] text-[#346538]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#346538]" />
          {eyebrow}
        </span>
      )}
      <h2
        id={id}
        className={cn(
          "font-serif text-3xl font-normal tracking-[-0.025em] leading-[1.12] sm:text-4xl lg:text-[2.75rem] text-[#111111]",
          eyebrow ? "mt-4" : "mt-0",
        )}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-3.5 text-base leading-relaxed text-[#787774] max-w-2xl sm:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}
