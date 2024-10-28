"use client";

import React from 'react';
import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import { getImagePath } from '@/utils/imagePath';

export default function About() {
  const adventures = [
    { src: "/image/SA_Lion_Park.jpg", alt: "Lion Park, Johannesburg, South Africa" },
    { src: "/image/MTL_Mont_Royal.jpg", alt: "Mont Royal, Montreal, Canada" },
    { src: "/image/JHB_Waterfall.jpg", alt: "Stanley Park, Vancouver, Canada" },
    { src: "/image/Kenya_Mombasa.jpg", alt: "Pool, Mombasa, Kenya" },
  ];

  return (
    <section className="bg-[#00213F] py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4">
        <Typography variant="h2" className="mb-6 sm:mb-8 text-center text-3xl sm:text-4xl text-secondary/90">
          About Me
        </Typography>
        <div className="flex flex-col lg:flex-row items-start">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
            <Typography variant="lead" className="mb-4 text-secondary/90 text-base sm:text-lg font-medium">
              My name is Joshua, although most call me Josh, and I am a software developer and AI enthusiast with a truly global background. Born in South Africa, I've called Uganda, Ivory Coast, and now Canada home.
            </Typography>
            <Typography variant="paragraph" className="mb-4 text-secondary/80 text-sm sm:text-base">
              My international upbringing in American and British international schools sparked my curiosity for technology and diverse cultures. This led me to pursue Computer Science at the University of British Columbia, where I fell in love with data and machine learning.
            </Typography>
            <Typography variant="paragraph" className="mb-4 text-secondary/80 text-sm sm:text-base">
              Outside of coding, I am a lifelong traveler with a passport full of stamps and stories from all over the world. From thrilling safaris to iconic landmarks, each journey has impacted my perspective and approaches to problem-solving.
            </Typography>
            <Typography variant="paragraph" className="text-secondary/80 text-sm sm:text-base">
              When I'm not discovering new technology or destinations, you can find me rooting for Liverpool FC, a passion I've had since childhood. My diversified background and love of challenges inspire me to produce creative solutions in software development and artificial intelligence.
            </Typography>
          </div>
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <Typography variant="h5" className="mb-4 text-xl sm:text-2xl text-secondary/90">
              Adventures Around the World
            </Typography>
            <div className="grid grid-cols-2 gap-2 sm:gap-4">
              {adventures.map((adventure, index) => (
                <div key={index} className="relative h-36 sm:h-48 rounded-lg overflow-hidden">
                  <Image
                    src={getImagePath(adventure.src)}
                    alt={adventure.alt}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-110"
                  />
                </div> 
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}