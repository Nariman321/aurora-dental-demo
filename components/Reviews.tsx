"use client";

import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { SectionLabel } from "./SectionLabel";
import { SwipeHint } from "./SwipeHint";

const reviews = [
  {
    name: "Мадина Орманова",
    where: "2GIS · Алматы",
    initials: "МО",
    text: "Боялась стоматологов с детства. В Aurora уговорили попробовать седацию — проснулась с двумя имплантами и без капли страха. Спасибо команде Бахытжана!",
    rating: 5,
    color: "from-teal-deep to-teal",
  },
  {
    name: "Темирлан Касенов",
    where: "Google Maps",
    initials: "ТК",
    text: "Сделали 8 виниров e.max за 2 визита. Mock-up показали заранее — увидел как будет, утвердил, и через неделю забрал улыбку. Цена адекватная для такого качества.",
    rating: 5,
    color: "from-coral to-[#ff9a7d]",
  },
  {
    name: "Гульнара Сейтжанова",
    where: "Instagram отзыв",
    initials: "ГС",
    text: "Привела дочку 5 лет — у Алии волшебный подход. Дочь теперь сама просится «к тёте Але». Пломбу поставили без слёз и истерик.",
    rating: 5,
    color: "from-ink to-ink/80",
  },
  {
    name: "Арман Бекетов",
    where: "Yandex Карты",
    initials: "АБ",
    text: "Invisalign — это космос. 9 месяцев, и прикус ровный. Айгерим контролирует всё через приложение, не нужно ездить каждые две недели.",
    rating: 5,
    color: "from-mint to-[#a5e6d4]",
  },
  {
    name: "Лейла Жакупова",
    where: "Otzyv.kz",
    initials: "ЛЖ",
    text: "Профессиональная гигиена и AirFlow — небо и земля по сравнению с другими клиниками. Вышла с ощущением скрипа зубов. Записалась всей семьёй.",
    rating: 5,
    color: "from-teal to-mint",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="relative py-16 sm:py-20 md:py-32">
      <div className="container-x">
        <div className="grid items-end gap-8 md:grid-cols-[1fr_auto]">
          <SectionLabel
            eyebrow="Отзывы пациентов"
            title={
              <>
                1 240 живых отзывов{" "}
                <span className="bg-gradient-to-r from-teal to-coral bg-clip-text text-transparent">
                  с реальных площадок
                </span>
              </>
            }
            description="Не накручиваем рейтинги — показываем правду. Загляните в 2GIS, Google или Otzyv.kz: оценки от 4,9 на всех площадках."
          />
          <div className="hidden md:flex items-center gap-3">
            <div className="flex">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-gold text-gold"
                  strokeWidth={1.5}
                />
              ))}
            </div>
            <div className="text-sm">
              <div className="heading-display text-2xl text-ink">4,98 / 5</div>
              <div className="text-xs text-ink-soft">средняя оценка</div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-center md:hidden">
          <SwipeHint />
        </div>

        <div className="mt-4 sm:mt-12 snap-rail snap-rail-2then3">
          {reviews.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.55,
                delay: (i % 3) * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative flex flex-col rounded-3xl bg-white ring-1 ring-line p-5 sm:p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift hover:ring-teal/30"
            >
              <Quote
                className="absolute right-5 top-5 h-10 w-10 text-mint-soft"
                strokeWidth={1.2}
                aria-hidden
              />
              <div className="flex">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-4 w-4 fill-gold text-gold"
                    strokeWidth={1.5}
                  />
                ))}
              </div>
              <blockquote className="mt-4 text-base leading-relaxed text-ink">
                {r.text}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                <span
                  className={`grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br ${r.color} text-sm font-bold text-white`}
                >
                  {r.initials}
                </span>
                <div>
                  <div className="font-semibold text-ink">{r.name}</div>
                  <div className="text-xs text-ink-soft">{r.where}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
