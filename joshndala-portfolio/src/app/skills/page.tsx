"use client";

import { Navbar, Footer } from "@/components";
import Skills from "../skills";
import TechStackCarousel from "@/components/techstack-carousel";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function SkillsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col"
      >
        <section id="skills">
          <Skills />
        </section>
        <section id="techstack-carousel">
          <TechStackCarousel />
        </section>
        <Footer />
      </motion.main>
    </>
  );
} 