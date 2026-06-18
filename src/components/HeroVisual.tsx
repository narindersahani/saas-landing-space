"use client";
import { motion } from "motion/react";
import { Activity, Play } from "lucide-react";
import Image from "next/image";
export default function HeroVisual() {
  return (
    <div className="relative min-h-[520px]">
      <motion.div
        className=""
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.6 }}
      >
        <Image 
          src="/hero-img.png"
          width="800"
          height="300"
          className="h-auto"
          alt=""
        />
      </motion.div>

      <span className="absolute -left-6 top-0 h-4 w-4 rounded-full bg-[#ffdce6]" />
      <span className="absolute left-1/2 top-2 h-12 w-12 rotate-90 text-[#bdf2d5]">
        <Play fill="currentColor" strokeWidth={0} size={48} />
      </span>
      <span className="absolute bottom-0 right-2 h-16 w-16 rounded-tl-full bg-[#b8a5ff]" />
    </div>
  )
}
