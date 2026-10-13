"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { FaUsers, FaMusic, FaChartBar, FaAward } from "react-icons/fa";

import industryPic from "../assets/industry.jpg";
import flutePic from "../assets/flute.jpg";

interface ExtracurricularActivity {
  title: string;
  category: string;
  icon: React.ElementType;
  image?: StaticImageData;
  imageAlt?: string;
  roles: {
    role: string;
    period: string;
    summary: string;
  }[];
  skills: string[];
}

export default function ExtracurricularSection() {
  const extracurriculars: ExtracurricularActivity[] = [
    // 1. MEMS
    {
      title: "McMaster Engineering and Management Society (MEMS)",
      category: "Executive Governance & Leadership",
      icon: FaUsers,
      image: industryPic,
      imageAlt: "Arjun Karthik leading the MEMS Industry Night Gala",
      roles: [
        {
          role: "Co-President",
          period: "May 2026 – Present",
          summary:
            "Serving as the chief executive representing all Engineering & Management undergraduate students at McMaster. Leading executive portfolio leads (Finance, Academic Affairs, Social, Industry Relations) to spearhead career mentorship, alumni panels, and corporate engagement.",
        },
        {
          role: "Industry Night Chair",
          period: "May 2025 – April 2026",
          summary:
            "Directed the overall planning, executive committees, corporate sponsorship acquisition, and execution for the annual Engineering & Management Industry Night gala.",
        },
      ],
      skills: ["Executive Leadership", "Corporate Sponsorship", "Event Orchestration", "Stakeholder Management"],
    },

    // 2. Flute Ensemble
    {
      title: "McMaster Flute Ensemble",
      category: "Artistic Performance & Classical Music",
      icon: FaMusic,
      image: flutePic,
      imageAlt: "McMaster Flute Ensemble performance",
      roles: [
        {
          role: "Flute Player & Ensemble Musician",
          period: "2022 – 2023",
          summary:
            "Performed classical, contemporary, and chamber repertoire as a flautist in the McMaster Flute Ensemble during the 2022–2023 season, participating in weekly rehearsals and university campus recitals.",
        },
      ],
      skills: ["Flute Performance", "Ensemble Collaboration", "Creative Discipline", "Musical Expression"],
    },

    // 3. MES
    {
      title: "McMaster Engineering Society (MES)",
      category: "Infrastructure Software & Student Advocacy",
      icon: FaChartBar,
      roles: [
        {
          role: "Software Developer — Infrastructure Technology Team",
          period: "May 2025 – April 2026",
          summary:
            "Contributed web features and administrative dashboard management to the official McMaster Engineering Welcome Week portal, enhancing real-time event coordination and engagement for incoming engineering students.",
        },
        {
          role: "Data Coordinator",
          period: "May 2022 – April 2023",
          summary:
            "Analyzed faculty-wide student census data and survey feedback on behalf of the McMaster Engineering Society (representing 5,000+ engineering students) to uncover trends in student workload, mental health, and academic support, providing data-driven recommendations to faculty administration.",
        },
      ],
      skills: ["Full-Stack Web Development", "Dashboard Management", "Data Analysis", "Student Advocacy"],
    },

    // 4. MED-T
    {
      title: "McMaster Medical Engineering Design Team (MED-T)",
      category: "Biomedical Engineering & Outreach",
      icon: FaAward,
      roles: [
        {
          role: "Software Team Member — Prosthetics Division",
          period: "September 2023 – April 2024",
          summary:
            "Engineered and maintained C++ embedded control software to calibrate the articulation and finger mobility of a functional 3D-printed prosthetic hand prototype.",
        },
        {
          role: "Outreach Team Member",
          period: "November 2021 – August 2023",
          summary:
            "Promoted biomedical engineering innovations to high school and university students through interactive workshops and distinguished guest speaker seminars.",
        },
      ],
      skills: ["C++ Software", "Prosthetics Mobility", "Biomedical Outreach", "Team Collaboration"],
    },
  ];

  return (
    <section id="extracurriculars" className="py-24 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            Leadership &amp; Community
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Extracurriculars &amp; <span className="text-gradient-cyan">Involvement</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Beyond the keyboard: Leading society governance, empowering engineering peers, performing
            classical chamber music, and contributing to biomedical design teams.
          </p>
        </div>

        {/* Extracurricular Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {extracurriculars.map((activity, idx) => {
            const Icon = activity.icon;
            return (
              <div
                key={idx}
                className="glass-panel glass-panel-hover rounded-3xl p-6 sm:p-8 border border-blue-500/25 flex flex-col justify-between"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 p-[1px] flex items-center justify-center shrink-0 shadow-md">
                        <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                          <Icon className="text-lg text-cyan-300" />
                        </div>
                      </div>
                      <div>
                        <span className="text-[11px] font-semibold text-cyan-300 uppercase tracking-wider block">
                          {activity.category}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                          {activity.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Optional Image */}
                  {activity.image && (
                    <div className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden mb-6 border border-blue-500/20 group">
                      <Image
                        src={activity.image}
                        alt={activity.imageAlt || activity.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-4 right-4 text-xs font-medium text-slate-200 backdrop-blur-sm px-2.5 py-1 rounded-md bg-slate-950/60 w-fit">
                        {activity.imageAlt}
                      </div>
                    </div>
                  )}

                  {/* Role Positions */}
                  <div className="space-y-4 mb-6">
                    {activity.roles.map((r, rIdx) => (
                      <div
                        key={rIdx}
                        className="p-4 rounded-xl bg-slate-900/60 border border-blue-500/15"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                          <h4 className="text-base font-bold text-blue-200">{r.role}</h4>
                          <span className="text-xs text-cyan-300 font-medium px-2.5 py-0.5 rounded-full bg-blue-950/70 border border-blue-500/30 w-fit">
                            {r.period}
                          </span>
                        </div>
                        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                          {r.summary}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills Footer */}
                <div className="pt-4 border-t border-blue-500/20 flex flex-wrap gap-1.5">
                  {activity.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-blue-950/60 text-slate-200 border border-blue-400/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
