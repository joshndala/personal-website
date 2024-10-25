// components
import { Navbar, Footer } from "@/components";
import Hero from "./hero";
import About from "./about";
import Skills from "./skills";
import Projects from "./projects";
import Resume from "./resume";
import ContactSection from "./contact-section";
import TechStackCarousel from "@/components/techstack-carousel";

export default function Portfolio() {
  return (
    <>
      <main className="flex flex-col space-y-12">
        <Navbar />
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="techstack-carousel">
          <TechStackCarousel />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="resume">
          <Resume />
        </section>
        <section id="contact-section">
          <ContactSection />
        </section>
        <Footer />
      </main>
    </>
  );
}
