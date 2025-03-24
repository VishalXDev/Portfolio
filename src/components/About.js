"use client";

export default function About({ summary }) {
  return (
    <section className="text-center py-20 bg-black text-white rounded-lg shadow">
      <h2 className="text-4xl font-bold text-yellow-500">About Me</h2>
      <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">{summary}</p>
    </section>
  );
}
