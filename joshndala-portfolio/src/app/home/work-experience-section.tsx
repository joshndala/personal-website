"use client";

import React from "react";
import Link from "next/link";

const RECENT_EXPERIENCES = [
  {
    period: "2025–2026",
    title: "Founding Engineer",
    company: "Hylite",
    summary: "Architected a two-sided marketplace for student-athletes — full stack from schema to production.",
    tags: ["Next.js 15", "Supabase", "Stripe Connect", "Mux"],
  },
  {
    period: "2025–2026",
    title: "Software Engineer Intern",
    company: "DevFortress",
    summary: "Performance engineering, AI prototyping, Shopify e-commerce, and a full-stack AI Page Builder MVP.",
    tags: ["React", "Python", "FastAPI", "Remix", "Shopify"],
  },
  {
    period: "2024",
    title: "Freelance Web Developer",
    company: "Triumph College Consulting",
    summary: "Built a full-stack marketing site with consultation scheduling and student tracking features.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
  },
];

export default function WorkExperienceSection() {
  return (
    <section className="py-20 px-6 lg:px-12 bg-cinema-warm dark:bg-cinema-card border-t border-cinema-border">
      <div className="container mx-auto">

        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="cinema-label text-cinema-amber tracking-[0.25em] block mb-3">
              The Reel
            </span>
            <h2 className="font-playfair text-4xl sm:text-5xl font-bold italic text-cinema-cream leading-none">
              Work Experience
            </h2>
          </div>
          <Link
            href="/experience"
            className="hidden sm:flex items-center gap-2 cinema-label text-cinema-cream-dim hover:text-cinema-amber transition-colors duration-200 tracking-[0.15em] pb-1 border-b border-transparent hover:border-cinema-amber"
          >
            Full Filmography ↗
          </Link>
        </div>

        {/* Amber rule */}
        <div className="amber-rule-left mb-10 opacity-50" />

        {/* Experience entries */}
        <div className="flex flex-col gap-0 max-w-3xl">
          {RECENT_EXPERIENCES.map((exp, idx) => (
            <Link key={idx} href="/experience" className="group block">
              <div className="flex gap-6 sm:gap-10 py-7 border-b border-cinema-border/50 group-hover:border-cinema-amber/30 transition-colors duration-300">

                {/* Year */}
                <div className="flex-shrink-0 w-16 sm:w-20">
                  <span className="font-playfair text-xl sm:text-2xl font-bold italic text-cinema-amber/60 group-hover:text-cinema-amber transition-colors duration-300">
                    {exp.period}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3 mb-2">
                    <h3 className="font-playfair text-lg sm:text-xl font-semibold text-cinema-cream group-hover:text-cinema-amber transition-colors duration-300">
                      {exp.title}
                    </h3>
                    <span className="cinema-label text-cinema-cream-dim tracking-[0.15em]">
                      {exp.company}
                    </span>
                  </div>
                  <p className="text-sm text-cinema-cream-dim/70 leading-relaxed mb-3">
                    {exp.summary}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="cinema-label text-cinema-amber/50 tracking-[0.1em] border border-cinema-border/50 px-2 py-0.5 rounded-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex-shrink-0 self-center text-cinema-border group-hover:text-cinema-amber transition-colors duration-300">
                  <span className="text-lg">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="sm:hidden mt-8">
          <Link
            href="/experience"
            className="cinema-label text-cinema-amber tracking-[0.2em] border-b border-cinema-amber/40 pb-0.5"
          >
            View Full Experience ↗
          </Link>
        </div>

      </div>
    </section>
  );
}
