"use client";

import React from "react";
import Link from "next/link";
import TechStackCarousel from "@/components/techstack-carousel";

export default function TechStackSection() {
  return (
    <section className="py-20 px-6 lg:px-12 bg-cinema-cream dark:bg-cinema-black border-t border-cinema-warm/10 dark:border-cinema-border">
      <div className="container mx-auto">

        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="cinema-label text-cinema-amber tracking-[0.25em] block mb-3">
              Arsenal
            </span>
            <h2 className="font-playfair text-4xl sm:text-5xl font-bold italic text-cinema-warm dark:text-cinema-cream leading-none">
              Core Technologies
            </h2>
          </div>
          <Link
            href="/skills"
            className="hidden sm:flex items-center gap-2 cinema-label text-cinema-muted dark:text-cinema-cream-dim hover:text-cinema-amber transition-colors duration-200 tracking-[0.15em] pb-1 border-b border-transparent hover:border-cinema-amber"
          >
            Full Credits ↗
          </Link>
        </div>

        {/* Amber rule */}
        <div className="amber-rule-left mb-10 opacity-50" />

        {/* Carousel */}
        <TechStackCarousel />

        {/* Mobile link */}
        <div className="sm:hidden mt-8 text-center">
          <Link
            href="/skills"
            className="cinema-label text-cinema-amber tracking-[0.2em] border-b border-cinema-amber/40 pb-0.5"
          >
            View All Skills &amp; Certifications ↗
          </Link>
        </div>
      </div>
    </section>
  );
}
