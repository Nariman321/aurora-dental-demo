import { ShieldCheck } from "lucide-react";

const items = [
  "Straumann · Швейцария",
  "Nobel Biocare · США",
  "IPS e.max · Liechtenstein",
  "Invisalign · USA",
  "Sirona Dentsply",
  "Carl Zeiss · микроскопы",
  "Planmeca · Финляндия",
  "Septodont · Франция",
  "3M ESPE",
  "Vita · Германия",
];

export function Marquee() {
  return (
    <section
      aria-label="Партнёры и оборудование"
      className="border-y border-line bg-white/60 backdrop-blur"
    >
      <div className="container-x flex flex-col gap-3 py-6 md:flex-row md:items-center md:gap-10">
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-ink-soft md:shrink-0">
          <ShieldCheck className="h-4 w-4 text-teal-deep" />
          Сертифицированное оборудование
        </div>
        <div className="relative flex-1 overflow-hidden no-scrollbar">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-bg via-bg/70 to-transparent"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-bg via-bg/70 to-transparent"
            aria-hidden
          />
          <div className="marquee flex w-max gap-10 whitespace-nowrap text-sm md:text-base font-medium text-ink-soft">
            {[...items, ...items].map((it, i) => (
              <span key={i} className="inline-flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-coral" />
                {it}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
