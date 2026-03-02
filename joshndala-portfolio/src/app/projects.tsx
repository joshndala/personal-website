"use client";

import React from 'react';
import {
  Typography,
} from "@material-tailwind/react";
import { ProjectCard } from "@/components";
import { TOP_PROJECTS, MCP_PROJECTS, OTHER_PROJECTS } from "@/data/projects";

export function Projects() {
  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-secondary dark:bg-primary transition-colors duration-300">
      <div className="container mx-auto">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <Typography variant="h1" className="text-4xl md:text-5xl font-extrabold text-primary dark:text-secondary tracking-tight mb-4">
            My Projects
          </Typography>
          <Typography variant="lead" className="text-lg text-primary/80 dark:text-secondary/80 max-w-2xl mx-auto">
            A curated selection of my personal explorations in software development, AI, and data science.
          </Typography>
        </div>

        {/* Featured Projects Grid */}
        <div className="mb-16">
          <Typography variant="h2" className="text-3xl font-bold text-primary dark:text-secondary mb-8 text-center">
            Top Projects
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {TOP_PROJECTS.map((project, idx) => (
              <ProjectCard key={idx} {...project} layout="vertical" />
            ))}
          </div>
        </div>

        {/* MCP Projects List */}
        <div className="mb-16 max-w-4xl mx-auto">
          <Typography variant="h2" className="text-3xl font-bold text-primary dark:text-secondary mb-8 text-center">
            Open Source & AI Tools (MCP)
          </Typography>
          <div className="flex flex-col gap-6">
            {MCP_PROJECTS.map((project, idx) => (
              <ProjectCard key={idx} {...project} layout="horizontal" />
            ))}
          </div>
        </div>

        {/* Other Projects List */}
        <div className="max-w-4xl mx-auto">
          <Typography variant="h2" className="text-3xl font-bold text-primary dark:text-secondary mb-8 text-center">
            Other Projects
          </Typography>
          <div className="flex flex-col gap-6">
            {OTHER_PROJECTS.map((project, idx) => (
              <ProjectCard key={idx} {...project} layout="horizontal" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;