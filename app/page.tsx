import React from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ExtracurricularSection from "./components/ExtracurricularSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* About & Student Identity */}
      <AboutSection />

      {/* Work Experience */}
      <ExperienceSection />

      {/* Extracurriculars & Leadership */}
      <ExtracurricularSection />

      {/* Projects */}
      <ProjectsSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
