"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="https://wa.me/77272583000?text=Здравствуйте!%20Хочу%20записаться%20на%20консультацию"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Написать в WhatsApp"
      className={`hidden md:grid fixed bottom-5 right-5 z-50 h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lift transition-all duration-500 hover:scale-110 hover:shadow-[0_20px_40px_-10px_rgba(37,211,102,0.6)] ${
        show
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-60 pulse-ring" />
      <MessageCircle className="relative h-6 w-6" strokeWidth={1.8} />
    </a>
  );
}
