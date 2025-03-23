"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const storedTheme = localStorage.getItem("darkMode");
    if (storedTheme === "false") {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  };

  return (
    <html lang="en">
      <body className={`${inter.className} ${darkMode ? "dark" : ""} bg-gray-900 text-white`}>
        <nav className="fixed top-4 right-4 z-50">
          <button
            onClick={toggleDarkMode}
            className="bg-gray-800 p-3 rounded-full shadow-lg hover:scale-105 transition-all"
          >
            {darkMode ? "🌙" : "☀️"}
          </button>
        </nav>
        {children}
      </body>
    </html>
  );
}
