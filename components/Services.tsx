"use client";

import { motion } from "motion/react";
import {
  Smile,
  Wrench,
  Sparkles,
  Baby,
  Stethoscope,
  Layers,
  ArrowUpRight,
} from "lucide-react";
import { SectionLabel } from "./SectionLabel";

type Service = {
  icon: React.ElementType;
  title: string;
  description: string;
  bullets: string[];
  price: string;
  accent: "teal" | "coral" | "ink" | "mint";
};

const services: Service[] = [
  {
    icon: Layers,
    title: "Имплантация",
    description:
      "Установка импланта Straumann или Nobel Biocare с гарантией 5 лет. Цифровой шаблон и приживляемость 99,2%.",
    bullets: ["Straumann · Nobel", "Цифровая навигация", "Под седацией"],
    price: "от 320 000 ₸",
    accent: "teal",
  },
  {
    icon: Sparkles,
    title: "Виниры и эстетика",
    description:
      "Голливудская улыбка из E.max за 2 визита. Цифровой Mock-up — увидите результат до начала работ.",
    bullets: ["IPS e.max", "Mock-up", "Без обточки"],
    price: "от 180 000 ₸",
    accent: "coral",
  },
  {
    icon: Smile,
    title: "Invisalign · элайнеры",
    description:
      "Незаметные капы для взрослых и подростков. План лечения в 3D, контроль через приложение.",
    bullets: ["3D-план ClinCheck", "От 6 мес.", "Рассрочка 0%"],
    price: "от 950 000 ₸",
    accent: "ink",
  },
  {
    icon: Stethoscope,
    title: "Терапия под микроскопом",
    description:
      "Лечение каналов с микроскопом Carl Zeiss. Точность, сохранение зуба и без боли — гарантируем.",
    bullets: ["Carl Zeiss", "Гарантия 3 года", "Анестезия Septodont"],
    price: "от 28 000 ₸",
    accent: "mint",
  },
  {
    icon: Wrench,
    title: "Ортопедия и коронки",
    description:
      "Циркониевые коронки и мостовидные протезы. CAD/CAM-фрезерование в собственной лаборатории.",
    bullets: ["Цирконий Vita", "CAD/CAM", "За 1 день"],
    price: "от 145 000 ₸",
    accent: "teal",
  },
  {
    icon: Baby,
    title: "Детская стоматология",
    description:
      "Игровая зона, мультики в очках VR и анестезия без укола Wand. Малыш уйдёт с улыбкой.",
    bullets: ["VR-очки", "Wand · без укола", "Адаптация бесплатно"],
    price: "от 8 500 ₸",
    accent: "coral",
  },
];

const accentMap: Record<Service["accent"], string> = {
  teal: "from-teal-deep to-teal text-white",
  coral: "from-coral to-[#ff9a7d] text-white",
  ink: "from-ink to-ink/80 text-white",
  mint: "from-mint to-mint-soft text-teal-ink",
};

export function Services() {
  return (
    <section id="services" className="relative py-16 sm:py-20 md:py-32">
      <div className="container-x">
        <SectionLabel
          eyebrow="Наши направления"
          title={
            <>
              Полный цикл стоматологии{" "}
              <span
                className="bg-gradient-to-r from-teal to-coral bg-clip-text text-transparent"
              >
                под одной крышей
              </span>
            </>
          }
          description="Терапия, хирургия, ортодонтия, эстетика и детский приём. Не нужно ездить по разным клиникам — всё лечение в Aurora Dental."
        />

        <div className="mt-10 sm:mt-12 grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.55,
                delay: (i % 3) * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative overflow-hidden rounded-3xl bg-white ring-1 ring-line p-5 sm:p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift hover:ring-teal/30"
            >
              {/* hover gradient bg */}
              <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-mint-soft to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div
                className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${accentMap[s.accent]} shadow-soft`}
              >
                <s.icon className="h-6 w-6" strokeWidth={1.6} />
              </div>

              <h3 className="mt-5 heading-display text-2xl text-ink">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                {s.description}
              </p>

              <ul className="mt-4 flex flex-wrap gap-1.5">
                {s.bullets.map((b) => (
                  <li
                    key={b}
                    className="rounded-full bg-bg-soft px-2.5 py-1 text-[11px] font-semibold text-teal-ink ring-1 ring-line"
                  >
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-center justify-between border-t border-line pt-4">
                <span className="text-sm font-bold text-ink">{s.price}</span>
                <a
                  href="#book"
                  className="inline-flex items-center gap-1 rounded-full bg-ink px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white transition-all duration-300 group-hover:bg-teal-deep group-hover:gap-2"
                >
                  Записаться
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
