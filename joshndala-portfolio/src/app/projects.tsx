"use client";

import React from 'react';
import {
  Typography,
} from "@material-tailwind/react";
import { ProjectCard } from "@/components";

// Featured projects reorganized by professional/personal categories
const FEATURED_PROJECTS = {
  professional: [
    {
      img: "/image/triumph-education.png",
      title: "Triumph College Consulting Website",
      desc: "Developed a comprehensive website using Next.js and Tailwind CSS to showcase services, team, and contact information for a college consulting company.",
      longDescription: "Built a full-stack website featuring dynamic content management and responsive design. The site includes features for student success tracking, scholarship management, and consultation scheduling.",
      achievements: [
        "Enhanced user experience through intuitive UI/UX design",
        "Implemented streamlined contact interfaces",
        "Developed dynamic content management system"
      ],
      technologies: ["Next.js", "Tailwind CSS", "React"],
      liveLink: "https://triumphcollegeinfo.com",
    },
    {
      img: "/image/learnification.png",
      title: "AI-Powered Assignment Grading System",
      desc: "Led the development for an ed-tech startup, creating an AI-powered grading system that improved grading speeds by 75% while maintaining data security.",
      longDescription: "Developed a comprehensive grading system integrating AI capabilities with a robust full-stack architecture. The system features secure data handling and efficient processing of student assignments.",
      achievements: [
        "Improved grading speeds by 75%",
        "Increased user satisfaction by 20%",
        "Enhanced system status visibility by 15%",
        "Improved error messaging clarity by 25%"
      ],
      technicalDetails: "Implemented using Express.js/Node.js backend with MySQL and React/Material-UI frontend. Integrated Microsoft's Phi-3 LLM through Ollama for local processing. Comprehensive testing implemented with Mocha, Chai, and Jest.",
      technologies: ["JavaScript", "Express.js", "Node.js", "React", "MaterialUI", "MySQL", "Phi-3 LLM", "Ollama"],
    },
  ],
  personal: [
    {
      img: "/image/doris-symbol.png", 
      title: "DORIS – Digital Omni-Response Interactive System",
      desc: "Creating a voice-first AI companion that joins real-time conversations, listens intelligently, and responds naturally.",
      longDescription: "Developing a real-time audio-first application where DORIS listens during group calls, detects when it's needed, and responds using live speech-to-text, context filtering, and AI-driven replies. Future plans include visual object recognition via webcam and memory-aware conversations.",
      achievements: [
        "Built real-time audio interface with AssemblyAI and Daily.co",
        "Integrated Gemini Flash via OpenRouter for responsive LLM interaction",
        "Implemented lightweight trigger detection for natural speech activation",
        "Designed architecture for scalable vector-based memory and multimodal vision"
      ],
      technicalDetails: "Architecture leverages Next.js, AssemblyAI, OpenRouter, and Daily.co to support live transcription, token-efficient AI querying, and in-browser TTS. Planning integration with vector search and vision APIs for future multimodal input.",
      technologies: ["Next.js", "TypeScript", "AssemblyAI", "OpenRouter", "Daily.co", "Tailwind CSS", "Vercel", "TTS API", "Vector Search"],
      inProgress: true
    },
    {
      img: "/image/coverforme.png",
      title: "CoverForMe - AI Cover Letter Generator",
      desc: "Engineered a full-stack application using React and FastAPI that automatically generates tailored cover letters, reducing writing time by 80%.",
      longDescription: "Built an AI system that analyzes resume content against job descriptions for personalized cover letter generation. Includes secure authentication and efficient data management.",
      achievements: [
        "Reduced cover letter writing time by 80%",
        "Implemented secure user authentication with Firebase",
        "Designed efficient PostgreSQL database schema",
        "Implemented SerpApi for real-time company information"
      ],
      technicalDetails: "Developed an AI pipeline using AWS Bedrock and LangChain, with a custom transformer model for accurate skill-to-requirement comparison.",
      technologies: ["React", "FastAPI", "AWS Bedrock", "LangChain", "PostgreSQL", "Firebase", "AWS RDS", "Docker", "SerpApi"],
      githubLink: "https://github.com/joshndala/coverletter-ai",
    },
    {
      img: "/image/heart-disease-clustering.png",
      title: "Heart Disease Patient Clustering Analysis",
      desc: "Applied K-Means clustering to segment 303 heart disease patients into 3 distinct profiles, achieving a silhouette score of 0.1908 and uncovering patterns for personalized treatment.",
      longDescription: "Performed unsupervised clustering on V.A. Medical Center data using K-Means, DBSCAN, and hierarchical agglomerative clustering with PCA visualization to identify meaningful patient subgroups. Standardized key continuous features and evaluated models via silhouette analysis, recommending K-Means (k=3) for clinical interpretability.",
      achievements: [
        "Clustered 303 patients into 3 profiles with silhouette score 0.1908",
        "Detected outliers representing unique patient cases using DBSCAN",
        "Validated clustering consistency across three algorithms",
        "Conducted comprehensive data preprocessing and feature analysis"
      ],
      technicalDetails: "Standardized continuous features (age, trestbps, chol, thalach, oldpeak). Implemented K-Means (k=3), DBSCAN (eps=1.2, min_samples=5), and HAC with Ward linkage using scikit-learn. Applied PCA for 2D visualization and used correlation and outlier analysis to inform preprocessing.",
      technologies: ["Python", "scikit-learn", "Pandas", "NumPy", "Matplotlib", "PCA", "K-Means", "DBSCAN", "Hierarchical Clustering"],
      liveLink: "https://drive.google.com/file/d/1qVNldoohqjGsZK2qzQ_f6cUrxI18z6Hr/view?usp=sharing"
    },
    {
      img: "/image/smartphone-price.jpg", 
      title: "Smartphone Price Prediction Analysis",
      desc: "Designed and implemented end-to-end ML pipeline achieving 96.5% prediction accuracy. Engineered robust data processing system reducing feature extraction time by 40%.",
      longDescription: "Created a comprehensive machine learning system for predicting smartphone prices using advanced ML techniques and optimization strategies.",
      achievements: [
        "Achieved 96.5% prediction accuracy",
        "Reduced feature extraction time by 40%",
        "Improved baseline accuracy by 4.5%"
      ],
      technicalDetails: "Implemented multiple ML models including XGBoost, Random Forest, and Linear Regression with automated hyperparameter tuning. Developed modular Python codebase with clean architecture principles.",
      technologies: ["Python", "XGBoost", "Random Forest", "Linear Regression", "ML Pipeline", "ETL"],
      githubLink: "https://github.com/joshndala/phone-classification",
    },
    {
      img: "/image/fake-news-detection.jpg",
      title: "Automated Fake News Detection",
      desc: "Engineered data pipelines and implemented LSTM, RNN, and BERT models for fake news detection, achieving high accuracy on various datasets.",
      longDescription: "Developed a sophisticated fake news detection system capable of analyzing and classifying news content across different platforms and languages.",
      achievements: [
        "99% accuracy on news datasets",
        "50% accuracy on tweets",
        "73% accuracy on Bangladeshi tweets",
        "Published research findings"
      ],
      technicalDetails: "Processed 43,000+ labeled examples using Python libraries. Implemented LSTM, RNN, and BERT models with TensorFlow. Conducted comprehensive sentiment analysis on fake vs. real news.",
      technologies: ["Python", "Machine Learning", "NLP", "LSTM", "RNN", "BERT"],
      githubLink: "https://github.com/joshndala/fake-news-detection/blob/main/Deep%20Learning%20on%20Fake%20News%20Detection%20Final%20Paper.pdf",
    },
    {
      img: "/image/forumrank.PNG",
      title: "ForumRank Website",
      desc: "Collaborated on a custom-designed discussion post website with contextual menus, responsive design, and MySQL database integration.",
      longDescription: "Developed a custom-designed discussion post website featuring a hand-styled layout, contextual menus, and a responsive 3-column design. The site includes secure user authentication, dynamic content loading, and real-time search functionality.",
      achievements: [
        "Implemented comprehensive form validation and server-side scripting",
        "Created real-time search results using AJAX technology",
        "Developed interactive content filtering system",
        "Integrated user image uploads and discussion grouping features"
      ],
      technicalDetails: "Built using PHP for server-side scripting with MySQL database integration. Implemented AJAX for real-time interactions and dynamic content loading. Created responsive 3-column design for optimal user experience.",
      technologies: ["PHP", "MySQL", "AJAX", "JavaScript", "Responsive Design"],
    },
    {
      img: "/image/cyclistic-bike-share.png",
      title: "Cyclistic Bike-Share Analysis",
      desc: "Analyzed 2.9 million data entries using R and created Tableau visualizations for a bike-share startup. Identified key usage patterns and proposed strategic marketing improvements.",
      longDescription: "Conducted comprehensive analysis of Chicago's bike-share startup Cyclistic data to evaluate usage differences between annual subscribers and casual users. Part of Google Data Analytics Certification capstone project.",
      achievements: [
        "Processed and analyzed 2.9 million data entries",
        "Identified significant weekend usage patterns",
        "Developed strategic recommendations for subscription conversion",
        "Created comprehensive Tableau visualizations"
      ],
      technicalDetails: "Utilized R in RStudio for data cleaning and analysis. Developed visualizations using Tableau to effectively illustrate user behavior trends. Analysis focused on comparing annual subscribers vs casual users to drive subscription conversions.",
      technologies: ["R", "RStudio", "Tableau", "Data Analysis", "Data Visualization"],
      githubLink: "https://github.com/joshndala/Cyclistic-Case-Study",
      liveLink: "https://public.tableau.com/views/CaseStudy-CyclisticRideLengthinSummer2023/Sheet1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
    },
  ],
};

export function Projects() {
  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-primary dark:bg-secondary transition-colors duration-300">
      <div className="container mx-auto">
        <div className="mb-12">
          <Typography variant="h2" className="mb-4 text-3xl sm:text-4xl md:text-5xl font-bold text-secondary dark:text-primary">
            Featured Projects
          </Typography>
          <Typography variant="lead" className="font-normal text-secondary/90 dark:text-primary/90 max-w-3xl text-base sm:text-lg">
            Highlighting my best work in professional and personal projects. Each project demonstrates my technical expertise and problem-solving abilities.
          </Typography>
        </div>

        {/* Professional Work Section */}
        <div className="mb-16">
          <Typography variant="h3" className="mb-8 text-2xl sm:text-3xl font-bold text-secondary/95 dark:text-primary/95">
            Professional Work
          </Typography>
          <div className="flex flex-col gap-8">
            {FEATURED_PROJECTS.professional.map((project, idx) => (
              <ProjectCard key={idx} {...project} />
            ))}
          </div>
        </div>

        {/* Personal Projects Section */}
        <div>
          <Typography variant="h3" className="mb-8 text-2xl sm:text-3xl font-bold text-secondary dark:text-primary">
            Personal Projects
          </Typography>
          <div className="flex flex-col gap-8">
            {FEATURED_PROJECTS.personal.map((project, idx) => (
              <ProjectCard key={idx} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;