import Image from "next/image";
import flute from '../assets/flute.jpg';
import mems from '../assets/industry.jpg';

export default function Volunteer() {
  return (
    <div className="min-h-screen bg-gray-100 p-8 flex">
      {/* Left Column - Volunteer Experience Content */}
      <div className="flex-grow max-w-2xl">
        {/* Main Content Section */}
        <h2 className="text-3xl font-bold text-blue-600 mb-8">Extra-Curricular Experience</h2>

        {/* McMaster Engineering and Management Society */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-blue-800">McMaster Engineering and Management Society</h3>
          <ul className="list-disc list-inside text-gray-700 mb-4">
              <strong>Vice President Finance</strong> - <span className="text-gray-600">May 2024 - Present</span>
              <p className="text-gray-600">Managing club finances and preparing budgets for the upcoming society events.</p>
              <strong>Industry Night Co-Chair</strong> - <span className="text-gray-600">May 2023 - April 2024</span>
              <p className="text-gray-600">Led the organization and planning of the 7th Annual Engineering and Management Industry Night for 100 attendees.</p>
          </ul>
        </div>

        {/* McMaster Medical Engineering Design Team */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-blue-800">McMaster Medical Engineering Design Team</h3>
          <ul className="list-disc list-inside text-gray-700 mb-4">
              <strong>Software Team Member - Prosthetics Division</strong> - <span className="text-gray-600">September 2023 - April 2024</span>
              <p className="text-gray-600">Developed and maintained C++ software to control the mobility of a prosthetic hand.</p>
              <strong>Outreach Team Member</strong> - <span className="text-gray-600">November 2021 - August 2023</span>
              <p className="text-gray-600">Promoting the field of biomedical engineering via workshops and guest speaker events to the students of McMaster University.</p>
          </ul>
        </div>

        {/* McMaster Engineering Society */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-blue-800">McMaster Engineering Society</h3>
          <ul className="list-disc list-inside text-gray-700 mb-4">
              <strong>Data Coordinator</strong> - <span className="text-gray-600">May 2022 - April 2023</span>
              <p className="text-gray-600">Analysing student data on behalf of the engineering society to better promote initiatives and student well-being.</p>
          </ul>
        </div>

        {/* McMaster Flute Ensemble */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-blue-800">McMaster Flute Ensemble</h3>
          <ul className="list-disc list-inside text-gray-700 mb-4">
              <strong>Flute Player</strong> - <span className="text-gray-600">September 2022 - April 2023</span>
              <p className="text-gray-600">Junior Flautist in the McMaster Flute Ensemble.</p>
          </ul>
        </div>
      </div>

      {/* Right Column - Images */}
      <div className="flex flex-col items-center ml-8">
        <div className="mb-8">
          <Image src={mems} alt="Industry Night" width={600} height={600} className="rounded-lg shadow-lg" />
        </div>
        <div>
          <Image src={flute} alt="Flute Ensemble" width={600} height={600} className="rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
}