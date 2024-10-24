import Image from "next/image";
import chess from "../assets/chess.jpg"
import book from "../assets/book.jpg";

export default function AboutMe() {
  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center justify-center">
      {/* Title */}
      <h1 className="text-4xl font-bold text-blue-600 mb-8">About Me</h1>

      {/* Content */}
      <div className="max-w-2xl bg-white p-8 rounded-xl shadow-xl transition-transform transform hover:scale-105">
        {/* Introduction */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-blue-800 mb-6">Who I Am</h2>
          <p className="text-gray-800 text-lg leading-relaxed mb-4">
            Hi! My name is Arjun, and I’m a student at McMaster University in the studying Software Engineering and Management program. Currently, I’m working as a Software Engineering Intern at Veoneer Canada Safety Systems (May 2024 - August 2025), honing my skills in software development and project management. My role requires balancing project priorities with delivering quality results.
          </p>
          <p className="text-gray-800 text-lg leading-relaxed">
            When I’m not coding, you can find me diving into my favorite fantasy novels or strategizing over a game of chess. I’m also open to internship opportunities for Summer 2026 in software development and technical project management.
          </p>
        </section>

        {/* Images */}
        <div className="flex justify-between mt-8">
          <div className="w-1/2 pr-4">
            <Image
              src={chess}
              alt="Chess"
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="w-1/2 pl-4">
            <Image
              src={book}
              alt="Books"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
