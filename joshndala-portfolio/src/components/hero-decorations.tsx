"use client";

import { motion } from "framer-motion";

export function HeroDecorations() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Large circle decoration */}
      <motion.div
        className="absolute rounded-full bg-primary/5 dark:bg-secondary/5"
        style={{ width: "30rem", height: "30rem", bottom: "-15rem", right: "-10rem" }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      
      {/* Small floating shapes */}
      <motion.div
        className="absolute w-16 h-16 rounded-md bg-primary/10 dark:bg-secondary/10"
        style={{ top: "20%", left: "10%" }}
        initial={{ opacity: 0, y: 20, rotate: 0 }}
        animate={{ opacity: 1, y: 0, rotate: 45 }}
        transition={{ duration: 1, delay: 0.2 }}
      />
      
      <motion.div
        className="absolute w-12 h-12 rounded-full bg-primary/10 dark:bg-secondary/10"
        style={{ top: "60%", left: "5%" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      />
      
      <motion.div
        className="absolute w-20 h-20 rounded-md bg-primary/10 dark:bg-secondary/10"
        style={{ top: "10%", right: "15%" }}
        initial={{ opacity: 0, y: 20, rotate: 0 }}
        animate={{ opacity: 1, y: 0, rotate: -20 }}
        transition={{ duration: 1, delay: 0.6 }}
      />
      
      <motion.div
        className="absolute w-10 h-10 rounded-full bg-primary/10 dark:bg-secondary/10"
        style={{ top: "40%", right: "8%" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      />
    </div>
  );
}

export default HeroDecorations; 