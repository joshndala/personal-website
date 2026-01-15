"use client";

import React from "react";
import Link from "next/link";
import { Typography, Button } from "@material-tailwind/react";
import TechStackCarousel from "@/components/techstack-carousel";
import {
  ArrowRightIcon,
} from "@heroicons/react/24/solid";

export default function TechStackSection() {
    return (
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
    );
}
