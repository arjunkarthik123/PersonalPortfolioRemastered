import React from "react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import ProjectsSection from "../components/ProjectsSection";

export const metadata = {
  title: "Projects | Arjun Karthik",
  description: "Featured engineering projects by Arjun Karthik: SQRChat, Island Pathfinder, Medical Insurance Classifier, and LA Crime Detection.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-cyan-300 hover:text-white transition px-4 py-2 rounded-full bg-slate-900/80 border border-blue-500/20 hover:border-cyan-400"
        >
          <FaArrowLeft className="text-xs" />
          <span>Back to Full Portfolio Experience</span>
        </Link>
      </div>
      <ProjectsSection />
    </div>
  );
}
