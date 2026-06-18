"use client";
import { useState } from "react";
import { navItems } from "../constants/menu";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

import ElasticButton from "./ui/ElasticButton";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
    <header className="container-x flex h-20 items-center justify-between">
      <a className="" href="#">
        <Logo className="text-primary" />
      </a>
      <nav className="hidden items-center gap-8 text-md font-semibold text-[#27324c] md:flex">
        {navItems.map((item, index) => (
          <a key={index} href={item.url} className="hover:text-[#3927ff]">
            {item.label}
          </a>
        ))}
      </nav>
      <div className="hidden md:block">
        <ElasticButton 
          text="Get Started Free"
          href="#"
          icon={false}
          className="py-2.5 hover:bg-primary/80"
        />
      </div>
      {/* <Link href="" className="hidden rounded-md bg-[#3927ff] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#3927ff]/20 transition-all hover:-translate-y-0.5 hover:bg-[#2918e9] md:inline-flex">
        Get Started Free
      </Link> */}
      <button
        className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#e7ebf5] bg-white text-[#17213a] md:hidden"
        aria-label="Open navigation"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen(true)}
      >
        <Menu size={18} />
      </button>

      {isMenuOpen ? (
        <motion.button
          className="fixed inset-0 z-40 bg-[#101b34]/42 backdrop-blur-[2px] md:hidden"
          aria-label="Close navigation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeMenu}
        />
      ) : null}

      <motion.aside
        className="fixed inset-y-0 left-0 z-50 flex w-[min(90vw,340px)] flex-col bg-white p-6 shadow-2xl shadow-[#101b34]/20 md:hidden"
        initial={false}
        animate={isMenuOpen ? { x: 0 } : { x: "-105%" }}
        transition={{ type: "spring", stiffness: 380, damping: 36 }}
        aria-hidden={!isMenuOpen}
      >
        <div className="flex items-center justify-between">
          <a className="flex items-center gap-1.5 font-extrabold text-[#152243]" href="#" onClick={closeMenu}>
          <Logo className="text-primary" width="180" />
          </a>
          <button
            className="grid h-10 w-10 place-items-center rounded-md border border-[#e7ebf5] text-[#17213a]"
            aria-label="Close navigation"
            onClick={closeMenu}
          >
            <X size={18} />
          </button>
        </div>
        <nav className="mt-10 flex flex-col gap-2 text-base font-extrabold text-[#17213a]">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.url}
              className="rounded-md px-3 py-4 hover:bg-[#f5f7ff] hover:text-[#3927ff]"
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          className="mt-auto rounded-md bg-[#3927ff] px-5 py-4 text-center text-sm font-bold text-white shadow-lg shadow-[#3927ff]/20"
          href="#pricing"
          onClick={closeMenu}
        >
          Get Started Free
        </a>
      </motion.aside>
    </header>
    </>
  )
}
