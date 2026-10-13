"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { FaCalendarAlt, FaMapMarkerAlt, FaCheckCircle, FaBook, FaUserTie } from "react-icons/fa";

import veoneerLogo from "../assets/veoneerlogo.avif";
import macLogo from "../assets/macLogo.svg";
import transpireLogo from "../assets/transpire.png";
import citiLogo from "../assets/citi.svg";

interface ResearchPaper {
  title: string;
  authors: string;
  venue: string;
  date: string;
  supervisor: string;
  keywords: string[];
  abstract: string;
}

interface ExperienceItem {
  id: string;
  company: string;
  position: string;
  period: string;
  location: string;
  category: "Industry" | "Academia";
  logo: StaticImageData | string;
  logoBg?: string;
  badge: string;
  highlights: string[];
  skills: string[];
  paper?: ResearchPaper;
}

export default function ExperienceSection() {
  const [selectedCategory, setSelectedCategory] = useState<"All" | "Industry" | "Academia">("All");

  const experiences: ExperienceItem[] = [
    // 1. Academia: Research (May 2026 - Present)
    {
      id: "mcmaster-research",
      company: "McMaster University (Faculty of Engineering)",
      position: "Undergraduate Research Assistant",
      period: "May 2026 – Present",
      location: "Hamilton, ON",
      category: "Academia",
      logo: macLogo,
      logoBg: "bg-slate-100",
      badge: "Machine Learning & Natural Language Processing",
      highlights: [
        "Conducting research in subjective Natural Language Processing and Perspectivist Modeling under the supervision of Dr. Charles Welch.",
        "Co-authored research paper submission to ACL ARR 2026 investigating annotator background modeling and subjective text ambiguity.",
        "Developed a Transformer-based NLP classifier in PyTorch integrating trainable 32D annotator embeddings to model individual perspectives, boosting performance from a 62% baseline to 70%.",
        "Engineered a multi-GPU training pipeline with parallelized 5-fold cross-validation benchmarking 19 hyperparameter configurations across 28K+ text-annotator pairs, reducing runtime by 5x.",
      ],
      skills: ["Python", "PyTorch", "Transformers", "NLP", "Multi-GPU Distributed Training", "Cross-Validation", "Deep Learning"],
      paper: {
        title: "A Guide to Perspectivist Modeling: Lessons Across Subjective NLP Tasks",
        authors: "Arjun Karthik, Vanessa Lai, Daniel Hu, Shreya Adrita Banik, Madhav Kalia, Scarlett Cleary, Sanika Surose, Allison Lahnala, Milad Alshomary, Charles Welch",
        venue: "ACL ARR 2026 (October Submission)",
        date: "10 Oct 2026 (revised: 13 Oct 2026)",
        supervisor: "Dr. Charles Welch",
        keywords: ["perspectivism", "annotator modeling", "annotator disagreement"],
        abstract:
          "Recent interest in perspectivist approaches to subjective natural language processing tasks has led to several prominent approaches to model annotator backgrounds in order to predict their views. We review recent perspectivist models, grouping them based on the way parameters are dedicated to individuals and how information from others is used. Implementations are tested in a systematic evaluation across four datasets representing a breadth of recently attempted tasks. We provide recommendations for approaches to perspectivist modeling and include new state-of-the-art results.",
      },
    },

    // 2. Industry: Citi (May 2026 - August 2026)
    {
      id: "citi",
      company: "Citi",
      position: "Software Engineer Intern",
      period: "May 2026 – August 2026",
      location: "Mississauga, ON",
      category: "Industry",
      logo: citiLogo,
      logoBg: "bg-white",
      badge: "Financial Tech & Distributed Systems",
      highlights: [
        "Engineered Java and Spring Boot microservices supporting an accounting platform processing 1M+ transactions daily, developing new features and optimizing Oracle SQL queries by eliminating redundant queries and indexing common lookups to reduce data latency by 15%.",
        "Led the migration of enterprise auditing workflows from AngularJS to React, developing modular UI components that reduced workflow completion time by 25%.",
        "Migrated enterprise ETL pipelines from Ab Initio to PySpark, optimizing distributed data processing through data partitioning and improved file-format handling to reduce daily processing times by 20% across 100K+ financial records.",
        "Built a React dashboard with custom Node.js REST APIs and Jira integration, implementing real-time refresh, issue filtering, and Citi authentication to enable centralized live issue tracking and updates.",
      ],
      skills: ["Java", "Spring Boot", "PySpark", "Oracle SQL", "React", "Node.js", "REST APIs", "Microservices", "ETL Pipelines", "Jira API"],
    },

    // 3. Industry: Veoneer (May 2024 - August 2025)
    {
      id: "veoneer",
      company: "Veoneer Canada Safety Systems",
      position: "Software Engineering Intern",
      period: "May 2024 – August 2025",
      location: "Markham, ON",
      category: "Industry",
      logo: veoneerLogo,
      logoBg: "bg-white",
      badge: "Industrial IoT & Web Architecture",
      highlights: [
        "Architected a secure internal C# Web API handling 1,000+ daily requests with 99.5% availability, using application monitoring and logging to support reliable real-time data exchange across distributed manufacturing nodes.",
        "Engineered a real-time event-monitoring and automated paging system in C# .NET integrated with Oracle SQL, reducing response time by 45% and incident escalation time by 63% across 40 production lines, saving up to $1,500 per incident.",
        "Designed a full-stack web tool utilizing Next.js and Flask for automated SQL database entry, eliminating human data entry errors and saving engineering teams 15+ hours weekly.",
        "Spearheaded a legacy file-processing system migration from Visual Basic to C# .NET, accelerating file load times by 30% and expanding multi-format data ingestion capabilities.",
        "Developed two full-stack dashboards using Next.js showcasing production-critical metrics, providing elevated visibility for senior executive management.",
      ],
      skills: ["C#", ".NET Core", "Next.js", "Python", "Flask", "Oracle SQL", "Flutter", "PowerBI", "Industrial IoT"],
    },

    // 4. Academia: Teaching Assistant (September 2023 - Present)
    {
      id: "mcmaster-ta",
      company: "McMaster University (Faculty of Engineering)",
      position: "Undergraduate Teaching Assistant",
      period: "September 2023 – Present",
      location: "Hamilton, ON",
      category: "Academia",
      logo: macLogo,
      logoBg: "bg-slate-100",
      badge: "Engineering Instruction & Mentorship",
      highlights: [
        "Instructing and mentoring hundreds of undergraduate students across first-year cornerstone engineering computation and design (ENGINEER 1P13) and third-year engineering economics, project decision-making, and professional practice (ENGINEER 3PX3).",
        "Facilitating interactive laboratories and tutorials, guiding students through structured algorithmic problem solving in Python, design milestone rubrics, and economic feasibility.",
        "Providing in-depth 1-on-1 code reviews, technical debugging assistance, and milestone project critiques for 50+ students.",
        "Collaborating directly with course professors and instructional leadership to evaluate deliverables, refine grading rubrics, and coordinate examinations.",
      ],
      skills: ["Mentorship", "Python", "Engineering Economics", "Code Review", "Academic Instruction"],
    },

    // 5. Industry: Transpire (May 2023 - August 2023)
    {
      id: "transpire",
      company: "Transpire Technologies",
      position: "Software Developer Co-op",
      period: "May 2023 – August 2023",
      location: "Mississauga, ON",
      category: "Industry",
      logo: transpireLogo,
      logoBg: "bg-white",
      badge: "Web Applications & Automated QA",
      highlights: [
        "Developed a responsive e-commerce web application catalog in ReactJS for 250+ products, driving a 50% increase in online user traffic and customer interaction.",
        "Automated 100+ unit and end-to-end integration test suites in TypeScript using the Playwright framework, improving testing cycle throughput and reliability by 200%.",
        "Collaborated with project managers in an Agile workflow to rapidly prototype, iterate, and deliver customer-facing web application features.",
      ],
      skills: ["ReactJS", "TypeScript", "Playwright", "E-Commerce", "WordPress", "End-to-End Testing", "Agile"],
    },
  ];

  const categories: Array<"All" | "Industry" | "Academia"> = ["All", "Industry", "Academia"];

  const filteredExperiences =
    selectedCategory === "All"
      ? experiences
      : experiences.filter((exp) => exp.category === selectedCategory);

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            Professional Track Record
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Work Experience &amp; <span className="text-gradient-cyan">Track Record</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Organized in chronological order across <strong>Industry</strong> engineering and distinguished <strong>Academia</strong>.
          </p>
        </div>

        {/* Category Filters: All, Industry, and Academia */}
        <div className="flex items-center justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-7 py-3 rounded-xl text-sm font-bold transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/35 border border-cyan-400/50"
                  : "bg-slate-900/70 text-slate-300 hover:text-white hover:bg-slate-800 border border-blue-500/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Experience Cards Flow */}
        <div className="space-y-8">
          {filteredExperiences.map((exp) => (
            <div
              key={exp.id}
              className="glass-panel glass-panel-hover rounded-3xl p-6 sm:p-8 lg:p-10 border border-blue-500/25 relative overflow-hidden"
            >
              {/* Top Row: Logo, Title, Period */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-6">
                <div className="flex items-start gap-4 sm:gap-5">
                  {/* Company Logo Container */}
                  <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl ${
                      exp.logoBg || "bg-white"
                    } p-2.5 flex items-center justify-center shadow-lg shadow-blue-950/40 shrink-0 border border-blue-400/30`}
                  >
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} Logo`}
                      width={80}
                      height={80}
                      className="object-contain max-h-full max-w-full"
                    />
                  </div>

                  <div>
                    <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-blue-950/80 border border-blue-500/30 text-cyan-300 text-[11px] font-semibold mb-2">
                      {exp.badge}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {exp.position}
                    </h3>
                    <h4 className="text-base sm:text-lg font-semibold text-blue-300">
                      {exp.company}
                    </h4>
                  </div>
                </div>

                {/* Timeline and Location */}
                <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 sm:gap-1.5 text-xs text-slate-300 shrink-0">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 border border-blue-500/20 text-cyan-200">
                    <FaCalendarAlt className="text-cyan-400" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 border border-blue-500/20 text-slate-300">
                    <FaMapMarkerAlt className="text-blue-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Research Paper Feature Banner if present */}
              {exp.paper && (
                <div className="mb-6 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-blue-950/90 via-slate-900/90 to-blue-900/50 border border-cyan-400/35 shadow-lg">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <FaBook className="text-cyan-400 text-sm" />
                      <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                        {exp.paper.venue}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-blue-200 bg-blue-950/80 px-3 py-1 rounded-full border border-blue-500/30">
                      <FaUserTie className="text-cyan-400" />
                      <span>Supervised by <strong>{exp.paper.supervisor}</strong></span>
                    </div>
                  </div>

                  <h5 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                    {exp.paper.title}
                  </h5>

                  <p className="text-xs text-slate-300 font-medium mb-3 leading-relaxed">
                    <strong className="text-cyan-300">Authors:</strong> {exp.paper.authors}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed bg-slate-950/60 p-3.5 rounded-xl border border-blue-500/20 mb-3">
                    <strong className="text-slate-200 block mb-1">Abstract:</strong>
                    {exp.paper.abstract}
                  </p>

                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[11px] text-slate-400 font-semibold uppercase">Keywords:</span>
                    {exp.paper.keywords.map((kw, kwIdx) => (
                      <span
                        key={kwIdx}
                        className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-blue-900/40 border border-cyan-400/30 text-cyan-200"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Highlights List */}
              <div className="mb-6">
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  Key Responsibilities &amp; Measurable Accomplishments
                </h5>
                <ul className="space-y-3">
                  {exp.highlights.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                      <FaCheckCircle className="text-blue-400 mt-1 shrink-0 text-sm" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Pills */}
              <div className="pt-4 border-t border-blue-500/20 flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-1">
                  Skils:
                </span>
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-900/90 border border-blue-500/20 text-blue-200 hover:border-cyan-400/50 hover:text-white transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
