"use client"

import { useState } from "react";
import Image from "next/image";
import islandImage from "../assets/island.png"; // Replace with the correct path
import sqrchatImage from "../assets/sqr.png";
import portfolioImage from "../assets/nextjs.svg";

const projects = [
  {
    name: "Island Pathfinder",
    description: (
      <>
        Island generator that visualizes a mesh based on user input and computes
        the shortest path between a central star point and surrounding secondary points.{" "}
        <a href="https://github.com/arjunkarthik123/Island-Pathfinder" target="_blank" rel="noopener noreferrer" style={{ color: "blue", textDecoration: "underline" }}>
          Github Repository
        </a>
      </>
    ),
    technologies: ["Java", "Maven", "Git"],
    image: islandImage,
  },
  {
    name: "SQRChat",
    description: (
      <>
        A real-time multi-platform messaging app designed for secure communication, with users able to
        create their own account and message other users in their organization.{" "}
        <a href="https://github.com/SFWRENG-3A04/SQRChat" target="_blank" rel="noopener noreferrer" style={{ color: "blue", textDecoration: "underline" }}>
          Github Repository
        </a>
      </>
    ),
    technologies: ["React Native", "WebSockets", "Firebase", "Python", "Flask", "Git"],
    image: sqrchatImage,
  },
  {
    name: "Personal Portfolio",
    description: (
      <>
        A personal portfolio website showcasing projects, skills, and work experiences,
        built with a focus on responsive design and modern web practices.{" "}
        <a href="https://github.com/arjunkarthik123/PersonalPortfolioRemastered" target="_blank" rel="noopener noreferrer" style={{ color: "blue", textDecoration: "underline" }}>
          Github Repository
        </a>
      </>
    ),
    technologies: ["Next.js", "Tailwind CSS", "HTML", "JavaScript", "Git"],
    image: portfolioImage,
  },
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-start justify-start relative">
      {/* Title */}
      <h2 className="text-4xl font-bold text-blue-600 mb-8 absolute top-4 left-8">Projects</h2>

      {/* Carousel Container */}
      <div className="relative w-full max-w-4xl p-12 bg-white rounded-lg shadow-lg mx-auto">
        {/* Arrows Container (Moved to the top) */}
        <div className="absolute top-4 left-0 right-0 flex justify-between px-4">
          <button
            className="text-4xl text-white bg-blue-500 rounded-full p-2 hover:bg-blue-600 shadow-lg transition"
            onClick={prevProject}
          >
            &#8592;
          </button>
          <button
            className="text-4xl text-white bg-blue-500 rounded-full p-2 hover:bg-blue-600 shadow-lg transition"
            onClick={nextProject}
          >
            &#8594;
          </button>
        </div>

        {/* Current Project */}
        <div className="text-center mt-16">
          {/* Project Title */}
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">
            {projects[currentIndex].name}
          </h3>
          {/* Project Description */}
          <p className="text-gray-600 mb-8">{projects[currentIndex].description}</p>
        </div>

        {/* Image and Technologies Side-by-Side */}
        <div className="flex justify-center items-center gap-8">
          {/* Project Image */}
          <div className="w-1/2 flex justify-center">
            <Image
              src={projects[currentIndex].image}
              alt={`${projects[currentIndex].name} Image`}
              width={300}
              height={400}
              className="object-contain rounded-lg shadow-md"
            />
          </div>

          {/* Technologies Section */}
          <div className="w-1/2 bg-blue-100 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-blue-700 mb-4">
              Technologies Used
            </h4>
            <ul className="list-disc list-inside text-gray-700">
              {projects[currentIndex].technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
