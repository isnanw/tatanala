import { MARQUEE_ITEMS } from "@/data/content";

/** Minimalist marquee ticker with warm bone background and 1px #EAEAEA border. */
export function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <section aria-label="Sorotan layanan" className="relative border-b border-[#EAEAEA] bg-[#F9F9F8] py-4">
      <div className="mask-fade-x group flex overflow-hidden">
        <ul className="flex w-max shrink-0 animate-marquee items-center gap-6 pr-6 group-hover:[animation-play-state:paused]">
          {items.map(({ label, icon: Icon }, i) => (
            <li
              key={`${label}-${i}`}
              aria-hidden={i >= MARQUEE_ITEMS.length}
              className="flex items-center gap-6"
            >
              <span className="inline-flex items-center gap-2 rounded-md border border-[#EAEAEA] bg-white px-3 py-1.5 text-xs font-medium tracking-wide whitespace-nowrap text-[#2F3437] font-mono">
                <Icon className="h-3.5 w-3.5 text-[#787774]" aria-hidden />
                {label}
              </span>
              <span className="h-1 w-1 rounded-full bg-[#D4D4D4]" aria-hidden />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
