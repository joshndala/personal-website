"use client";

import { Navbar, Footer } from "@/components";
import ContactSection from "../contact-section";
import { motion } from "framer-motion";

export default function ContactPage() {
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
        <section id="contact-section">
          <ContactSection />
        </section>
        <Footer />
      </motion.main>
    </>
  );
} 