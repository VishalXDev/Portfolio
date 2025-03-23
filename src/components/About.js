"use client";
import { motion } from "framer-motion";

export default function About({ summary }) {
  return (
    <section className="py-20 px-10 max-w-5xl mx-auto text-center bg-black text-green-400 font-mono rounded-lg shadow-lg border border-green-500">
      <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-5xl font-bold mb-6">
        About Me
      </motion.h2>
      <p className="text-xl leading-relaxed">{summary}</p>
    </section>
  );
}