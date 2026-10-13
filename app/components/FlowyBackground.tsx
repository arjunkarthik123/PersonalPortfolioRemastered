"use client";

import React from "react";

export default function FlowyBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      {/* Background base */}
      <div className="absolute inset-0 bg-[#050b18]" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />

      {/* Flowing ambient glowing orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[55vw] h-[55vw] rounded-full bg-blue-600/15 blur-[120px] animate-pulse-glow" />
      <div className="absolute top-[35%] right-[-15%] w-[60vw] h-[60vw] rounded-full bg-cyan-500/10 blur-[140px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-[-10%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-indigo-600/15 blur-[130px] animate-pulse-glow" style={{ animationDelay: "4s" }} />

      {/* Flowy subtle SVG curves in background */}
      <svg
        className="absolute w-full h-full opacity-10"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M-100 200 C 300 450, 700 -50, 1100 300 C 1300 480, 1500 200, 1600 250"
          stroke="url(#flow-gradient-1)"
          strokeWidth="2"
        />
        <path
          d="M-50 600 C 350 400, 650 850, 1050 550 C 1300 350, 1450 700, 1600 650"
          stroke="url(#flow-gradient-2)"
          strokeWidth="1.5"
        />
        <defs>
          <linearGradient id="flow-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="50%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#818cf8" />
          </linearGradient>
          <linearGradient id="flow-gradient-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1d4ed8" />
            <stop offset="50%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
