"use client";

import React from "react";
import {
  CtaSection,
  FeaturedProjectsSection,
  HeroSection,
  TechStackSection,
  WorkExperienceSection,
} from "./home";

function Hero() {
  return (
    <div className="bg-secondary dark:bg-primary transition-colors duration-300">
      <HeroSection />
    </div>
  );
}

export default Hero;
