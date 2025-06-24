import Image from "next/image";
import { useState } from "react";
import { getImagePath } from '../utils/imagePath'
import {
  Card,
  Typography,
  Chip,
} from "@material-tailwind/react";
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react";

interface ProjectCardProps {
  img: string;
  title: string;
  desc: string;
  longDescription?: string;
  achievements?: string[];
  technicalDetails?: string;
  technologies?: string[];
  githubLink?: string;
  liveLink?: string;
  inProgress?: boolean;
  layout?: 'horizontal' | 'vertical';
}

export function ProjectCard({ 
  img, 
  title, 
  desc,
  longDescription,
  achievements,
  technicalDetails, 
  technologies = [], 
  githubLink, 
  liveLink, 
  inProgress,
  layout = 'vertical'
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (layout === 'horizontal') {
    return (
      <Card className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl group flex flex-col md:flex-row">
        {/* Image Container - Horizontal Layout */}
        <div className="w-full md:w-80 h-48 md:h-64 flex-shrink-0 overflow-hidden">
          <Image
            src={getImagePath(img)}
            alt={title}
            width={400}
            height={300}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            priority
          />
        </div>

        {/* Content Container - Horizontal Layout */}
        <div className="flex-1 p-4 flex flex-col">
          <div className="flex-grow">
            <div className="flex justify-between items-start mb-2">
              <Typography variant="h5" className="text-lg font-semibold text-primary dark:text-secondary">
                {title}
              </Typography>
              {inProgress && (
                <Chip 
                  value="In Progress" 
                  size="sm" 
                  className="text-xs px-2 py-1 bg-red-500/10 text-red-600 dark:bg-red-500/20 dark:text-red-400 ml-2 flex-shrink-0"
                />
              )}
            </div>

            <Typography className="text-primary/70 dark:text-secondary/70 text-sm leading-relaxed mb-3">
              {longDescription || desc}
            </Typography>

            {achievements && achievements.length > 0 && (
              <div className="mb-3">
                <Typography variant="h6" className="text-primary dark:text-secondary font-medium mb-1 text-sm">
                  Key Achievements
                </Typography>
                <ul className="list-disc pl-4 text-primary/80 dark:text-secondary/80">
                  {achievements.slice(0, 4).map((achievement, idx) => (
                    <li key={idx} className="mb-1">
                      <Typography className="text-xs">{achievement}</Typography>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack */}
            {technologies.length > 0 && (
              <div className="flex flex-wrap gap-1 mb-3">
                {technologies.map((tech, index) => (
                  <Chip 
                    key={index} 
                    value={tech} 
                    size="sm" 
                    className="text-xs px-2 py-1 bg-primary/10 text-primary dark:bg-secondary/10 dark:text-secondary"
                  />
                ))}
              </div>
            )}
          </div>

          {/* Action Links */}
          <div className="flex items-center justify-start mt-auto pt-2">
            {liveLink && (
              <a 
                href={liveLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            )}
          </div>
        </div>
      </Card>
    );
  }

  // Vertical Layout (Personal Projects)
  return (
    <Card className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl group max-w-sm mx-auto">
      {/* Image Container - Vertical Layout */}
      <div className="aspect-[3/2] overflow-hidden">
        <Image
          src={getImagePath(img)}
          alt={title}
          width={400}
          height={267}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          priority
        />
      </div>

      {/* Content Container - Vertical Layout */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <Typography variant="h5" className="text-lg font-semibold text-primary dark:text-secondary">
            {title}
          </Typography>
          {inProgress && (
            <Chip 
              value="In Progress" 
              size="sm" 
              className="text-xs px-2 py-1 bg-red-500/10 text-red-600 dark:bg-red-500/20 dark:text-red-400 ml-2"
            />
          )}
        </div>

        <Typography className="text-primary/70 dark:text-secondary/70 text-sm leading-relaxed mb-3">
          {isExpanded ? longDescription || desc : desc}
        </Typography>

        {isExpanded && achievements && achievements.length > 0 && (
          <div className="mb-3">
            <Typography variant="h6" className="text-primary dark:text-secondary font-medium mb-1 text-sm">
              Key Achievements
            </Typography>
            <ul className="list-disc pl-4 text-primary/80 dark:text-secondary/80">
              {achievements.slice(0, 3).map((achievement, idx) => (
                <li key={idx} className="mb-1">
                  <Typography className="text-xs">{achievement}</Typography>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Stack */}
        {technologies.length > 0 && isExpanded && (
          <div className="flex flex-wrap gap-1 mb-3">
            {technologies.slice(0, 6).map((tech, index) => (
              <Chip 
                key={index} 
                value={tech} 
                size="sm" 
                className="text-xs px-2 py-1 bg-primary/10 text-primary dark:bg-secondary/10 dark:text-secondary"
              />
            ))}
          </div>
        )}

        {/* Action Links and Expand Button */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {githubLink && !liveLink && (
              <a 
                href={githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
              >
                View Project
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            )}
            
            {liveLink && (
              <a 
                href={liveLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
              >
                View Project
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            )}
          </div>
          
          {(longDescription || achievements || technicalDetails) && (
            <button
              className="flex items-center gap-1 text-primary/70 dark:text-secondary/70 hover:text-primary dark:hover:text-secondary text-sm font-medium transition-colors"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? "Less" : "More"}
              {isExpanded ? (
                <ChevronUp className="h-3 w-3" />
              ) : (
                <ChevronDown className="h-3 w-3" />
              )}
            </button>
          )}
        </div>
      </div>
    </Card>
  );
}

export default ProjectCard;