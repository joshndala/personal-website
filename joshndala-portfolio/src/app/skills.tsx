"use client";

import { Typography } from "@material-tailwind/react";
import {
  CodeBracketIcon,
  ServerIcon,
  CpuChipIcon,
  CloudIcon,
  BeakerIcon,
  CommandLineIcon,
} from "@heroicons/react/24/solid";
import { SkillCard } from "@/components";

const SKILLS = [
  {
    icon: CodeBracketIcon,
    title: "Full Stack Web Development",
    children:
      "Proficient in creating comprehensive web applications using technologies like React, Next.js, Express.js, and Node.js. I build responsive and dynamic user interfaces paired with robust backend systems.",
  },
  {
    icon: ServerIcon,
    title: "Database Management",
    children:
      "Experienced in working with various databases, particularly SQL. I design efficient database structures and write optimized queries to ensure smooth data operations.",
  },
  {
    icon: CpuChipIcon,
    title: "AI and Machine Learning",
    children:
      "Passionate about AI, with experience in implementing machine learning models, particularly in natural language processing. I've worked on projects involving LSTM, RNN, and BERT models.",
  },
  {
    icon: CloudIcon,
    title: "Cloud Technologies",
    children:
      "Familiar with cloud platforms, particularly Google Cloud Platform. I leverage cloud technologies to build scalable and efficient applications.",
  },
  {
    icon: BeakerIcon,
    title: "Data Analysis and Processing",
    children:
      "Skilled in data analysis and processing, with experience in creating data pipelines and conducting sentiment analysis. I use tools like Python and R for in-depth data exploration.",
  },
  {
    icon: CommandLineIcon,
    title: "DevOps and Tools",
    children:
      "Proficient with essential development tools including Git, GitHub, Docker, and CI/CD practices. I ensure smooth development workflows and efficient deployment processes.",
  },
];

export function Skills() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto mb-12 sm:mb-16 md:mb-20 text-center">
        <Typography className="mb-2 font-bold uppercase text-sm sm:text-base text-primary">
          my expertise
        </Typography>
        <Typography variant="h1" className="mb-4 text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
          Skills & Capabilities
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full lg:w-10/12 text-base sm:text-lg text-primary"
        >
          As a software developer and AI enthusiast, I blend cutting-edge technologies 
          with creative problem-solving. From full-stack web development to machine 
          learning implementations, I bring ideas to life through code.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Skills;