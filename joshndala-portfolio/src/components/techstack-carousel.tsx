"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { getImagePath } from '../utils/imagePath';
import { Typography } from '@material-tailwind/react';

const technologies = [
  // Programming Languages
  { name: 'Python', icon: '/icons/python.svg', category: 'language', color: 'blue' },
  { name: 'Go', icon: '/icons/go.svg', category: 'language', color: 'blue' },
  { name: 'JavaScript', icon: '/icons/javascript.svg', category: 'language', color: 'blue' },
  { name: 'TypeScript', icon: '/icons/typescript.svg', category: 'language', color: 'blue' },
  
  // Frontend Frameworks
  { name: 'React', icon: '/icons/react.svg', category: 'frontend', color: 'pink' },
  { name: 'Next.js', icon: '/icons/nextjs.svg', category: 'frontend', color: 'pink' },
  
  // Backend Frameworks
  { name: 'Node.js', icon: '/icons/nodejs.svg', category: 'backend', color: 'green' },
  { name: 'Express.js', icon: '/icons/expressjs.svg', category: 'backend', color: 'green' },
  { name: 'FastAPI', icon: '/icons/fastapi.svg', category: 'backend', color: 'green' },
  
  // Databases
  { name: 'PostgreSQL', icon: '/icons/postgresql.svg', category: 'database', color: 'purple' },
  { name: 'Supabase', icon: '/icons/supabase.svg', category: 'database', color: 'purple' },
  { name: 'MySQL', icon: '/icons/mysql.svg', category: 'database', color: 'purple' },
  
  // AI & ML Tools
  { name: 'LangChain', icon: '/icons/langchain.svg', category: 'ai', color: 'orange' },
  { name: 'Gemini', icon: '/icons/gemini.svg', category: 'ai', color: 'orange' },
  { name: 'Cohere', icon: '/icons/cohere.svg', category: 'ai', color: 'orange' },
  { name: 'TensorFlow', icon: '/icons/tensorflow.svg', category: 'ai', color: 'orange' },
  { name: 'Scikit-Learn', icon: '/icons/scikit-learn.svg', category: 'ai', color: 'orange' },
  { name: 'R', icon: '/icons/r.svg', category: 'ai', color: 'orange' },
  { name: 'Ollama', icon: '/icons/ollama.svg', category: 'ai', color: 'orange' },
  
  // DevOps & Cloud
  { name: 'Docker', icon: '/icons/docker.svg', category: 'devops', color: 'indigo' },
  { name: 'AWS', icon: '/icons/aws.svg', category: 'devops', color: 'indigo' },
  { name: 'Google Cloud Platform', icon: '/icons/gcp.svg', category: 'devops', color: 'indigo' },
  { name: 'Vercel', icon: '/icons/vercel.svg', category: 'devops', color: 'indigo' },
  { name: 'GitHub', icon: '/icons/github.svg', category: 'devops', color: 'indigo' },
];

const TechStackCarousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const intervalId = setInterval(scroll, 30);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full overflow-hidden bg-primary/5 py-12">
      <Typography variant="h2" className="mb-4 text-center text-primary">
          My Toolbox 🧰
        </Typography>
      
      {/* Color Legend */}
      <div className="flex flex-wrap justify-center gap-4 mb-8 px-4">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded border-2 border-blue-500 bg-blue-50 dark:bg-blue-900/20"></div>
          <span className="text-sm text-primary dark:text-secondary">Languages</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded border-2 border-cyan-500 bg-cyan-50 dark:bg-cyan-900/20"></div>
          <span className="text-sm text-primary dark:text-secondary">Frontend</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded border-2 border-green-500 bg-green-50 dark:bg-green-900/20"></div>
          <span className="text-sm text-primary dark:text-secondary">Backend</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded border-2 border-purple-500 bg-purple-50 dark:bg-purple-900/20"></div>
          <span className="text-sm text-primary dark:text-secondary">Databases</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded border-2 border-orange-500 bg-orange-50 dark:bg-orange-900/20"></div>
          <span className="text-sm text-primary dark:text-secondary">AI & ML</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded border-2 border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20"></div>
          <span className="text-sm text-primary dark:text-secondary">DevOps</span>
        </div>
      </div>
      
      <div
        ref={scrollRef}
        className="flex animate-scroll"
        style={{ width: `${technologies.length * 160}px` }}
      >
        {technologies.concat(technologies).map((tech, index) => (
          <div key={`${tech.name}-${index}`} className="flex flex-col items-center justify-center w-40 mx-4">
            <div className={`w-20 h-20 mb-4 flex items-center justify-center rounded-lg border-2 ${
              tech.color === 'blue' ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' :
              tech.color === 'cyan' ? 'border-cyan-500 bg-cyan-50 dark:bg-cyan-900/20' :
              tech.color === 'green' ? 'border-green-500 bg-green-50 dark:bg-green-900/20' :
              tech.color === 'purple' ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20' :
              tech.color === 'orange' ? 'border-orange-500 bg-orange-50 dark:bg-orange-900/20' :
              'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20'
            }`}>
              <Image src={getImagePath(tech.icon)} alt={tech.name} width={64} height={64} />
            </div>
            <p className="text-sm text-center font-medium">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStackCarousel;