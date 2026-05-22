import { Sparkles } from "lucide-react";

export function DemoBanner() {
  return (
    <div className="relative w-full bg-ink text-white">
      <div className="absolute inset-x-0 top-0 h-px animated-underline" />
      <div className="container-x flex items-center justify-center gap-2 py-2 text-[11px] uppercase tracking-[0.18em] text-white/85 sm:text-xs">
        <Sparkles className="h-3.5 w-3.5 text-mint shrink-0" aria-hidden />
        <span className="text-center leading-tight">
          <span className="font-bold text-mint">DEMO</span>
          <span className="mx-2 text-white/40">·</span>
          <span className="hidden sm:inline">Предварительный макет сайта</span>
          <span className="sm:hidden">Макет сайта</span>
          <span className="mx-2 text-white/40">·</span>
          <span className="text-white/70">Для запуска свяжитесь </span>
          <a
            href="https://wa.me/77053173264"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-white underline decoration-coral decoration-2 underline-offset-4 transition hover:text-coral hover:decoration-mint"
          >
            с разработчиком
          </a>
        </span>
      </div>
    </div>
  );
}
