import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center bg-blue-50">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold mb-4"
      >
        Hi, me Amir B.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="text-xl mb-6"
      >
        Software Engineer | iOS & Web Development
      </motion.p>
      <a href="#projects" className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        View Projects
      </a>
    </section>
  );
}