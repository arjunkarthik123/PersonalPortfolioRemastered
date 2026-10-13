"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { FaGithub } from "react-icons/fa";

import sqrImage from "../assets/sqr.png";
import islandImage from "../assets/island.png";
import medImage from "../assets/medical_insurance.svg";
import theftImage from "../assets/THEFT_OF_IDENTITY.png";

interface Project {
  id: string;
  title: string;
  category: "Machine Learning" | "Full-Stack" | "Algorithms & Systems";
  period: string;
  technologies: string[];
  description: string;
  bullets: string[];
  image: StaticImageData | string;
  githubUrl?: string;
  metricBadge: string;
}

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const projects: Project[] = [
    {
      id: "sqrchat",
      title: "SQRChat",
      category: "Full-Stack",
      period: "January 2024 – April 2024",
      technologies: ["React", "React Native", "Flask", "WebSockets", "Firebase", "Cryptography", "bcrypt"],
      description:
        "A low-latency real-time encrypted messaging application designed for high-concurrency organizational communication with live state synchronization.",
      bullets: [
        "Engineered full-duplex WebSocket messaging in Python Flask, achieving sub-100ms message delivery across 50+ concurrent users.",
        "Integrated Firebase real-time state synchronization with bcrypt authentication and cryptographic message payload security.",
        "Built responsive client interfaces supporting seamless cross-device communication.",
      ],
      image: sqrImage,
      githubUrl: "https://github.com/SFWRENG-3A04/SQRChat",
      metricBadge: "< 100ms Latency • 50+ Users",
    },
    {
      id: "island-pathfinder",
      title: "Island Pathfinder",
      category: "Algorithms & Systems",
      period: "January 2023 – April 2023",
      technologies: ["Java", "Maven", "Apache Commons CLI", "JUnit", "Graph Algorithms"],
      description:
        "High-performance shortest-path algorithmic mesh visualizer computing optimal navigation routes across dynamically generated procedural island terrains.",
      bullets: [
        "Implemented Dijkstra’s shortest-path algorithm in Java across dynamically generated 2D/3D topological node meshes.",
        "Designed configurable terrain difficulty and obstacle weighting parsed dynamically via the Apache Commons CLI library.",
        "Validated algorithm reliability and edge-case graph connectivity with an exhaustive JUnit unit test suite.",
      ],
      image: islandImage,
      githubUrl: "https://github.com/arjunkarthik123/Island-Pathfinder",
      metricBadge: "Dijkstra Shortest Path • Dynamic Meshes",
    },
    {
      id: "medical-insurance",
      title: "Medical Insurance Classifier",
      category: "Machine Learning",
      period: "September 2025 – December 2025",
      technologies: ["Python", "PyTorch", "Scikit-learn", "Deep Learning", "Neural Networks", "Data Preprocessing"],
      description:
        "End-to-end deep learning predictive modeling pipeline determining medical insurance risk tiers and healthcare premiums with high predictive accuracy.",
      bullets: [
        "Engineered a multi-layer feed-forward neural network in PyTorch utilizing ReLU activations, Dropout regularization, and Adam optimization.",
        "Preprocessed demographic, behavioral, and clinical patient attributes using Scikit-learn pipelines with standard scaling and one-hot encoding.",
        "Achieved an exceptional R² evaluation score of 0.92, minimizing mean absolute error on unseen test partitions.",
      ],
      image: medImage,
      metricBadge: "R² Score: 0.92 • PyTorch Deep Learning",
    },
    {
      id: "la-crime-detection",
      title: "Los Angeles Crime Detection",
      category: "Machine Learning",
      period: "September 2025 – December 2025",
      technologies: ["Python", "Pandas", "Scikit-learn", "Geospatial Analytics", "Random Forest", "Matplotlib"],
      description:
        "Comprehensive machine learning classification and spatial-temporal pattern detection analyzing open LAPD crime incident databases.",
      bullets: [
        "Extracted, cleaned, and preprocessed hundreds of thousands of municipal crime records across Los Angeles police divisions, analyzing temporal crime spikes and victim demographics.",
        "Engineered multi-class classification models to predict offense categories and weapon involvement from spatial-temporal features.",
        "Constructed geographic hotspot clusters and correlation matrices to identify high-density incident locations.",
      ],
      image: theftImage,
      githubUrl: "https://github.com/charcoalyy/la-crime",
      metricBadge: "Geospatial Clustering • LAPD Open Data",
    },
  ];

  const filterCategories = ["All", "Machine Learning", "Full-Stack", "Algorithms & Systems"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            Technical Endeavors
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Featured <span className="text-gradient-cyan">Projects &amp; Systems</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            From low-latency real-time communication and algorithmic graph pathfinding to deep learning
            risk prediction and geospatial municipal analytics.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterCategories.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeFilter === filter
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 border border-blue-400/50"
                  : "bg-slate-900/70 text-slate-300 hover:text-white hover:bg-slate-800 border border-blue-500/20"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel glass-panel-hover rounded-3xl overflow-hidden border border-blue-500/25 flex flex-col justify-between group"
            >
              <div>
                {/* Project Image Banner */}
                <div className="relative w-full h-56 sm:h-64 bg-slate-950 overflow-hidden border-b border-blue-500/20">
                  <Image
                    src={project.image}
                    alt={`${project.title} Preview`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-cyan-500/40 text-cyan-300 text-xs font-semibold">
                    {project.metricBadge}
                  </div>
                </div>

                {/* Project Body */}
                <div className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition">
                      {project.title}
                    </h3>
                    <span className="text-xs text-slate-400 font-medium">{project.period}</span>
                  </div>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Bullets */}
                  <ul className="space-y-2.5 mb-6">
                    {project.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5">
                        <span className="text-cyan-400 font-bold mt-0.5">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer with Tech & Action Links */}
              <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-3 border-t border-blue-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 max-w-sm">
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-900 border border-blue-500/20 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 shrink-0">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-white bg-slate-900 border border-blue-500/30 hover:border-cyan-400 hover:bg-blue-600/20 transition shadow-sm"
                    >
                      <FaGithub className="text-sm" />
                      <span>GitHub</span>
                    </a>
            
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
