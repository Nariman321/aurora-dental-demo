"use client";

import { useEffect, useState } from "react";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";
import { motion, AnimatePresence } from "motion/react";

const links = [
  { href: "#services", label: "Услуги" },
  { href: "#prices", label: "Цены" },
  { href: "#doctors", label: "Врачи" },
  { href: "#cases", label: "Кейсы" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#contacts", label: "Контакты" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="relative">
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "bg-bg/85 backdrop-blur-xl border-b border-line/80"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav className="container-x flex items-center justify-between py-3.5 md:py-4">
          <a href="#top" className="group" aria-label="Aurora Dental">
            <Logo />
          </a>

          <div className="hidden lg:flex items-center gap-1 rounded-full bg-white/60 backdrop-blur-md p-1.5 ring-1 ring-line shadow-soft">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative rounded-full px-3.5 py-1.5 text-sm font-medium text-ink-soft transition-colors hover:text-ink"
              >
                <span className="relative z-10">{l.label}</span>
                <span className="absolute inset-0 rounded-full bg-mint-soft opacity-0 transition-opacity hover:opacity-100" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="tel:+77272583000"
              className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-teal transition-colors"
            >
              <Phone className="h-4 w-4" aria-hidden />
              +7 727 258 30 00
            </a>
            <a
              href="#book"
              className="group relative inline-flex items-center gap-1.5 overflow-hidden rounded-full bg-ink px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-teal-deep hover:shadow-lift active:scale-95"
            >
              <span className="relative z-10">Записаться</span>
              <ArrowUpRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-teal via-coral to-teal transition-transform duration-700 group-hover:translate-x-0" />
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden grid place-items-center h-10 w-10 rounded-full ring-1 ring-line bg-white/70 transition hover:bg-white"
              aria-label="Меню"
              aria-expanded={open}
            >
              {open ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden border-b border-line bg-bg shadow-soft"
          >
            <div className="container-x py-4 grid gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-base font-semibold text-ink transition-colors hover:bg-mint-soft"
                >
                  {l.label}
                  <ArrowUpRight className="h-4 w-4 text-ink-soft" />
                </a>
              ))}
              <a
                href="tel:+77272583000"
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-ink py-3 text-sm font-semibold text-white"
              >
                <Phone className="h-4 w-4" />
                +7 727 258 30 00
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
