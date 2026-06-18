"use client";
import { useState } from "react";
import { motion } from 'motion/react';
import { ChevronDown} from 'lucide-react';
import PhoneDashboard from './PhoneDashboard';
const fadeUp = {
    hidden: { opacity: 0, y: 34 },
    show: { opacity: 1, y: 0 },
};
  
export default function PerformanceSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const accordionItems = [
    {
      title: "Custom Edit Tool Application",
      content:
        "Suspendisse mollis ligula dictum iaculis varius nulla velit pulvinar lorem ac scelerisque neque turpis.",
    },
    {
      title: "Built In Softly Chat Mode Enabled",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, rerum.",
    },
    {
      title: "Faster Fruit Builds System Analog Open",
      content:
        "Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    },
    {
      title: "Create Auto Layouts In App Interface",
      content:
        "Donec sed odio dui. Cras mattis consectetur purus sit amet fermentum.",
    },
  ];
  return (
    <section className="section-pad">
      <div className="container-x grid items-center gap-12 md:grid-cols-2">
        <div>
          <PhoneDashboard />
        </div>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} variants={fadeUp}>
          <h2 className="md:max-w-md text-balance text-4xl font-extrabold leading-tight">
            Performance Is The Key To Most People Achieving A Better Future
          </h2>
          <p className="mt-5 md:max-w-md text-sm leading-7 text-sub-text">Etiam euismod odio euismod lacus fringilla hendrerit.</p>
          <div className="mt-8 max-w-lg divide-y divide-[#edf0f7]">
            {accordionItems.map((item, index) => {
              const isOpen = activeIndex === index;

              return (
                <div key={item.title}>
                  <button
                    onClick={() =>
                      setActiveIndex(isOpen ? null : index)
                    }
                    className="flex cursor-pointer w-full items-center justify-between py-5 text-left text-base font-extrabold"
                  >
                    {item.title}

                    <motion.div
                      animate={{
                        rotate: isOpen ? 180 : 0,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                    >
                      <ChevronDown
                        size={18}
                        className="text-primary"
                      />
                    </motion.div>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 pr-8 text-sm leading-7 text-sub-text">
                      {item.content}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
          <p className="mt-4 md:max-w-md text-sm leading-7 text-sub-text">
            Suspendisse mollis ligula dictum iaculis varius nulla velit pulvinar lorem ac scelerisque neque turpis.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
