import { MARQUEE_ITEMS } from "@/data/content";

/** Infinite CSS marquee with hard 1px borders and crisp 24px vertical padding. */
export function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <section aria-label="Sorotan layanan" className="relative border-b border-black/[0.08] bg-emerald-950 py-6">
      <div className="mask-fade-x group flex overflow-hidden">
        <ul className="flex w-max shrink-0 animate-marquee items-center gap-6 pr-6 group-hover:[animation-play-state:paused]">
          {items.map(({ label, icon: Icon }, i) => (
            <li
              key={`${label}-${i}`}
              aria-hidden={i >= MARQUEE_ITEMS.length}
              className="flex items-center gap-6"
            >
              <span className="inline-flex items-center gap-2.5 border border-emerald-800 bg-emerald-900/60 px-4 py-2 text-xs font-semibold tracking-wide whitespace-nowrap text-emerald-100 uppercase font-mono">
                <Icon className="h-4 w-4 text-emerald-300" aria-hidden />
                {label}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" aria-hidden />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
