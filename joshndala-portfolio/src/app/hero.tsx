"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getImagePath } from '../utils/imagePath'
import { Typography, Button, Card, Chip } from "@material-tailwind/react";
import { HeroDecorations } from "@/components";
import TechStackCarousel from "@/components/techstack-carousel";
import {
  UserCircleIcon,
  WrenchScrewdriverIcon,
  CodeBracketIcon,
  DocumentTextIcon,
  EnvelopeIcon,
  ArrowRightIcon
} from "@heroicons/react/24/solid";
import { ExternalLink, GithubIcon } from "lucide-react";

// Featured projects data
const FEATURED_PROJECTS = [
  {
    title: "CoachDeck – AI-Powered Sports Coaching Assistant",
    hook: "AI-powered sports coaching assistant that analyzes game sessions in real-time using voice logging and hybrid search, providing coaches with smart, sport-specific feedback.",
    image: "/image/coachdeck.jpg",
    liveLink: "https://coachdeck.app/",
    githubLink: "https://github.com/joshndala/var-vendetta",
    technologies: ["Next.js", "TypeScript", "Supabase", "Cohere API", "FAISS"]
  },
  {
    title: "CoverForMe – Cover-Letter Generator", 
    hook: "Provide job postings to generate a tailored cover letter in <30s—saving users ~80% of drafting time.",
    image: "/image/coverforme.png",
    githubLink: "https://github.com/joshndala/coverletter-ai",
    technologies: ["React", "FastAPI", "AWS Bedrock", "PostgreSQL", "Docker"]
  },
  {
    title: "AI-Powered Assignment Grading System",
    hook: "Cut grading time by 75% for an ed-tech platform by wiring a custom LLM pipeline into a Node/React app.",
    image: "/image/learnification.png",
    liveLink: "https://learnification.github.io/",
    technologies: ["Node.js", "React", "Express.js", "MySQL", "Phi-3 LLM"]
  }
];

function Hero() {
  return (
    <div className="bg-secondary dark:bg-primary transition-colors duration-300">
      <header className="py-8 sm:py-12 md:py-16 relative">
        <HeroDecorations />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid gap-8 md:gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1">
              <Typography
                as="h1"
                className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold !leading-tight text-primary dark:text-secondary"
              >
                Hi! 👋 Welcome to my <br className="hidden sm:inline" /> Software Development Portfolio!
              </Typography>
              <Typography
                variant="lead"
                className="mb-6 text-base sm:text-lg text-primary dark:text-secondary"
              >
                I'm Joshua Ndala, a passionate software developer and AI enthusiast based in Canada. Here, you'll explore my journey in software engineering, machine learning, and data-driven problem-solving.
              </Typography>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                <Link href="/about" passHref>
                  <Button size="lg" className="w-full py-3 bg-primary text-secondary dark:bg-secondary dark:text-primary hover:bg-primary/90 dark:hover:bg-secondary/90 transition-colors duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg">
                    <UserCircleIcon className="h-5 w-5" />
                    About Me
                  </Button>
                </Link>
                
                <Link href="/skills" passHref>
                  <Button size="lg" className="w-full py-3 bg-primary text-secondary dark:bg-secondary dark:text-primary hover:bg-primary/90 dark:hover:bg-secondary/90 transition-colors duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg">
                    <WrenchScrewdriverIcon className="h-5 w-5" />
                    Skills
                  </Button>
                </Link>
                
                <Link href="/projects" passHref>
                  <Button size="lg" className="w-full py-3 bg-primary text-secondary dark:bg-secondary dark:text-primary hover:bg-primary/90 dark:hover:bg-secondary/90 transition-colors duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg">
                    <CodeBracketIcon className="h-5 w-5" />
                    Projects
                  </Button>
                </Link>
                
                <Link href="/resume" passHref>
                  <Button size="lg" className="w-full py-3 bg-primary text-secondary dark:bg-secondary dark:text-primary hover:bg-primary/90 dark:hover:bg-secondary/90 transition-colors duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg">
                    <DocumentTextIcon className="h-5 w-5" />
                    Resume
                  </Button>
                </Link>
                
                <Link href="/contact" passHref className="sm:col-span-2 md:col-span-1">
                  <Button size="lg" className="w-full py-3 bg-primary text-secondary dark:bg-secondary dark:text-primary hover:bg-primary/90 dark:hover:bg-secondary/90 transition-colors duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg">
                    <EnvelopeIcon className="h-5 w-5" />
                    Contact Me
                  </Button>
                </Link>
              </div>
              
              <Typography variant="small" className="font-normal text-primary dark:text-secondary">
                Check out my{" "}
                <a href="https://github.com/joshndala" target="_blank" rel="noopener noreferrer" className="font-medium underline transition-colors hover:text-primary/70 dark:hover:text-secondary/70">
                  GitHub Profile
                </a>
              </Typography>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
              <Image
                width={1024}
                height={1024}
                alt="Joshua Ndala"
                src={getImagePath("/image/profile-photo.jpg")}
                  className="w-full h-64 sm:h-80 md:h-96 lg:h-[36rem] rounded-xl object-cover shadow-lg z-10 relative"
              />
                <div className="absolute inset-0 bg-primary/20 dark:bg-secondary/20 rounded-xl backdrop-blur-[1px] transform -rotate-3 scale-105 -z-0"></div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Tech Stack Section */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-t border-primary/10 dark:border-secondary/10">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <Typography variant="h3" className="mb-3 text-xl sm:text-2xl font-semibold text-primary dark:text-secondary">
              Core Technologies
            </Typography>
            <Typography className="text-primary/70 dark:text-secondary/70 text-sm sm:text-base max-w-2xl mx-auto">
              The tools and technologies I use to build modern, scalable applications
            </Typography>
          </div>

          <TechStackCarousel />

          <div className="text-center">
            <Link href="/skills" scroll={true}>
              <Button variant="outlined" className="border-primary dark:border-secondary text-primary dark:text-secondary hover:bg-primary/10 dark:hover:bg-secondary/10 transition-colors duration-300 flex items-center gap-2 mx-auto">
                View All Skills & Certifications
                <ArrowRightIcon className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Typography variant="h2" className="mb-4 text-3xl sm:text-4xl font-bold text-primary dark:text-secondary">
              Featured Projects
            </Typography>
            <Typography variant="lead" className="text-primary/80 dark:text-secondary/80 max-w-2xl mx-auto">
              Explore some of my recent work showcasing professional impact, modern full-stack development, and AI innovation.
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {FEATURED_PROJECTS.map((project, idx) => (
              <Card key={idx} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl group">
                <div className="aspect-[16/10] overflow-hidden">
                  <Image
                    src={getImagePath(project.image)}
                    alt={project.title}
                    width={400}
                    height={250}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <Typography variant="h5" className="text-lg font-semibold text-primary dark:text-secondary mb-3">
                    {project.title}
                  </Typography>
                  <Typography className="text-primary/70 dark:text-secondary/70 text-sm leading-relaxed mb-4">
                    {project.hook}
                  </Typography>
                  
                  {/* Technologies */}
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 4).map((tech, index) => (
                        <Chip 
                          key={index} 
                          value={tech} 
                          size="sm" 
                          className="text-xs px-2 py-1 bg-primary/10 text-primary dark:bg-secondary/10 dark:text-secondary"
                        />
                      ))}
                    </div>
                  )}
                  
                  {/* Action Links */}
                  <div className="flex items-center gap-2">
                    {project.liveLink && (
                      <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                    {project.githubLink && (
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                      >
                        <GithubIcon className="w-4 h-4" />
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/projects">
              <Button size="lg" className="bg-primary text-secondary dark:bg-secondary dark:text-primary hover:bg-primary/90 dark:hover:bg-secondary/90 transition-colors duration-300 flex items-center gap-2 mx-auto shadow-md hover:shadow-lg">
                View All Projects
                <ArrowRightIcon className="h-5 w-5" />
              </Button>
            </Link>
          </div>
                  </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-primary/10 dark:border-secondary/10">
          <div className="container mx-auto max-w-4xl text-center">
            <Typography variant="h3" className="mb-6 text-2xl sm:text-3xl font-bold text-primary dark:text-secondary">
              Ready to Work Together?
            </Typography>
            
            <Typography className="mb-8 text-lg text-primary/80 dark:text-secondary/80 max-w-2xl mx-auto leading-relaxed">
              Full-stack developer focused on TypeScript, React, and AI-powered products.
            </Typography>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Link href="/resume" scroll={true}>
                <Button size="lg" className="bg-primary text-secondary dark:bg-secondary dark:text-primary hover:bg-primary/90 dark:hover:bg-secondary/90 transition-colors duration-300 flex items-center gap-2 shadow-md hover:shadow-lg px-8 py-3">
                  <DocumentTextIcon className="h-5 w-5" />
                  View Resume
                </Button>
              </Link>

              <a href="mailto:joshndala@gmail.com?subject=Hiring%20Inquiry" className="inline-block">
                <Button 
                  variant="outlined" 
                  size="lg" 
                  className="border-primary dark:border-secondary text-primary dark:text-secondary hover:bg-primary/10 dark:hover:bg-secondary/10 transition-colors duration-300 flex items-center gap-2 px-8 py-3"
                >
                  <EnvelopeIcon className="h-5 w-5" />
                  Let's Talk
                </Button>
              </a>
            </div>

            <div className="flex justify-center items-center gap-6">
              <a 
                href="mailto:joshndala@gmail.com" 
                className="text-primary/70 dark:text-secondary/70 hover:text-primary dark:hover:text-secondary transition-colors duration-200"
                aria-label="Email"
              >
                <EnvelopeIcon className="h-6 w-6" />
              </a>
              
              <a 
                href="https://linkedin.com/in/joshndala" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary/70 dark:text-secondary/70 hover:text-primary dark:hover:text-secondary transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              
              <a 
                href="https://github.com/joshndala" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary/70 dark:text-secondary/70 hover:text-primary dark:hover:text-secondary transition-colors duration-200"
                aria-label="GitHub"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }

export default Hero;