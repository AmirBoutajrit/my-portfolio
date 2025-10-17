import React from "react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-12 text-center border-t border-gray-700">
      <div className="max-w-4xl mx-auto px-8">
        <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
          Let's Connect
        </h3>
        <p className="text-gray-300 mb-6">
          Interested in working together? Feel free to reach out!
        </p>
        
        <div className="flex gap-6 justify-center mb-8">
          <a href="https://github.com" className="text-4xl hover:text-cyan-400 transition-colors" target="_blank" rel="noopener noreferrer">
            💻
          </a>
          <a href="https://linkedin.com" className="text-4xl hover:text-cyan-400 transition-colors" target="_blank" rel="noopener noreferrer">
            💼
          </a>
          <a href="mailto:your@email.com" className="text-4xl hover:text-cyan-400 transition-colors">
            ✉️
          </a>
        </div>
        
        <div className="border-t border-gray-700 pt-6">
          <p className="text-gray-400">© {new Date().getFullYear()} Amir. All rights reserved.</p>
          <p className="text-gray-500 text-sm mt-2">Built with React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}