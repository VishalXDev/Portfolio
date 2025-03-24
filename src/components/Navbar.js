"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white p-5 flex justify-between items-center shadow-lg">
      <h1 className="text-2xl font-bold tracking-wide text-yellow-500">Vishal Dwivedy</h1>
      <div className="flex space-x-6">
        <Link href="#about" className="nav-link">About</Link>
        <Link href="#projects" className="nav-link">Projects</Link>
        <Link href="#skills" className="nav-link">Skills</Link>
        <Link href="#contact" className="nav-link">Contact</Link>
      </div>
      <button 
        onClick={() => setDarkMode(!darkMode)}
        className="px-4 py-2 bg-yellow-500 text-black rounded-lg shadow-lg hover:bg-yellow-600"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
}
