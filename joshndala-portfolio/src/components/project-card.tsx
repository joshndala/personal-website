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
    <Card className="overflow-hidden">
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
        <Typography variant="h5" color="blue-gray" className="mb-1">
          {title}
        </Typography>
        <Typography color="gray" className="mb-4 font-normal">
          {desc}
        </Typography>
        {technologies.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-1">
            {technologies.map((tech, index) => (
              <Chip key={index} value={tech} size="sm" className="text-xs px-2 py-1"/>
            ))}
          </div>
        )}
        <div className="flex gap-2">
          {githubLink && (
            <a href={githubLink} target="_blank">
              <Button size="sm" color="gray" variant="outlined" className="py-1 text-xs">
                GitHub
              </Button>
            </a>
          )}
          {liveLink && (
            <a href={liveLink} target="_blank">
              <Button size="sm" color="blue" className="py-1 text-xs">
                Live Demo
              </Button>
            </a>
          )}
          {inProgress && (
            <Chip value="In Progress" size="sm" color="red" className="text-xs px-2 py-1"/>
              )}
        </div>
      </CardBody>
    </Card>
  );
}

export default ProjectCard;