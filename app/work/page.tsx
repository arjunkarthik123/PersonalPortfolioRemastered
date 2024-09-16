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
    skills: ["C++", "Embedded Systems", "Safety-critical Software"],
    description: [
      "Assisting in the development of safety-critical automotive software systems.",
      "Collaborating with cross-functional teams to implement new features.",
      "Conducting code reviews and contributing to design discussions.",
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
      "Provided one-on-one support and feedback to over 50 students.",
      "Assisted in grading and assignment evaluations.",
    ],
    logo: mac,
  },
  {
    company: "Transpire Technologies",
    position: "Software Developer Intern",
    time: "May 2023 - August 2023",
    skills: ["JavaScript", "React", "Node.js"],
    description: [
      "Developed and maintained front-end features for a customer-facing web application.",
      "Wrote clean, scalable code in JavaScript, React, and Node.js.",
      "Collaborated with senior developers to improve software functionality.",
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

        {/* Navigation Arrows */}
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-4xl text-blue-500 hover:text-blue-700"
          onClick={prevSlide}
        >
          &#8592; {/* Left Arrow */}
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-4xl text-blue-500 hover:text-blue-700"
          onClick={nextSlide}
        >
          &#8594; {/* Right Arrow */}
        </button>
      </div>
    </div>
  );
}