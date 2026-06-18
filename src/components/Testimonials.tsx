"use client";
import { motion } from "motion/react";
import SectionIntro from "./SectionIntro";
const testimonials = [
    {
      name: "Jenny Wilson",
      role: "Project Manager at Microsoft",
      quote: "I just simply love tools that make my life easier. I have everything that I need in one place.",
    },
    {
      name: "Robert Fox",
      role: "Founder at Brain.co",
      quote: "I really like that I can have all in one place. I can send emails and text messages from a single system.",
      featured: true,
    },
    {
      name: "Kristin Watson",
      role: "UX Designer at Google",
      quote: "Very easy to use and set up. It is simple, I can easily provide live support to my website visitors.",
    },
];
const fadeUp = {
    hidden: { opacity: 0, y: 34 },
    show: { opacity: 1, y: 0 },
  };
  
export default function Testimonials() {
  return (
    <section className="section-pad bg-[#fbfcff]" id="blog">
      <div className="container-x">
        <SectionIntro
          title="What People Say"
          body="Quisque fermentum porta tincidunt. Interdum semper. Pellentesque facilisis sapien mollis suscipit."
        />
        <div className="grid items-center gap-7 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.name}
              className={`rounded-md bg-white p-8 text-center ${item.featured ? "scale-105 soft-shadow" : ""}`}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: index * 0.1 }}
            >
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#d8c7b9] text-xl font-extrabold text-white">
                {item.name.split(" ").map((part) => part[0]).join("")}
              </div>
              <p className="mt-7 text-sm leading-7 text-sub-text">&ldquo;{item.quote}&rdquo;</p>
              <h3 className="mt-7 font-extrabold">{item.name}</h3>
              <p className="mt-2 text-xs font-semibold text-[#8b93a8]">{item.role}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
