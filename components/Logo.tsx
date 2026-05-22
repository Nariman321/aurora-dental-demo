export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-teal-deep via-teal to-mint shadow-soft">
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5 text-white"
          fill="currentColor"
          aria-hidden
        >
          <path d="M12 2.6c-2 0-3.4.7-5 .7s-3.5-.7-4.4 1.2c-.7 1.6 0 4 .7 6.7.6 2.2 1 5 1.7 7.5.6 2 1.7 3 2.6 3 1.4 0 1.4-2.5 2-4.6.5-1.7 1-3.1 2.4-3.1s1.9 1.4 2.4 3.1c.6 2.1.6 4.6 2 4.6.9 0 2-1 2.6-3 .7-2.5 1.1-5.3 1.7-7.5.7-2.7 1.4-5.1.7-6.7-.9-1.9-2.8-1.2-4.4-1.2s-3-.7-5-.7Z" />
        </svg>
        <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-coral ring-2 ring-bg" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="heading-display text-[19px] tracking-tight text-ink">
          Aurora<span className="text-teal">Dental</span>
        </span>
        <span className="text-[10px] uppercase tracking-[0.22em] text-ink-soft/70">
          Almaty · с 2014
        </span>
      </span>
    </span>
  );
}
