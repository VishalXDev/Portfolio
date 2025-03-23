"use client";
import { motion } from "framer-motion";

export default function Projects({ projects }) {
  return (
    <section className="py-20 px-10 max-w-6xl mx-auto text-center bg-black text-green-400 font-mono border border-green-500 rounded-lg shadow-lg">
      <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-5xl font-bold mb-12">
        Projects
      </motion.h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }} className="bg-gray-900 p-8 rounded-lg shadow-lg border border-green-500 hover:shadow-xl transition-all transform hover:-translate-y-2">
            <h3 className="text-2xl font-bold">{project.title || project.name}</h3>
            <p className="text-lg mt-4">{project.description}</p>
            <a href={project.url} target="_blank" className="mt-6 inline-block text-green-500 font-semibold text-lg hover:underline">View Project</a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
