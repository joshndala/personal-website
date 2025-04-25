"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Tag {
  text: string;
  x: number;
  y: number;
  scale: number;
  opacity: number;
}

export function FloatingTags() {
  const tags = [
    "JavaScript",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Python",
    "SQL",
    "Machine Learning",
    "AI",
    "Problem Solver",
    "Data Science",
    "UI/UX",
    "Responsive Design",
  ];

  const [floatingTags, setFloatingTags] = useState<Tag[]>([]);

  useEffect(() => {
    // Create initial positions for tags
    const initialTags = tags.map((text) => ({
      text,
      x: Math.random() * 100,
      y: Math.random() * 100,
      scale: 0.8 + Math.random() * 0.4,
      opacity: 0.7 + Math.random() * 0.3,
    }));
    
    setFloatingTags(initialTags);
    
    // Animate tags
    const interval = setInterval(() => {
      setFloatingTags((prevTags) =>
        prevTags.map((tag) => ({
          ...tag,
          x: (tag.x + (Math.random() * 2 - 1) * 2) % 100,
          y: (tag.y + (Math.random() * 2 - 1) * 2) % 100,
        }))
      );
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {floatingTags.map((tag, index) => (
        <motion.div
          key={index}
          className="absolute text-primary/20 dark:text-secondary/20 font-medium"
          initial={{ 
            x: `${tag.x}vw`, 
            y: `${tag.y}vh`,
            scale: tag.scale,
            opacity: 0
          }}
          animate={{ 
            x: `${tag.x}vw`, 
            y: `${tag.y}vh`,
            scale: tag.scale,
            opacity: tag.opacity
          }}
          transition={{ 
            duration: 3,
            ease: "easeInOut"
          }}
          style={{
            fontSize: `${tag.scale * 1.2}rem`
          }}
        >
          {tag.text}
        </motion.div>
      ))}
    </div>
  );
}

export default FloatingTags; 