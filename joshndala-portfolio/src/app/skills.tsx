"use client";

import React, { useState } from "react";
import Image from "next/image";
import { getImagePath } from "@/utils/imagePath";

// ─── Data ────────────────────────────────────────────────────────────

const STACK = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Python",      icon: "/icons/python.svg" },
      { name: "Go",          icon: "/icons/go.svg" },
      { name: "JavaScript",  icon: "/icons/javascript.svg" },
      { name: "TypeScript",  icon: "/icons/typescript.svg" },
      { name: "Java",        icon: "/icons/java.svg" },
    ],
  },
  {
    category: "AI & Machine Learning",
    skills: [
      { name: "LangChain",    icon: "/icons/langchain.svg" },
      { name: "LangGraph",    icon: null },
      { name: "FAISS",        icon: null },
      { name: "Gemini",       icon: "/icons/gemini.svg" },
      { name: "Cohere",       icon: "/icons/cohere.svg" },
      { name: "Ollama",       icon: "/icons/ollama.svg" },
      { name: "TensorFlow",   icon: "/icons/tensorflow.svg" },
      { name: "Scikit-Learn", icon: "/icons/scikit-learn.svg" },
      { name: "R",            icon: "/icons/r.svg" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React",   icon: "/icons/react.svg" },
      { name: "Next.js", icon: "/icons/nextjs.svg" },
      { name: "Vue",     icon: null },
      { name: "Remix",   icon: null },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
      { name: "Supabase",   icon: "/icons/supabase.svg" },
      { name: "MySQL",      icon: "/icons/mysql.svg" },
      { name: "Firebase",   icon: null },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js",    icon: "/icons/nodejs.svg" },
      { name: "Express.js", icon: "/icons/expressjs.svg" },
      { name: "FastAPI",    icon: "/icons/fastapi.svg" },
      { name: "Go / Gin",   icon: "/icons/go.svg" },
    ],
  },
  {
    category: "DevOps & Cloud",
    skills: [
      { name: "Docker",       icon: "/icons/docker.svg" },
      { name: "AWS",          icon: "/icons/aws.svg" },
      { name: "Google Cloud", icon: "/icons/gcp.svg" },
      { name: "Vercel",       icon: "/icons/vercel.svg" },
      { name: "GitHub",       icon: "/icons/github.svg" },
    ],
  },
];

interface EducationEntry {
  year: string;
  title: string;
  institution: string;
  period: string;
  description: string;
  highlights?: string[];
  link?: string;
  linkText?: string;
  inProgress?: boolean;
}

const EDUCATION: EducationEntry[] = [
  {
    year: "2024",
    title: "Bachelor of Arts in Computer Science",
    institution: "University of British Columbia",
    period: "2020 – 2024",
    description:
      "Comprehensive curriculum spanning software engineering and data science — Software Engineering (Capstone, HCI, Web Programming, Project Management), Data Science & ML (Data Analytics, Making Predictions with Data, Parallel Computing, GIS), plus an independent research project on fake news detection using deep learning.",
    highlights: [
      "Independent Research: Fake news detection using LSTM, RNN, and BERT models",
      "Outstanding International Student Award",
      "Deputy Vice-Chancellor Scholarship for International Students",
    ],
  },
  {
    year: "2023",
    title: "Google Data Analytics Professional Certificate",
    institution: "Google & Coursera",
    period: "2023",
    description: "Specialized in data analysis using SQL, R, and Tableau. Completed a capstone analysis of 2.9 million Cyclistic bike-share entries.",
    link: "https://www.credly.com/badges/325ac3dd-6b59-41a7-8dc1-d9115184a962/public_url",
    linkText: "View Certificate ↗",
  },
  {
    year: "—",
    title: "IBM Machine Learning Professional Certificate",
    institution: "IBM & Coursera",
    period: "In Progress",
    description: "Advanced study of machine learning techniques and real-world applications.",
    inProgress: true,
  },
];

const CRAFT = [
  {
    symbol: "◆",
    title: "Problem Solving",
    desc: "Breaking complex challenges into components through methodical, creative analysis — then building the simplest thing that actually works.",
  },
  {
    symbol: "◈",
    title: "Data Analysis",
    desc: "Extracting actionable insights from complex datasets using statistical methods, visualization, and a healthy skepticism of the obvious answer.",
  },
  {
    symbol: "◇",
    title: "Project Management",
    desc: "Delivering software on time and to specification while keeping code quality and documentation from being the first things to slip.",
  },
];

// ─── Skill Pill ──────────────────────────────────────────────────────

function SkillPill({ name, icon }: { name: string; icon: string | null }) {
  return (
    <div className="flex items-center gap-1.5 border border-cinema-border hover:border-cinema-amber/40 transition-colors duration-200 px-2.5 py-1.5 rounded-[2px]">
      {icon && (
        <Image
          src={getImagePath(icon)}
          alt=""
          width={13}
          height={13}
          className="flex-shrink-0 opacity-80"
        />
      )}
      <span className="cinema-label text-cinema-cream-dim tracking-[0.08em] whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

// ─── Stack Section ───────────────────────────────────────────────────

function StackSection() {
  return (
    <div>
      <div className="mb-8">
        <span className="cinema-label text-cinema-amber tracking-[0.25em] block mb-3">
          The Stack
        </span>
        <h2 className="font-playfair text-3xl sm:text-4xl font-bold italic text-cinema-warm dark:text-cinema-cream leading-none">
          Core Technologies
        </h2>
      </div>
      <div className="amber-rule-left opacity-40 mb-10" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
        {STACK.map((group) => (
          <div key={group.category}>
            <p className="font-mono text-[9px] tracking-[0.22em] uppercase text-cinema-amber/55 mb-3">
              {group.category}
            </p>
            <div className="h-px bg-cinema-border mb-4" />
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <SkillPill key={skill.name} {...skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Academy (Education timeline) ───────────────────────────────────

function AcademyEntry({
  entry,
  isLast,
}: {
  entry: EducationEntry;
  isLast: boolean;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="grid" style={{ gridTemplateColumns: "3.5rem 1.5rem 1fr" }}>

      {/* Year */}
      <div className="pt-[1.1rem] pr-3 text-right select-none">
        <span
          className="font-playfair italic leading-none text-cinema-amber"
          style={{ fontSize: "clamp(0.85rem, 1.5vw, 1.1rem)" }}
        >
          {entry.year}
        </span>
      </div>

      {/* Dot + line */}
      <div className="relative flex justify-center">
        {!isLast && (
          <div
            className="absolute top-5 bottom-0 w-px"
            style={{
              background:
                "linear-gradient(to bottom, rgba(245,197,24,0.35), rgba(245,197,24,0.08))",
            }}
          />
        )}
        <div
          className="relative z-10 mt-[1.1rem] w-3 h-3 rounded-full border-2 flex-shrink-0"
          style={{
            background: "#0d0d0d",
            borderColor: "#f5c518",
            boxShadow: "0 0 6px rgba(245,197,24,0.4)",
          }}
        />
      </div>

      {/* Card */}
      <div className={`pl-5 ${isLast ? "pb-0" : "pb-10"}`}>
        <div
          className="rounded-[2px] border transition-colors duration-300 overflow-hidden"
          style={{
            background: "#111009",
            borderColor: expanded
              ? "rgba(245,197,24,0.35)"
              : "rgba(46,42,38,0.8)",
          }}
        >
          <div
            className="h-px w-full transition-opacity duration-300"
            style={{ background: "#f5c518", opacity: expanded ? 1 : 0 }}
          />

          {/* Header */}
          <div className="p-5 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-1">
              <div>
                <h3 className="font-playfair text-lg font-bold italic text-cinema-cream leading-tight mb-1">
                  {entry.title}
                </h3>
                <span className="cinema-label text-cinema-amber/70 tracking-[0.15em]">
                  {entry.institution}
                </span>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0 mt-0.5">
                {entry.inProgress && (
                  <span className="cinema-label text-cinema-black bg-cinema-amber px-2 py-0.5 tracking-[0.12em]">
                    In Production
                  </span>
                )}
                <span className="font-mono text-[10px] tracking-[0.1em] text-cinema-muted">
                  {entry.period}
                </span>
              </div>
            </div>
          </div>

          {/* Expanded */}
          {expanded && (
            <div className="px-5 sm:px-6 pb-5 sm:pb-6 flex flex-col gap-5 border-t border-cinema-border/50">
              <p className="pt-5 text-sm text-cinema-cream-dim leading-relaxed">
                {entry.description}
              </p>

              {entry.highlights && entry.highlights.length > 0 && (
                <ul className="flex flex-col gap-2.5">
                  {entry.highlights.map((h, i) => (
                    <li key={i} className="flex gap-3 text-sm text-cinema-cream-dim leading-relaxed">
                      <span className="text-cinema-amber mt-1.5 flex-shrink-0 text-[9px]">◆</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              )}

              {entry.link && (
                <a
                  href={entry.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 cinema-label text-cinema-amber hover:text-cinema-amber-dim transition-colors duration-200 tracking-[0.15em] border-b border-cinema-amber/30 pb-0.5 self-start"
                >
                  {entry.linkText}
                </a>
              )}
            </div>
          )}

          {/* Toggle */}
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

function AcademySection() {
  return (
    <div>
      <div className="mb-8">
        <span className="cinema-label text-cinema-amber tracking-[0.25em] block mb-3">
          The Academy
        </span>
        <h2 className="font-playfair text-3xl sm:text-4xl font-bold italic text-cinema-warm dark:text-cinema-cream leading-none">
          Education
        </h2>
      </div>
      <div className="amber-rule-left opacity-40 mb-10" />

      <div className="max-w-2xl">
        {EDUCATION.map((entry, idx) => (
          <AcademyEntry key={idx} entry={entry} isLast={idx === EDUCATION.length - 1} />
        ))}
      </div>
    </div>
  );
}

// ─── Craft (Soft Skills) ─────────────────────────────────────────────

function CraftSection() {
  return (
    <div>
      <div className="mb-8">
        <span className="cinema-label text-cinema-amber tracking-[0.25em] block mb-3">
          The Craft
        </span>
        <h2 className="font-playfair text-3xl sm:text-4xl font-bold italic text-cinema-warm dark:text-cinema-cream leading-none">
          Soft Skills
        </h2>
      </div>
      <div className="amber-rule-left opacity-40 mb-10" />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl">
        {CRAFT.map((item) => (
          <div key={item.title} className="flex flex-col gap-3">
            <span className="text-cinema-amber text-xl leading-none select-none">
              {item.symbol}
            </span>
            <h3 className="font-playfair text-lg font-bold italic text-cinema-warm dark:text-cinema-cream">
              {item.title}
            </h3>
            <p className="text-sm text-cinema-muted dark:text-cinema-cream-dim leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────

export function Skills() {
  return (
    <section className="min-h-screen bg-cinema-cream dark:bg-cinema-black py-16 px-6 lg:px-12 transition-colors duration-300">
      <div className="container mx-auto max-w-4xl">

        {/* Page header */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-8 h-px bg-cinema-amber" />
            <span className="cinema-label text-cinema-amber tracking-[0.25em]">The Programme</span>
          </div>
          <h1 className="font-playfair text-5xl sm:text-6xl font-black italic text-cinema-warm dark:text-cinema-cream leading-none mb-4">
            Skills &amp; Education
          </h1>
          <p className="text-cinema-muted dark:text-cinema-cream-dim text-sm leading-relaxed max-w-md">
            A full-stack engineer and AI enthusiast — from language models to production infrastructure.
          </p>
        </div>

        {/* Sections */}
        <div className="flex flex-col gap-24">
          <StackSection />
          <AcademySection />
          <CraftSection />
        </div>

      </div>
    </section>
  );
}

export default Skills;
