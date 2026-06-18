
import { footerLinks } from "@/constants/menu";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaGithub, FaApple, FaGooglePlay} from "react-icons/fa6";

import LogoLight from "./LogoLight";
  export default function Footer() {

    const socials = [FaLinkedinIn, FaFacebookF, FaInstagram, FaGithub];  
    return (
      <footer id="contact" className="bg-slate-950 text-white">
        <div className="container-x py-20">
          <div className="grid gap-14 lg:grid-cols-[1.5fr_repeat(4,1fr)]">
            {/* Brand */}
            <div>
              <a
                href="#"
                className="flex items-center gap-2 text-2xl font-extrabold"
              >
                <LogoLight className="text-gray-100" />
              </a>
  
              <p className="mt-6 max-w-sm text-sm leading-7 text-white/60">
                InventiveLake helps modern teams streamline workflows,
                collaborate efficiently, and manage projects from a
                single platform.
              </p>
  
              <div className="mt-8 space-y-3 text-sm text-white/70">
                <p>+1 (888) 123-4567</p>
                <p>hello@InventiveLake.com</p>
              </div>
  
              <div className="mt-8 flex flex-wrap gap-3">
                <button className="inline-flex items-center gap-2 cursor-pointer rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium transition hover:border-white/20 hover:bg-white/10">
                  <FaGooglePlay size={16} />
                  Google Play
                </button>
  
                <button className="inline-flex items-center gap-2 cursor-pointer rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium transition hover:border-white/20 hover:bg-white/10">
                  <FaApple size={16} />
                  App Store
                </button>
              </div>
  
              <div className="mt-10">
                <h4 className="mb-3 font-semibold">
                  Stay updated
                </h4>
  
                <div className="flex overflow-hidden rounded-xl border border-black bg-white">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 text-sm text-slate-900 outline-none"
                  />
  
                  <button className="bg-primary px-5 text-sm font-semibold text-white transition hover:bg-[#2f1fff] cursor-pointer">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
  
            {/* Links */}
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h3 className="font-semibold text-white">
                  {group.title}
                </h3>
  
                <ul className="mt-6 space-y-4">
                  {group.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-white/60 transition-colors hover:text-white"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
  
          <div className="mt-16 border-t border-white/10 pt-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <p className="text-sm text-white/50">
                © {new Date().getFullYear()} InventiveLake. All rights reserved.
              </p>
  
              <div className="flex items-center gap-3">
                {socials.map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    aria-label="Social Link"
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all hover:border-white/30 hover:bg-white hover:text-slate-950"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }