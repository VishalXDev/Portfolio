"use client";

export default function Projects({ projects }) {
  return (
    <section className="py-20 bg-black text-white">
      <h2 className="text-4xl font-bold text-center text-yellow-500">Projects</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="p-6 border border-yellow-500 rounded-lg shadow-sm bg-black">
            <h3 className="text-2xl font-semibold text-yellow-400">{project.name || project.title}</h3>
            <p className="text-gray-300 mt-2">{project.description}</p>
            <a href={project.url} target="_blank" className="text-yellow-500 hover:underline mt-2 inline-block">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
