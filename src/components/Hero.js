"use client";

export default function Hero({ name, role, linkedin, github }) {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-black text-white text-center">
      <h1 className="text-5xl font-bold text-yellow-500">{name}</h1>
      <p className="text-2xl text-gray-300 mt-4">{role}</p>
      <div className="mt-6 flex space-x-6">
        <a href={linkedin} target="_blank" className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-600 transition-all">
          LinkedIn
        </a>
        <a href={github} target="_blank" className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-600 transition-all">
          GitHub
        </a>
      </div>
    </section>
  );
}
