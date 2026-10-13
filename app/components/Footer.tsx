"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { FaLinkedinIn, FaGithub, FaEnvelope, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const pathname = usePathname();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname === "/" && href.startsWith("/#")) {
      e.preventDefault();
      const targetId = href.replace("/#", "");
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navLinks = [
    { name: "About", href: "/#about", isExternal: false },
    { name: "Experience", href: "/#experience", isExternal: false },
    { name: "Extracurriculars", href: "/#extracurriculars", isExternal: false },
    { name: "Projects", href: "/#projects", isExternal: false },
    { name: "Contact", href: "/#contact", isExternal: false },
  ];

  return (
    <footer className="relative bg-slate-950/90 border-t border-blue-500/20 pt-12 pb-8 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Row: Brand & Socials / Back to top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-blue-500/15">
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 p-[1.5px] shadow-md shadow-blue-500/20">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <span className="font-bold text-sm bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  AK
                </span>
              </div>
            </div>
            <div>
              <span className="text-lg font-bold text-white tracking-tight">Arjun Karthik</span>
              <p className="text-xs text-slate-400">
                Software Engineering &amp; Management • McMaster University
              </p>
            </div>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/arjun-karthik-a931681b4/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-slate-900 border border-blue-500/20 text-slate-300 hover:text-white hover:border-cyan-400 hover:bg-blue-600/20 flex items-center justify-center transition"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="text-sm" />
            </a>
            <a
              href="https://github.com/arjunkarthik123"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-slate-900 border border-blue-500/20 text-slate-300 hover:text-white hover:border-cyan-400 hover:bg-blue-600/20 flex items-center justify-center transition"
              aria-label="GitHub"
            >
              <FaGithub className="text-sm" />
            </a>
            <a
              href="mailto:arjunkarthik2003@gmail.com"
              className="w-9 h-9 rounded-full bg-slate-900 border border-blue-500/20 text-slate-300 hover:text-white hover:border-cyan-400 hover:bg-blue-600/20 flex items-center justify-center transition"
              aria-label="Email"
            >
              <FaEnvelope className="text-sm" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-blue-950 border border-blue-500/30 text-cyan-300 hover:bg-blue-600 hover:text-white transition shadow-sm ml-1"
              title="Back to Top"
              aria-label="Back to top"
            >
              <FaArrowUp className="text-xs" />
            </button>
          </div>
        </div>

        {/* Dedicated One-Line Navigation Row at the Bottom */}
        <div className="py-6 border-b border-blue-500/15">
          <nav
            aria-label="Footer Navigation"
            className="flex items-center justify-center gap-5 sm:gap-8 md:gap-10 text-xs sm:text-sm font-medium text-slate-300 whitespace-nowrap overflow-x-auto"
          >
            {navLinks.map((link) =>
              link.isExternal ? (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors duration-200"
                >
                  {link.name}
                </a>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="hover:text-cyan-300 transition-colors duration-200"
                >
                  {link.name}
                </a>
              )
            )}
          </nav>
        </div>

        {/* Copyright and graduation info */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-3">
          <p>© {new Date().getFullYear()} Arjun Karthik. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Software Engineering &amp; Management • Class of 2027
          </p>
        </div>
      </div>
    </footer>
  );
}
