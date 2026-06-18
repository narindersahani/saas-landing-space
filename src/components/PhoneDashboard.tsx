"use client";
import { motion } from "motion/react";
import Image from "next/image";
export default function PhoneDashboard() {
  return (
    <div className="relative mx-auto">
      <motion.div
        initial={{ opacity: 0, x: 35 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.18 }}
      >
        <Image 
          src="/performance-thumb.png"
          width="580"
          height="720"
          className="h-auto"
          alt=""
        />
      </motion.div>
    </div>
  )
}
