import React from "react";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white text-center px-6 pt-20">
      <div className="animate-fade-in">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 drop-shadow-lg">
          Hi, I'm <span className="text-yellow-300">Amir</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl text-gray-100">
          I build interactive web applications, craft beautiful user interfaces, and love turning ideas into reality.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a 
            href="#projects" 
            className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition transform hover:scale-105 shadow-xl"
          >
            See My Work
          </a>
          <a 
            href="#about" 
            className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition transform hover:scale-105 shadow-xl"
          >
            Learn More
          </a>
        </div>
      </div>
      
      {/* Floating animation elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white opacity-10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-40 right-20 w-16 h-16 bg-yellow-300 opacity-20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-10 w-12 h-12 bg-pink-300 opacity-20 rounded-full animate-ping"></div>
      </div>
    </section>
  );
}