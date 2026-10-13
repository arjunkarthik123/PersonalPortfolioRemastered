"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaLinkedinIn, FaGithub, FaBars, FaTimes, FaFileDownload, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ["about", "experience", "extracurriculars", "projects", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/#about", section: "about" },
    { name: "Experience", href: "/#experience", section: "experience" },
    { name: "Extracurriculars", href: "/#extracurriculars", section: "extracurriculars" },
    { name: "Projects", href: "/#projects", section: "projects" },
    { name: "Contact", href: "/#contact", section: "contact" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsOpen(false);
    if (pathname === "/" && href.startsWith("/#")) {
      e.preventDefault();
      const targetId = href.replace("/#", "");
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-slate-950/85 backdrop-blur-md border-b border-blue-500/20 shadow-lg shadow-blue-950/50"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <Link
            href="/"
            className="flex items-center gap-3 group text-white focus:outline-none"
            onClick={() => setIsOpen(false)}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 p-[1.5px] shadow-md shadow-blue-500/30 group-hover:shadow-blue-400/50 transition">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <span className="font-bold text-lg bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  AK
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-100 text-base sm:text-lg tracking-tight group-hover:text-blue-300 transition">
                Arjun Karthik
              </span>
              <span className="text-[11px] text-blue-400/90 font-medium tracking-wide hidden sm:block">
                Software Eng &amp; Management
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 bg-slate-900/60 backdrop-blur-lg px-4 py-1.5 rounded-full border border-blue-500/20 shadow-inner shadow-blue-950/50">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  activeSection === link.section && pathname === "/"
                    ? "text-white bg-blue-600/90 shadow-md shadow-blue-600/30 font-semibold"
                    : "text-slate-300 hover:text-white hover:bg-blue-600/20"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action Icons & Resume */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/arjun-karthik-a931681b4/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-9 h-9 rounded-full bg-slate-900/80 border border-blue-500/30 text-slate-300 hover:text-white hover:border-blue-400 hover:bg-blue-600/20 flex items-center justify-center transition shadow-sm"
            >
              <FaLinkedinIn className="text-sm" />
            </a>

            <a
              href="https://github.com/arjunkarthik123"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-9 h-9 rounded-full bg-slate-900/80 border border-blue-500/30 text-slate-300 hover:text-white hover:border-blue-400 hover:bg-blue-600/20 flex items-center justify-center transition shadow-sm"
            >
              <FaGithub className="text-sm" />
            </a>

            <a
              href="/Arjun_Karthik_Resume_October_2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-500 shadow-md shadow-blue-600/30 hover:shadow-cyan-500/30 transition-all duration-200"
            >
              <FaFileDownload className="text-xs" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href="/Arjun_Karthik_Resume_October_2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-full text-[11px] font-semibold text-white bg-blue-600 flex items-center gap-1.5 shadow-sm"
            >
              <FaFileDownload className="text-[10px]" />
              <span>CV</span>
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-slate-900/80 border border-blue-500/30 text-slate-200 hover:text-white hover:bg-blue-600/20 focus:outline-none transition"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="sm:hidden bg-slate-950/95 backdrop-blur-xl border-b border-blue-500/30 px-6 py-6 shadow-2xl transition-all duration-300">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`py-2 px-3 rounded-lg text-sm font-medium transition ${
                  activeSection === link.section && pathname === "/"
                    ? "text-cyan-300 bg-blue-900/40 font-semibold"
                    : "text-slate-300 hover:text-white hover:bg-blue-600/20"
                }`}
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 mt-2 border-t border-blue-500/20 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/arjun-karthik-a931681b4/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-900 border border-blue-500/30 text-slate-300 hover:text-white flex items-center justify-center"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://github.com/arjunkarthik123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-900 border border-blue-500/30 text-slate-300 hover:text-white flex items-center justify-center"
                >
                  <FaGithub />
                </a>
                <a
                  href="mailto:arjunkarthik2003@gmail.com"
                  className="w-10 h-10 rounded-full bg-slate-900 border border-blue-500/30 text-slate-300 hover:text-white flex items-center justify-center"
                >
                  <FaEnvelope />
                </a>
              </div>
              <a
                href="/Arjun_Karthik_Resume_October_2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 shadow-md flex items-center gap-2"
              >
                <FaFileDownload />
                <span>Resume PDF</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
