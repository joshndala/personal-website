"use client";

import React from "react";
import { EMAIL_ADDRESS, LINKEDIN_URL, GITHUB_URL } from "@/config";

export default function CtaSection() {
  return (
    <section className="py-28 px-6 lg:px-12 bg-cinema-warm dark:bg-cinema-card border-t border-cinema-border">
      <div className="container mx-auto max-w-2xl">

        {/* End mark */}
        <div className="flex items-center gap-6 mb-16">
          <div className="flex-1 h-px bg-cinema-border" />
          <span className="font-playfair text-sm italic text-cinema-amber/50 tracking-[0.2em]">fin.</span>
          <div className="flex-1 h-px bg-cinema-border" />
        </div>

        {/* Heading */}
        <div className="text-center mb-10">
          <span className="cinema-label text-cinema-amber tracking-[0.25em] block mb-4">
            Open to Opportunities
          </span>
          <h2 className="font-playfair text-4xl sm:text-5xl font-black italic text-cinema-cream leading-tight mb-5">
            Let's Make Something Together
          </h2>
          <p className="text-cinema-cream-dim/70 text-base leading-relaxed max-w-md mx-auto">
            Full-stack engineer focused on TypeScript, React, and AI-powered products.
            Available for full-time roles and contract work.
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href={`mailto:${EMAIL_ADDRESS}?subject=Hiring%20Inquiry`}
            className="inline-flex items-center gap-2 bg-cinema-amber text-cinema-black px-8 py-3 font-medium text-sm tracking-wide hover:bg-cinema-amber-dim transition-colors duration-300"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Get In Touch
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-cinema-border text-cinema-cream-dim px-8 py-3 font-medium text-sm tracking-wide hover:border-cinema-amber/40 hover:text-cinema-cream transition-colors duration-300"
          >
            LinkedIn Profile ↗
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-8">
          <a
            href={`mailto:${EMAIL_ADDRESS}`}
            className="cinema-label text-cinema-muted hover:text-cinema-amber transition-colors duration-200 tracking-[0.15em]"
            aria-label="Email"
          >
            Email
          </a>
          <div className="w-px h-3 bg-cinema-border" />
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cinema-label text-cinema-muted hover:text-cinema-amber transition-colors duration-200 tracking-[0.15em]"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
          <div className="w-px h-3 bg-cinema-border" />
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cinema-label text-cinema-muted hover:text-cinema-amber transition-colors duration-200 tracking-[0.15em]"
            aria-label="GitHub"
          >
            GitHub
          </a>
        </div>

      </div>
    </section>
  );
}
