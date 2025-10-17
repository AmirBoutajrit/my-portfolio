import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShadow(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-50 bg-gray-900 text-white px-8 py-4 transition-shadow ${shadow ? "shadow-lg" : ""}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Amir</div>
        <ul className="flex gap-6">
          <li><a href="#hero" className="hover:text-gray-400">Home</a></li>
          <li><a href="#about" className="hover:text-gray-400">About</a></li>
          <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
