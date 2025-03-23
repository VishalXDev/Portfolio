// File: src/app/project.js
import data from "@/data/portfolio.json";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import SocialSidebar from "@/components/SocialSidebar";

export default function Home() {
  console.log("Portfolio Data:", data); // Debugging

  return (
    <main className="relative bg-gray-100 text-gray-800 font-sans">
      {/* Navbar */}
      <Navbar className="fixed top-0 w-full bg-white shadow-md z-50 py-4 px-6 flex justify-between items-center" />
      
      {/* Social Sidebar */}
      <SocialSidebar className="fixed left-6 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4" />
      
      {/* Hero Section */}
      <section className="hero-section text-center py-40 bg-gray-100 flex flex-col items-center">
        <Hero name={data.name} role={data.role} linkedin={data.linkedin} github={data.github} />
        <a href="#projects" className="mt-6 px-6 py-3 bg-yellow-400 text-black font-bold rounded shadow-md hover:bg-yellow-500 transition">
          PROJECTS
        </a>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-black mb-6">About Me</h2>
        <About summary={data.summary} />
      </section>
      
      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-black mb-6">Experience</h2>
        <Experience experiences={data.experience || []} />
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-black mb-6">Projects</h2>
        {data.projects && Array.isArray(data.projects) ? (
          <Projects projects={data.projects || []} />
        ) : (
          <p className="text-gray-400">No projects available.</p>
        )}
      </section>
      
      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-black mb-6">Skills</h2>
        <Skills skills={data.skills || []} />
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-black mb-6">Contact</h2>
        <Contact email={data.email} phone={data.phone} />
      </section>
    </main>
  );
}
