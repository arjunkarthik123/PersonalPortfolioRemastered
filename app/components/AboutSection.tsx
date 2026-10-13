"use client";

import React from "react";
import { FaGraduationCap, FaCode, FaChartPie, FaLightbulb, FaAward } from "react-icons/fa";

export default function AboutSection() {
  const pillars = [
    {
      title: "Software Systems Rigour",
      icon: FaCode,
      description:
        "Trained in large-scale system design, microservices architectures, distributed ETL pipelines, and robust data structures. From C# .NET to Java Spring Boot and Python machine learning, I engineer maintainable, low-latency applications.",
      skills: ["Distributed Systems", "REST & Microservices", "ETL & PySpark", "Relational SQL"],
    },
    {
      title: "Strategic Management & Delivery",
      icon: FaChartPie,
      description:
        "The Management program at McMaster integrates business strategy, managerial accounting, team economics, and agile project methodologies. I bridge the gap between complex engineering realities and business value.",
      skills: ["Agile Methodologies", "Financial Budgeting", "Cross-Functional Leadership", "Resource Planning"],
    },
    {
      title: "Academic Research & Innovation",
      icon: FaLightbulb,
      description:
        "Active NLP researcher at McMaster Faculty of Engineering, designing Transformer models with PyTorch and multi-GPU benchmarking. Continuously translating cutting-edge machine learning papers into practical implementations.",
      skills: ["Transformer NLP", "PyTorch Benchmarking", "Annotator Embeddings", "Multi-GPU Training"],
    },
    {
      title: "Community & Mentorship",
      icon: FaAward,
      description:
        "As Co-President of the McMaster Engineering & Management Society and as an Undergraduate Teaching Assistant, I foster collaborative culture, mentor first-year engineering students, and host industry-connecting galas.",
      skills: ["Society Leadership", "Undergraduate TA", "Industry Outreach", "Technical Mentorship"],
    },
  ];

  const technicalSkills = {
    Languages: ["Python", "Java", "C#", "TypeScript", "JavaScript", "SQL", "C++", "HTML/CSS"],
    "Frameworks & Libraries": [
      "Spring Boot",
      "React",
      "Next.js",
      "PyTorch",
      ".NET Core",
      "Flask",
      "PySpark",
      "Node.js",
      "Playwright",
    ],
    "Tools & Platforms": [
      "Git & GitHub",
      "Azure DevOps",
      "Oracle SQL",
      "Firebase",
      "Linux/Unix",
      "Maven",
      "Apache Commons",
      "Jira",
    ],
    "Core Competencies": [
      "Distributed Systems",
      "Microservices",
      "Object-Oriented Design",
      "Machine Learning",
      "ETL Pipelines",
      "Agile Project Management",
    ],
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Decorative background shape */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            About Me &amp; Academic Background
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            The Intersection of <span className="text-gradient-cyan">Engineering &amp; Management</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Combined expertise in software development + business strategy.
          </p>
        </div>

        {/* Education & Bio Card */}
        <div className="glass-panel rounded-3xl p-8 sm:p-10 mb-14 relative overflow-hidden border border-blue-500/25">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 text-cyan-400 mb-3">
                <FaGraduationCap className="text-2xl" />
                <span className="text-sm font-semibold uppercase tracking-wider text-cyan-300">
                  Degree &amp; Program
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Bachelor of Engineering &amp; Management (B.Eng.Mgt) — Software Engineering
              </h3>
              <p className="text-blue-300 font-medium text-base mb-4">
                McMaster University, Hamilton, ON • Class of 2027
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                My academic journey fuses rigorous software development fundamentals with core commerce disciplines.
                Through advanced coursework spanning Large System Design, Data Structures &amp; Algorithms, Machine
                Learning, and Natural Language Processing alongside Finance, Accounting, and Marketing,
                I specialize in translating technical architectures into commercial impact.
              </p>

              {/* Coursework pills */}
              <div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                  Key Coursework &amp; Highlights:
                </span>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Large System Design",
                    "Data Structures & Algorithms",
                    "Applied Machine Learning",
                    "Natural Language Processing",
                    "Object-Oriented Programming",
                    "Relational Databases & SQL",
                    "Corporate Finance & Accounting",
                    "Marketing Strategy & Operations",
                  ].map((course, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-900/80 border border-blue-500/20 text-slate-200"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Program Advantage Callout */}
            <div className="lg:col-span-4 bg-gradient-to-br from-blue-950/80 to-slate-900/90 rounded-2xl p-6 border border-cyan-500/30">
              <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                Dual Discipline
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                Software Engineering Fundamentals + Core Commerce &amp; Management Principles.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="glass-panel glass-panel-hover rounded-2xl p-7 border border-blue-500/20 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500/80 p-[1px] flex items-center justify-center text-white shadow-md shadow-blue-600/30">
                      <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                        <Icon className="text-lg text-cyan-300" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white">{pillar.title}</h3>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed mb-5">{pillar.description}</p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-blue-500/15">
                  {pillar.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-blue-950/70 border border-blue-500/30 text-blue-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Technical Skills Showcase */}
        <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-blue-500/25">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Technical Toolset &amp; Skills</h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Languages, frameworks, and developer workflows I leverage daily
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(technicalSkills).map(([category, items], idx) => (
              <div key={idx} className="bg-slate-900/60 rounded-xl p-5 border border-blue-500/20">
                <h4 className="text-sm font-bold text-cyan-300 uppercase tracking-wider mb-3 pb-2 border-b border-blue-500/20">
                  {category}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((item, itemIdx) => (
                    <span
                      key={itemIdx}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-blue-950/50 text-slate-200 border border-blue-400/20 hover:border-cyan-400/50 hover:text-white transition"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
