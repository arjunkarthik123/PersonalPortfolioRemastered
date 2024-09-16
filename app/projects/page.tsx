"use client"

import { useState } from "react";

const projects = [
  {
    name: "Island Pathfinder",
    description: "A navigation tool that helps users plan routes and explore destinations in remote island locations using offline maps.",
    technologies: ["React", "Leaflet", "OpenStreetMap"],
  },
  {
    name: "SQRChat",
    description: "A real-time messaging app designed for secure and anonymous communication, featuring end-to-end encryption.",
    technologies: ["Node.js", "WebSockets", "MongoDB"],
  },
  {
    name: "Personal Portfolio",
    description: "A personal portfolio website showcasing projects, skills, and blog posts, built with a focus on responsive design and modern web practices.",
    technologies: ["Next.js", "Tailwind CSS", "Vercel"],
  },
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const nextProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-start justify-start relative">
      {/* Title */}
      <h2 className="text-4xl font-bold text-blue-600 mb-8 absolute top-4 left-8">
        Projects
      </h2>

      {/* Carousel Container */}
      <div className="relative w-full max-w-4xl p-12 bg-white rounded-lg shadow-lg mx-auto">
        {/* Current Project */}
        <div className="flex flex-col items-center justify-center text-center">
          <h3 className="text-2xl font-semibold text-blue-800 mb-2">
            {projects[currentIndex].name}
          </h3>
          <p className="text-gray-600 mb-8">
            {projects[currentIndex].description}
          </p>

          {/* Split into two sections: Technologies and Description */}
          <div className="grid grid-cols-2 gap-8 text-left w-full">
            {/* Technologies Section */}
            <div className="bg-blue-100 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-blue-700 mb-4">
                Technologies
              </h4>
              <ul className="list-disc list-inside text-gray-700">
                {projects[currentIndex].technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-4xl text-blue-500 hover:text-blue-700"
          onClick={prevProject}
        >
          &#8592; {/* Left Arrow */}
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-4xl text-blue-500 hover:text-blue-700"
          onClick={nextProject}
        >
          &#8594; {/* Right Arrow */}
        </button>
      </div>
    </div>
  );
}
