"use client";

import { Navbar } from "@/components";
import {
  CtaSection,
  FeaturedProjectsSection,
  HeroSection,
  TechStackSection,
  WorkExperienceSection,
} from "./home";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TechStackSection />
      <WorkExperienceSection />
      <FeaturedProjectsSection />
      <CtaSection />
    </>
  );
}
