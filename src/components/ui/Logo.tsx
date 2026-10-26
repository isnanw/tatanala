import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  tone?: "light" | "dark";
  showText?: boolean;
}

/** Official Vieria Techno Brand Logo applying public/images/logo-tight.png and public/images/logo-white.png */
export function Logo({ className, tone = "light", showText = true }: LogoProps) {
  const isDark = tone === "dark";
  const logoSrc = isDark ? "/images/logo-white.png" : "/images/logo-tight.png";

  return (
    <span className={cn("inline-flex items-center select-none group", className)}>
      {showText ? (
        <Image
          src={logoSrc}
          alt="Vieria Techno"
          width={220}
          height={79}
          priority
          className="h-8 sm:h-9 lg:h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
        />
      ) : (
        <Image
          src="/images/logo-icon.png"
          alt="Vieria Techno Icon"
          width={40}
          height={40}
          priority
          className="h-8 w-8 sm:h-9 sm:w-9 object-contain transition-transform duration-200 group-hover:scale-105"
        />
      )}
    </span>
  );
}
