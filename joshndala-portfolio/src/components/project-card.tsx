import Image from "next/image";
import { getImagePath } from '../utils/imagePath'
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Chip,
} from "@material-tailwind/react";

interface ProjectCardProps {
  img: string;
  title: string;
  desc: string;
  technologies?: string[];
  githubLink?: string;
  liveLink?: string;
  inProgress?: boolean;
}

export function ProjectCard({ img, title, desc, technologies = [], githubLink, liveLink, inProgress }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden bg-[#f8f9fa]"> 
      <CardHeader floated={false} className="h-40 m-0">
        <Image
          src={getImagePath(img)}
          alt={title}
          width={768}
          height={768}
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" className="mb-1 text-primary font-medium">
          {title}
        </Typography>
        <Typography className="mb-4 font-normal text-primary/80">
          {desc}
        </Typography>
        {technologies.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-1">
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
        <div className="flex gap-2">
          {githubLink && (
            <a href={githubLink} target="_blank">
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
            <a href={liveLink} target="_blank">
              <Button 
                size="sm" 
                className="py-1 text-xs bg-primary text-secondary hover:bg-primary/90"
              >
                Live Site
              </Button>
            </a>
          )}
          {inProgress && (
            <Chip 
              value="In Progress" 
              size="sm" 
              className="text-xs px-2 py-1 bg-red-500/10 text-red-600"
            />
          )}
        </div>
      </CardBody>
    </Card>
  );
}

export default ProjectCard;