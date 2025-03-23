"use client";
import { useState } from "react";
import Link from "next/link";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <nav className="fixed top-0 left-0 w-full p-5 flex justify-between items-center bg-black border-b border-green-500 shadow-lg font-mono text-green-400">
      <h1 className="text-3xl font-bold">Vishal Dwivedy</h1>
      <div className="flex space-x-6">
        <Link href="#about" className="hover:text-green-300">About</Link>
        <Link href="#projects" className="hover:text-green-300">Projects</Link>
        <Link href="#skills" className="hover:text-green-300">Skills</Link>
        <Link href="#contact" className="hover:text-green-300">Contact</Link>
      </div>
      <button onClick={() => setDarkMode(!darkMode)} className="p-2 bg-gray-800 border border-green-500 rounded-md text-green-400">
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
    </nav>
  );
}