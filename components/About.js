export default function About() {
    return (
      <section id="about" className="min-h-screen flex flex-col justify-center items-center px-4 bg-gray-100">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="max-w-2xl text-center text-lg">
          I&apos;m a software engineer specializing in web and iOS development. I enjoy building apps that solve real problems and learning new technologies along the way.
        </p>
        <a href="/resume.pdf" className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Download Resume
        </a>
      </section>
    );
  }
