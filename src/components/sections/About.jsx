import React from "react";

export default function About() {
  return (
    <section id="about" className="py-20 px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          About Me
        </h2>
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-100">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
            I am a passionate software engineer with experience in building full-stack applications. 
            I enjoy learning new technologies, solving complex problems, and contributing to projects that make an impact.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
              <div className="text-3xl mb-2">💻</div>
              <h3 className="font-semibold text-gray-800">Full Stack</h3>
              <p className="text-sm text-gray-600">End-to-end development</p>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
              <div className="text-3xl mb-2">🎨</div>
              <h3 className="font-semibold text-gray-800">UI/UX Design</h3>
              <p className="text-sm text-gray-600">Beautiful interfaces</p>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-pink-50 to-blue-50 rounded-xl">
              <div className="text-3xl mb-2">🚀</div>
              <h3 className="font-semibold text-gray-800">Problem Solver</h3>
              <p className="text-sm text-gray-600">Creative solutions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}