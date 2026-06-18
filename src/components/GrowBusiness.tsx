"use client";
import { motion } from "motion/react";
import { BarChart3, Code2, MousePointer2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { FaChartArea } from "react-icons/fa6";
import SectionIntro from "./SectionIntro";
const fadeUp = {
    hidden: { opacity: 0, y: 34 },
    show: { opacity: 1, y: 0 },
  };

  const featureCards: Array<{ title: string; body: string; icon: LucideIcon; accent: string }> = [
    {
      title: "Active User Analytics",
      body: "Class aptent taciti sociosqu litora torquent conubia nostram.",
      icon: BarChart3,
      accent: "text-[#6d55ff] bg-[#f0edff]",
    },
    {
      title: "Smart Coding Development",
      body: "Morbi eget aliquet tellus, best condimentum aliquet quam.",
      icon: Code2,
      accent: "text-[#f28b9e] bg-[#fff0f3]",
    },
    {
      title: "User Friendly Interface",
      body: "Quisque magna, sollicitudin vitae, lobortis feugiat arcu.",
      icon: MousePointer2,
      accent: "text-[#34c89f] bg-[#e9fff8]",
    },
  ];
  
export default function GrowBusiness() {
  return (
    <section className="section-pad" id="pages">
      <div className="container-x">
        <SectionIntro
          title="How To Grow Your Business"
          body="Class aptent taciti sociosqu ad litora torquent conubia nostram inceptos himenaeos. Phasellus metus nisi condimentum."
        />
        <div className="grid gap-7 md:grid-cols-3">
          {featureCards.map((card, index) => (
            <motion.article
              key={card.title}
              className="rounded-md bg-white p-10 text-center card-shadow"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
              variants={fadeUp}
              transition={{ delay: index * 0.12, duration: 0.55 }}
            >
              <span className={`mx-auto grid h-14 w-14 place-items-center rounded-md ${card.accent}`}>
                <card.icon size={28} />
              </span>
              <h3 className="mt-6 text-lg font-extrabold">{card.title}</h3>
              <p className="mt-4 text-sm leading-7 text-sub-text">{card.body}</p>
            </motion.article>
          ))}
        </div>
        <p className="mt-14 text-center text-sm text-[#141F39]">
          Approx <strong className="font-extrabold text-primary">875+</strong> team members ready to online support for you
        </p>
      </div>
    </section>
  )
}


  
