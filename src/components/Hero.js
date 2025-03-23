"use client";
import { motion } from "framer-motion";

export default function Hero({ name, role, linkedin, github }) {
  return (
    <section className="hero-section text-center py-40 bg-black text-green-400 font-mono flex flex-col items-center relative rounded-b-3xl shadow-xl border border-green-500">
      <motion.h1 initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }} className="text-7xl font-extrabold animate-pulse">
        {name}
      </motion.h1>
      <p className="text-2xl mt-3 opacity-90">{role}</p>
      <div className="mt-8 flex space-x-6">
        <a href={linkedin} target="_blank" className="px-6 py-3 bg-green-500 text-black font-semibold rounded-lg text-xl hover:bg-green-400 transition-all border border-green-700">LinkedIn</a>
        <a href={github} target="_blank" className="px-6 py-3 bg-green-700 text-black font-semibold rounded-lg text-xl hover:bg-green-600 transition-all border border-green-500">GitHub</a>
      </div>
    </section>
  );
}