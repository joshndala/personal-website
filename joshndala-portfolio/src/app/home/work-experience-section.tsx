"use client";

import React from "react";
import Link from "next/link";
import { Typography, Button, Card } from "@material-tailwind/react";
import {
  ArrowRightIcon,
  BriefcaseIcon
} from "@heroicons/react/24/solid";

export default function WorkExperienceSection() {
    return (
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-primary/10 dark:border-secondary/10">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <Typography variant="h3" className="mb-3 text-xl sm:text-2xl font-semibold text-primary dark:text-secondary">
              Work Experience
            </Typography>
            <Typography className="text-primary/70 dark:text-secondary/70 text-sm sm:text-base max-w-2xl mx-auto">
              Recent professional roles and contributions
            </Typography>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center flex-wrap">
              <Link href="/experience" scroll={true} className="flex-1 min-w-[280px] max-w-md">
                <Card className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer border border-primary/10 dark:border-secondary/10">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary dark:bg-secondary text-secondary dark:text-primary flex items-center justify-center flex-shrink-0">
                      <BriefcaseIcon className="h-5 w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <Typography variant="h6" className="text-sm font-semibold text-primary dark:text-secondary truncate">
                        Software Engineer Intern
                      </Typography>
                      <Typography className="text-xs text-primary/70 dark:text-secondary/70 truncate">
                        DevFortress • Dec 2025 - Present
                      </Typography>
                    </div>
                  </div>
                </Card>
              </Link>

              <Link href="/experience" scroll={true} className="flex-1 min-w-[280px] max-w-md">
                <Card className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer border border-primary/10 dark:border-secondary/10">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary dark:bg-secondary text-secondary dark:text-primary flex items-center justify-center flex-shrink-0">
                      <BriefcaseIcon className="h-5 w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <Typography variant="h6" className="text-sm font-semibold text-primary dark:text-secondary truncate">
                        Freelance Web Developer
                      </Typography>
                      <Typography className="text-xs text-primary/70 dark:text-secondary/70 truncate">
                        Triumph College Consulting • Aug 2024 - Dec 2024
                      </Typography>
                    </div>
                  </div>
                </Card>
              </Link>

              <Link href="/experience" scroll={true} className="flex-1 min-w-[280px] max-w-md">
                <Card className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer border border-primary/10 dark:border-secondary/10">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary dark:bg-secondary text-secondary dark:text-primary flex items-center justify-center flex-shrink-0">
                      <BriefcaseIcon className="h-5 w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <Typography variant="h6" className="text-sm font-semibold text-primary dark:text-secondary truncate">
                        Full-Stack Software Developer
                      </Typography>
                      <Typography className="text-xs text-primary/70 dark:text-secondary/70 truncate">
                        Learnification • May 2024 - Aug 2024
                      </Typography>
                    </div>
                  </div>
                </Card>
              </Link>
            </div>

            <div className="text-center mt-6">
              <Link href="/experience" scroll={true}>
                <Button variant="outlined" className="border-primary dark:border-secondary text-primary dark:text-secondary hover:bg-primary/10 dark:hover:bg-secondary/10 transition-colors duration-300 flex items-center gap-2 mx-auto">
                  View Full Experience
                  <ArrowRightIcon className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
}
