"use client";

import React from "react";
import Image from "next/image";
import { getImagePath } from '../utils/imagePath'
import { Typography, Button } from "@material-tailwind/react";

function Hero() {
  return (
    <header className="py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-2 items-center">
          <div className="order-2 lg:order-1">
            <Typography
              as="h1"
              className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold !leading-tight text-primary"
            >
              Hi! 👋 Welcome to my <br className="hidden sm:inline" /> Software Development Portfolio!
            </Typography>
            <Typography
              variant="lead"
              className="mb-6 text-base sm:text-lg text-primary"
            >
              I'm Joshua Ndala, a passionate software developer and AI enthusiast based in Canada. Here, you'll explore my journey in software engineering, machine learning, and data-driven problem-solving.
            </Typography>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <a href="#projects">
                <Button className="w-full sm:w-auto px-6 py-2 bg-primary">
                  View Projects
                </Button>
              </a>
              <a href="#contact-section">
                <Button variant="outlined" className="w-full sm:w-auto px-6 py-2 bg text-primary">
                  Contact Me
                </Button>
              </a>
            </div>
            <Typography variant="small" className="font-normal text-primary">
              Check out my{" "}
              <a href="https://github.com/joshndala" target="_blank" rel="noopener noreferrer" className="font-medium underline transition-colors hover:text-gray-700">
                GitHub Profile
              </a>
            </Typography>
          </div>
          <div className="order-1 lg:order-2">
            <Image
              width={1024}
              height={1024}
              alt="Joshua Ndala"
              src={getImagePath("/image/profile-photo.jpg")}
              className="w-full h-64 sm:h-80 md:h-96 lg:h-[36rem] rounded-xl object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;