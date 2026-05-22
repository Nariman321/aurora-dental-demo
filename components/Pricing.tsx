"use client";

import { motion } from "motion/react";
import { Check, ArrowUpRight, Star } from "lucide-react";
import { SectionLabel } from "./SectionLabel";
import { SwipeHint } from "./SwipeHint";

const tiers = [
  {
    name: "Профилактика",
    badge: "Самый частый выбор",
    description:
      "Ультразвуковая чистка, AirFlow, фторирование и осмотр терапевта.",
    price: "32 000",
    crossed: "45 000",
    list: [
      "Снятие налёта и камня",
      "AirFlow Pro Swiss",
      "Полировка пастой Cleanic",
      "Реминерализация эмали",
      "Карта здоровья полости рта",
    ],
    cta: "Записаться на чистку",
    highlight: false,
  },
  {
    name: "Эстетика «Голливуд»",
    badge: "Популярный пакет",
    description:
      "Виниры IPS e.max + цифровой Mock-up. Видимая улыбка за 2 визита.",
    price: "180 000",
    suffix: "/ зуб",
    list: [
      "Цифровой Mock-up",
      "10 виниров e.max",
      "3D-сканирование iTero",
      "Гарантия 5 лет",
      "Whitening BeyondPolus в подарок",
    ],
    cta: "Получить расчёт",
    highlight: true,
  },
  {
    name: "Имплантация под ключ",
    badge: "Гарантия пожизненно",
    description:
      "Имплант Straumann + абатмент + циркониевая коронка. Всё включено.",
    price: "490 000",
    list: [
      "Straumann SLActive",
      "Хирургический шаблон",
      "Циркониевая коронка",
      "Контрольные осмотры 5 лет",
      "Седация при желании",
    ],
    cta: "План лечения бесплатно",
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section id="prices" className="relative py-16 sm:py-20 md:py-32 bg-bg-soft">
      <div className="container-x">
        <SectionLabel
          eyebrow="Прозрачные цены"
          align="center"
          title={
            <>
              Цены, которые{" "}
              <span className="bg-gradient-to-r from-teal to-coral bg-clip-text text-transparent">
                не растут
              </span>{" "}
              в кресле
            </>
          }
          description="Стоимость утверждаем письменно после диагностики. Никаких «доплат» в процессе. Рассрочка 0% от Kaspi и Halyk до 24 месяцев."
        />

        <div className="mt-6 flex justify-center md:hidden">
          <SwipeHint />
        </div>

        <div className="mt-4 sm:mt-12 snap-rail snap-rail-3">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`group relative flex flex-col overflow-hidden rounded-3xl p-6 sm:p-7 ring-1 transition-all duration-500 hover:-translate-y-1 ${
                t.highlight
                  ? "bg-ink text-white ring-ink shadow-lift hover:shadow-[0_30px_60px_-20px_rgba(13,148,136,0.55)]"
                  : "bg-white text-ink ring-line shadow-soft hover:ring-teal/30 hover:shadow-lift"
              }`}
            >
              {t.highlight && (
                <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-teal/40 blur-3xl" />
              )}

              <div className="flex items-center justify-between">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider ${
                    t.highlight
                      ? "bg-mint text-teal-ink"
                      : "bg-mint-soft text-teal-deep"
                  }`}
                >
                  {t.highlight && <Star className="h-3 w-3 fill-current" />}
                  {t.badge}
                </span>
              </div>

              <h3 className="heading-display mt-6 text-3xl">{t.name}</h3>
              <p
                className={`mt-2 text-sm ${
                  t.highlight ? "text-white/70" : "text-ink-soft"
                }`}
              >
                {t.description}
              </p>

              <div className="mt-6 flex items-end gap-2">
                <span className="heading-display text-5xl">
                  {t.price}
                </span>
                <span
                  className={`pb-2 text-sm font-semibold ${
                    t.highlight ? "text-white/80" : "text-ink-soft"
                  }`}
                >
                  ₸ {t.suffix ?? ""}
                </span>
                {t.crossed && (
                  <span
                    className={`pb-2 text-sm line-through ${
                      t.highlight ? "text-white/40" : "text-ink-soft/60"
                    }`}
                  >
                    {t.crossed} ₸
                  </span>
                )}
              </div>

              <ul className="mt-6 space-y-2.5 text-sm">
                {t.list.map((p) => (
                  <li key={p} className="flex items-start gap-2.5">
                    <span
                      className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${
                        t.highlight
                          ? "bg-mint text-teal-ink"
                          : "bg-mint-soft text-teal-deep"
                      }`}
                    >
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span
                      className={t.highlight ? "text-white/85" : "text-ink"}
                    >
                      {p}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#book"
                className={`mt-8 group/btn inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold transition-all duration-300 ${
                  t.highlight
                    ? "bg-mint text-teal-ink hover:bg-white"
                    : "bg-ink text-white hover:bg-teal-deep"
                }`}
              >
                {t.cta}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </a>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-ink-soft">
          * Финальная стоимость определяется после консультации и снимка.
          Пенсионерам и многодетным семьям — скидка 10%.
        </p>
      </div>
    </section>
  );
}
