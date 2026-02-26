"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getImagePath } from '../../utils/imagePath'
import { Typography, Button, Card, Chip } from "@material-tailwind/react";
import {
  ArrowRightIcon,
} from "@heroicons/react/24/solid";
import { ExternalLink, GithubIcon } from "lucide-react";

// Featured projects data
const FEATURED_PROJECTS = [
  {
    title: "CoachDeck – AI-Powered Sports Coaching Assistant",
    hook: "AI-powered sports coaching assistant that analyzes game sessions in real-time using voice logging and hybrid search, providing coaches with smart, sport-specific feedback.",
    image: "/image/coachdeck.jpg",
    liveLink: "https://coachdeck.app/",
    githubLink: "https://github.com/joshndala/var-vendetta",
    technologies: ["Next.js", "TypeScript", "Supabase", "Cohere API", "FAISS"]
  },
  {
    title: "Hylite Studio – Sports Recruitment Auditor",
    hook: "AI-powered recruitment platform that cross-references player videos, stat sheets, and reports through Gemini 3.0 — automatically picking the right analysis mode for scouts and recruiters.",
    image: "/image/hylite-studio.png",
    githubLink: "https://github.com/joshndala/glimpse",
    technologies: ["Vue 3", "TypeScript", "Go", "Gemini 3.0", "Tailwind CSS"]
  },
  {
    title: "The Third Act – Cinematic Movie Journal",
    hook: "A local-first movie journaling app with half-star ratings, TMDb integration, and a cinematic backdrop-card dashboard — more than a tracker, a personal film diary.",
    image: "/image/the-third-act.png",
    githubLink: "https://github.com/joshndala/third-act",
    liveLink: "https://thethirdact.vercel.app",
    technologies: ["Java 19", "JavaFX", "SQLite", "TMDb API", "Maven"]
  }
];

export default function FeaturedProjectsSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <Typography variant="h2" className="mb-4 text-3xl sm:text-4xl font-bold text-primary dark:text-secondary">
            Featured Projects
          </Typography>
          <Typography variant="lead" className="text-primary/80 dark:text-secondary/80 max-w-2xl mx-auto">
            Explore some of my recent work showcasing professional impact, modern full-stack development, and AI innovation.
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {FEATURED_PROJECTS.map((project, idx) => (
            <Card key={idx} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl group">
              <div className="aspect-[16/10] overflow-hidden">
                <Image
                  src={getImagePath(project.image)}
                  alt={project.title}
                  width={400}
                  height={250}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <Typography variant="h5" className="text-lg font-semibold text-primary dark:text-secondary mb-3">
                  {project.title}
                </Typography>
                <Typography className="text-primary/70 dark:text-secondary/70 text-sm leading-relaxed mb-4">
                  {project.hook}
                </Typography>

                {/* Technologies */}
                {project.technologies && project.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 4).map((tech, index) => (
                      <Chip
                        key={index}
                        value={tech}
                        size="sm"
                        className="text-xs px-2 py-1 bg-primary/10 text-primary dark:bg-secondary/10 dark:text-secondary"
                      />
                    ))}
                  </div>
                )}

                {/* Action Links */}
                <div className="flex items-center gap-2">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/projects">
            <Button size="lg" className="bg-primary text-secondary dark:bg-secondary dark:text-primary hover:bg-primary/90 dark:hover:bg-secondary/90 transition-colors duration-300 flex items-center gap-2 mx-auto shadow-md hover:shadow-lg">
              View All Projects
              <ArrowRightIcon className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
