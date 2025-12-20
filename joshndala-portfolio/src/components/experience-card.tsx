import { useState } from "react";
import {
  Card,
  Typography,
  Chip,
} from "@material-tailwind/react";
import { BriefcaseIcon } from "@heroicons/react/24/solid";
import { ChevronDown, ChevronUp, ExternalLink, GithubIcon } from "lucide-react";

interface ExperienceCardProps {
  title: string;
  company: string;
  location?: string;
  period: string;
  desc: string;
  longDescription?: string;
  achievements?: string[];
  technicalDetails?: string;
  technologies?: string[];
  githubLink?: string;
  liveLink?: string;
  inProgress?: boolean;
}

export function ExperienceCard({ 
  title,
  company,
  location,
  period,
  desc,
  longDescription,
  achievements,
  technicalDetails, 
  technologies = [], 
  githubLink, 
  liveLink, 
  inProgress,
}: ExperienceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl group">
      <div className="p-6 flex flex-col">
        {/* Header Section */}
        <div className="flex items-start gap-4 mb-4">
          {/* Icon/Logo Placeholder */}
          <div className="h-12 w-12 rounded-lg bg-primary dark:bg-secondary text-secondary dark:text-primary flex items-center justify-center flex-shrink-0">
            <BriefcaseIcon className="h-6 w-6" />
          </div>
          
          {/* Title and Company */}
          <div className="flex-1">
            <div className="flex justify-between items-start mb-1">
              <div>
                <Typography variant="h5" className="text-lg font-semibold text-primary dark:text-secondary">
                  {title}
                </Typography>
                <Typography className="text-primary/80 dark:text-secondary/80 font-medium text-sm">
                  {company}
                  {location && ` • ${location}`}
                </Typography>
              </div>
              {inProgress && (
                <Chip 
                  value="Current" 
                  size="sm" 
                  className="text-xs px-2 py-1 bg-green-500/10 text-green-600 dark:bg-green-500/20 dark:text-green-400 ml-2 flex-shrink-0"
                />
              )}
            </div>
            <Typography className="text-primary/60 dark:text-secondary/60 text-xs mt-1">
              {period}
            </Typography>
          </div>
        </div>

        {/* Description */}
        <Typography className="text-primary/70 dark:text-secondary/70 text-sm leading-relaxed mb-4">
          {isExpanded ? longDescription || desc : desc}
        </Typography>

        {/* Achievements */}
        {achievements && achievements.length > 0 && (
          <div className="mb-4">
            <Typography variant="h6" className="text-primary dark:text-secondary font-medium mb-2 text-sm">
              Key Responsibilities & Achievements
            </Typography>
            <ul className="list-disc pl-5 text-primary/80 dark:text-secondary/80 space-y-1">
              {achievements.slice(0, isExpanded ? achievements.length : 3).map((achievement, idx) => (
                <li key={idx}>
                  <Typography className="text-xs">{achievement}</Typography>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technical Details */}
        {isExpanded && technicalDetails && (
          <div className="mb-4">
            <Typography variant="h6" className="text-primary dark:text-secondary font-medium mb-2 text-sm">
              Technical Details
            </Typography>
            <Typography className="text-primary/70 dark:text-secondary/70 text-xs leading-relaxed">
              {technicalDetails}
            </Typography>
          </div>
        )}

        {/* Tech Stack */}
        {technologies.length > 0 && (
          <div className="mb-4">
            <Typography variant="h6" className="text-primary dark:text-secondary font-medium mb-2 text-sm">
              Technologies
            </Typography>
            <div className="flex flex-wrap gap-1">
              {technologies.map((tech, index) => (
                <Chip 
                  key={index} 
                  value={tech} 
                  size="sm" 
                  className="text-xs px-2 py-1 bg-primary/10 text-primary dark:bg-secondary/10 dark:text-secondary"
                />
              ))}
            </div>
          </div>
        )}

        {/* Action Links and Expand Button */}
        <div className="flex items-center justify-between mt-auto pt-2 border-t border-primary/10 dark:border-secondary/10">
          <div className="flex items-center gap-3">
            {liveLink && (
              <a 
                href={liveLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
            {githubLink && (
              <a 
                href={githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                GitHub
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

export default ExperienceCard;

