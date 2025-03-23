"use client";
import { motion } from "framer-motion";

export default function Contact({ email, phone }) {
  return (
    <section className="py-20 px-10 max-w-5xl mx-auto text-center bg-gradient-to-r from-gray-900 via-black to-gray-900 rounded-lg shadow-lg border border-gray-700">
      <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-5xl font-bold text-blue-400 mb-6">
        Contact Me
      </motion.h2>
      <div className="mt-6">
        <p className="text-xl text-gray-300">Email: <a href={`mailto:${email}`} className="text-purple-400 hover:underline">{email}</a></p>
        <p className="text-xl text-gray-300">Phone: {phone}</p>
      </div>
    </section>
  );
}
