"use client";

import { motion } from "motion/react";

type SectionIntroProps = {
  eyebrow?: string;
  title: string;
  body: string;
  align?: "left" | "center";
  eyebrowClassName?: string;
  titleClassName?: string;
  bodyClassName?: string;
};

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  show: { opacity: 1, y: 0 },
};

export default function SectionIntro({
  eyebrow,
  title,
  body,
  align = "center",
  eyebrowClassName = "text-primary",
  titleClassName = "text-[#141F39]",
  bodyClassName = "text-[#141F39]",
}: SectionIntroProps) {
  return (
    <motion.div
      className={`mb-12 max-w-xl ${
        align === "center"
          ? "mx-auto text-center"
          : "text-left"
      }`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      variants={fadeUp}
      transition={{ duration: 0.55 }}
    >
      {eyebrow && (
        <p
          className={`mb-3 text-sm font-semibold ${eyebrowClassName}`}
        >
          {eyebrow}
        </p>
      )}

      <h2
        className={`text-balance text-3xl font-extrabold md:text-4xl ${titleClassName}`}
      >
        {title}
      </h2>

      <p
        className={`mt-4 max-w-lg text-sm leading-7 ${
          align === "center" ? "mx-auto" : ""
        } ${bodyClassName}`}
      >
        {body}
      </p>
    </motion.div>
  );
}