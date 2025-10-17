import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShadow(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-50 bg-gray-900/95 backdrop-blur-sm text-white px-8 py-4 transition-all duration-300 ${shadow ? "shadow-2xl shadow-purple-500/20" : ""}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
          Amir
        </div>
        <ul className="flex gap-8">
          <li>
            <a href="#hero" className="hover:text-cyan-400 transition-colors duration-200 font-medium">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-cyan-400 transition-colors duration-200 font-medium">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-cyan-400 transition-colors duration-200 font-medium">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-200 font-medium">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}