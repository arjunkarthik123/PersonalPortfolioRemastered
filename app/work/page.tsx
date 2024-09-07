import veoneer from '../assets/veoneer.png'
import mac from '../assets/mcmaster.png'
import transpire from '../assets/transpire.png'

import Image from "next/image";

export default function Work() {
  return (
    <div className="p-8 bg-white rounded-lg shadow-lg w-full mx-auto">
      {/* Software Engineering Intern */}
      <div className="flex items-start mb-8">
        {/* Logo Section */}
        <div className="w-24 h-24 mr-6 flex-shrink-0">
          <Image
            src={veoneer} // Replace with the actual path to the logo
            alt="Veoneer Logo"
            width={96}
            height={96}
            className="object-contain"
          />
        </div>

        {/* Job Description Section */}
        <div>
          <h1 className="text-2xl font-bold text-blue-800">
            Software Engineering Intern @ Veoneer
          </h1>
          <h2 className="text-gray-600 mb-4">May 2024 - Present</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              Assisting in the development of safety-critical automotive software
              systems.
            </li>
            <li>
              Collaborating with cross-functional teams to implement new
              features.
            </li>
            <li>Conducting code reviews and contributing to design discussions.</li>
          </ul>
        </div>
      </div>

      {/* Teaching Assistant */}
      <div className="flex items-start mb-8">
        {/* Logo Section */}
        <div className="w-24 h-24 mr-6 flex-shrink-0">
          <Image
            src={mac} // Replace with the actual path to the logo
            alt="McMaster Logo"
            width={96}
            height={96}
            className="object-contain"
          />
        </div>

        {/* Job Description Section */}
        <div>
          <h1 className="text-2xl font-bold text-blue-800">
            Teaching Assistant @ McMaster
          </h1>
          <h2 className="text-gray-600 mb-4">September 2023 - April 2024</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              Facilitated first-year engineering design course labs and tutorials.
            </li>
            <li>
              Provided one-on-one support and feedback to over 50 students.
            </li>
            <li>Assisted in grading and assignment evaluations.</li>
          </ul>
        </div>
      </div>

      {/* Software Developer Intern */}
      <div className="flex items-start mb-8">
        {/* Logo Section */}
        <div className="w-24 h-24 mr-6 flex-shrink-0">
          <Image
            src={transpire} // Replace with the actual path to the logo
            alt="Transpire Technologies Logo"
            width={96}
            height={96}
            className="object-contain"
          />
        </div>

        {/* Job Description Section */}
        <div>
          <h1 className="text-2xl font-bold text-blue-800">
            Software Developer Intern @ Transpire Technologies
          </h1>
          <h2 className="text-gray-600 mb-4">May 2023 - August 2023</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              Developed and maintained front-end features for a customer-facing
              web application.
            </li>
            <li>Wrote clean, scalable code in JavaScript, React, and Node.js.</li>
            <li>
              Collaborated with senior developers to improve software
              functionality.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}