"use client";

import React from 'react';
import {
  Typography,
} from "@material-tailwind/react";
import { ExperienceCard } from "@/components";

// Work Experience Data
const EXPERIENCES = [
  {
    title: "Software Engineer Intern",
    company: "DevFortress",
    location: "Toronto, ON",
    period: "Dec 2025 - Present",
    desc: "Expanded role from UI development to full-stack contributions including performance optimization, product engineering, design systems, and AI feature prototyping.",
    longDescription: "Evolved responsibilities at DevFortress to encompass multiple dimensions of product development, from infrastructure optimization and e-commerce engineering to design systems and generative AI experimentation.",
    achievements: [
      "Enhanced client WordPress infrastructure through CDN migration and caching optimization, achieving significant performance improvements (D to A-grade scores)",
      "Took lead ownership of company's e-commerce product, implementing custom theme engineering and conversion optimization strategies",
      "Created and maintained design component libraries for the collaborative whiteboard platform, supporting millions of users with consistent visual standards",
      "Prototyped generative AI capabilities for chatbot interfaces, iterating on LLM models to improve conversational quality and user experience"
    ],
    technologies: ["JavaScript", "React", "WordPress", "Shopify", "Liquid", "TypeScript", "LLM", "UI/UX Design", "Performance Optimization"],
    inProgress: true,
  },
  {
    title: "Freelance Web Developer",
    company: "Triumph College Consulting",
    period: "Aug 2024 - Dec 2024",
    desc: "Developed a comprehensive website using Next.js and Tailwind CSS to showcase services, team, and contact information for a college consulting company.",
    longDescription: "Built a full-stack website featuring dynamic content management and responsive design. The site includes features for student success tracking, scholarship management, and consultation scheduling.",
    achievements: [
      "Developed a full-stack website using Next.js and Tailwind CSS with dynamic content management",
      "Implemented student success tracking, scholarship management, and consultation scheduling features",
      "Enhanced user experience through intuitive UI/UX design and streamlined contact interfaces"
    ],
    technologies: ["Next.js", "Tailwind CSS", "React", "TypeScript"],
    liveLink: "https://triumphcollegeinfo.com",
  },
  {
    title: "Full-Stack Software Developer",
    company: "Learnification",
    period: "May 2024 - Aug 2024",
    desc: "Led the development for an ed-tech startup, creating an AI-powered grading system that improved grading speeds by 75% while maintaining data security.",
    longDescription: "Developed a comprehensive grading system integrating AI capabilities with a robust full-stack architecture. The system features secure data handling and efficient processing of student assignments.",
    achievements: [
      "Developed an AI-powered assignment grading system, improving grading speeds by 75%",
      "Led development using Express.js/Node.js backend with MySQL and React/Material-UI frontend",
      "Implemented AI functionality using Microsoft's Phi-3 LLM through Ollama",
      "Managed version control and containerization using GitHub and Docker with CI/CD practices"
    ],
    technicalDetails: "Implemented using Express.js/Node.js backend with MySQL and React/Material-UI frontend. Integrated Microsoft's Phi-3 LLM through Ollama for local processing. Comprehensive testing implemented with Mocha, Chai, and Jest.",
    technologies: ["JavaScript", "Express.js", "Node.js", "React", "MaterialUI", "MySQL", "Phi-3 LLM", "Ollama", "Docker", "CI/CD"],
    liveLink: "https://learnification.github.io/",
  },
];

export function Experience() {
  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-secondary dark:bg-primary transition-colors duration-300">
      <div className="container mx-auto">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <Typography variant="h1" className="text-4xl md:text-5xl font-extrabold text-primary dark:text-secondary tracking-tight mb-4">
            Work Experience
          </Typography>
          <Typography variant="lead" className="text-lg text-primary/80 dark:text-secondary/80 max-w-2xl mx-auto">
            A detailed overview of my professional journey, including roles, responsibilities, and key achievements.
          </Typography>
        </div>

        {/* Experience Cards */}
        <div className="flex flex-col gap-6 max-w-4xl mx-auto">
          {EXPERIENCES.map((experience, idx) => (
            <ExperienceCard key={idx} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;

