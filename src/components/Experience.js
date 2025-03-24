"use client";

export default function Experience({ experiences }) {
  return (
    <section className="py-20 bg-black text-white">
      <h2 className="text-4xl font-bold text-center">Experience</h2>
      <div className="mt-8 space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="p-6 border border-yellow-500 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold">{exp.position} @ {exp.company}</h3>
            <p className="text-gray-400 text-sm">{exp.duration}</p>
            <ul className="mt-2 list-disc list-inside text-gray-300">
              {exp.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
