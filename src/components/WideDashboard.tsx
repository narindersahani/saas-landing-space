"use client";
import { motion } from "motion/react";
import Image from "next/image";
export default function WideDashboard() {
  return (
    <section className="section-pad">
      <div className="container-x">
        <motion.div
          className=""
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
            <Image 
                src="/dashboard-thumb.png"
                width="1200"
                height="500"
                alt=""
                className="w-full h-auto"
            />
        </motion.div>
      </div>
    </section>
  )
}
