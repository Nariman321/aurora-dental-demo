import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";

function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

const cols = [
  {
    title: "Услуги",
    links: [
      "Имплантация",
      "Виниры и эстетика",
      "Invisalign",
      "Терапия",
      "Ортопедия",
      "Детская стоматология",
    ],
  },
  {
    title: "Клиника",
    links: ["О нас", "Команда врачей", "Гарантии", "Технологии", "Кейсы", "Вакансии"],
  },
  {
    title: "Пациентам",
    links: [
      "Цены и рассрочка",
      "Программа лояльности",
      "FAQ",
      "Подарочные сертификаты",
      "Отзывы",
    ],
  },
];

export function Footer() {
  return (
    <footer
      id="contacts"
      className="relative bg-ink text-white border-t border-white/5"
    >
      <div className="container-x py-14 pb-24 md:py-20 md:pb-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_3fr]">
          <div>
            <Logo className="!text-white [&_*]:text-white" />
            <p className="mt-5 max-w-sm text-sm text-white/60 leading-relaxed">
              Aurora Dental — современная стоматология премиум-класса в Алматы.
              Полный цикл лечения, цифровая диагностика и команда врачей с
              международными сертификатами.
            </p>

            <ul className="mt-7 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-mint mt-0.5 shrink-0" />
                <span className="text-white/85">
                  г. Алматы, Бостандыкский р-н,
                  <br />
                  ул. Розыбакиева 247А, БЦ «Алтын-Орда», 3 этаж
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-mint shrink-0" />
                <a
                  href="tel:+77272583000"
                  className="text-white/85 hover:text-mint transition"
                >
                  +7 727 258 30 00
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-mint shrink-0" />
                <a
                  href="mailto:hello@aurora-dental.kz"
                  className="text-white/85 hover:text-mint transition"
                >
                  hello@aurora-dental.kz
                </a>
              </li>
            </ul>

            <div className="mt-6 flex gap-2">
              <a
                href="https://wa.me/77272583000"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="grid h-10 w-10 place-items-center rounded-full bg-white/10 ring-1 ring-white/15 transition hover:bg-mint hover:text-teal-ink hover:scale-110"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com/auroradental.kz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="grid h-10 w-10 place-items-center rounded-full bg-white/10 ring-1 ring-white/15 transition hover:bg-coral hover:scale-110"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {cols.map((col) => (
              <div key={col.title}>
                <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-mint">
                  {col.title}
                </h4>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-sm text-white/75 hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-200"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-3 border-t border-white/10 pt-6 text-xs text-white/50 md:flex md:items-center md:justify-between">
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <span>© 2014–2026 Aurora Dental Almaty</span>
            <span className="hidden md:inline">·</span>
            <span>Лицензия МЗ РК № 22-Л от 03.04.2014</span>
            <span className="hidden md:inline">·</span>
            <a href="#" className="hover:text-white transition">
              Политика конфиденциальности
            </a>
          </div>
          <div className="text-white/40">
            Разработчик: Нариман (
            <a
              href="https://wa.me/77053173264"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-mint transition"
            >
              +77053173264
            </a>
            ) · WhatsApp{" "}
            <a
              href="https://wa.me/77053173264"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-mint transition"
            >
              +7 705 317 32 64
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
