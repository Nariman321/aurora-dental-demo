"use client";

import { ChevronRight } from "lucide-react";

export function SwipeHint({ className = "" }: { className?: string }) {
  return (
    <div
      className={`md:hidden inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] text-ink-soft ${className}`}
      aria-hidden
    >
      <span>Листайте</span>
      <span className="inline-flex items-center">
        <ChevronRight className="h-3 w-3 -mr-1.5 animate-pulse" />
        <ChevronRight className="h-3 w-3" />
      </span>
    </div>
  );
}
