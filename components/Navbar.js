"use client";

import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        <h1 className="font-bold text-xl">Amir B.</h1>
        <div className="hidden md:flex space-x-6">
          <a href="#hero" className="hover:text-blue-500">Home</a>
          <a href="#about" className="hover:text-blue-500">About</a>
          <a href="#projects" className="hover:text-blue-500">Projects</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
        </div>
        <div className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-white shadow-md px-4 py-4 flex flex-col space-y-4">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      )}
    </nav>
  );
}