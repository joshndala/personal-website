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
  BriefcaseIcon,
  ServerIcon,
  CloudIcon,
  BeakerIcon,
} from "@heroicons/react/24/solid";
import { getStaticFilePath } from '../utils/paths';
import { useState } from 'react';
import { motion } from "framer-motion";

// Education section
const EDUCATION = [
  {
    title: "Bachelor of Arts in Computer Science",
    institution: "University of British Columbia",
    period: "2020 - 2024",
    icon: AcademicCapIcon,
    description: "Focused on machine learning, software development, and data structures."
  },
  {
    title: "Google Data Analytics Professional Certificate",
    institution: "Google & Coursera",
    period: "2023",
    icon: CheckBadgeIcon,
    description: "Specialized in data analysis using SQL, R, and Tableau.",
    link: "https://www.credly.com/badges/325ac3dd-6b59-41a7-8dc1-d9115184a962/public_url",
    linkText: "View Certificate"
  },
  {
    title: "IBM Machine Learning Professional Certificate",
    institution: "IBM & Coursera",
    period: "In Progress",
    icon: ClockIcon,
    description: "Advanced study of machine learning techniques and applications."
  },
];

// Experience section
const EXPERIENCE = [
  {
    title: "Freelance Web Developer",
    company: "Triumph College Consulting",
    period: "Aug 2024 - Dec 2024",
    icon: BriefcaseIcon,
    description: "Developed a full-stack website using Next.js and Tailwind CSS with dynamic content management, student tracking, and scheduling features."
  },
  {
    title: "Full-Stack Software Developer",
    company: "Learnification",
    period: "May 2024 - Aug 2024",
    icon: BriefcaseIcon,
    description: "Created an AI-powered assignment grading system using Express.js/Node.js backend with MySQL and React/Material-UI frontend, improving grading speeds by 75%."
  },
];

// Project experiences
const SOFTWARE_PROJECTS = [
  {
    title: "CoverForMe - AI Cover Letter Generator",
    period: "Jan 2025 - Present",
    icon: CodeBracketIcon,
    description: "Engineering a React/FastAPI application that automatically generates tailored cover letters. Implementing Firebase authentication, PostgreSQL database, and advanced AI pipeline.",
    technologies: ["React", "FastAPI", "AWS Bedrock", "LangChain", "PostgreSQL", "Firebase"]
  },
  {
    title: "Shyft RAG App – Retrieval-Augmented Generation System",
    period: "Feb 2025",
    icon: CodeBracketIcon,
    description: "Built a full-stack RAG application with React, Material UI and FastAPI, enabling real-time question answering over user-uploaded documents. Implemented streaming responses and containerized the entire stack with Docker Compose. Automated deployments with GitHub Actions CI/CD pipelines.",
    technologies: ["React", "FastAPI", "Material UI", "Docker Compose", "GitHub Actions", "CI/CD"]
  },
  {
    title: "ForumRank Website",
    period: "Sep 2023 - Dec 2023",
    icon: ServerIcon,
    description: "Developed a custom-designed discussion forum with contextual menus, responsive layout, and MySQL database integration. Implemented comprehensive form validation and real-time search.",
    technologies: ["PHP", "MySQL", "AJAX", "JavaScript", "Responsive Design"]
  }
];

const ML_PROJECTS = [
  {
    title: "CoverForMe - AI Cover Letter Generator",
    period: "Jan 2025 - Present",
    icon: CpuChipIcon,
    description: "Building an AI system that analyzes resume content against job descriptions for personalized cover letter generation. Implementing a custom transformer model for skill-to-requirement comparison.",
    technologies: ["AWS Bedrock", "LangChain", "Llama 3", "Claude Opus", "Transformers", "NLP"]
  },
  {
    title: "Shyft RAG App – Retrieval-Augmented Generation System",
    period: "Feb 2025",
    icon: CpuChipIcon,
    description: "Developed a comprehensive RAG system allowing users to upload PDFs and HTML documents with automatic content indexing. Implemented a hybrid BM25 + semantic embedding pipeline in FAISS that achieved <1s query latency and boosted retrieval relevance by 30%. Integrated streaming inference via OpenRouter API for real-time LLM responses.",
    technologies: ["Python", "BM25", "Whoosh", "Sentence-Transformers", "FAISS", "Vector Search", "OpenRouter API", "GPT-4", "Claude"]
  },
  {
    title: "Automated Fake News Detection",
    period: "Jan 2024 - Apr 2024",
    icon: ChartBarIcon,
    description: "Engineered data pipelines and implemented LSTM, RNN, and BERT models for fake news detection, achieving 99% accuracy on news datasets and conducting comprehensive sentiment analysis.",
    technologies: ["Python", "TensorFlow", "LSTM", "RNN", "BERT", "NLP"]
  },
  {
    title: "Smartphone Price Prediction Analysis",
    period: "Oct 2023 - Dec 2023",
    icon: BeakerIcon,
    description: "Designed and implemented an end-to-end ML pipeline achieving 96.5% prediction accuracy. Engineered robust data processing system reducing feature extraction time by 40%.",
    technologies: ["Python", "XGBoost", "Random Forest", "Linear Regression", "ML Pipeline", "ETL"]
  },
  {
    title: "Cyclistic Bike-Share Analysis",
    period: "Jul 2023 - Aug 2023",
    icon: ChartBarIcon,
    description: "Analyzed 2.9 million data entries using R and created Tableau visualizations for a bike-share startup. Identified key usage patterns and proposed strategic marketing improvements.",
    technologies: ["R", "RStudio", "Tableau", "Data Analysis", "Data Visualization"]
  }
];

// Software engineering skills
const SOFTWARE_SKILLS = [
  {
    category: "Frontend Development",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Material UI"],
    icon: CodeBracketIcon
  },
  {
    category: "Backend Development",
    skills: ["Node.js", "Express.js", "Java", "Python", "REST APIs", "GraphQL"],
    icon: ServerIcon
  },
  {
    category: "Database Management",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "SQL", "NoSQL"],
    icon: CommandLineIcon
  },
  {
    category: "DevOps & Cloud",
    skills: ["Docker", "CI/CD", "Git/GitHub", "AWS", "Google Cloud Platform"],
    icon: CloudIcon
  }
];

// ML Engineering skills
const ML_SKILLS = [
  {
    category: "ML Frameworks & Libraries",
    skills: ["TensorFlow", "PyTorch", "scikit-learn", "XGBoost", "LangChain", "Pandas", "NumPy"],
    icon: CpuChipIcon
  },
  {
    category: "Natural Language Processing",
    skills: ["LSTM", "RNN", "BERT", "Large Language Models", "Sentiment Analysis", "Text Classification"],
    icon: ChartBarIcon
  },
  {
    category: "Data Analysis & Visualization",
    skills: ["R", "Python", "Tableau", "Matplotlib", "Seaborn", "Jupyter Notebooks"],
    icon: BeakerIcon
  },
  {
    category: "ML Deployment",
    skills: ["AWS Bedrock", "Ollama", "Model Optimization", "MLOps", "Model Monitoring"],
    icon: CloudIcon
  }
];

const RESUME_TYPES = [
  {
    label: "Software Engineering",
    value: "swe",
    skills: SOFTWARE_SKILLS,
    projects: SOFTWARE_PROJECTS,
    path: 'Joshua_Ndala_Resume.pdf',
    description: "Experienced in full-stack web development with a focus on building scalable applications. Strong foundation in software engineering principles and modern development practices."
  },
  {
    label: "ML Engineering",
    value: "ml",
    skills: ML_SKILLS,
    projects: ML_PROJECTS,
    path: 'Resume_Joshua_Ndala.pdf',
    description: "Passionate about machine learning with experience in developing predictive models, natural language processing, and deploying ML solutions to production environments."
  },
];

export function Resume() {
  const [activeTab, setActiveTab] = useState("swe");

  const activeResume = RESUME_TYPES.find(type => type.value === activeTab);

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-secondary dark:bg-primary transition-colors duration-300">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <Typography className="mb-2 font-bold uppercase text-sm sm:text-base text-primary dark:text-secondary">
            my qualifications
          </Typography>
          <Typography variant="h1" className="mb-4 text-3xl sm:text-4xl md:text-5xl font-bold text-primary dark:text-secondary">
            Resume
          </Typography>
          <Typography variant="lead" className="mx-auto w-full lg:w-10/12 text-base sm:text-lg text-primary dark:text-secondary">
            An overview of my education, work experience, and technical skills in software engineering and machine learning
          </Typography>
        </div>

        {/* Resume Type Tabs */}
        <div className="mb-12">
          <Tabs value={activeTab}>
            <TabsHeader className="bg-primary/5 dark:bg-secondary/5 w-full max-w-2xl mx-auto">
              {RESUME_TYPES.map(({ label, value }) => (
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

        {/* Resume Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Skills */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md mb-8">
              <Typography variant="h4" className="font-bold text-primary dark:text-secondary mb-6 pb-2 border-b border-primary/10 dark:border-secondary/10">
                Technical Skills
              </Typography>
              
              <div className="space-y-6">
                {activeResume?.skills.map((skillGroup, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="h-10 w-10 rounded-full bg-primary dark:bg-secondary text-secondary dark:text-primary flex items-center justify-center">
                        <skillGroup.icon className="h-5 w-5" />
                      </div>
                      <Typography variant="h6" className="text-primary dark:text-secondary">
                        {skillGroup.category}
                      </Typography>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 ml-2 pl-8">
                      {skillGroup.skills.map((skill, skillIdx) => (
                        <span 
                          key={skillIdx}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 dark:bg-secondary/10 text-primary dark:text-secondary"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md">
              <Typography variant="h4" className="font-bold text-primary dark:text-secondary mb-6 pb-2 border-b border-primary/10 dark:border-secondary/10">
                Download Resume
              </Typography>
              
              <Typography className="mb-6 text-primary/80 dark:text-secondary/80">
                {activeResume?.description}
              </Typography>
              
              <a 
                href={getStaticFilePath(activeResume?.path)}
                download={activeResume?.path}
                className="inline-block"
              >
                <Button 
                  className="flex items-center gap-2 bg-primary dark:bg-secondary text-secondary dark:text-primary transition-colors duration-300 shadow-md hover:shadow-lg"
                >
                  Download {activeResume?.label} Resume
                  <ArrowRightIcon className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
          
          {/* Middle + Right Columns - Experience and Education */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            {/* Experience Section */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md mb-8">
              <Typography variant="h4" className="font-bold text-primary dark:text-secondary mb-6 pb-2 border-b border-primary/10 dark:border-secondary/10">
                Professional Experience
              </Typography>
              
              <div className="relative pl-6 border-l-2 border-primary dark:border-secondary">
                {EXPERIENCE.map((exp, idx) => (
                  <motion.div 
                    key={idx} 
                    className="mb-8 relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute w-4 h-4 bg-primary dark:bg-secondary rounded-full -left-8 top-1.5"></div>
                    
                    {/* Content */}
                    <div className="mb-2">
                      <Typography variant="h5" className="font-bold text-primary dark:text-secondary">
                        {exp.title}
                      </Typography>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                        <Typography className="text-primary/80 dark:text-secondary/80 font-medium">
                          {exp.company}
                        </Typography>
                        <Typography className="text-primary/70 dark:text-secondary/70 text-sm">
                          {exp.period}
                        </Typography>
                      </div>
                    </div>
                    
                    <Typography className="text-primary/70 dark:text-secondary/70">
                      {exp.description}
                    </Typography>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Project Experience Section */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md mb-8">
              <Typography variant="h4" className="font-bold text-primary dark:text-secondary mb-6 pb-2 border-b border-primary/10 dark:border-secondary/10">
                Project Experience
              </Typography>
              
              <div className="relative pl-6 border-l-2 border-primary dark:border-secondary">
                {activeResume?.projects.map((project, idx) => (
                  <motion.div 
                    key={idx} 
                    className="mb-8 relative last:mb-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute w-4 h-4 bg-primary dark:bg-secondary rounded-full -left-8 top-1.5"></div>
                    
                    {/* Content */}
                    <div className="mb-2">
                      <Typography variant="h5" className="font-bold text-primary dark:text-secondary">
                        {project.title}
                      </Typography>
                      <Typography className="text-primary/70 dark:text-secondary/70 text-sm">
                        {project.period}
                      </Typography>
                    </div>
                    
                    <Typography className="text-primary/70 dark:text-secondary/70 mb-3">
                      {project.description}
                    </Typography>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIdx) => (
                        <span 
                          key={techIdx}
                          className="px-2 py-1 text-xs font-medium rounded-full bg-primary/10 dark:bg-secondary/10 text-primary dark:text-secondary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Education Section */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md">
              <Typography variant="h4" className="font-bold text-primary dark:text-secondary mb-6 pb-2 border-b border-primary/10 dark:border-secondary/10">
                Education
              </Typography>
              
              <div className="relative pl-6 border-l-2 border-primary dark:border-secondary">
                {EDUCATION.map((edu, idx) => (
                  <motion.div 
                    key={idx} 
                    className="mb-8 relative last:mb-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute w-4 h-4 bg-primary dark:bg-secondary rounded-full -left-8 top-1.5"></div>
                    
                    {/* Content */}
                    <div className="mb-2">
                      <Typography variant="h5" className="font-bold text-primary dark:text-secondary">
                        {edu.title}
                      </Typography>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                        <Typography className="text-primary/80 dark:text-secondary/80 font-medium">
                          {edu.institution}
                        </Typography>
                        <Typography className="text-primary/70 dark:text-secondary/70 text-sm">
                          {edu.period}
                        </Typography>
                      </div>
                    </div>
                    
                    <Typography className="text-primary/70 dark:text-secondary/70 mb-1">
                      {edu.description}
                    </Typography>
                    
                    {edu.link && (
                      <a 
                        href={edu.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-primary dark:text-secondary underline hover:text-primary/70 dark:hover:text-secondary/70"
                      >
                        {edu.linkText}
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume; 