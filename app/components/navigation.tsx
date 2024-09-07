import React from "react";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 bg-emerald-800 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <ul className="hidden md:flex gap-x-6 text-white">
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
                <a href="https://www.linkedin.com/in/arjun-karthik-a931681b4/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a href="https://github.com/arjunkarthik123" target="_blank" rel="noopener noreferrer">
                    <IoLogoGithub />
                </a>
              </li>
              <li>
                <a href="/resume.pdf"download="Arjun Karthik" target='_blank'>
                    <button>Download Resume</button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;