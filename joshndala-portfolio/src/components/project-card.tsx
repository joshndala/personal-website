import Image from "next/image";
import { useState } from "react";
import { getImagePath } from '../utils/imagePath'
import {
  Card,
  Typography,
  Button,
  Chip,
} from "@material-tailwind/react";
import { ChevronDown, ChevronUp } from "lucide-react";

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
  inProgress 
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className={`flex flex-col md:flex-row overflow-hidden bg-[#f8f9fa] transition-all duration-300 ease-in-out ${isExpanded ? 'md:h-auto' : 'md:h-64'}`}>
      {/* Image Container */}
      <div className="relative w-full md:w-72 h-48 md:h-64 shrink-0 md:sticky md:top-0">
        <Image
          src={getImagePath(img)}
          alt={title}
          width={768}
          height={768}
          className="h-full w-full object-cover"
          priority
        />
      </div>

      {/* Content Container */}
      <div className="flex-grow p-5 flex flex-col">
        <div>
          <div className="flex justify-between items-start mb-2">
            <Typography variant="h5" className="text-primary font-medium">
              {title}
            </Typography>
            {inProgress && (
              <Chip 
                value="In Progress" 
                size="sm" 
                className="text-xs px-2 py-1 bg-red-500/10 text-red-600 ml-2"
              />
            )}
          </div>

          <Typography className="text-primary/80 mb-3">
            {isExpanded ? longDescription || desc : desc}
          </Typography>

          {isExpanded && achievements && achievements.length > 0 && (
            <div className="mb-3">
              <Typography variant="h6" className="text-primary font-medium mb-2">
                Key Achievements
              </Typography>
              <ul className="list-disc pl-5 text-primary/80">
                {achievements.map((achievement, idx) => (
                  <li key={idx} className="mb-1">
                    <Typography className="text-sm">{achievement}</Typography>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {isExpanded && technicalDetails && (
            <div className="mb-3">
              <Typography variant="h6" className="text-primary font-medium mb-2">
                Technical Details
              </Typography>
              <Typography className="text-primary/80 text-sm">
                {technicalDetails}
              </Typography>
            </div>
          )}

          {/* Tech Stack */}
          {technologies.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-4">
              {technologies.map((tech, index) => (
                <Chip 
                  key={index} 
                  value={tech} 
                  size="sm" 
                  className="text-xs px-2 py-1 bg-primary/10 text-primary"
                />
              ))}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 mt-auto pt-3 border-t border-gray-200">
          <div className="flex gap-2 flex-grow">
            {githubLink && (
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <Button 
                  size="sm" 
                  variant="outlined" 
                  className="py-1 text-xs border-primary text-primary hover:bg-primary hover:text-secondary"
                >
                  GitHub
                </Button>
              </a>
            )}
            {liveLink && (
              <a href={liveLink} target="_blank" rel="noopener noreferrer">
                <Button 
                  size="sm" 
                  className="py-1 text-xs bg-primary text-secondary hover:bg-primary/90"
                >
                  Live Site
                </Button>
              </a>
            )}
          </div>
          
          {(longDescription || achievements || technicalDetails) && (
            <Button
              variant="text"
              size="sm"
              className="flex items-center gap-1 text-primary hover:bg-primary/10"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <span className="text-sm">
                {isExpanded ? "View Less" : "View More"}
              </span>
              {isExpanded ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}

export default ProjectCard;