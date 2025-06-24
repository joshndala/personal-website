"use client";

import { Navbar, Footer, FloatingTags } from "@/components";
import Hero from "./hero";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <>
        <Navbar />
      <FloatingTags />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col min-h-screen"
      >
        <div className="flex-grow">
        <section id="hero">
          <Hero />
        </section>
        </div>
        <Footer />
      </motion.main>
    </>
  );
}
