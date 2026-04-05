"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getImagePath } from "../../utils/imagePath";
import { GITHUB_URL, MEDIUM_URL } from "@/config";

const NAV_LINKS = [
  { label: "01", name: "About", href: "/about" },
  { label: "02", name: "Skills", href: "/skills" },
  { label: "03", name: "Experience", href: "/experience" },
  { label: "04", name: "Projects", href: "/projects" },
  { label: "05", name: "Articles", href: MEDIUM_URL, external: true },
  { label: "06", name: "Contact", href: "/contact" },
];

export default function HeroSection() {
  return (
    <header className="relative min-h-screen flex items-center bg-cinema-cream dark:bg-cinema-black overflow-hidden film-grain">
      {/* Background gradient vignette */}
      <div className="absolute inset-0 bg-gradient-to-br from-cinema-amber/5 via-transparent to-transparent dark:from-cinema-amber/8 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── Left: Text ── */}
          <div className="order-2 lg:order-1 flex flex-col gap-8">

            {/* Credit label */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-cinema-amber" />
              <span className="cinema-label text-cinema-amber tracking-[0.25em]">
                Software Developer &amp; AI Enthusiast
              </span>
            </div>

            {/* Name */}
            <div>
              <h1 className="font-playfair text-6xl sm:text-7xl lg:text-8xl font-black italic leading-none text-cinema-warm dark:text-cinema-cream">
                Joshua
              </h1>
              <h1 className="font-playfair text-6xl sm:text-7xl lg:text-8xl font-black italic leading-none text-cinema-amber">
                Ndala
              </h1>
            </div>

            {/* Logline */}
            <p className="text-cinema-muted dark:text-cinema-cream-dim text-base sm:text-lg leading-relaxed max-w-md">
              Building AI-powered products and full-stack applications.
              Based in Toronto, Canada.
            </p>

            {/* Chapter nav */}
            <nav className="flex flex-wrap gap-x-6 gap-y-3">
              {NAV_LINKS.map(({ label, name, href, external }) =>
                external ? (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-baseline gap-1.5"
                  >
                    <span className="cinema-label text-cinema-amber/60 dark:text-cinema-amber/50 group-hover:text-cinema-amber transition-colors duration-200">
                      {label}
                    </span>
                    <span className="text-sm font-medium text-cinema-warm/60 dark:text-cinema-cream/50 group-hover:text-cinema-warm dark:group-hover:text-cinema-cream border-b border-transparent group-hover:border-cinema-amber transition-all duration-200">
                      {name}
                    </span>
                  </a>
                ) : (
                  <Link key={name} href={href} className="group flex items-baseline gap-1.5">
                    <span className="cinema-label text-cinema-amber/60 dark:text-cinema-amber/50 group-hover:text-cinema-amber transition-colors duration-200">
                      {label}
                    </span>
                    <span className="text-sm font-medium text-cinema-warm/60 dark:text-cinema-cream/50 group-hover:text-cinema-warm dark:group-hover:text-cinema-cream border-b border-transparent group-hover:border-cinema-amber transition-all duration-200">
                      {name}
                    </span>
                  </Link>
                )
              )}
            </nav>

            {/* GitHub */}
            <div className="flex items-center gap-3 pt-2">
              <div className="w-8 h-px bg-cinema-border dark:bg-cinema-border" />
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="cinema-label text-cinema-muted dark:text-cinema-cream-dim hover:text-cinema-amber transition-colors duration-200 tracking-[0.15em]"
              >
                GitHub Profile ↗
              </a>
            </div>
          </div>

          {/* ── Right: Poster ── */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-72 sm:w-80 lg:w-96">
              {/* Amber border frame (offset) */}
              <div className="absolute -top-3 -right-3 w-full h-full border border-cinema-amber/40 rounded-sm" />
              <div className="absolute -top-6 -right-6 w-full h-full border border-cinema-amber/20 rounded-sm" />

              {/* Photo */}
              <div className="relative overflow-hidden rounded-sm shadow-2xl">
                <Image
                  width={600}
                  height={750}
                  alt="Joshua Ndala"
                  src={getImagePath("/image/profile-photo.jpg")}
                  className="w-full aspect-[4/5] object-cover object-top"
                  priority
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-cinema-warm/80 dark:from-cinema-black/90 to-transparent" />

                {/* Film-strip badge */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="cinema-label text-cinema-amber tracking-[0.2em]">Toronto, CA</span>
                  <span className="cinema-label text-cinema-cream/50 tracking-[0.15em]">2026</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom amber rule */}
      <div className="absolute bottom-0 inset-x-0 amber-rule opacity-40" />
    </header>
  );
}
