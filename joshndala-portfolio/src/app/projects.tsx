"use client";

import React from 'react';
import {
  Typography,
  Button,
} from "@material-tailwind/react";
import { ProjectCard } from "@/components";
import { ArrowRight } from "lucide-react";
import Link from 'next/link';

// Featured projects for each category
const FEATURED_PROJECTS = {
  software: [
    {
      img: "/image/triumph-education.png",
      title: "Triumph College Consulting Website",
      desc: "Developed a comprehensive website using Next.js and Tailwind CSS to showcase services, team, and contact information for a college consulting company.",
      technologies: ["Next.js", "Tailwind CSS", "React"],
      liveLink: "https://triumphcollegeinfo.com",
    },
    {
      img: "/image/learnification.png",
      title: "AI-Powered Assignment Grading System",
      desc: "Led the development for an ed-tech startup, creating an AI-powered grading system that improved grading speeds by 75% while maintaining data security.",
      technologies: ["JavaScript", "Express.js", "Node.js", "React", "MaterialUI", "MySQL"],
    },
    {
      img: "/image/forumrank.PNG",
      title: "ForumRank Website",
      desc: "Collaborated on a custom-designed discussion post website with contextual menus, responsive design, and MySQL database integration.",
      technologies: ["PHP", "MySQL", "AJAX", "JavaScript"],
    },
  ],
  data: [
    {
      img: "/image/smartphone-price.jpg", 
      title: "Smartphone Price Prediction Analysis",
      desc: "Designed and implemented end-to-end ML pipeline achieving 96.5% prediction accuracy. Engineered robust data processing system reducing feature extraction time by 40% through optimized algorithms.",
      technologies: ["Python", "XGBoost", "Random Forest", "Linear Regression","ML Pipeline", "ETL"],
      githubLink: "https://github.com/joshndala/phone-classification", 
    },
    {
      img: "/image/fake-news-detection.jpg",
      title: "Automated Fake News Detection",
      desc: "Engineered data pipelines and implemented LSTM, RNN, and BERT models for fake news detection, achieving high accuracy on various datasets.",
      technologies: ["Python", "Machine Learning", "NLP", "LSTM", "RNN","BERT"],
      githubLink: "https://github.com/joshndala/fake-news-detection/blob/main/Deep%20Learning%20on%20Fake%20News%20Detection%20Final%20Paper.pdf",
    },
    {
      img: "/image/cyclistic-bike-share.png",
      title: "Cyclistic Bike-Share Analysis",
      desc: "Analyzed 2.9 million data entries using R and created Tableau visualizations for a bike-share startup. Identified key usage patterns and proposed strategic marketing improvements.",
      technologies: ["R", "Tableau", "Data Analysis"],
      githubLink: "https://github.com/joshndala/Cyclistic-Case-Study",
      liveLink: "https://public.tableau.com/views/CaseStudy-CyclisticRideLengthinSummer2023/Sheet1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
    },
  ],
};

export function Projects() {
  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-primary"> 
      <div className="container mx-auto mb-8 sm:mb-12"> 
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
          <Typography variant="h2" className="mb-4 text-3xl sm:text-4xl md:text-5xl font-bold text-secondary">
            Featured Projects
          </Typography>
          <Typography
            variant="lead"
            className="font-normal text-secondary/90 max-w-3xl text-base sm:text-lg" 
          >
              Highlighting my best work in software engineering and data science. Each project demonstrates my technical expertise and problem-solving abilities.
            </Typography>
          </div>
          {/* <Link href="/all-projects" className="mt-4 md:mt-0">
            <Button className="flex items-center gap-2 bg-secondary text-primary hover:bg-secondary/90">
              View All Projects
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link> */}
        </div>

        {/* Software Engineering Section */}
        <div className="mb-12"> {/* Reduced margin */}
          <Typography variant="h3" className="mb-6 text-2xl sm:text-3xl font-bold text-secondary/95">
            Software Engineering
          </Typography>
          <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
            {FEATURED_PROJECTS.software.map((project, idx) => (
              <ProjectCard key={idx} {...project} />
            ))}
          </div>
        </div>

        {/* Data Science Section */}
        <div>
          <Typography variant="h3" className="mb-6 text-2xl sm:text-3xl font-bold text-secondary">
            Data Science & Analytics
          </Typography>
          <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
            {FEATURED_PROJECTS.data.map((project, idx) => (
              <ProjectCard key={idx} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;