import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "Project One",
      description: "A brief description of this project and what technologies were used.",
      gradient: "from-blue-500 to-cyan-500",
      icon: "🌐"
    },
    {
      title: "Project Two",
      description: "Another project description highlighting your skills and impact.",
      gradient: "from-purple-500 to-pink-500",
      icon: "📱"
    },
    {
      title: "Project Three",
      description: "Details about this project — tech stack, challenges, or results.",
      gradient: "from-orange-500 to-red-500",
      icon: "⚡"
    }
  ];

  return (
    <section id="projects" className="py-20 px-8 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <h2 className="text-5xl font-bold mb-4 text-center">Projects</h2>
      <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
        Here are some of my recent works that showcase my skills and creativity
      </p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="group relative bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className={`h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center text-6xl`}>
              {project.icon}
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3 group-hover:text-cyan-400 transition">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">
                {project.description}
              </p>
              <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition font-semibold">
                View Details →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}