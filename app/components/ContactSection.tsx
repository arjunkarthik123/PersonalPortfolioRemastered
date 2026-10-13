"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedinIn, FaGithub, FaFileDownload, FaCopy, FaCheck } from "react-icons/fa";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("arjunkarthik2003@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background radial glowing effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            Let&apos;s Connect
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Get in <span className="text-gradient-cyan">Touch</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Currently seeking new graduate opportunities in Software Engineering, Full-Stack Development, and Artificial Intelligence/Machine Learning. I&apos;m open to remote or on-site roles across North America, particularly in the Greater Toronto Area (GTA) and the Greater Vancouver Area (GVA). Let&apos;s collaborate to build scalable systems and impactful solutions!
          </p>
        </div>

        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Email Card */}
          <div className="glass-panel rounded-2xl p-6 border border-blue-500/25 relative group hover:border-blue-400/50 transition">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-cyan-300 text-xl shrink-0">
                  <FaEnvelope />
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                    Email Address
                  </h3>
                  <a
                    href="mailto:arjunkarthik2003@gmail.com"
                    className="text-base sm:text-lg font-bold text-white hover:text-cyan-300 transition break-all"
                  >
                    arjunkarthik2003@gmail.com
                  </a>
                  <p className="text-xs text-slate-400 mt-1">Prompt replies within 24 hours</p>
                </div>
              </div>

              <button
                onClick={copyEmail}
                className="p-2.5 rounded-lg bg-slate-900 border border-blue-500/30 text-slate-300 hover:text-white hover:border-cyan-400 transition shrink-0"
                title="Copy email to clipboard"
                aria-label="Copy email"
              >
                {copied ? <FaCheck className="text-emerald-400" /> : <FaCopy />}
              </button>
            </div>

            {copied && (
              <div className="mt-3 text-xs text-emerald-400 font-medium">
                ✓ Email copied to clipboard!
              </div>
            )}
          </div>

          {/* Phone Card */}
          <div className="glass-panel rounded-2xl p-6 border border-blue-500/25 hover:border-blue-400/50 transition">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-cyan-300 text-xl shrink-0">
                <FaPhoneAlt />
              </div>
              <div>
                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                  Phone / Text
                </h3>
                <a
                  href="tel:+16475454019"
                  className="text-base sm:text-lg font-bold text-white hover:text-cyan-300 transition"
                >
                  +1 (647) 545-4019
                </a>
                <p className="text-xs text-slate-400 mt-1">Available via SMS or direct phone call</p>
              </div>
            </div>
          </div>

          {/* Location & Eligibility Card */}
          <div className="glass-panel rounded-2xl p-6 border border-blue-500/25 hover:border-blue-400/50 transition">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-cyan-300 text-xl shrink-0">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                  Location &amp; Work Status
                </h3>
                <p className="text-base font-bold text-white">Toronto, Ontario, Canada</p>
                <p className="text-xs text-slate-400 mt-1">
                  US & Canada Dual Citizen
                </p>
              </div>
            </div>
          </div>

          {/* Social Profiles & Direct Resume Card */}
          <div className="glass-panel rounded-2xl p-6 border border-blue-500/25 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/arjun-karthik-a931681b4/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-slate-900 border border-blue-500/30 text-blue-300 hover:text-white hover:bg-blue-600/30 hover:border-cyan-400 flex items-center justify-center transition shadow-sm"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedinIn className="text-lg" />
              </a>

              <a
                href="https://github.com/arjunkarthik123"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-slate-900 border border-blue-500/30 text-blue-300 hover:text-white hover:bg-blue-600/30 hover:border-cyan-400 flex items-center justify-center transition shadow-sm"
                aria-label="GitHub Profile"
              >
                <FaGithub className="text-lg" />
              </a>

              <a
                href="mailto:arjunkarthik2003@gmail.com"
                className="w-12 h-12 rounded-xl bg-slate-900 border border-blue-500/30 text-blue-300 hover:text-white hover:bg-blue-600/30 hover:border-cyan-400 flex items-center justify-center transition shadow-sm"
                aria-label="Send direct email"
              >
                <FaEnvelope className="text-lg" />
              </a>
            </div>

            <Link
              href="/Arjun_Karthik_Resume_October_2026.pdf"
              download="Arjun_Karthik_Resume_October_2026.pdf"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-md shadow-blue-600/30 transition"
            >
              <FaFileDownload className="text-xs" />
              <span>Download Resume</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
