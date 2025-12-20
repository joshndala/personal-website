"use client";

import { Navbar, Footer } from "@/components";
import Experience from "../experience";
import { motion } from "framer-motion";

export default function ExperiencePage() {
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
        <section id="experience">
          <Experience />
        </section>
        <Footer />
      </motion.main>
    </>
  );
}

