"use client";
import { motion } from "framer-motion";

export default function Skills({ skills }) {
  return (
    <section className="py-20 px-10 max-w-5xl mx-auto text-center bg-black text-green-400 font-mono rounded-lg shadow-lg border border-green-500">
      <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-5xl font-bold mb-6">
        Technical Skills
      </motion.h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {skills.map((skill, index) => (
          <motion.div key={index} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }} className="p-4 bg-gray-900 text-green-400 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all border border-green-500">
            <p className="text-lg font-semibold">{skill}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}