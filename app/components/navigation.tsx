import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 bg-gradient-to-r from-blue-500 to-blue-800 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            {/* Left-side (Navigation Links) */}
            <ul className="flex items-center gap-x-6 text-white">
              <li>
                <Link href="/">
                  <p>Home</p>
                </Link>
              </li>
              <li>
                <Link href="/aboutMe">
                  <p>About Me</p>
                </Link>
              </li>
              <li>
                <Link href="/work">
                  <p>Work Experience</p>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <p>Projects</p>
                </Link>
              </li>
              <li>
                <Link href="/volunteer">
                  <p>Extra-Curricular Involvement</p>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <p>Contact</p>
                </Link>
              </li>
            </ul>

            {/* Right-side (Icons and Download Button) */}
            <div className="flex items-center gap-x-4">
              <a
                href="https://www.linkedin.com/in/arjun-karthik-a931681b4/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com/arjunkarthik123"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <IoLogoGithub />
              </a>
              <a href="/resume.pdf" download="Arjun Karthik" target="_blank">
                <button className="bg-white text-blue-800 py-2 px-4 rounded hover:bg-gray-200">
                  Download Resume
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
