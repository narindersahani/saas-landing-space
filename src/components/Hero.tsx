"use client";
import Header from "./Header"
import HeroVisual from "./HeroVisual";
import { motion } from "motion/react";
import { ShieldCheck } from "lucide-react";
import ElasticButton from "./ui/ElasticButton";
const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };
  
export default function Hero() {
  return (
    <section className="mesh-bg pb-20" id="home">
      <Header />
      <div className="container-x grid items-center gap-10 pt-12 md:grid-cols-[0.95fr_1.05fr] md:pt-16">
        <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.6 }}>
          <h1 className="max-w-xl text-balance text-5xl font-extrabold leading-[1.05] tracking-normal text-[#12203b] md:text-6xl">
            Smart-Thinking & Innovative Solution.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-8 text-[#4F4F4F]">
            Class aptent taciti sociosqu ad litora torquent conubia nostra inceptos himenaeos. Donec tristique nibh ipsum dignissim.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
          
            <ElasticButton
              text="Explore Service"
              href="/services"
            />
            {/* <a className="rounded-md bg-primary px-7 py-4 text-sm font-bold text-white shadow-xl shadow-primary/20 hover:-translate-y-0.5 hover:bg-[#2918e9]" href="#pricing">
              Discover More
            </a> */}
            {/* <a className="inline-flex items-center gap-2 text-sm font-bold text-[#17213a]" href="#portfolio">
              Explore Service <span className="text-primary">+</span>
            </a> */}
          </div>
          <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3 text-xs font-semibold text-[#141F39]">
            {["Get 15 days free trial", "No credit card is required", "Cancel anytime"].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <ShieldCheck size={14} className="text-primary" />
                {item}
              </span>
            ))}
          </div>
        </motion.div>
        <HeroVisual />
      </div>
    </section>
  )
}
