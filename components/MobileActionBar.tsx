"use client";

import { useEffect, useState } from "react";
import { Phone, MessageCircle, CalendarPlus } from "lucide-react";

export function MobileActionBar() {
  const [show, setShow] = useState(false);
  const [hideOnBook, setHideOnBook] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 480);
      const book = document.getElementById("book");
      if (book) {
        const rect = book.getBoundingClientRect();
        // hide when booking section is visible to avoid covering the form
        setHideOnBook(rect.top < window.innerHeight && rect.bottom > 120);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const visible = show && !hideOnBook;

  return (
    <div
      aria-hidden={!visible}
      className={`md:hidden fixed inset-x-0 bottom-0 z-40 px-3 pb-safe transition-all duration-400 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      <div className="mx-auto max-w-md rounded-2xl bg-ink/95 backdrop-blur-xl ring-1 ring-white/10 shadow-lift p-1.5 flex items-stretch gap-1.5">
        <a
          href="tel:+77272583000"
          aria-label="Позвонить"
          className="tap-target flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-white/10 text-white text-xs font-semibold py-3 active:bg-white/20 transition"
        >
          <Phone className="h-4 w-4" strokeWidth={1.8} />
          Позвонить
        </a>
        <a
          href="https://wa.me/77272583000?text=Здравствуйте!%20Хочу%20записаться%20на%20консультацию"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Написать в WhatsApp"
          className="tap-target flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#25D366] text-white text-xs font-semibold py-3 active:scale-95 transition"
        >
          <MessageCircle className="h-4 w-4" strokeWidth={1.8} />
          WhatsApp
        </a>
        <a
          href="#book"
          aria-label="Записаться"
          className="tap-target flex-[1.2] inline-flex items-center justify-center gap-1.5 rounded-xl bg-coral text-white text-xs font-semibold py-3 active:scale-95 transition shadow-[0_8px_24px_-8px_rgba(255,122,89,0.6)]"
        >
          <CalendarPlus className="h-4 w-4" strokeWidth={1.8} />
          Записаться
        </a>
      </div>
    </div>
  );
}
