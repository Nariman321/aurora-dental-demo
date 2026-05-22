"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import {
  Microscope,
  HeartHandshake,
  ShieldCheck,
  Clock4,
  CreditCard,
  Sparkles,
} from "lucide-react";

const items = [
  {
    icon: Microscope,
    title: "Микроскоп Carl Zeiss",
    text: "Лечение каналов с увеличением ×20 — точность, которая сохраняет зуб.",
  },
  {
    icon: ShieldCheck,
    title: "Гарантия 5 лет",
    text: "Письменная гарантия на имплантацию и ортопедию. Бесплатное обслуживание.",
  },
  {
    icon: HeartHandshake,
    title: "Безболезненно",
    text: "Анестезия Septodont, седация ЗАКС и психологический комфорт пациента.",
  },
  {
    icon: Clock4,
    title: "Лечение за 1 визит",
    text: "Виниры и коронки CAD/CAM — фрезеруем в собственной лаборатории.",
  },
  {
    icon: CreditCard,
    title: "Рассрочка 0%",
    text: "Kaspi Red, Halyk и Freedom — до 24 месяцев без переплат.",
  },
  {
    icon: Sparkles,
    title: "Стерильность",
    text: "Класс В стерилизация Melag, одноразовый инструмент, hepa-фильтрация.",
  },
];

export function WhyUs() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-16 sm:py-20 md:py-32 bg-ink text-white"
    >
      <motion.div
        style={{ y: yBg }}
        className="pointer-events-none absolute inset-0 -z-0 opacity-60"
      >
        <div className="absolute -left-20 top-10 h-[400px] w-[400px] rounded-full bg-teal/40 blur-[120px]" />
        <div className="absolute -right-10 bottom-0 h-[420px] w-[420px] rounded-full bg-coral/30 blur-[120px]" />
      </motion.div>

      <div className="container-x relative">
        <div className="grid gap-12 md:grid-cols-2 md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-mint">
              <span className="h-1.5 w-1.5 rounded-full bg-mint" />
              Почему Aurora
            </div>
            <h2 className="heading-bold mt-3 sm:mt-4 text-3xl sm:text-5xl lg:text-6xl text-balance">
              Технологии, которым доверяют{" "}
              <span
                className="bg-gradient-to-r from-mint via-white to-coral bg-clip-text text-transparent"
              >
                лучшие клиники мира
              </span>
            </h2>
          </div>
          <p className="text-base sm:text-lg text-white/70 max-w-md md:justify-self-end text-balance">
            Мы инвестировали 480 млн ₸ в оборудование и обучение врачей.
            Результат — стоматология, в которую возвращаются всей семьёй.
          </p>
        </div>

        <div className="mt-12 sm:mt-14 grid gap-px overflow-hidden rounded-3xl bg-white/10 grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: (i % 3) * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative bg-ink p-4 sm:p-7 transition-colors duration-500 hover:bg-teal-deep"
            >
              <div className="grid h-10 w-10 sm:h-12 sm:w-12 place-items-center rounded-xl sm:rounded-2xl bg-white/10 ring-1 ring-white/15 transition-all duration-500 group-hover:bg-mint group-hover:text-teal-ink group-hover:ring-mint group-hover:scale-110">
                <it.icon className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.6} />
              </div>
              <h3 className="mt-3 sm:mt-5 heading-display text-lg sm:text-2xl">{it.title}</h3>
              <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm leading-relaxed text-white/70 group-hover:text-white/90">
                {it.text}
              </p>
              <span className="mt-4 sm:mt-6 block text-[10px] sm:text-[11px] font-mono text-white/30 group-hover:text-mint">
                0{i + 1} / 06
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
