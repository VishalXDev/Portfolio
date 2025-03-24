"use client";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import data from "@/data/portfolio.json";

export default function Home() {
  return (
    <div>
      <Hero name={data.name} role={data.role} linkedin={data.linkedin} github={data.github} />
      <section id="about" className="py-20"><About summary={data.summary} /></section>
      <section id="experience" className="py-20"><Experience experiences={data.experience} /></section>
      <section id="projects" className="py-20"><Projects projects={data.projects} /></section>
      <section id="skills" className="py-20"><Skills skills={data.skills} /></section>
      <section id="contact" className="py-20"><Contact email={data.email} phone={data.phone} /></section>
    </div>
  );
}
