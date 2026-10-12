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
  "relative inline-flex items-center justify-center gap-2 rounded-xl font-medium tracking-tight whitespace-nowrap " +
  "transition-all duration-200 select-none cursor-pointer " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-amber-500 to-orange-600 text-white border border-orange-600/80 hover:brightness-105 active:scale-[0.98]",
  emerald:
    "bg-emerald-950 text-white border border-emerald-900 hover:bg-emerald-900 active:scale-[0.98]",
  outline:
    "border border-black/[0.12] bg-white text-emerald-950 hover:border-emerald-700 hover:bg-emerald-50/60 active:scale-[0.98]",
  light:
    "bg-white text-emerald-950 border border-black/[0.08] hover:bg-emerald-50 active:scale-[0.98]",
  ghost:
    "text-emerald-950 hover:bg-black/[0.04] active:scale-[0.98]",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-4 text-xs font-semibold",
  md: "h-12 px-6 text-sm font-semibold",
  lg: "h-14 px-8 text-base font-semibold",
};

const motionProps = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
  transition: { type: "spring", stiffness: 450, damping: 25 },
} as const;

export function buttonClasses({ variant = "primary", size = "md" }: StyleProps = {}, className?: string) {
  return cn(base, variants[variant], sizes[size], className);
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
