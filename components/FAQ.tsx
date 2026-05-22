"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

const faqs = [
  {
    q: "Сколько стоит первая консультация?",
    a: "Первичная консультация терапевта или ортодонта — бесплатно. Включает осмотр, панорамный снимок и письменный план лечения с фиксированными ценами.",
  },
  {
    q: "Делаете ли рассрочку?",
    a: "Да. Доступны Kaspi Red, Halyk, Freedom и Forte — до 24 месяцев под 0%. Оформление за 7 минут прямо в клинике, нужен только удостоверение личности.",
  },
  {
    q: "Что если я очень боюсь стоматологов?",
    a: "У нас работает программа «Без страха»: предварительная встреча с врачом без кресла, седация ЗАКС или общая анестезия с анестезиологом-реаниматологом. 87% наших пациентов с дентофобией приходят на повторный приём.",
  },
  {
    q: "Какие гарантии вы даёте?",
    a: "На имплантацию Straumann и Nobel — 5 лет, на ортопедию (коронки, виниры) — 3 года, на терапию под микроскопом — 2 года. Гарантия письменная, обслуживание по гарантии бесплатное.",
  },
  {
    q: "Сколько визитов нужно для виниров?",
    a: "В среднем 2 визита: первый — снятие слепков, цифровой Mock-up и подготовка зубов. Второй — фиксация виниров через 7–10 дней. Между визитами носите временные виниры.",
  },
  {
    q: "Принимаете ли детей?",
    a: "Да, с 1 года. Детский кабинет с VR-очками, игровая зона, психолог-адаптатор. Первая встреча — знакомство без лечения, бесплатно.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative py-16 sm:py-20 md:py-32 bg-bg-soft">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <SectionLabel
          eyebrow="FAQ"
          title={
            <>
              Частые{" "}
              <span className="bg-gradient-to-r from-teal to-coral bg-clip-text text-transparent">
                вопросы
              </span>
            </>
          }
          description="Если не нашли ответ — напишите нам в WhatsApp, ответим за 4 минуты в рабочее время."
        />

        <div className="rounded-3xl bg-white ring-1 ring-line shadow-soft overflow-hidden">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-b border-line last:border-b-0">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="group tap-target flex w-full items-center gap-3 sm:gap-4 px-5 py-5 sm:px-7 sm:py-6 text-left transition-colors hover:bg-mint-soft/40 active:bg-mint-soft/60"
                  aria-expanded={isOpen}
                >
                  <span className="text-xs font-mono text-ink-soft tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 text-base sm:text-lg font-semibold text-ink">
                    {f.q}
                  </span>
                  <span
                    className={`grid h-9 w-9 shrink-0 place-items-center rounded-full ring-1 transition-all duration-500 ${
                      isOpen
                        ? "bg-ink text-white ring-ink rotate-45"
                        : "bg-bg-soft text-ink ring-line group-hover:bg-white"
                    }`}
                  >
                    <Plus className="h-4 w-4" strokeWidth={2.5} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 sm:px-7 sm:pb-7 pl-12 sm:pl-14 text-sm sm:text-base text-ink-soft leading-relaxed">
                        {f.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
