"use client";

import { Typography, Tabs, TabsHeader, Tab } from "@material-tailwind/react";
import {
  CodeBracketIcon,
  ServerIcon,
  CpuChipIcon,
  CloudIcon,
  BeakerIcon,
  CommandLineIcon,
  WrenchIcon,
  DevicePhoneMobileIcon,
  LightBulbIcon,
  ClockIcon,
} from "@heroicons/react/24/solid";
import { SkillCard } from "@/components";
import { useState } from "react";
import { motion } from "framer-motion";

// Technical Skills Section
const TECH_SKILLS = [
  {
    icon: CodeBracketIcon,
    title: "Programming Languages",
    children:
      "Proficient in multiple languages including Python, JavaScript, TypeScript, Java, SQL, and NoSQL. I leverage these languages to build efficient, scalable applications."
  },
  {
    icon: DevicePhoneMobileIcon,
    title: "Web Development",
    children:
      "Extensive experience with modern web technologies including React, Next.js, Express.js, Node.js, HTML, CSS, and RESTful APIs. I build responsive and dynamic user interfaces paired with robust backend systems."
  },
  {
    icon: CpuChipIcon,
    title: "AI and Machine Learning",
    children:
      "Experienced in implementing various machine learning models, particularly in natural language processing. I've worked extensively with LSTM, RNN, BERT models, and large language models like Phi-3 and Claude Opus."
  },
  {
    icon: CloudIcon,
    title: "Cloud & DevOps",
    children:
      "Proficient with cloud platforms including AWS and Google Cloud Platform. Experienced with containerization using Docker, CI/CD practices, and version control with Git/GitHub."
  },
  {
    icon: ServerIcon,
    title: "Database Management",
    children:
      "Skilled in designing and implementing database structures using SQL (MySQL) and NoSQL solutions. I create efficient schemas and write optimized queries for seamless data operations."
  },
  {
    icon: WrenchIcon,
    title: "Tools & Platforms",
    children:
      "Proficient with essential development tools including Firebase, AWS Bedrock, LangChain, Ollama, Google Colab, and various testing frameworks including Mocha, Chai, and Jest."
  },
];

// Professional Experience Section
const EXPERIENCE = [
  {
    title: "Freelance Web Developer",
    company: "Triumph College Consulting",
    period: "Aug 2024 - Dec 2024",
    points: [
      "Developed a full-stack website using Next.js and Tailwind CSS with dynamic content management",
      "Implemented student success tracking, scholarship management, and consultation scheduling features",
      "Enhanced user experience through intuitive UI/UX design and streamlined contact interfaces"
    ]
  },
  {
    title: "Full-Stack Software Developer (Capstone Project)",
    company: "Learnification",
    period: "May 2024 - Aug 2024",
    points: [
      "Developed an AI-powered assignment grading system, improving grading speeds by 75%",
      "Led development using Express.js/Node.js backend with MySQL and React/Material-UI frontend",
      "Implemented AI functionality using Microsoft's Phi-3 LLM through Ollama",
      "Managed version control and containerization using GitHub and Docker with CI/CD practices"
    ]
  }
];

// Soft Skills Section
const SOFT_SKILLS = [
  {
    icon: LightBulbIcon,
    title: "Problem Solving",
    children:
      "Analytical approach to challenges, breaking complex problems into manageable components. I focus on developing creative, efficient solutions through methodical analysis."
  },
  {
    icon: BeakerIcon,
    title: "Data Analysis",
    children:
      "Skilled in extracting meaningful insights from complex datasets. I apply statistical methods and visualization techniques to transform raw data into actionable intelligence."
  },
  {
    icon: ClockIcon,
    title: "Project Management",
    children:
      "Experienced in managing software development lifecycles, ensuring projects are delivered on time and to specification while maintaining code quality and documentation."
  },
];

export function Skills() {
  const [activeTab, setActiveTab] = useState("technical");
  
  const tabs = [
    {
      label: "Technical Skills",
      value: "technical",
    },
    {
      label: "Experience",
      value: "experience",
    },
    {
      label: "Soft Skills",
      value: "soft",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-secondary dark:bg-primary transition-colors duration-300">
      <div className="container mx-auto mb-12 sm:mb-16 md:mb-20 text-center">
        <Typography className="mb-2 font-bold uppercase text-sm sm:text-base text-primary dark:text-secondary">
          my expertise
        </Typography>
        <Typography variant="h1" className="mb-4 text-3xl sm:text-4xl md:text-5xl font-bold text-primary dark:text-secondary">
          Skills & Experience
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full lg:w-10/12 text-base sm:text-lg text-primary dark:text-secondary"
        >
          As a software developer and AI enthusiast, I blend cutting-edge technologies 
          with creative problem-solving. From full-stack web development to machine 
          learning implementations, I bring ideas to life through code.
        </Typography>

        {/* Tabs Navigation */}
        <div className="mt-8 mb-12">
          <Tabs value={activeTab}>
            <TabsHeader className="bg-primary/5 dark:bg-secondary/5 w-full max-w-2xl mx-auto">
              {tabs.map(({ label, value }) => (
                <Tab
                  key={value}
                  value={value}
                  onClick={() => setActiveTab(value)}
                  className={`py-3 ${
                    activeTab === value
                      ? "text-primary dark:text-primary bg-white"
                      : "text-primary/70 dark:text-secondary/70 hover:text-primary/90 dark:hover:text-secondary/90"
                  }`}
                >
                  {label}
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
        </div>
      </div>

      {/* Technical Skills Tab Content */}
      {activeTab === "technical" && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {TECH_SKILLS.map((props, idx) => (
            <SkillCard key={idx} {...props} />
          ))}
        </motion.div>
      )}

      {/* Experience Tab Content */}
      {activeTab === "experience" && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto max-w-4xl"
        >
          <div className="relative pl-6 border-l-2 border-primary dark:border-secondary">
            {EXPERIENCE.map((exp, idx) => (
              <div key={idx} className="mb-12 relative">
                {/* Timeline Dot */}
                <div className="absolute w-4 h-4 bg-primary dark:bg-secondary rounded-full -left-8 top-1.5"></div>
                
                {/* Experience Card */}
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                    <div>
                      <Typography variant="h5" className="font-bold text-primary dark:text-secondary">
                        {exp.title}
                      </Typography>
                      <Typography className="text-primary/80 dark:text-secondary/80 font-medium">
                        {exp.company}
                      </Typography>
                    </div>
                    <Typography className="text-primary/70 dark:text-secondary/70 text-sm mt-1 sm:mt-0">
                      {exp.period}
                    </Typography>
                  </div>
                  
                  <ul className="list-disc pl-5 text-primary/80 dark:text-secondary/80">
                    {exp.points.map((point, pointIdx) => (
                      <li key={pointIdx} className="mb-1">
                        <Typography className="text-sm">
                          {point}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Soft Skills Tab Content */}
      {activeTab === "soft" && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3"
        >
          {SOFT_SKILLS.map((props, idx) => (
            <SkillCard key={idx} {...props} />
          ))}
        </motion.div>
      )}
    </section>
  );
}

export default Skills;