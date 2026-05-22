"use client";

import { motion } from "motion/react";
import { GraduationCap, Award } from "lucide-react";
import { SectionLabel } from "./SectionLabel";
import { SwipeHint } from "./SwipeHint";

type Doctor = {
  name: string;
  role: string;
  initials: string;
  experience: string;
  badges: string[];
  bio: string;
  bg: string;
};

const doctors: Doctor[] = [
  {
    name: "Бахытжан Серикулы",
    role: "Главный имплантолог · хирург",
    initials: "БC",
    experience: "14 лет",
    badges: ["Straumann Master", "ITI Member"],
    bio: "Установил более 3 200 имплантов. Член международной команды ITI. Резидентура в Цюрихе.",
    bg: "from-teal-deep to-teal",
  },
  {
    name: "Айгерим Мукашева",
    role: "Ортодонт · Invisalign Diamond",
    initials: "АМ",
    experience: "11 лет",
    badges: ["Invisalign Diamond", "MSc Orthodontics"],
    bio: "Топ-50 ортодонтов СНГ по версии Align. Провела 480 случаев Invisalign Comprehensive.",
    bg: "from-coral to-[#ff9a7d]",
  },
  {
    name: "Данияр Тлеулин",
    role: "Эстетист · виниры и керамика",
    initials: "ДТ",
    experience: "9 лет",
    badges: ["IPS e.max Trainer", "DSD Master"],
    bio: "Клинический инструктор IPS e.max в Казахстане. Специализация — Digital Smile Design.",
    bg: "from-ink to-ink/80",
  },
  {
    name: "Алия Жумабаева",
    role: "Детский стоматолог",
    initials: "АЖ",
    experience: "8 лет",
    badges: ["Wand · Sleeper One", "Психолог"],
    bio: "Дети не плачут — это правило. Ведёт группу адаптации через игру и сказкотерапию.",
    bg: "from-mint to-[#a5e6d4]",
  },
];

export function Doctors() {
  return (
    <section id="doctors" className="relative py-16 sm:py-20 md:py-32">
      <div className="container-x">
        <div className="grid items-end gap-8 md:grid-cols-[1fr_auto]">
          <SectionLabel
            eyebrow="Команда"
            title={
              <>
                Врачи, которые{" "}
                <span className="bg-gradient-to-r from-teal to-coral bg-clip-text text-transparent">
                  лечат как себе
                </span>
              </>
            }
            description="Сертификаты ITI, Invisalign Diamond, IPS e.max. Каждый год команда обучается в Цюрихе, Сеуле и Лиссабоне."
          />
          <div className="hidden md:block">
            <div className="rounded-2xl bg-mint-soft px-5 py-4 text-sm font-semibold text-teal-ink ring-1 ring-mint">
              <span className="block text-2xl heading-display text-ink">12</span>
              специалистов в команде
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-center md:hidden">
          <SwipeHint />
        </div>

        <div className="mt-4 sm:mt-12 snap-rail snap-rail-4">
          {doctors.map((d, i) => (
            <motion.article
              key={d.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.55,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative overflow-hidden rounded-3xl bg-white ring-1 ring-line p-4 sm:p-5 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
            >
              <div
                className={`relative aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-br ${d.bg}`}
              >
                <span
                  className="absolute inset-0 grid place-items-center text-white/95 heading-display select-none"
                  style={{ fontSize: "clamp(80px, 18vw, 160px)" }}
                  aria-hidden
                >
                  {d.initials}
                </span>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/85 backdrop-blur px-2.5 py-1 text-[11px] font-semibold text-ink">
                  <GraduationCap className="h-3.5 w-3.5 text-teal-deep" />
                  Стаж {d.experience}
                </div>
                <div className="absolute inset-x-3 bottom-3 flex flex-wrap gap-1.5">
                  {d.badges.map((b) => (
                    <span
                      key={b}
                      className="inline-flex items-center gap-1 rounded-full bg-ink/90 backdrop-blur px-2 py-0.5 text-[10px] font-semibold text-white"
                    >
                      <Award className="h-3 w-3 text-mint" />
                      {b}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 px-1">
                <h3 className="heading-display text-xl text-ink">{d.name}</h3>
                <p className="mt-1 text-sm text-teal-deep font-semibold">
                  {d.role}
                </p>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                  {d.bio}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
