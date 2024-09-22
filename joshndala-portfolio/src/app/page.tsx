// components
import { Navbar, Footer } from "@/components";
import Hero from "./hero";
import Skills from "./skills";
import Projects from "./projects";
import Resume from "./resume";
import ContactSection from "./contact-section";

export default function Portfolio() {
  return (
    <>
      <main className="flex flex-col space-y-16">
        <Navbar />
        <section id="hero">
          <Hero />
        </section>
        <section id="skills">
          <Skills />
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
