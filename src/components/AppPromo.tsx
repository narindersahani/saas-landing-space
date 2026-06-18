"use client";
import { motion } from "motion/react";
import Image from "next/image";
const fadeUp = {
    hidden: { opacity: 0, y: 34 },
    show: { opacity: 1, y: 0 },
};

export default function AppPromo() {
  return (
    <section className="section-pad">
      <div className="container-x grid items-center gap-12 md:grid-cols-2">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <h2 className="max-w-md text-balance text-4xl font-extrabold leading-tight">
            Ready To Use Our App With No Hidden Malware
          </h2>
          <p className="mt-5 max-w-md text-sm leading-7 text-sub-text">
            Etiam euismod volutpat lacus fringilla nisi. Mauris tacitis purus velit quis. Nam varius venenatis montes nisi aliquet.
          </p>
          <form className="mt-8 max-w-md">
            <label className="sr-only" htmlFor="email">Email address</label>
            <input id="email" type="email" placeholder="Enter your email address" className="h-14 w-full rounded-md border border-[#dedede] bg-white px-5 text-sm outline-none focus:border-primary" />
            <p className="mt-4 text-xs font-semibold text-sub-text">Already a member? Sign in</p>
          </form>
        </motion.div>
        <div className="relative">
            <Image 
              src="/ready-to-use.png"
              width="750"
              height="680"
              alt=""
              className="h-auto w-auto"
            />
        </div>
      </div>
    </section>
  )
}
