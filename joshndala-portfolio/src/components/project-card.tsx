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
      <CardHeader floated={false} className="h-56 m-0">
        <Image
          src={getImagePath(img)}
          alt={title}
          width={768}
          height={768}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography color="gray" className="mb-4 font-normal">
          {desc}
        </Typography>
        {technologies.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Chip key={index} value={tech} size="sm" />
            ))}
          </div>
        )}
        <div className="flex gap-2">
          {githubLink && (
            <a href={githubLink} target="_blank">
              <Button size="sm" color="gray" variant="outlined">
                GitHub
              </Button>
            </a>
          )}
          {liveLink && (
            <a href={liveLink} target="_blank">
              <Button size="sm" color="blue">
                Live Demo
              </Button>
            </a>
          )}
          {inProgress && (
            <Chip value="In Progress" size="sm" color="red" />
              )}
        </div>
      </CardBody>
    </Card>
  );
}

export default ProjectCard;