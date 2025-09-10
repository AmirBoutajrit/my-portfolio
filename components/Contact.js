import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center items-center px-4 bg-gray-100">
      <h2 className="text-4xl font-bold mb-6">Contact</h2>
      <div className="flex space-x-6 text-3xl">
        <a href="https://github.com/yourusername" target="_blank"><FaGithub /></a>
        <a href="https://linkedin.com/in/yourusername" target="_blank"><FaLinkedin /></a>
        <a href="mailto:your.email@example.com"><FaEnvelope /></a>
      </div>
    </section>
  );
}