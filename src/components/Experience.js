"use client";
import { motion } from "framer-motion";

export default function Experience({ experiences }) {
  return (
    <section className="py-20 px-10 max-w-5xl mx-auto text-center bg-black text-green-400 font-mono rounded-lg shadow-lg border border-green-500">
      <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-5xl font-bold mb-6">
        Experience
      </motion.h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }} className="p-6 bg-gray-900 rounded-lg border border-green-500 shadow-lg">
            <h3 className="text-2xl font-bold">{exp.position} - {exp.company}</h3>
            <p className="text-lg text-green-300">{exp.duration}</p>
            <ul className="list-disc list-inside mt-4 text-left">
              {exp.details.map((detail, i) => (
                <li key={i} className="text-green-400">{detail}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
