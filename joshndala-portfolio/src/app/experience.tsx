"use client";

import React, { useState } from "react";

// ─── Data ────────────────────────────────────────────────────────────

interface Experience {
  title: string;
  company: string;
  location?: string;
  period: string;
  desc: string;
  achievements: string[];
  technologies: string[];
  liveLink?: string;
}

const EXPERIENCES: Experience[] = [
  {
    title: "Founding Engineer",
    company: "Hylite",
    location: "Remote",
    period: "Jun 2025 – Mar 2026",
    desc: "Architected and built a two-sided marketplace connecting student-athletes with video creators, owning the full technical lifecycle from schema design to production deployment.",
    achievements: [
      "Designed a PostgreSQL database with Supabase and strict Row Level Security (RLS) policies to enforce data access boundaries across the two-sided marketplace",
      "Integrated Stripe Connect for multi-party payouts, enabling seamless revenue splitting between student-athletes and video creators",
      "Implemented secure Mux-based video delivery for creator-uploaded content with access controls",
      "Built a Next.js 15 frontend with a REST API backend, delivering a polished experience for both sides of the marketplace",
      "Added real-time messaging using Supabase Realtime, enabling direct communication between athletes and creators",
    ],
    technologies: ["Next.js 15", "TypeScript", "PostgreSQL", "Supabase", "Supabase Realtime", "Stripe Connect", "Mux", "REST API"],
    liveLink: "https://myhylite.com",
  },
  {
    title: "Software Engineer Intern",
    company: "DevFortress",
    location: "Toronto, ON",
    period: "Dec 2025 – Mar 2026",
    desc: "Contributed across performance engineering, AI prototyping, e-commerce, and full-stack product development at a fast-moving software studio.",
    achievements: [
      "Engineered a 40% performance increase for a high-traffic WordPress client by migrating to QUIC.cloud CDN and tuning LiteSpeed caching — GTmetrix score jumped from 50% to 90%",
      "Built a multimodal AI agent with Python (FastAPI) to automate synchronized music generation for social media assets, streamlining content manager workflows",
      "Owned full technical development of the company's Shopify store — engineered custom Liquid themes and CTA integrations that drove a 30% increase in print-on-demand feature adoption",
      "Developed a full-stack AI Shopify Page Builder MVP with React and Remix, engineering a multi-phase generation pipeline and a virtual staging architecture for safe, near-instant layout previews",
    ],
    technologies: ["JavaScript", "TypeScript", "Python", "FastAPI", "React", "Remix", "WordPress", "Shopify", "Liquid", "QUIC.cloud CDN"],
    liveLink: "https://devfortress.com",
  },
  {
    title: "Freelance Web Developer",
    company: "Triumph College Consulting",
    period: "Aug 2024 – Dec 2024",
    desc: "Built a full-stack marketing and operations site for a college consulting company, including scheduling, student tracking, and dynamic content management.",
    achievements: [
      "Developed a full-stack website using Next.js and Tailwind CSS with dynamic content management",
      "Implemented student success tracking, scholarship management, and consultation scheduling features",
      "Enhanced user experience through intuitive UI/UX design and streamlined contact interfaces",
    ],
    technologies: ["Next.js", "Tailwind CSS", "React", "TypeScript"],
    liveLink: "https://triumphcollegeinfo.com",
  },
  {
    title: "Full-Stack Software Developer",
    company: "Learnification",
    period: "May 2024 – Aug 2024",
    desc: "Led development for an ed-tech startup, creating an AI-powered grading system that improved grading speeds by 75% while maintaining data security.",
    achievements: [
      "Developed an AI-powered assignment grading system, improving grading speeds by 75%",
      "Led development using Express.js/Node.js backend with MySQL and React/Material-UI frontend",
      "Implemented AI functionality using Microsoft's Phi-3 LLM through Ollama for local processing",
      "Managed version control and containerization using GitHub and Docker with CI/CD practices",
    ],
    technologies: ["JavaScript", "Express.js", "Node.js", "React", "MaterialUI", "MySQL", "Phi-3 LLM", "Ollama", "Docker"],
    liveLink: "https://learnification.github.io/",
  },
];

// ─── Entry card ──────────────────────────────────────────────────────

function TimelineEntry({
  exp,
  isLast,
}: {
  exp: Experience;
  isLast: boolean;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    /* Three-column grid: year | dot+line | card */
    <div className="grid" style={{ gridTemplateColumns: "3.5rem 1.5rem 1fr" }}>

      {/* ── Year ── */}
      <div className="pt-[1.1rem] pr-3 text-right select-none">
        <span className="font-playfair italic leading-none text-cinema-amber"
          style={{ fontSize: "clamp(0.85rem, 1.5vw, 1.1rem)" }}>
          {exp.period.match(/\d{4}/)?.[0]}
        </span>
      </div>

      {/* ── Dot + line ── */}
      <div className="relative flex justify-center">
        {/* Line below dot (omit on last entry) */}
        {!isLast && (
          <div
            className="absolute top-5 bottom-0 w-px"
            style={{ background: "linear-gradient(to bottom, rgba(245,197,24,0.35), rgba(245,197,24,0.08))" }}
          />
        )}
        {/* Dot */}
        <div
          className="relative z-10 mt-[1.1rem] w-3 h-3 rounded-full border-2 flex-shrink-0"
          style={{
            background: "#0d0d0d",
            borderColor: "#f5c518",
            boxShadow: "0 0 6px rgba(245,197,24,0.4)",
          }}
        />
      </div>

      {/* ── Card ── */}
      <div className={`pl-5 ${isLast ? "pb-0" : "pb-12"}`}>
        <div
          className="rounded-[2px] border transition-colors duration-300 overflow-hidden"
          style={{
            background: "#111009",
            borderColor: expanded ? "rgba(245,197,24,0.35)" : "rgba(46,42,38,0.8)",
          }}
        >
          {/* Top amber accent on expand */}
          <div
            className="h-px w-full transition-opacity duration-300"
            style={{
              background: "#f5c518",
              opacity: expanded ? 1 : 0,
            }}
          />

          {/* Card header — always visible */}
          <div className="p-5 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
              <div>
                <h3 className="font-playfair text-xl font-bold italic text-cinema-cream leading-tight mb-1">
                  {exp.title}
                </h3>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="cinema-label text-cinema-amber/70 tracking-[0.15em]">
                    {exp.company}
                  </span>
                  {exp.location && (
                    <span className="cinema-label text-cinema-muted tracking-[0.1em]">
                      {exp.location}
                    </span>
                  )}
                </div>
              </div>
              <span
                className="font-mono text-[10px] tracking-[0.1em] text-cinema-muted flex-shrink-0 mt-0.5"
              >
                {exp.period}
              </span>
            </div>

            <p className="text-sm text-cinema-cream-dim/70 leading-relaxed">
              {exp.desc}
            </p>
          </div>

          {/* Expandable content */}
          {expanded && (
            <div className="px-5 sm:px-6 pb-5 sm:pb-6 flex flex-col gap-6 border-t border-cinema-border/50">

              {/* Achievements */}
              <div className="pt-5">
                <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-cinema-amber/50 mb-3">
                  Key Scenes
                </p>
                <ul className="flex flex-col gap-3">
                  {exp.achievements.map((a, i) => (
                    <li key={i} className="flex gap-3 text-sm text-cinema-cream-dim leading-relaxed">
                      <span className="text-cinema-amber mt-1.5 flex-shrink-0 text-[9px]">◆</span>
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech stack */}
              <div>
                <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-cinema-amber/50 mb-3">
                  Tech Cast
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="cinema-label text-cinema-cream-dim border border-cinema-border px-2.5 py-1 tracking-[0.08em]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Live link */}
              {exp.liveLink && (
                <div>
                  <a
                    href={exp.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 cinema-label text-cinema-amber hover:text-cinema-amber-dim transition-colors duration-200 tracking-[0.15em] border-b border-cinema-amber/30 pb-0.5"
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Visit Site ↗
                  </a>
                </div>
              )}
            </div>
          )}

          {/* Toggle footer */}
          <div className="border-t border-cinema-border/40 px-5 sm:px-6">
            <button
              onClick={() => setExpanded((v) => !v)}
              className="w-full flex items-center justify-between py-3 group"
            >
              <span className="cinema-label text-cinema-muted group-hover:text-cinema-amber transition-colors duration-200 tracking-[0.15em]">
                {expanded ? "Collapse" : "Read More"}
              </span>
              <span
                className="text-cinema-muted group-hover:text-cinema-amber transition-all duration-300"
                style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)" }}
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────

export function Experience() {
  return (
    <section className="min-h-screen bg-cinema-cream dark:bg-cinema-black py-16 px-6 lg:px-12 transition-colors duration-300">
      <div className="container mx-auto max-w-3xl">

        {/* Page header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-8 h-px bg-cinema-amber" />
            <span className="cinema-label text-cinema-amber tracking-[0.25em]">The Reel</span>
          </div>
          <h1 className="font-playfair text-5xl sm:text-6xl font-black italic text-cinema-warm dark:text-cinema-cream leading-none mb-4">
            Work Experience
          </h1>
          <p className="text-cinema-muted dark:text-cinema-cream-dim text-sm leading-relaxed max-w-md">
            A timeline of professional roles, contributions, and the technology behind each production.
          </p>
        </div>

        {/* Top amber rule */}
        <div className="amber-rule-left opacity-40 mb-10" />

        {/* Timeline */}
        <div>
          {EXPERIENCES.map((exp, idx) => (
            <TimelineEntry
              key={idx}
              exp={exp}
              isLast={idx === EXPERIENCES.length - 1}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Experience;
