"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getImagePath } from '../../utils/imagePath'
import { Typography, Button } from "@material-tailwind/react";
import { HeroDecorations } from "@/components";
import {
  UserCircleIcon,
  WrenchScrewdriverIcon,
  CodeBracketIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";
import { GITHUB_URL, MEDIUM_URL } from "@/config";

export default function HeroSection() {
  return (
      <header className="py-8 sm:py-12 md:py-16 relative">
        <HeroDecorations />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid gap-8 md:gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1">
              <Typography
                as="h1"
                className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold !leading-tight text-primary dark:text-secondary"
              >
                Welcome to my <br className="hidden sm:inline" /> Software Development Portfolio!
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
                
                <a href={MEDIUM_URL} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="w-full py-3 bg-primary text-secondary dark:bg-secondary dark:text-primary hover:bg-primary/90 dark:hover:bg-secondary/90 transition-colors duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                    </svg>
                    Articles
                  </Button>
                </a>
                
                <Link href="/contact" passHref className="sm:col-span-2 md:col-span-1">
                  <Button size="lg" className="w-full py-3 bg-primary text-secondary dark:bg-secondary dark:text-primary hover:bg-primary/90 dark:hover:bg-secondary/90 transition-colors duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg">
                    <EnvelopeIcon className="h-5 w-5" />
                    Contact Me
                  </Button>
                </Link>
              </div>
              
              <Typography variant="small" className="font-normal text-primary dark:text-secondary">
                Check out my{" "}
                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="font-medium underline transition-colors hover:text-primary/70 dark:hover:text-secondary/70">
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
  );
}
