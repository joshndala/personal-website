"use client";

import React from "react";
import Image from "next/image";
import { getImagePath } from "@/utils/imagePath";

const SCRIPT_SCENES = [
  {
    heading: "INT. JOHANNESBURG, SOUTH AFRICA — ORIGIN",
    voiceover: [
      "Born in South Africa. Raised across Uganda, Ivory Coast, and Canada. Shaped by American and British international schools and more time zones than I can count.",
      "My global upbringing didn't just give me stamps in a passport — it gave me a way of seeing problems from every angle.",
    ],
  },
  {
    heading: "INT. UNIVERSITY OF BRITISH COLUMBIA — DAY",
    voiceover: [
      "Pursued Computer Science at UBC. Fell in love with data and machine learning somewhere between a probability lecture and a 2am debugging session.",
      "What started as curiosity became a full-stack obsession with building things that are actually useful.",
    ],
  },
  {
    heading: "EXT. TORONTO, CANADA — PRESENT DAY",
    voiceover: [
      "Now based in Toronto. Building AI-powered products, traveling whenever possible, and rooting for Liverpool FC with a conviction that should probably be diagnosed.",
      "A diversified background and love of challenges fuel the way I build — creative, precise, and always thinking about the person on the other side of the screen.",
    ],
  },
];

const FILM_STILLS = [
  { src: "/image/SA_Lion_Park.jpg",    alt: "Lion Park, South Africa",   caption: "JHB · SA", frame: "001A" },
  { src: "/image/MTL_Mont_Royal.jpg",  alt: "Mont Royal, Montreal",      caption: "MTL · CA", frame: "002A" },
  { src: "/image/JHB_Waterfall.jpg",   alt: "Stanley Park, Vancouver",   caption: "YVR · CA", frame: "003A" },
  { src: "/image/Kenya_Mombasa.jpg",   alt: "Mombasa, Kenya",            caption: "MSA · KE", frame: "004A" },
];

function FilmStrip() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-4 h-px bg-cinema-amber" />
        <span className="cinema-label text-cinema-amber tracking-[0.2em]">Location Reel</span>
      </div>

      {/* Strip */}
      <div
        className="relative flex overflow-hidden rounded-[2px] border border-cinema-border filmstrip-flicker"
        style={{ background: "#080808" }}
      >
        {/* Left sprockets */}
        <div className="film-strip-sprockets w-6 flex-shrink-0" />

        {/* Frames */}
        <div className="flex-1 flex flex-col py-2">
          {FILM_STILLS.map((still, idx) => (
            <div key={idx} className="film-frame group">
              {/* Frame metadata top */}
              <div className="flex items-center justify-between px-2 pt-2 pb-1">
                <span className="font-mono text-[8px] tracking-[0.08em]" style={{ color: "rgba(245,197,24,0.25)" }}>
                  KODAK 5219
                </span>
                <span className="font-mono text-[8px] tracking-[0.1em]" style={{ color: "rgba(245,197,24,0.45)" }}>
                  {still.frame}
                </span>
              </div>

              {/* Photo */}
              <div className="relative overflow-hidden mx-2" style={{ aspectRatio: "4/3" }}>
                <Image
                  src={getImagePath(still.src)}
                  alt={still.alt}
                  fill
                  className="object-cover film-frame-img"
                />
              </div>

              {/* Frame metadata bottom */}
              <div className="flex items-center justify-between px-2 pt-1 pb-2">
                <span className="font-mono text-[8px] tracking-[0.15em] uppercase" style={{ color: "rgba(245,240,232,0.25)" }}>
                  {still.caption}
                </span>
                <span className="font-mono text-[8px]" style={{ color: "rgba(245,240,232,0.12)" }}>▶</span>
              </div>

              {/* Inter-frame separator */}
              {idx < FILM_STILLS.length - 1 && (
                <div className="mx-2 h-px" style={{ background: "rgba(46,42,38,0.8)" }} />
              )}
            </div>
          ))}
        </div>

        {/* Right sprockets */}
        <div className="film-strip-sprockets w-6 flex-shrink-0" />
      </div>

      {/* Footer */}
      <div className="mt-3 flex items-center gap-2">
        <div className="flex-1 h-px bg-cinema-border" />
        <span className="font-mono text-[8px] tracking-[0.15em] text-cinema-muted">ADVENTURES AROUND THE WORLD</span>
        <div className="flex-1 h-px bg-cinema-border" />
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section className="min-h-screen bg-cinema-cream dark:bg-cinema-black py-16 px-6 lg:px-12 transition-colors duration-300">
      <div className="container mx-auto">

        {/* Script header */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-xs text-cinema-muted tracking-[0.2em] uppercase">
              Fade In:
            </span>
            <span className="font-mono text-xs text-cinema-muted tracking-[0.1em]">
              Page 01
            </span>
          </div>
          <div className="h-px bg-cinema-warm/15 dark:bg-cinema-border" />
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-16 xl:gap-24">

          {/* ── Script ── */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-col gap-12">
              {SCRIPT_SCENES.map((scene, idx) => (
                <div key={idx}>
                  {/* Scene heading */}
                  <div className="mb-5">
                    <p className="font-mono text-xs sm:text-sm font-bold tracking-[0.06em] uppercase text-cinema-warm dark:text-cinema-cream mb-2">
                      {scene.heading}
                    </p>
                    <div className="amber-rule-left opacity-50" />
                  </div>

                  {/* Character name — centered like a real script */}
                  <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-cinema-amber text-center mb-4">
                    Joshua (V.O.)
                  </p>

                  {/* Dialogue block — indented like a screenplay */}
                  <div
                    className="flex flex-col gap-4"
                    style={{ marginLeft: "clamp(1rem, 10%, 5rem)", marginRight: "clamp(0.5rem, 5%, 3rem)" }}
                  >
                    {scene.voiceover.map((line, lineIdx) => (
                      <p
                        key={lineIdx}
                        className="font-mono text-sm leading-[1.9] text-cinema-warm/75 dark:text-cinema-cream-dim"
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}

              {/* Fade out */}
              <div className="pt-4">
                <div className="h-px bg-cinema-warm/15 dark:bg-cinema-border mb-4" />
                <span className="font-mono text-xs text-cinema-muted tracking-[0.2em] uppercase">
                  Fade to Black.
                </span>
              </div>
            </div>
          </div>

          {/* ── Film Strip ── */}
          <div className="lg:w-56 xl:w-64 flex-shrink-0">
            {/* Sticky on desktop so strip stays in view while scrolling script */}
            <div className="lg:sticky lg:top-24">
              <FilmStrip />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
