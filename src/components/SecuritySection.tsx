"use client";
import { motion } from 'motion/react';
import SecurityVisual from './SecurityVisual';
import PointingArrow from '@/assets/svg/PointingArrow';
const fadeUp = {
    hidden: { opacity: 0, y: 34 },
    show: { opacity: 1, y: 0 },
  };
export default function SecuritySection() {
  return (
    <section className="section-pad bg-[#fbfcff]">
      <div className="container-x grid items-center gap-12 md:grid-cols-2">
        <div className='block md:hidden'>
          <SecurityVisual />
        </div>
        <motion.div className='relative' initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} variants={fadeUp}>
          <h2 className="md:max-w-md text-balance text-4xl font-extrabold leading-tight">
            Better Security To Better Protection An Experience Of Strength.
          </h2>
          <p className="mt-5 md:max-w-md text-sm leading-7 text-sub-text">
            Class aptent taciti sociosqu ad litora torquent conubia nostra inceptos himenaeos. Donec tristique nibh ipsum dignissim.
          </p>
          <div className="mt-9 space-y-7">
            <div>
              <h3 className="text-lg font-extrabold">Well Organised User Interface</h3>
              <p className="mt-3 text-sm leading-7 text-sub-text">Etiam mi euismod odio. Ut volutpat sem a lacus fringilla.</p>
            </div>
            <div>
              <h3 className="text-lg font-extrabold">Completely Bug Free</h3>
              <p className="mt-3 text-sm leading-7 text-sub-text">Cras eleifend leo ac varius tristique suspendisse.</p>
            </div>
          </div>
          <div className='absolute top-0 right-0 mt-10 -rotate-30 hidden md:block'>
            <PointingArrow width="80" />
          </div>
        </motion.div>
        <div className='hidden md:block'>
          <SecurityVisual />
        </div>
      </div>
    </section>
  )
}
