"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { getImagePath } from '../utils/imagePath';

const technologies = [
  { name: 'Python', icon: '/icons/python.svg' },
  { name: 'Java', icon: '/icons/java.svg' },
  { name: 'JavaScript', icon: '/icons/javascript.svg' },
  { name: 'TypeScript', icon: '/icons/typescript.svg' },
  { name: 'R', icon: '/icons/r.svg' },
  { name: 'MySQL', icon: '/icons/mysql.svg' },
  { name: 'React', icon: '/icons/react.svg' },
  { name: 'Next.js', icon: '/icons/nextjs.svg' },
  { name: 'Node.js', icon: '/icons/nodejs.svg' },
  { name: 'Express.js', icon: '/icons/expressjs.svg' },
  { name: 'TensorFlow', icon: '/icons/tensorflow.svg' },
  { name: 'Scikit-Learn', icon: '/icons/scikit-learn.svg' },
  { name: 'Docker', icon: '/icons/docker.svg' },
  { name: 'GitHub', icon: '/icons/github.svg' },
  { name: 'Google Cloud Platform', icon: '/icons/gcp.svg' },
  { name: 'Ollama', icon: '/icons/ollama.svg' },
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
    <div className="w-full overflow-hidden bg-gray-100 py-12">
      <div
        ref={scrollRef}
        className="flex animate-scroll"
        style={{ width: `${technologies.length * 160}px` }}
      >
        {technologies.concat(technologies).map((tech, index) => (
          <div key={`${tech.name}-${index}`} className="flex flex-col items-center justify-center w-40 mx-4">
            <div className="w-20 h-20 mb-4 flex items-center justify-center">
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