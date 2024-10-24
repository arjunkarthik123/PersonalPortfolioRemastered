"use client"

import veoneer from '../assets/veoneerlogo.avif'
import mac from '../assets/macLogo.svg'
import transpire from '../assets/transpire.png'

import Image from "next/image";
import { useState } from 'react';

const experiences = [
  {
    company: "Veoneer",
    position: "Software Engineering Intern",
    time: "May 2024 - Present",
    skills: ["C#", ".NET Framework", "Python", "Flask", "Next.js", "Flutter", "PowerBI"],
    description: [
      "Led the development of two full-stack dashboards using Next.JS showcasing production critical information providing increased visibility to senior management.",
      "Developing a new inventory application using Flutter that will aid in company wide asset counts and save outsourcing costs.",
      "Maintaining and debugging legacy C# software critical to production.",
    ],
    logo: veoneer,
  },
  {
    company: "McMaster",
    position: "Teaching Assistant",
    time: "September 2023 - April 2024",
    skills: ["Mentorship", "Grading", "Teaching"],
    description: [
      "Facilitated first-year engineering design course labs and tutorials.",
      "Provided one-on-one support and feedback to over 50 students via detailed evaluations."
    ],
    logo: mac,
  },
  {
    company: "Transpire Technologies",
    position: "Software Developer Intern",
    time: "May 2023 - August 2023",
    skills: ["Flutter", "TypeScript", "PlayWright Testing Framework", "WordPress", "Microsoft Office"],
    description: [
      "Developed and maintained front-end features for a customer-facing web application.",
      "Led the design and deployment of a WordPress website for Urban Uniques, featuring an extensive catalog of 250+ products, leading to increased customer traffic by 50%",
      "Automated 100+ tests for the newly developed NSSL Shuntware website in TypeScript using the Playwright framework, improving efficiency of unit testing by 200%",
    ],
    logo: transpire,
  },
];

export default function Work() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? experiences.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === experiences.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-start justify-start relative">
      {/* Title */}
      <h2 className="text-4xl font-bold text-blue-600 mb-8 absolute top-4 left-8">
        Work Experience
      </h2>
      

      {/* Carousel Container */}
      <div className="relative w-full max-w-4xl p-12 bg-white rounded-lg shadow-lg mx-auto">
        {/* Arrows Container (Moved to the top) */}
      <div className="absolute top-4 left-0 right-0 flex justify-between px-4">
          <button
            className="text-4xl text-white bg-blue-500 rounded-full p-2 hover:bg-blue-600 shadow-lg transition"
            onClick={prevSlide}
          >
            &#8592;
          </button>
          <button
            className="text-4xl text-white bg-blue-500 rounded-full p-2 hover:bg-blue-600 shadow-lg transition"
            onClick={nextSlide}
          >
            &#8594;
          </button>
        </div>
        {/* Current Experience */}
        <div className="flex flex-col items-center justify-center text-center">
          <div className="w-32 h-32 mb-6">
            <Image
              src={experiences[currentIndex].logo}
              alt={`${experiences[currentIndex].company} Logo`}
              width={300}
              height={300}
              className="object-contain"
            />
          </div>
          <h3 className="text-2xl font-semibold text-blue-800 mb-2">
            {experiences[currentIndex].position} @ {experiences[currentIndex].company}
          </h3>
          <p className="text-gray-600 mb-8">{experiences[currentIndex].time}</p>

          {/* Split into two sections: Skills and Description */}
          <div className="grid grid-cols-2 gap-8 text-left w-full">
            {/* Skills Section */}
            <div className="bg-blue-100 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-blue-700 mb-4">
                Skills
              </h4>
              <ul className="list-disc list-inside text-gray-700">
                {experiences[currentIndex].skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>

            {/* Description Section */}
            <div className="bg-gray-100 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-700 mb-4">
                Experience
              </h4>
              <ul className="list-disc pl-6 leading-relaxed text-gray-700">
                {experiences[currentIndex].description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
}