"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "emerald" | "outline" | "light" | "ghost";
type Size = "sm" | "md" | "lg";

interface StyleProps {
  variant?: Variant;
  size?: Size;
}

const base =
  "group relative inline-flex items-center justify-center gap-3 rounded-full font-medium tracking-tight whitespace-nowrap " +
  "transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] select-none cursor-pointer " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111] disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-[#111111] text-white border border-[#111111] hover:bg-[#262626] active:scale-[0.98] shadow-[0_2px_12px_rgba(0,0,0,0.08)]",
  emerald:
    "bg-[#064E3B] text-white border border-[#064E3B] hover:bg-[#047857] active:scale-[0.98] shadow-[0_2px_12px_rgba(6,78,59,0.15)]",
  outline:
    "border border-[#EAEAEA] bg-white text-[#111111] hover:bg-[#F9F9F8] hover:border-[#CCCCCC] active:scale-[0.98]",
  light:
    "bg-[#F7F6F3] text-[#111111] border border-[#EAEAEA] hover:bg-[#EAEAEA] active:scale-[0.98]",
  ghost:
    "text-[#2F3437] hover:bg-[#F7F6F3] hover:text-[#111111] active:scale-[0.98]",
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
