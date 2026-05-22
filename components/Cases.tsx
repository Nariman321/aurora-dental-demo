"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { Calendar, Clock, ArrowUpRight } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

type Case = {
  title: string;
  patient: string;
  duration: string;
  date: string;
  visits: string;
  scope: string;
  result: string;
  bg: string;
};

const cases: Case[] = [
  {
    title: "Смена улыбки за 2 визита",
    patient: "Айгуль, 34 года",
    scope: "10 виниров e.max + отбеливание",
    duration: "8 дней",
    visits: "2 визита",
    date: "Март 2026",
    result:
      "Цифровой Mock-up утверждён до старта. Цвет BL2, форма «канин-доминантная». Без обточки витальных зубов.",
    bg: "from-teal-deep via-teal to-mint",
  },
  {
    title: "Имплантация All-on-4",
    patient: "Бакыт, 58 лет",
    scope: "8 имплантов Straumann + протез",
    duration: "12 недель",
    visits: "4 визита",
    date: "Февраль 2026",
    result:
      "Полная реабилитация верхней и нижней челюстей. Условно-съёмный протез на следующий день после операции.",
    bg: "from-ink via-[#1c2e44] to-teal-deep",
  },
  {
    title: "Брекеты vs Invisalign",
    patient: "Дина, 22 года",
    scope: "Invisalign Comprehensive · 32 капы",
    duration: "9 месяцев",
    visits: "5 визитов",
    date: "Январь 2026",
    result:
      "Скрытая коррекция прикуса II класса. Дина не снимала элайнеры даже на свидании — никто не заметил.",
    bg: "from-coral via-[#ff9a7d] to-cream",
  },
];

export function Cases() {
  const [active, setActive] = useState(0);
  const c = cases[active];

  return (
    <section id="cases" className="relative py-16 sm:py-20 md:py-32 bg-bg-soft">
      <div className="container-x">
        <div className="grid items-end gap-8 md:grid-cols-[1fr_auto]">
          <SectionLabel
            eyebrow="Кейсы"
            title={
              <>
                Истории{" "}
                <span className="bg-gradient-to-r from-teal to-coral bg-clip-text text-transparent">
                  настоящих улыбок
                </span>
              </>
            }
            description="Каждый кейс — согласие пациента и реальные сроки. Никакого фотошопа: только результат, который мы готовы показать."
          />

          <div className="flex gap-2 md:flex-col md:items-end">
            <span className="text-[11px] uppercase tracking-[0.2em] text-ink-soft">
              {String(active + 1).padStart(2, "0")} / 0{cases.length}
            </span>
          </div>
        </div>

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 sm:mt-10 grid gap-4 sm:gap-5 lg:grid-cols-[1.2fr_1fr]"
        >
          {/* main */}
          <div
            className={`relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br ${c.bg} grain shadow-lift`}
          >
            <svg
              viewBox="0 0 800 600"
              className="absolute inset-0 h-full w-full opacity-90"
              preserveAspectRatio="xMidYMid slice"
              aria-hidden
            >
              <defs>
                <linearGradient id={`smile-${active}`} x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#fff" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#fff" stopOpacity="0.6" />
                </linearGradient>
              </defs>
              {/* Big smile arc */}
              <path
                d="M120 320 Q400 540 680 320"
                stroke="url(#smile-0)"
                strokeWidth="10"
                strokeLinecap="round"
                fill="none"
                opacity="0.7"
              />
              {/* Tooth row */}
              <g fill={`url(#smile-${active})`}>
                {Array.from({ length: 10 }).map((_, i) => {
                  const x = 180 + i * 50;
                  const y = 270 + Math.sin(i / 1.5) * 8;
                  return (
                    <rect
                      key={i}
                      x={x}
                      y={y}
                      rx="14"
                      width="38"
                      height="56"
                    />
                  );
                })}
              </g>
            </svg>

            {/* before/after labels */}
            <div className="absolute left-4 top-4 sm:left-6 sm:top-6 inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-ink">
              <span className="h-1.5 w-1.5 rounded-full bg-coral" /> Было
            </div>
            <div className="absolute right-4 top-4 sm:right-6 sm:top-6 inline-flex items-center gap-1.5 rounded-full bg-ink/95 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-mint">
              <span className="h-1.5 w-1.5 rounded-full bg-mint" /> Стало
            </div>

            <div className="absolute inset-x-4 bottom-4 sm:inset-x-6 sm:bottom-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur px-3 py-2 text-xs font-semibold text-ink">
                <Clock className="h-3.5 w-3.5 text-teal-deep" />
                {c.duration}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur px-3 py-2 text-xs font-semibold text-ink">
                <Calendar className="h-3.5 w-3.5 text-coral" />
                {c.date}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-ink/90 backdrop-blur px-3 py-2 text-xs font-semibold text-white">
                {c.visits}
              </span>
            </div>
          </div>

          {/* details */}
          <div className="rounded-2xl sm:rounded-3xl bg-white ring-1 ring-line p-5 sm:p-8 shadow-soft flex flex-col">
            <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-teal-deep">
              Кейс №{String(active + 1).padStart(2, "0")} · {c.patient}
            </div>
            <h3 className="heading-display mt-2 sm:mt-3 text-2xl sm:text-4xl text-ink">
              {c.title}
            </h3>
            <p className="mt-2 sm:mt-3 text-sm font-semibold text-ink-soft">
              {c.scope}
            </p>
            <p className="mt-3 sm:mt-5 text-sm sm:text-base text-ink leading-relaxed">
              {c.result}
            </p>

            <div className="mt-auto pt-5 sm:pt-6">
              <div className="flex gap-1.5 sm:gap-2">
                {cases.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`group relative flex-1 rounded-xl sm:rounded-2xl p-3 sm:p-4 text-left ring-1 transition-all duration-300 tap-target ${
                      active === i
                        ? "bg-ink text-white ring-ink"
                        : "bg-bg-soft text-ink ring-line hover:ring-teal/30 hover:bg-white"
                    }`}
                    aria-pressed={active === i}
                  >
                    <span
                      className={`text-[9px] sm:text-[10px] uppercase tracking-wider ${
                        active === i ? "text-mint" : "text-ink-soft"
                      }`}
                    >
                      Кейс 0{i + 1}
                    </span>
                    <span className="mt-0.5 sm:mt-1 block text-[11px] sm:text-xs font-semibold leading-tight">
                      {cases[i].title}
                    </span>
                  </button>
                ))}
              </div>

              <a
                href="#book"
                className="group mt-5 sm:mt-6 inline-flex items-center gap-2 rounded-full bg-coral px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-ink hover:shadow-lift active:scale-95"
              >
                Хочу так же
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
