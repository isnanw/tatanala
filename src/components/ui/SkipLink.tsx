"use client";

import { localize, useLanguage } from "@/components/providers/LanguageProvider";

export function SkipLink() {
  const { language } = useLanguage();

  return (
    <a
      href="#main"
      className="sr-only z-[100] rounded-none border border-blue-600 bg-blue-600 px-6 py-3 text-white focus:not-sr-only focus:fixed focus:top-6 focus:left-6 font-mono text-xs"
    >
      {localize("Lewati ke konten utama", language)}
    </a>
  );
}
