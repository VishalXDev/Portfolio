"use client";

export default function Skills({ skills }) {
  return (
    <section className="py-20 bg-black text-white">
      <h2 className="text-4xl font-bold text-center">Skills</h2>
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <span key={index} className="px-4 py-2 bg-yellow-500 text-black rounded-full shadow-sm">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
