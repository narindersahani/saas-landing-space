"use client"
import { motion } from 'motion/react';
import type { LucideIcon } from "lucide-react";
import { Users, Star, Bell, Brain, Lightbulb, Rocket, Gem, Wand2 } from 'lucide-react';
import SectionIntro from "./SectionIntro";
const reasons: Array<{ title: string; icon: LucideIcon; color: string }> = [
    { title: "Creative Ideas", icon: Lightbulb, color: "text-[#654cff] bg-[#f0edff]" },
    { title: "Awesome Design", icon: Rocket, color: "text-[#ef6f88] bg-[#fff0f3]" },
    { title: "Best Features", icon: Gem, color: "text-[#f3b941] bg-[#fff8df]" },
    { title: "Easy Solutions", icon: Wand2, color: "text-[#35c79f] bg-[#e9fff8]" },
];

const fadeUp = {
    hidden: { opacity: 0, y: 34 },
    show: { opacity: 1, y: 0 },
};

export default function ApplicationChoice() {
  return (
    <section className="section-pad bg-[#fbfcff]">
      <div className="container-x">
        <SectionIntro
          title="Why Will You Choose Our Application"
          body="Class aptent taciti sociosqu ad litora torquent conubia nostra inceptos himenaeos. Phasellus metus nisi euismod ligula."
        />
        <div className="relative mx-auto mb-16 grid h-[390px] max-w-3xl place-items-center">
          <div className="absolute h-80 w-80 rounded-full border border-dashed border-[#dfe4ef]" />
          <div className="absolute h-[390px] w-[390px] rounded-full border border-dashed border-[#eef1f6]" />
          <motion.div
            className="grid h-48 w-48 place-items-center rounded-full bg-white text-center soft-shadow"
            initial={{ scale: 0.85, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="grid h-36 w-36 place-items-center rounded-full border-[12px] border-primary border-b-[#eef1f6]">
              <div>
                <p className="text-3xl font-extrabold text-primary">5M +</p>
                <p className="mt-1 text-xs font-bold text-[#738098]">Active Members</p>
              </div>
            </div>
          </motion.div>
          {[
            ["top-4 left-44", "Assign task completed", Users],
            ["top-28 right-28", "Happy app member", Star],
            ["bottom-20 left-28", "More users save time", Bell],
            ["bottom-8 right-40", "Workflow designed", Brain],
          ].map(([position, text, Icon], index) => {
            const TypedIcon = Icon as LucideIcon;
            return (
              <motion.div
                key={String(text)}
                className={`absolute ${position} hidden items-center gap-3 rounded-md bg-white px-4 py-3 text-xs font-bold text-[#69738d] card-shadow sm:flex`}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <TypedIcon size={16} className="text-primary" />
                {String(text)}
              </motion.div>
            );
          })}
        </div>
        <div className="grid gap-6 md:grid-cols-4">
          {reasons.map((item, index) => (
            <motion.article
              key={item.title}
              className="rounded-md bg-white p-8 text-center card-shadow"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: index * 0.08 }}
            >
              <span className={`mx-auto grid h-14 w-14 place-items-center rounded-md ${item.color}`}>
                <item.icon size={25} />
              </span>
              <h3 className="mt-6 text-base font-extrabold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-sub-text">Class aptent taciti sociosqu litora torquent conubia.</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
