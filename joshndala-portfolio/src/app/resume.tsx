"use client";

import { Typography, Button } from "@material-tailwind/react";
import {
  AcademicCapIcon,
  CodeBracketIcon,
  ChartBarIcon,
  ArrowRightIcon,
  CheckBadgeIcon,
  ClockIcon,
} from "@heroicons/react/24/solid";
import { ResumeItem } from "@/components";
import { getStaticFilePath } from '../utils/paths';

const RESUME_ITEMS = [
  {
    icon: AcademicCapIcon,
    children: "Bachelor of Arts in Computer Science, University of British Columbia (Aug 2024)",
  },
  {
    icon: CheckBadgeIcon,
    children: (
      <>
        Google Data Analytics Professional Certificate{" "}
        <a 
          href="https://www.credly.com/badges/325ac3dd-6b59-41a7-8dc1-d9115184a962/public_url" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 underline"
        >
          (View Certificate)
        </a>
      </>
    ),
  },
  {
    icon: ClockIcon,
    children: "IBM Machine Learning Professional Certificate (In Progress)",
  },
  {
    icon: CodeBracketIcon,
    children: "Full Stack Web Development (JavaScript, React, Node.js, Express.js)",
  },
  {
    icon: ChartBarIcon,
    children: "Data Analysis and Machine Learning (Python, R, SQL)",
  },
];

export function Resume() {
  return (
    <section className="px-8 py-24">
      <div className="container mx-auto grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="col-span-1">
          <Typography variant="h2" color="blue-gray">
            My Resume
          </Typography>
          <Typography className="mb-4 mt-3 w-9/12 font-normal !text-gray-500">
            Passionate software developer and data analyst with a strong foundation in computer science. 
            Experienced in full-stack web development, data analysis, and machine learning, 
            with a track record of creating innovative solutions for real-world problems.
            Continuously expanding my skills in advanced machine learning techniques.
          </Typography>
          <a
            href={getStaticFilePath('Joshua_Ndala_Resume.pdf')}
            download="Joshua_Ndala_Resume.pdf"
          >
            <Button
              variant="text"
              color="gray"
              className="flex items-center gap-2"
            >
              Download Full Resume
              <ArrowRightIcon
                strokeWidth={3}
                className="h-3.5 w-3.5 text-gray-900"
              />
            </Button>
          </a>
        </div>
        <div className="col-span-1 grid gap-y-6 lg:ml-auto pr-0 lg:pr-12 xl:pr-32">
          {RESUME_ITEMS.map((props, idx) => (
            <ResumeItem key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resume;