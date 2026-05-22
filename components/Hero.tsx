"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Star,
  ShieldCheck,
  Sparkles,
  Activity,
  Phone,
} from "lucide-react";

const stats = [
  { value: "11", label: "лет в Алматы" },
  { value: "24 000+", label: "счастливых улыбок" },
  { value: "5 лет", label: "гарантии на работы" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden gradient-mesh pt-6 sm:pt-10 md:pt-14"
    >
      {/* decorative blobs (smaller on mobile) */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[320px] w-[320px] sm:h-[520px] sm:w-[520px] -translate-x-1/2 rounded-full bg-mint blur-[80px] sm:blur-[120px] opacity-50" />
      <div className="pointer-events-none absolute right-[-20%] top-40 h-[260px] w-[260px] sm:h-[420px] sm:w-[420px] rounded-full bg-coral/30 blur-[80px] sm:blur-[120px] opacity-60" />

      <div className="container-x relative">
        {/* badge */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur-md px-3.5 py-1.5 ring-1 ring-line shadow-soft">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-teal pulse-ring" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
            </span>
            <span className="text-[11px] sm:text-xs font-semibold tracking-wide text-ink">
              Принимаем сегодня · Алматы
            </span>
          </div>
        </motion.div>

        {/* heading */}
        <motion.h1
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } },
          }}
          className="heading-bold mx-auto mt-5 sm:mt-6 max-w-5xl text-center text-[40px] leading-[1.02] sm:text-6xl md:text-7xl lg:text-[88px] text-ink text-balance"
        >
          {[
            "Стоматология,",
            "которая возвращает",
          ].map((line, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 28 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              className="block"
            >
              {line}
            </motion.span>
          ))}
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 28 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
              },
            }}
            className="relative block pb-3 sm:pb-6"
          >
            <span className="relative z-10 bg-gradient-to-r from-teal via-teal-deep to-coral bg-clip-text text-transparent">
              желание улыбаться
            </span>
            <svg
              className="absolute bottom-0 left-1/2 -translate-x-1/2 h-2 sm:h-3 w-[68%] text-coral"
              viewBox="0 0 300 16"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden
            >
              <motion.path
                d="M2 11 C 60 2, 120 16, 180 6 S 280 2, 298 9"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 1.1, duration: 1.4, ease: "easeInOut" }}
              />
            </svg>
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mx-auto mt-5 sm:mt-7 max-w-2xl text-center text-[15px] leading-relaxed sm:text-lg text-ink-soft text-balance px-2"
        >
          Цифровая 3D-диагностика, безболезненное лечение под микроскопом
          и эстетика мирового уровня. От первой консультации до белоснежной
          улыбки — за одно посещение.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-3"
        >
          <a
            href="#book"
            className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-2 overflow-hidden rounded-full bg-ink px-7 py-4 text-base font-semibold text-white shadow-soft transition-all duration-300 hover:shadow-lift hover:-translate-y-0.5 active:scale-[0.98]"
          >
            <span className="relative z-10">Бесплатная консультация</span>
            <ArrowUpRight className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-teal-deep via-teal to-coral transition-transform duration-700 group-hover:translate-x-0" />
          </a>
          <a
            href="tel:+77272583000"
            className="sm:hidden group inline-flex items-center justify-center gap-2 rounded-full bg-white/80 backdrop-blur px-6 py-4 text-base font-semibold text-ink ring-1 ring-line transition-all duration-300 active:scale-[0.98]"
          >
            <Phone className="h-4 w-4" />
            +7 727 258 30 00
          </a>
          <a
            href="#services"
            className="hidden sm:inline-flex group items-center justify-center gap-2 rounded-full bg-white/80 backdrop-blur px-6 py-4 text-base font-semibold text-ink ring-1 ring-line transition-all duration-300 hover:bg-white hover:ring-teal/30 hover:shadow-soft"
          >
            Услуги и цены
            <span className="grid place-items-center h-6 w-6 rounded-full bg-mint-soft text-teal-deep transition-transform group-hover:translate-x-1">
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </a>
        </motion.div>

        {/* trust row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.05 }}
          className="mx-auto mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-x-5 sm:gap-x-6 gap-y-2 text-[13px] sm:text-sm"
        >
          <div className="flex items-center gap-2">
            <div className="flex">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-gold text-gold"
                  strokeWidth={1.5}
                />
              ))}
            </div>
            <span className="font-semibold text-ink">4,98</span>
            <span className="text-ink-soft">· 1 240 отзывов</span>
          </div>
          <span className="hidden sm:block h-4 w-px bg-line" />
          <div className="flex items-center gap-2 text-ink-soft">
            <ShieldCheck className="h-4 w-4 text-teal-deep" />
            <span>Лицензия МЗ РК · Гарантия до 5 лет</span>
          </div>
        </motion.div>

        {/* hero artwork — abstract dental composition */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto mt-10 sm:mt-12 max-w-6xl"
        >
          <div className="relative aspect-[4/5] sm:aspect-[16/8] w-full overflow-hidden rounded-[22px] sm:rounded-[28px] shadow-lift">
            {/* photo of modern dental clinic */}
            <Image
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=2400&q=80"
              alt="Современная стоматологическая клиника Aurora Dental"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
              className="object-cover"
            />
            {/* dark gradient overlay for legibility of floating cards */}
            <div className="absolute inset-0 bg-gradient-to-br from-ink/55 via-ink/25 to-teal-deep/35" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />

            {/* floating UI cards */}
            <div className="absolute left-3 top-3 sm:left-8 sm:top-8 float-slow max-w-[58%] sm:max-w-none">
              <div className="rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-md ring-1 ring-white/60 shadow-lift px-3 py-2 sm:px-4 sm:py-3 sm:max-w-[220px]">
                <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-teal-deep">
                  <Activity className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                  3D-диагностика
                </div>
                <div className="mt-1 text-xs sm:text-sm font-semibold text-ink">
                  КЛКТ за 14 сек
                </div>
                <div className="mt-2 flex h-1 sm:h-1.5 overflow-hidden rounded-full bg-mint-soft">
                  <motion.div
                    className="h-full bg-gradient-to-r from-teal to-coral"
                    initial={{ width: 0 }}
                    animate={{ width: "92%" }}
                    transition={{ duration: 1.6, delay: 1.6 }}
                  />
                </div>
              </div>
            </div>

            <div className="absolute right-3 top-12 sm:right-10 sm:top-16 float-slower">
              <div className="rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-md ring-1 ring-white/60 shadow-lift px-3 py-2 sm:px-4 sm:py-3">
                <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-semibold text-ink">
                  <span className="grid place-items-center h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-coral/15 text-coral">
                    <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                  </span>
                  Виниры E.max
                </div>
                <div className="mt-0.5 text-[10px] sm:text-[11px] text-ink-soft">
                  За 1 визит · от 180 000 ₸
                </div>
              </div>
            </div>

            <div className="absolute bottom-3 left-3 sm:bottom-8 sm:left-8 float-slow">
              <div className="rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-md ring-1 ring-white/60 shadow-lift px-3 py-2 sm:px-4 sm:py-3">
                <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-ink-soft">
                  Сегодня свободно
                </div>
                <div className="mt-1 flex flex-wrap items-center gap-1 sm:gap-1.5">
                  {["10:30", "13:00", "15:45", "18:30"].map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-mint-soft px-2 sm:px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-[11px] font-semibold text-teal-deep"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute bottom-16 right-3 sm:bottom-10 sm:right-10 float-slower">
              <div className="rounded-xl sm:rounded-2xl bg-ink/95 backdrop-blur text-white shadow-lift px-3 py-2 sm:px-4 sm:py-3">
                <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs">
                  <span className="grid place-items-center h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-teal text-white text-[10px] font-bold">
                    Б+
                  </span>
                  <div>
                    <div className="font-semibold text-[11px] sm:text-xs">Бахытжан С.</div>
                    <div className="text-[10px] sm:text-[11px] text-white/60">
                      Имплантолог · 14 лет
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* stats strip */}
          <div className="mt-5 sm:mt-6 grid grid-cols-3 gap-2 sm:gap-6 rounded-2xl sm:rounded-3xl bg-white/70 backdrop-blur-md ring-1 ring-line p-3.5 sm:p-6 shadow-soft">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="heading-display text-2xl sm:text-5xl text-ink">
                  {s.value}
                </div>
                <div className="mt-0.5 sm:mt-1 text-[10px] leading-tight sm:text-sm text-ink-soft">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
