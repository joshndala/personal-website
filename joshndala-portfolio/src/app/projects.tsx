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
      liveLink: "https://learnification.github.io/",
    },
  ],
  personal: [
    {
      "img": "/image/cantrip.jpg",
      "title": "CanTrip – Canadian Travel Planning Platform",
      "desc": "Built a full-stack travel planning platform that uses LangGraph AI agents to generate personalized itineraries, packing lists, and travel recommendations for destinations across Canada.",
      "longDescription": "CanTrip is a comprehensive travel planning platform that leverages advanced AI agents to provide intelligent travel assistance for Canadian destinations. The system uses LangGraph to orchestrate multiple specialized AI agents that handle different aspects of travel planning - from destination exploration and itinerary generation to packing list creation. The platform integrates with weather APIs, event services, and attraction databases to provide real-time, contextual recommendations. It features a conversational AI interface that understands user preferences, mood, and travel constraints to deliver personalized travel experiences.",
      "achievements": [
        "Engineered a multi-agent LangGraph system with specialized AI agents for exploration, itinerary planning, and packing list generation",
        "Implemented real-time weather and event data integration using OpenWeatherMap, Ticketmaster, and Eventbrite APIs",
        "Built a hybrid architecture combining Go backend API with Python LangGraph agents for optimal performance and AI capabilities",
        "Integrated Phoenix evaluation framework for monitoring AI agent performance and accuracy",
        "Developed comprehensive PDF generation system for exporting itineraries and packing lists with professional formatting"
      ],
      "technicalDetails": "The platform uses a microservices architecture with Go (Gin framework) handling the REST API, database operations, and external API integrations, while Python LangGraph agents power the AI planning capabilities. The system integrates with multiple external APIs including OpenWeatherMap for weather data, Geoapify for places, and various event services. PDF generation is handled server-side with Google Cloud Storage for file management. The AI agents use OpenAI's GPT models for natural language understanding and response generation.",
      "technologies": [
        "Go",
        "Gin",
        "Python",
        "LangGraph",
        "LangChain",
        "Gemini",
        "FastAPI",
        "PostgreSQL",
        "Google Cloud Storage",
        "OpenWeatherMap API",
        "Phoenix Evaluation",
        "Docker",
        "GCP"
      ],
      "githubLink": "https://github.com/joshndala/cantrip"
    },
    {
      img: "/image/coachdeck.jpg",
      title: "CoachDeck – Sports Coaching Assistant (formerly VAR Vendetta)",
      desc: "Built a full-stack AI assistant that analyzes game sessions in real-time using voice logging and hybrid search, providing coaches with smart, sport-specific feedback.",
      longDescription: "CoachDeck began as VAR Vendetta, a playful project to analyze FIFA gameplay, but evolved into a robust sports coaching platform. It lets users log player moments via voice, then leverages a hybrid RAG pipeline to retrieve relevant context and provide AI-generated coaching insights. The system combines BM25 keyword search, FAISS vector similarity, and Cohere's rerank API for accurate context selection. It supports soccer, basketball, tennis, and even esports.",
      achievements: [
        "Engineered a hybrid semantic retrieval system using BM25, FAISS, and Cohere Rerank to improve result precision",
        "Implemented real-time speech-to-text logging using the Web Speech API",
        "Integrated Cohere's LLM and embedding services for AI-powered contextual feedback",
        "Refactored from SQLite/Prisma to Supabase for production-ready backend with JSONB vector storage",
        "Optimized in-memory FAISS index for fast semantic lookups on user queries"
      ],
      technicalDetails: "The app uses Next.js with TypeScript across frontend and backend, Supabase for database and auth, and Cohere for embeddings, reranking, and LLM completions. FAISS is used in-memory for vector similarity. Voice input is handled via browser-native Web APIs, enabling a fully interactive coaching experience.",
      technologies: [
        "Next.js",
        "TypeScript",
        "React",
        "Supabase",
        "PostgreSQL",
        "FAISS",
        "BM25",
        "Web Speech API",
        "Cohere API",
        "TailwindCSS"
      ],
      githubLink: "https://github.com/joshndala/var-vendetta",
      liveLink: "https://coachdeck.app/"
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
      img: "/image/shyft-rag-app.png",
      title: "Shyft RAG App – Retrieval-Augmented Generation System",
      desc: "Built a full-stack RAG application with React and FastAPI, enabling real-time question answering over user-uploaded documents with sub-second response times.",
      longDescription: "Developed a comprehensive Retrieval-Augmented Generation system allowing users to upload PDFs and HTML, automatically index content with a hybrid BM25 + semantic embedding pipeline in FAISS, and get streaming LLM-powered answers via the OpenRouter API. The React/Material UI frontend provides an intuitive interface for document ingestion and chat, while the FastAPI backend orchestrates search and inference with dynamic rate-limit backoff.",
      achievements: [
        "Integrated streaming inference via the OpenRouter API, delivering partial LLM responses to the client as they're generated for a live chat experience.",
        "Achieved <1 s end-to-end query latency on large document corpora",
        "Boosted retrieval relevance by 30% using a hybrid BM25 + Sentence-Transformer embedding approach",
        "Enabled any-model support (e.g. GPT-4, Claude, custom fine-tuned models) through a unified OpenRouterService",
        "Containerized entire stack with Docker Compose and automated deployments via GitHub Actions"
      ],
      technicalDetails: "Backend in Python/FastAPI leveraging Whoosh for BM25 and Sentence-Transformer embeddings stored in FAISS. Frontend built with React and Material UI. Orchestrated LLM calls via OpenRouter with robust error handling. CI/CD pipelines configured in GitHub Actions; deployments containerized with Docker Compose.",
      technologies: [
        "React",
        "FastAPI",
        "Material UI",
        "Docker Compose",
        "Python",
        "BM25",
        "Sentence-Transformers",
        "FAISS",
        "OpenRouter API",
      ],
      githubLink: "https://github.com/joshndala/shyft-rag-app"
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
    <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-secondary dark:bg-primary transition-colors duration-300">
      <div className="container mx-auto">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <Typography variant="h1" className="text-4xl md:text-5xl font-extrabold text-primary dark:text-secondary tracking-tight mb-4">
            My Projects
          </Typography>
          <Typography variant="lead" className="text-lg text-primary/80 dark:text-secondary/80 max-w-2xl mx-auto">
            A curated selection of my professional endeavors and personal explorations in software and data.
          </Typography>
        </div>

        {/* Professional Work Section */}
        <section className="mb-16">
          <Typography variant="h2" className="text-3xl font-bold text-primary dark:text-secondary mb-8 text-center">
            Professional Work
          </Typography>
          <div className="flex flex-col gap-6 max-w-6xl mx-auto">
            {FEATURED_PROJECTS.professional.map((project, idx) => (
              <ProjectCard key={idx} {...project} layout="horizontal" />
            ))}
          </div>
        </section>

        {/* Personal Projects Section */}
        <section>
          <Typography variant="h2" className="text-3xl font-bold text-primary dark:text-secondary mb-8 text-center">
            Personal Projects
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {FEATURED_PROJECTS.personal.map((project, idx) => (
              <ProjectCard key={idx} {...project} layout="vertical" />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

export default Projects;