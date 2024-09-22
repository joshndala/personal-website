"use client";

import React from "react";
import Image from "next/image";
import { getImagePath } from '../utils/imagePath'
import { Typography, Button } from "@material-tailwind/react";

function Hero() {
  return (
    <header className="bg-white p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <Typography
            as="h1"
            color="blue-gray"
            className="mb-4 lg:text-5xl !leading-tight text-3xl"
          >
            Hi! 👋 Welcome to my <br /> Software Development Portfolio!
          </Typography>
          <Typography
            variant="lead"
            className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
          >
            I'm Joshua Ndala, a passionate software developer and AI enthusiast based in Montreal, Canada. Here, you'll explore my journey in software engineering, machine learning, and data-driven problem-solving.
          </Typography>
          <div className="flex gap-4">
            <a href = "#projects">
              <Button color="gray" className="px-4">
                View Projects
              </Button>
            </a>
            <a href = "#contact-section">
              <Button color="gray" variant="outlined" className="px-4">
                Contact Me
              </Button>
            </a>
          </div>
          <Typography variant="small" className="mt-4 font-normal !text-gray-500">
            Check out my{" "}
            <a href="https://github.com/joshndala" target="_blank" rel="noopener noreferrer" className="font-medium underline transition-colors">
              GitHub Profile
            </a>
          </Typography>
        </div>
        <Image
          width={1024}
          height={1024}
          alt="Joshua Ndala"
          src={getImagePath("/image/profile-photo.jpg")}
          className="h-[36rem] w-full rounded-xl object-cover"
        />
      </div>
    </header>
  );
}

export default Hero;