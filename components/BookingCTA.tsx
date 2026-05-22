"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { Phone, MapPin, Clock, CheckCircle2, ArrowUpRight } from "lucide-react";

const services = [
  "Консультация",
  "Чистка / гигиена",
  "Имплантация",
  "Виниры",
  "Invisalign",
  "Детский приём",
];

function formatKzPhone(raw: string) {
  // keep digits only, strip leading 7/8
  const d = raw.replace(/\D/g, "").replace(/^[78]/, "");
  const t = d.slice(0, 10);
  const parts = [
    t.slice(0, 3),
    t.slice(3, 6),
    t.slice(6, 8),
    t.slice(8, 10),
  ].filter(Boolean);
  if (!parts.length) return "";
  let out = "+7";
  if (parts[0]) out += ` (${parts[0]}`;
  if (parts[0] && parts[0].length === 3) out += ")";
  if (parts[1]) out += ` ${parts[1]}`;
  if (parts[2]) out += ` ${parts[2]}`;
  if (parts[3]) out += ` ${parts[3]}`;
  return out;
}

export function BookingCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(services[0]);

  return (
    <section
      id="book"
      className="relative overflow-hidden py-16 pb-24 sm:py-20 sm:pb-24 md:py-32 md:pb-32 bg-ink text-white"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-0 h-[420px] w-[420px] rounded-full bg-teal/40 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-[460px] w-[460px] rounded-full bg-coral/30 blur-[120px]" />
      </div>

      <div className="container-x relative grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-mint">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-mint pulse-ring" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
            </span>
            Открыто сейчас
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="heading-bold mt-4 sm:mt-5 text-3xl sm:text-5xl lg:text-6xl text-balance"
          >
            Запишитесь на бесплатную{" "}
            <span
              className="bg-gradient-to-r from-mint via-white to-coral bg-clip-text text-transparent"
            >
              консультацию
            </span>{" "}
            сегодня
          </motion.h2>
          <p className="mt-5 max-w-xl text-base sm:text-lg text-white/70 text-balance">
            Получите план лечения и фиксированную смету в течение 30 минут.
            Никаких обязательств — только профессиональный взгляд.
          </p>

          <ul className="mt-8 grid gap-3 max-w-md">
            {[
              { icon: MapPin, text: "Бостандыкский р-н, ул. Розыбакиева 247А" },
              { icon: Phone, text: "+7 727 258 30 00 · WhatsApp 24/7" },
              { icon: Clock, text: "Пн–Сб 09:00 — 21:00 · Вс 10:00 — 18:00" },
            ].map((it) => (
              <li
                key={it.text}
                className="flex items-center gap-3 text-sm text-white/85"
              >
                <span className="grid h-9 w-9 place-items-center rounded-full bg-white/10 ring-1 ring-white/15">
                  <it.icon className="h-4 w-4 text-mint" />
                </span>
                {it.text}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://wa.me/77272583000"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-mint px-5 py-3 text-sm font-semibold text-teal-ink transition-all duration-300 hover:bg-white hover:shadow-lift"
            >
              Написать в WhatsApp
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="tel:+77272583000"
              className="group inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur ring-1 ring-white/20 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/20"
            >
              <Phone className="h-4 w-4" />
              +7 727 258 30 00
            </a>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="relative rounded-3xl bg-white text-ink p-6 sm:p-8 shadow-lift"
        >
          {submitted ? (
            <div className="flex flex-col items-center text-center py-8">
              <div className="grid h-16 w-16 place-items-center rounded-full bg-mint-soft text-teal-deep">
                <CheckCircle2 className="h-9 w-9" strokeWidth={1.5} />
              </div>
              <h3 className="heading-display mt-5 text-3xl">
                Заявка принята!
              </h3>
              <p className="mt-3 text-ink-soft max-w-sm">
                Администратор перезвонит на номер{" "}
                <span className="font-semibold text-ink">{phone || "..."}</span>{" "}
                в течение 4 минут. Спасибо за доверие.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setName("");
                  setPhone("");
                }}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white hover:bg-teal-deep transition"
              >
                Отправить ещё одну
              </button>
            </div>
          ) : (
            <>
              <h3 className="heading-display text-2xl sm:text-3xl">
                Онлайн-запись
              </h3>
              <p className="mt-2 text-sm text-ink-soft">
                Заполните форму — мы перезвоним за 4 минуты.
              </p>

              <div className="mt-6 grid gap-4">
                <label className="block">
                  <span className="text-xs font-semibold uppercase tracking-wider text-ink-soft">
                    Имя
                  </span>
                  <input
                    type="text"
                    autoComplete="given-name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ваше имя"
                    className="mt-1.5 block w-full rounded-2xl border border-line bg-bg-soft px-4 py-3.5 text-base outline-none transition-all focus:border-teal focus:bg-white focus:ring-4 focus:ring-mint-soft"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-semibold uppercase tracking-wider text-ink-soft">
                    Телефон
                  </span>
                  <input
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(formatKzPhone(e.target.value))}
                    placeholder="+7 (___) ___ __ __"
                    className="mt-1.5 block w-full rounded-2xl border border-line bg-bg-soft px-4 py-3.5 text-base outline-none transition-all focus:border-teal focus:bg-white focus:ring-4 focus:ring-mint-soft"
                  />
                </label>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-ink-soft">
                    Услуга
                  </span>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {services.map((s) => (
                      <button
                        type="button"
                        key={s}
                        onClick={() => setService(s)}
                        className={`rounded-full px-3.5 py-2 text-xs font-semibold transition-all duration-300 ${
                          service === s
                            ? "bg-ink text-white"
                            : "bg-bg-soft text-ink ring-1 ring-line hover:bg-mint-soft hover:ring-teal/30 active:bg-mint-soft"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="group mt-7 relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-coral px-6 py-4 text-base font-semibold text-white shadow-soft transition-all duration-300 hover:shadow-lift hover:-translate-y-0.5 active:translate-y-0"
              >
                <span className="relative z-10">Записаться бесплатно</span>
                <ArrowUpRight className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-teal-deep via-teal to-coral transition-transform duration-700 group-hover:translate-x-0" />
              </button>

              <p className="mt-3 text-center text-[11px] text-ink-soft">
                Нажимая кнопку, вы соглашаетесь с{" "}
                <a href="#" className="underline hover:text-ink">
                  политикой обработки данных
                </a>
              </p>
            </>
          )}
        </motion.form>
      </div>
    </section>
  );
}
