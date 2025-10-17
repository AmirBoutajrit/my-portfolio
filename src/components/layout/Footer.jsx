import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center">
      <p>© {new Date().getFullYear()} Amir. All rights reserved.</p>
      <p>Built with React & Tailwind CSS</p>
    </footer>
  );
}
