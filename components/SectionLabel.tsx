"use client";

import { motion } from "motion/react";

export function SectionLabel({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
}) {
  const isCenter = align === "center";
  return (
    <div className={isCenter ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className={`inline-flex items-center gap-2 rounded-full bg-mint-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-teal-deep ${
          isCenter ? "" : ""
        }`}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-teal" />
        {eyebrow}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="heading-bold mt-3 sm:mt-4 text-3xl sm:text-5xl lg:text-6xl text-ink text-balance"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 sm:mt-4 text-[15px] leading-relaxed sm:text-lg text-ink-soft text-balance"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
