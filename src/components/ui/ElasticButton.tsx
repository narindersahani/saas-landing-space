"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { twMerge } from "tailwind-merge";
type ElasticButtonProps = {
  href?: string;
  text: string;
  className?: string;
  icon?: boolean;
};

export default function ElasticButton({
  href = "#",
  text,
  className = "",
  icon = true,
}: ElasticButtonProps) {
  return (
    <>
      <svg width="0" height="0" className="absolute">
        <defs>
          <filter id="gooey">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="5"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="
                1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 22 -10
              "
              result="goo"
            />
            <feBlend
              in="SourceGraphic"
              in2="goo"
            />
          </filter>
        </defs>
      </svg>

      <motion.div
        initial="rest"
        whileHover="hover"
        animate="rest"
        className="inline-flex items-center"
      >
        <Link href={href}>
          <div
            className="flex items-center"
            style={{ filter: "url(#gooey)" }}
          >
            <motion.div
              variants={{
                rest: {},
                hover: {},
              }}
              className={twMerge("relative z-10 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-white", className)}
            >
              {text}
            </motion.div>

            {icon && (
              <motion.div
                variants={{
                  rest: {
                    x: 10,
                    rotate: 0,
                  },
                  hover: {
                    x: 16,
                    rotate: 45,
                  },
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                }}
                className="
                  relative
                  z-20
                  -ml-2
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  bg-primary
                  text-white
                "
              >
                <ArrowUpRight size={18} />
              </motion.div>
            )}
          </div>
        </Link>
      </motion.div>
    </>
  );
}