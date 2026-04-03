"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getImagePath } from "../../utils/imagePath";
import { ExternalLink } from "lucide-react";

const FEATURED_PROJECTS = [
  {
    title: "mnemo",
    subtitle: "Agent Memory CLI",
    hook: "A git-like CLI and Python SDK for managing AI agent memory — dump, diff, migrate, and query facts across Mem0, Letta, and your local filesystem.",
    image: null,
    liveLink: null,
    githubLink: null,
    technologies: ["Python", "Click", "FastAPI", "MCP", "fastembed"],
    inProgress: true,
  },
  {
    title: "CoachDeck",
    subtitle: "Sports Coaching Assistant",
    hook: "AI coaching platform that analyzes game sessions in real-time via voice logging and hybrid RAG, delivering sport-specific tactical feedback.",
    image: "/image/coachdeck.jpg",
    liveLink: "https://coachdeck.app/",
    githubLink: "https://github.com/joshndala/var-vendetta",
    technologies: ["Next.js", "TypeScript", "Supabase", "Cohere API", "FAISS"],
    inProgress: false,
  },
  {
    title: "Hylite Studio",
    subtitle: "Sports Recruitment Auditor",
    hook: "AI audit platform that cross-references player videos, stat sheets, and reports through Gemini 3.0 — automatically selecting the right analysis mode for scouts.",
    image: "/image/hylite-studio.png",
    liveLink: null,
    githubLink: "https://github.com/joshndala/glimpse",
    technologies: ["Vue 3", "TypeScript", "Go", "Gemini 3.0", "Tailwind CSS"],
    inProgress: false,
  },
  {
    title: "The Third Act",
    subtitle: "Cinematic Movie Journal",
    hook: "Local-first JavaFX movie journaling app with half-star ratings, TMDb integration, and a cinematic backdrop-card dashboard.",
    image: "/image/the-third-act.png",
    liveLink: "https://thethirdact.vercel.app",
    githubLink: "https://github.com/joshndala/third-act",
    technologies: ["Java 19", "JavaFX", "SQLite", "TMDb API", "Maven"],
    inProgress: false,
  },
];

function ProjectCard({ project, index }: { project: (typeof FEATURED_PROJECTS)[0]; index: number }) {
  const hasImage = !!project.image;

  return (
    <div className="group relative flex flex-col bg-cinema-card border border-cinema-border hover:border-cinema-amber/40 transition-all duration-500 rounded-sm overflow-hidden">
      {/* Image or abstract poster */}
      <div className="relative aspect-[16/9] overflow-hidden bg-cinema-black">
        {hasImage ? (
          <Image
            src={getImagePath(project.image!)}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
          />
        ) : (
          /* Abstract poster for text-only projects */
          <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cinema-amber/10 via-cinema-black to-cinema-warm/20" />
            <div className="relative text-center px-6">
              <div className="font-playfair text-5xl font-black italic text-cinema-amber/20 leading-none select-none">
                {project.title.slice(0, 1)}
              </div>
            </div>
            {/* Grid lines decoration */}
            <div className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 39px, #f5c518 39px, #f5c518 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, #f5c518 39px, #f5c518 40px)",
              }}
            />
          </div>
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-cinema-card via-transparent to-transparent" />

        {/* In-progress badge */}
        {project.inProgress && (
          <div className="absolute top-3 left-3">
            <span className="cinema-label text-cinema-black bg-cinema-amber px-2 py-1 tracking-[0.15em]">
              In Production
            </span>
          </div>
        )}

        {/* Index number */}
        <div className="absolute top-3 right-3">
          <span className="font-playfair text-xs font-bold italic text-cinema-cream/30">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <div>
          <span className="cinema-label text-cinema-amber/60 tracking-[0.15em] block mb-1">
            {project.subtitle}
          </span>
          <h3 className="font-playfair text-xl font-bold italic text-cinema-cream group-hover:text-cinema-amber transition-colors duration-300">
            {project.title}
          </h3>
        </div>

        <p className="text-sm text-cinema-cream-dim/70 leading-relaxed flex-1">
          {project.hook}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="cinema-label text-cinema-amber/40 border border-cinema-border px-2 py-0.5 rounded-sm tracking-[0.08em]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 pt-2 border-t border-cinema-border/50">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 cinema-label text-cinema-amber hover:text-cinema-amber-dim transition-colors duration-200 tracking-[0.12em]"
            >
              <ExternalLink className="w-3 h-3" />
              Live
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 cinema-label text-cinema-cream-dim hover:text-cinema-cream transition-colors duration-200 tracking-[0.12em]"
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
          )}
          {!project.liveLink && !project.githubLink && (
            <span className="cinema-label text-cinema-muted tracking-[0.12em]">Coming Soon</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function FeaturedProjectsSection() {
  return (
    <section className="py-20 px-6 lg:px-12 bg-cinema-cream dark:bg-cinema-black border-t border-cinema-warm/10 dark:border-cinema-border">
      <div className="container mx-auto">

        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="cinema-label text-cinema-amber tracking-[0.25em] block mb-3">
              Now Screening
            </span>
            <h2 className="font-playfair text-4xl sm:text-5xl font-bold italic text-cinema-warm dark:text-cinema-cream leading-none">
              Featured Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="hidden sm:flex items-center gap-2 cinema-label text-cinema-muted dark:text-cinema-cream-dim hover:text-cinema-amber transition-colors duration-200 tracking-[0.15em] pb-1 border-b border-transparent hover:border-cinema-amber"
          >
            Full Catalogue ↗
          </Link>
        </div>

        {/* Amber rule */}
        <div className="amber-rule-left mb-10 opacity-50" />

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-10">
          {FEATURED_PROJECTS.map((project, idx) => (
            <ProjectCard key={project.title} project={project} index={idx} />
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="sm:hidden text-center">
          <Link
            href="/projects"
            className="cinema-label text-cinema-amber tracking-[0.2em] border-b border-cinema-amber/40 pb-0.5"
          >
            View Full Catalogue ↗
          </Link>
        </div>

      </div>
    </section>
  );
}
