import React from "react";


export default function Hero() {
  return (
    <section id="hero" className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-100 to-white text-center px-6">
      <h1 className="text-5xl font-bold mb-4">Hi, I’m Amir</h1>
      <p className="text-xl mb-6 max-w-xl text-gray-700">
        I build interactive web applications, craft beautiful user interfaces, and love turning ideas into reality.
      </p>
      <div className="flex gap-4">
        <a 
          href="#projects" 
          className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition transform hover:-translate-y-1"
        >
          See My Work
        </a>
        <a 
          href="#about" 
          className="px-6 py-3 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition transform hover:-translate-y-1"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}
