/** Tiny className joiner (avoids an extra clsx dependency). */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/** Build a WhatsApp click-to-chat URL. */
export function waLink(phone: string, text: string): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

/** Shared easing curve for a calm, premium feel. */
export const EASE_OUT = [0.22, 1, 0.36, 1] as const;
