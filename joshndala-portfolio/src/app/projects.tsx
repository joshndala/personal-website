"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { getImagePath } from "@/utils/imagePath";
import { TOP_PROJECTS, MCP_PROJECTS, OTHER_PROJECTS, Project } from "@/data/projects";
import { ExternalLink } from "lucide-react";

// ─── Helpers ────────────────────────────────────────────────────────

const POSTER_ACCENTS = ["#f5c518", "#60a5fa", "#34d399", "#a78bfa", "#fb7185"];

function getPosterAccent(idx: number) {
  return POSTER_ACCENTS[idx % POSTER_ACCENTS.length];
}

function deriveGenre(technologies: string[] = []): string {
  const t = technologies.join(" ").toLowerCase();
  if (/langgraph|langchain|bert|lstm|ml pipeline|k-means|dbscan|xgboost|clustering/.test(t)) return "Data Science · AI";
  if (/python|fastapi|click|mcp|mem0|fastembed/.test(t)) return "Developer Tools";
  if (/gemini|cohere|llm|ollama|openai|bedrock/.test(t)) return "AI · LLM";
  if (/next\.?js|react|vue|tailwind|typescript/.test(t)) return "Full-Stack Web";
  if (/java|javafx/.test(t)) return "Desktop App";
  if (/r studio|tableau|pandas|numpy/.test(t)) return "Data Analytics";
  if (/php|mysql|ajax/.test(t)) return "Web Dev";
  return "Software Development";
}

function getInitials(title: string): string {
  return title.split(/[\s–—-]/)[0].slice(0, 2).toUpperCase();
}

// ─── Modal ──────────────────────────────────────────────────────────

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") onClose();
  }, [onClose]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(8,8,8,0.92)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden rounded-sm"
        style={{ background: "#111009", border: "1px solid rgba(46,42,38,0.8)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Amber accent line */}
        <div className="h-px w-full bg-cinema-amber flex-shrink-0" />

        {/* Header */}
        <div className="px-7 pt-6 pb-5 flex-shrink-0">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="cinema-label text-cinema-amber tracking-[0.2em] block mb-2">
                {deriveGenre(project.technologies)}
              </span>
              <h2 className="font-playfair text-2xl sm:text-3xl font-bold italic text-cinema-cream leading-tight">
                {project.title}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="flex-shrink-0 mt-1 text-cinema-muted hover:text-cinema-cream transition-colors duration-200 p-1"
              aria-label="Close"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {project.inProgress && (
            <span className="mt-3 inline-block cinema-label text-cinema-black bg-cinema-amber px-2.5 py-1 tracking-[0.15em]">
              In Production
            </span>
          )}
        </div>

        {/* Scrollable body */}
        <div className="overflow-y-auto flex-1 px-7 pb-7 flex flex-col gap-7">

          {/* Synopsis */}
          <div>
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-cinema-amber/60 mb-3">
              Synopsis
            </p>
            <div className="amber-rule-left opacity-40 mb-4" />
            <p className="text-sm leading-relaxed text-cinema-cream-dim">
              {project.longDescription || project.desc}
            </p>
          </div>

          {/* Key Scenes (achievements) */}
          {project.achievements && project.achievements.length > 0 && (
            <div>
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-cinema-amber/60 mb-3">
                Key Scenes
              </p>
              <div className="amber-rule-left opacity-40 mb-4" />
              <ul className="flex flex-col gap-3">
                {project.achievements.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-cinema-cream-dim leading-relaxed">
                    <span className="text-cinema-amber mt-1.5 flex-shrink-0 text-xs">◆</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Production Notes */}
          {project.technicalDetails && (
            <div>
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-cinema-amber/60 mb-3">
                Production Notes
              </p>
              <div className="amber-rule-left opacity-40 mb-4" />
              <p className="text-sm leading-relaxed text-cinema-cream-dim font-mono">
                {project.technicalDetails}
              </p>
            </div>
          )}

          {/* Tech Cast */}
          {project.technologies && project.technologies.length > 0 && (
            <div>
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-cinema-amber/60 mb-3">
                Tech Cast
              </p>
              <div className="amber-rule-left opacity-40 mb-4" />
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="cinema-label text-cinema-cream-dim border border-cinema-border px-2.5 py-1 tracking-[0.1em]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex-shrink-0 px-7 py-4 border-t border-cinema-border flex items-center gap-4">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-cinema-amber text-cinema-black cinema-label px-4 py-2 tracking-[0.15em] hover:bg-cinema-amber-dim transition-colors duration-200"
            >
              <ExternalLink className="w-3 h-3" />
              {project.liveLink.includes("pypi") ? "PyPI" : "Live"}
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-cinema-border text-cinema-cream-dim cinema-label px-4 py-2 tracking-[0.15em] hover:border-cinema-amber/40 hover:text-cinema-cream transition-colors duration-200"
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
          )}
          <button
            onClick={onClose}
            className="ml-auto cinema-label text-cinema-muted hover:text-cinema-cream-dim transition-colors duration-200 tracking-[0.12em]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Poster Card ─────────────────────────────────────────────────────

function PosterCard({ project, accentIdx, onClick }: {
  project: Project;
  accentIdx: number;
  onClick: () => void;
}) {
  const accent = getPosterAccent(accentIdx);
  const genre = deriveGenre(project.technologies);
  const initials = getInitials(project.title);

  return (
    <button
      onClick={onClick}
      className="group relative text-left w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-cinema-amber"
      style={{ aspectRatio: "2/3" }}
    >
      {/* Poster background */}
      <div className="absolute inset-0 overflow-hidden rounded-[2px]">
        {project.img ? (
          <Image
            src={getImagePath(project.img)}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div
            className="w-full h-full"
            style={{
              background: `linear-gradient(150deg, ${accent}18 0%, #0d0d0d 55%, #0a0905 100%)`,
            }}
          >
            <span
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-playfair font-black italic select-none pointer-events-none leading-none"
              style={{ fontSize: "7rem", color: `${accent}14` }}
            >
              {initials}
            </span>
          </div>
        )}

        {/* Bottom gradient overlay — always present */}
        <div className="absolute inset-0 bg-gradient-to-t from-cinema-black via-cinema-black/60 to-transparent" />

        {/* Hover amber border */}
        <div
          className="absolute inset-0 rounded-[2px] border-2 border-cinema-amber opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        />

        {/* In Production badge */}
        {project.inProgress && (
          <div className="absolute top-3 left-3">
            <span className="cinema-label text-cinema-black bg-cinema-amber px-2 py-0.5 tracking-[0.12em]">
              In Production
            </span>
          </div>
        )}

        {/* Content at bottom */}
        <div className="absolute bottom-0 inset-x-0 p-4">
          <span className="cinema-label text-cinema-amber/70 tracking-[0.15em] block mb-1.5">
            {genre}
          </span>
          <h3
            className="font-playfair font-bold italic text-cinema-cream leading-tight mb-2.5 group-hover:text-cinema-amber transition-colors duration-300"
            style={{ fontSize: "clamp(0.9rem, 1.5vw, 1.15rem)" }}
          >
            {project.title.split("–")[0].split("—")[0].trim()}
          </h3>
          <p className="text-cinema-cream-dim/60 text-xs leading-snug line-clamp-2">
            {project.desc.split(".")[0]}.
          </p>
        </div>

        {/* "More Info" hint on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <span
            className="cinema-label text-cinema-black bg-cinema-amber px-3 py-1.5 tracking-[0.15em]"
            style={{ marginBottom: "40%" }}
          >
            View Details
          </span>
        </div>
      </div>
    </button>
  );
}

// ─── Section Shelf ───────────────────────────────────────────────────

function SectionShelf({
  label,
  heading,
  projects,
  columns,
  gridMaxWidth,
  accentOffset = 0,
  onSelect,
}: {
  label: string;
  heading: string;
  projects: Project[];
  columns: string;
  gridMaxWidth?: string;
  accentOffset?: number;
  onSelect: (p: Project) => void;
}) {
  return (
    <div>
      {/* Header */}
      <div className="flex items-end justify-between mb-8">
        <div>
          <span className="cinema-label text-cinema-amber tracking-[0.25em] block mb-3">
            {label}
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold italic text-cinema-warm dark:text-cinema-cream leading-none">
            {heading}
          </h2>
        </div>
      </div>
      <div className="amber-rule-left opacity-40 mb-8" />

      {/* Grid */}
      <div className={`grid ${columns} gap-4 sm:gap-5 ${gridMaxWidth ?? ""}`}>
        {projects.map((project, idx) => (
          <PosterCard
            key={idx}
            project={project}
            accentIdx={accentOffset + idx}
            onClick={() => onSelect(project)}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Main ────────────────────────────────────────────────────────────

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section className="min-h-screen bg-cinema-cream dark:bg-cinema-black py-16 px-6 lg:px-12 transition-colors duration-300">
      <div className="container mx-auto">

        {/* Page header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-8 h-px bg-cinema-amber" />
            <span className="cinema-label text-cinema-amber tracking-[0.25em]">The Screening Room</span>
          </div>
          <h1 className="font-playfair text-5xl sm:text-6xl font-black italic text-cinema-warm dark:text-cinema-cream leading-none mb-4">
            My Projects
          </h1>
          <p className="text-cinema-muted dark:text-cinema-cream-dim text-base max-w-xl leading-relaxed">
            A curated catalogue of personal explorations in software, AI, and data science.
            Click any title to read the full synopsis.
          </p>
        </div>

        {/* Sections */}
        <div className="flex flex-col gap-20">

          <SectionShelf
            label="Now Playing"
            heading="Top Projects"
            projects={TOP_PROJECTS}
            columns="grid-cols-2 lg:grid-cols-4"
            accentOffset={0}
            onSelect={setSelected}
          />

          <SectionShelf
            label="Special Presentations"
            heading="Open Source &amp; AI Tools"
            projects={MCP_PROJECTS}
            columns="grid-cols-2 lg:grid-cols-4"
            accentOffset={4}
            onSelect={setSelected}
          />

          <SectionShelf
            label="The Archive"
            heading="Other Projects"
            projects={OTHER_PROJECTS}
            columns="grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
            accentOffset={6}
            onSelect={setSelected}
          />

        </div>
      </div>

      {/* Modal */}
      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}

export default Projects;
