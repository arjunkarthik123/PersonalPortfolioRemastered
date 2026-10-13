"use client";

import React from "react";
import Image from "next/image";
import { FaArrowRight, FaFileDownload } from "react-icons/fa";
import arjunPic from "../assets/arjun.png";

export default function HeroSection() {

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-500/30 text-blue-300 text-xs sm:text-sm font-medium mb-6 shadow-sm backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Software Engineering &amp; Management Student</span>
              <span className="text-blue-500">•</span>
              <span className="text-cyan-300 font-semibold">McMaster University</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
              Hi, I&apos;m <span className="text-gradient-cyan">Arjun Karthik</span>.
              <br />
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-300 block mt-2">
                Engineering Scalable Systems &amp; Leading High-Impact Teams.
              </span>
            </h1>

            {/* Subtitle / Intro */}
            <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-2xl mb-8">
              I am a final-year Software Engineering &amp; Management student specializing in
              distributed systems, cloud microservices, and applied machine learning. Blending
              technical rigour with strategic commerce and agile project management, I build systems
              that scale reliably and solve real-world problems.
            </p>

            {/* Call to action buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#experience"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 hover:shadow-cyan-500/30 transition-all duration-200 group"
              >
                <span>Explore Experience</span>
                <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-blue-500/30 hover:border-blue-400/60 transition-all duration-200"
              >
                <span>View Projects</span>
              </a>

              <a
                href="/Arjun_Karthik_Resume_October_2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-cyan-300 bg-blue-950/50 hover:bg-blue-900/60 border border-cyan-500/30 hover:border-cyan-400 transition-all duration-200"
              >
                <FaFileDownload className="text-xs" />
                <span>Resume</span>
              </a>
            </div>

            {/* Current Focus Highlights */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
              <span className="text-slate-500 font-semibold tracking-wider uppercase">Focus:</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900/60 border border-blue-500/20 text-slate-300">
                Prev. @ Citi
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900/60 border border-blue-500/20 text-slate-300">
                NLP Researcher @ McMaster
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900/60 border border-blue-500/20 text-slate-300">
                Co-President @ MEMS
              </span>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-72 h-72 sm:w-84 sm:h-84 md:w-96 md:h-96">
              {/* Outer decorative gradient glow rings */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-blue-600 via-cyan-400 to-indigo-600 opacity-40 blur-xl animate-pulse-glow" />
              <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 opacity-80" />

              {/* Portrait Image Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-950 border-4 border-slate-950 shadow-2xl">
                <Image
                  src={arjunPic}
                  alt="Arjun Karthik - Software Engineering & Management"
                  fill
                  priority
                  sizes="(max-width: 768px) 288px, 384px"
                  className="object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Floating Badge 1 - Top Left */}
              <div className="absolute -top-3 -left-4 sm:-left-6 px-3.5 py-2 rounded-xl bg-slate-900/90 backdrop-blur-md border border-blue-500/30 shadow-xl shadow-blue-950/60 flex items-center gap-2.5 animate-float">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-400" />
                <div className="text-left">
                  <p className="text-[10px] text-slate-400 font-medium">Enterprise</p>
                  <p className="text-xs font-bold text-white">Prev. Software Engineer @ Citi</p>
                </div>
              </div>

              {/* Floating Badge 2 - Bottom Right */}
              <div className="absolute -bottom-4 -right-4 sm:-right-6 px-3.5 py-2 rounded-xl bg-slate-900/90 backdrop-blur-md border border-cyan-500/30 shadow-xl shadow-blue-950/60 flex items-center gap-2.5 animate-float-delayed">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                <div className="text-left">
                  <p className="text-[10px] text-slate-400 font-medium">Leadership</p>
                  <p className="text-xs font-bold text-white">Co-President @ MEMS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
     </div>
    </section>
  );
}
