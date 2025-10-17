import React from "react";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white text-center px-6 pt-20 overflow-hidden">
      {/* Particle/animation background container */}
      <div className="absolute inset-0">
        {/* Example subtle circles for a "moving dots" effect */}
        <div className="absolute top-10 left-5 w-2 h-2 bg-white rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-3 h-3 bg-white rounded-full opacity-10 animate-ping"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-white rounded-full opacity-15 animate-pulse"></div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 animate-fade-in">
        <h1 className="text-6xl md:text-7xl font-bold mb-6">
          Hi, I'm <span className="text-purple-400">Amir</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl text-gray-300">
          I build interactive web applications and craft beautiful user interfaces.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a 
            href="#projects" 
            className="px-8 py-3 border border-purple-400 text-purple-400 rounded-lg hover:bg-purple-400 hover:text-white transition"
          >
            See My Work
          </a>
          <a 
            href="#about" 
            className="px-8 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
