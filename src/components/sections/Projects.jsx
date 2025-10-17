import React from "react";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-8 bg-gray-100">
      <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="p-6 bg-white rounded shadow hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold mb-2">Project One</h3>
          <p className="text-gray-700">A brief description of this project and what technologies were used.</p>
        </div>
        <div className="p-6 bg-white rounded shadow hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold mb-2">Project Two</h3>
          <p className="text-gray-700">Another project description highlighting your skills and impact.</p>
        </div>
        <div className="p-6 bg-white rounded shadow hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold mb-2">Project Three</h3>
          <p className="text-gray-700">Details about this project — tech stack, challenges, or results.</p>
        </div>
      </div>
    </section>
  );
}
