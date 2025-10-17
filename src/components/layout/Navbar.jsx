import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [shadow, setShadow] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [show, setShow] = useState(true); // for hiding on scroll
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Navbar shadow
      setShadow(currentScrollY > 10);

      // Hide/show navbar
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShow(false); // scrolling down
      } else {
        setShow(true); // scrolling up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const links = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 bg-gray-900 text-white transition-all duration-300 transform ${
        shadow ? "shadow-2xl shadow-purple-500/20" : ""
      } ${show ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="w-full px-6 sm:px-8 py-8 flex justify-center items-center relative">
        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8">
          {links.map((link) => (
            <li key={link.name} className="relative group">
              {/* Bubble overlay slightly bigger than the word */}
              <span className="absolute -inset-1 rounded-full bg-white/10 pointer-events-none 
                                transition-all duration-300 group-hover:scale-105 group-hover:bg-white/20
                                group-active:scale-95"></span>
              <a
                href={link.href}
                className="relative z-10 px-4 py-4 font-medium transition-colors duration-200 group-hover:text-cyan-400"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden absolute right-6 z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <XMarkIcon className="w-6 h-6 text-white" />
          ) : (
            <Bars3Icon className="w-6 h-6 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden bg-gray-900 transition-max-height duration-300 overflow-hidden ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-4">
          {links.map((link) => (
            <li key={link.name} className="relative group w-full flex justify-center">
              <span className="absolute -inset-1 rounded-full bg-white/10 pointer-events-none 
                                transition-all duration-300 group-hover:scale-105 group-hover:bg-white/20
                                group-active:scale-95"></span>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="relative z-10 px-4 py-4 font-medium transition-colors duration-200 group-hover:text-cyan-400"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Slight floating animation */}
      <style>
        {`
          @keyframes subtleFloat {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-1px); }
          }
          .group span {
            animation: subtleFloat 3s ease-in-out infinite;
          }
        `}
      </style>
    </nav>
  );
}
