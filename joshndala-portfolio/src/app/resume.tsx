"use client";

import { Typography, Button, Tabs, TabsHeader, Tab } from "@material-tailwind/react";
import {
  AcademicCapIcon,
  CodeBracketIcon,
  ChartBarIcon,
  ArrowRightIcon,
  CheckBadgeIcon,
  ClockIcon,
  CommandLineIcon,
  CpuChipIcon,
} from "@heroicons/react/24/solid";
import { ResumeItem } from "@/components";
import { getStaticFilePath } from '../utils/paths';
import { useState } from 'react';

const SHARED_ITEMS = [
  {
    icon: AcademicCapIcon,
    children: "Bachelor of Arts in Computer Science, University of British Columbia (2024)",
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
          className="text-primary dark:text-secondary hover:text-primary/70 dark:hover:text-secondary/70 underline"
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
];

const SOFTWARE_ITEMS = [
  {
    icon: CommandLineIcon,
    children: "Full Stack Web Development (JavaScript, TypeScript, React, Node.js, Express.js)",
  },
  {
    icon: CodeBracketIcon,
    children: "Backend Development (Java, Python, PHP, REST APIs, MySQL)",
  },
];

const DATA_ITEMS = [
  {
    icon: ChartBarIcon,
    children: "Data Analysis and Visualization (Python, R, SQL, Tableau)",
  },
  {
    icon: CpuChipIcon,
    children: "Machine Learning & AI (scikit-learn, TensorFlow, XGBoost, NLP)",
  },
];

const RESUME_TYPES = [
  {
    label: "Software Engineering",
    value: "swe",
    items: [...SHARED_ITEMS, ...SOFTWARE_ITEMS],
    path: 'Joshua_Ndala_Resume.pdf',
    description: "Experienced in full-stack web development with a focus on building scalable applications. Strong foundation in software engineering principles and modern development practices."
  },
  {
    label: "Data Science",
    value: "data",
    items: [...SHARED_ITEMS, ...DATA_ITEMS],
    path: 'Resume_Joshua_Ndala.pdf',
    description: "Passionate about data analysis and machine learning with experience in developing predictive models and deriving actionable insights from complex datasets."
  },
];

export function Resume() {
  const [activeTab, setActiveTab] = useState("swe");

  const activeResume = RESUME_TYPES.find(type => type.value === activeTab);

  return (
    <section className="px-8 py-12 sm:py-16 bg-secondary dark:bg-primary transition-colors duration-300">
      <div className="container mx-auto grid w-full grid-cols-1 items-start gap-8 lg:grid-cols-2">
        <div className="col-span-1">
          <Typography variant="h2" className="mb-6 text-primary dark:text-secondary">
            My Resume
          </Typography>
          
          <Tabs value={activeTab} className="mb-8">
            <TabsHeader
              className="bg-primary/5 dark:bg-secondary/5"
            >
              {RESUME_TYPES.map(({ label, value }) => (
                <Tab 
                  key={value} 
                  value={value}
                  onClick={() => setActiveTab(value)}
                  className={`px-6 py-3 ${
                    activeTab === value
                      ? "text-primary dark:text-secondary bg-white dark:bg-primary"
                      : "text-primary/70 dark:text-secondary/70 hover:text-primary/90 dark:hover:text-secondary/90"
                  }`}
                >
                  {label}
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>

          <Typography className="mb-4 w-11/12 font-normal text-primary dark:text-secondary">
            {activeResume?.description}
          </Typography>
          
          <a
            href={getStaticFilePath(activeResume?.path)}
            download={activeResume?.path}
          >
            <Button
              variant="text"
              className="flex items-center gap-2 bg-primary dark:bg-secondary text-secondary dark:text-primary transition-colors duration-300"
            >
              Download {activeResume?.label} Resume
              <ArrowRightIcon
                strokeWidth={3}
                className="h-3.5 w-3.5 text-secondary dark:text-primary"
              />
            </Button>
          </a>
        </div>
        <div className="col-span-1 grid gap-y-4 lg:ml-auto pr-0 lg:pr-12 xl:pr-32">
          {activeResume?.items.map((props, idx) => (
            <ResumeItem key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resume;