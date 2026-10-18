"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "blue" | "emerald" | "outline" | "light" | "ghost";
type Size = "sm" | "md" | "lg";

interface StyleProps {
  variant?: Variant;
  size?: Size;
}

const base =
  "group relative inline-flex items-center justify-center gap-3 rounded-full font-medium tracking-tight whitespace-nowrap " +
  "transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] select-none cursor-pointer " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-slate-900 text-white border border-slate-900 hover:bg-slate-800 active:scale-[0.98] shadow-sm",
  blue:
    "bg-blue-600 text-white border border-blue-600 hover:bg-blue-700 active:scale-[0.98] shadow-sm shadow-blue-500/25",
  emerald:
    "bg-[#064E3B] text-white border border-[#064E3B] hover:bg-[#047857] active:scale-[0.98] shadow-sm",
  outline:
    "border border-slate-200 bg-white text-slate-800 hover:bg-slate-50 hover:border-slate-300 active:scale-[0.98] shadow-xs",
  light:
    "bg-slate-100 text-slate-900 border border-slate-200 hover:bg-slate-200 active:scale-[0.98]",
  ghost:
    "text-slate-600 hover:bg-slate-100 hover:text-slate-900 active:scale-[0.98]",
};

const sizes: Record<Size, string> = {
  sm: "h-10 pl-4 pr-3 text-xs font-semibold",
  md: "h-12 pl-5.5 pr-4 text-sm font-semibold",
  lg: "h-14 pl-7 pr-4.5 text-base font-semibold",
};

const motionProps = {
  whileHover: { scale: 1.01 },
  whileTap: { scale: 0.98 },
  transition: { duration: 0.2, ease: [0.32, 0.72, 0, 1] },
} as const;

export function buttonClasses({ variant = "primary", size = "md" }: StyleProps = {}, className?: string) {
  return cn(base, variants[variant], sizes[size], className);
}

/**
 * High-End "Button-in-Button" Trailing Icon Architecture:
 * The icon sits inside its own distinct circular wrapper flush with right padding,
 * translating diagonally and scaling slightly on hover to produce internal kinetic tension.
 */
export function ButtonIconBadge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "grid h-7 w-7 sm:h-8 sm:w-8 shrink-0 place-items-center rounded-full bg-white/20 transition-all duration-300 " +
          "group-hover:translate-x-1 group-hover:-translate-y-[1px] group-hover:scale-105",
        className,
      )}
    >
      {children}
    </span>
  );
}

export type ButtonProps = HTMLMotionProps<"button"> & StyleProps;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant, size, className, type = "button", ...props },
  ref,
) {
  return (
    <motion.button
      ref={ref}
      type={type}
      className={buttonClasses({ variant, size }, className)}
      {...motionProps}
      {...props}
    />
  );
});

export type ButtonLinkProps = HTMLMotionProps<"a"> & StyleProps;

export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(function ButtonLink(
  { variant, size, className, ...props },
  ref,
) {
  return (
    <motion.a ref={ref} className={buttonClasses({ variant, size }, className)} {...motionProps} {...props} />
  );
});
