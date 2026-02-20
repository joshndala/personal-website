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
    desc: "Contributed across performance engineering, e-commerce, design systems, and AI prototyping — spanning client infrastructure, internal products, and cutting-edge AI features.",
    longDescription: "At DevFortress, responsibilities spanned four distinct areas of product development. Acted as a technical consultant to optimize a high-traffic client website, fully owned an e-commerce storefront, built scalable design libraries for a flagship AI product used by millions, and prototyped next-generation AI chatbot features.",
    achievements: [
      "Boosted a client's high-traffic WordPress site speed from an F to an A (50% → 90% GTmetrix score) by migrating to QUIC.cloud CDN and fine-tuning LiteSpeed caching",
      "Took full ownership of Athena's Shop — a Shopify print-on-demand storefront — engineering custom themes and adding strategic calls-to-action to drive traffic to the company's core AI product",
      "Built reusable JavaScript component libraries for Athena Board (2M+ users), an AI-powered collaborative whiteboard, ensuring visual consistency across the platform",
      "Prototyped generative AI features for a core chatbot interface using Python and JavaScript/TypeScript, experimenting with large language models to improve response accuracy and conversational flow"
    ],
    technologies: ["JavaScript", "TypeScript", "Python", "WordPress", "Shopify", "Liquid", "LLM", "LiteSpeed", "QUIC.cloud CDN", "Performance Optimization"],
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

