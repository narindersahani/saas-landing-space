"use client";
import { logos } from '@/constants/logo';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
export default function LogoStrip() {
  return (
    <section className="border-y border-[#f2f4f9] bg-white py-12">
      <div className="container-x grid grid-cols-2 items-center gap-8 text-center text-lg font-bold text-[#a5aab7] md:grid-cols-4">
        {logos.map((logo, index) => (
          <motion.div
            key={logo}
            className="flex items-center justify-center gap-2"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
          >
            <Sparkles size={18} />
            {logo}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
