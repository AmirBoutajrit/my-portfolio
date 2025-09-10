const projects = [
    {
      name: 'Pokemon Search App',
      description: 'iOS app to search Pokémon data with API integration.',
      link: 'https://github.com/yourusername/pokemon-app'
    },
    {
      name: 'Product Landing Page',
      description: 'HTML/CSS landing page with personal chatbot integration.',
      link: 'https://github.com/yourusername/product-landing'
    },
    {
      name: 'Text-based Chess Game',
      description: 'Python OOP project implementing chess with AI.',
      link: 'https://github.com/yourusername/chess-python'
    }
  ];
  
  export default function Projects() {
    return (
      <section id="projects" className="min-h-screen flex flex-col justify-center items-center px-4">
        <h2 className="text-4xl font-bold mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <a key={index} href={project.link} target="_blank" className="p-6 border rounded-lg hover:shadow-lg transition">
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p>{project.description}</p>
            </a>
          ))}
        </div>
      </section>
    );
  }