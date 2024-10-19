"use client";

import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";

const PROJECTS = [
  {
    img: "/image/triumph-education.png",
    title: "Triumph College Consulting Website",
    desc: "Developing a comprehensive website using Next.js and Tailwind CSS to showcase services, team, and contact information for a college consulting company.",
    technologies: ["Next.js", "Tailwind CSS", "React"],
    inProgress: true,
  },
  {
    img: "/image/learnification.png",
    title: "AI-Powered Assignment Grading System",
    desc: "Led the development for an ed-tech startup, creating an AI-powered grading system that improved grading speeds by 75% while maintaining data security.",
    technologies: ["JavaScript", "Express.js", "Node.js", "React", "MaterialUI", "MySQL", "Ollama", "Phi-3", "LangChain"],
  },
  {
    img: "/image/fake-news-detection.jpg",
    title: "Automated Fake News Detection",
    desc: "Engineered data pipelines and implemented LSTM, RNN, and BERT models for fake news detection, achieving high accuracy on various datasets.",
    technologies: ["Python", "Machine Learning", "NLP", "LSTM", "BERT"],
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
  {
    img: "/image/forumrank.PNG",
    title: "ForumRank Website",
    desc: "Collaborated on a custom-designed discussion post website with contextual menus, responsive design, and MySQL database integration.",
    technologies: ["PHP", "MySQL", "AJAX", "JavaScript"],
  },
  {
    img: "/image/library-system.png",
    title: "Public Library System",
    desc: "Developed a Java-based booking system for a public library, integrating various APIs to enhance functionality and user interaction.",
    technologies: ["Java", "JavaFX", "MySQL", "API Integration"],
    githubLink: "https://github.com/joshndala/PublicLibraryIndivProj",
  },
];

export function Projects() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto mb-12 sm:mb-16 md:mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4 text-3xl sm:text-4xl md:text-5xl font-bold">
          My Projects
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-0 sm:px-4 font-normal !text-gray-500 lg:w-9/12 text-base sm:text-lg"
        >
          From web development to AI, machine learning, and data analysis, here are some of the key projects I've worked on. Each project showcases my diverse skills in software engineering, data science, and problem-solving.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;