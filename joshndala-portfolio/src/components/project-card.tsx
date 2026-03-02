import Image from "next/image";
import { useState } from "react";
import { getImagePath } from '../utils/imagePath'
import {
  Card,
  Typography,
  Chip,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { ExternalLink, GithubIcon, Info } from "lucide-react";

interface ProjectCardProps {
  img?: string;
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen((cur) => !cur);

  const hasMoreInfo = !!(longDescription || (achievements && achievements.length > 0) || technicalDetails);

  const renderModal = () => (
    <Dialog open={isModalOpen} handler={handleOpenModal} size="lg" className="bg-white dark:bg-gray-900 overflow-hidden max-h-[90vh] flex flex-col">
      <DialogHeader className="text-xl md:text-2xl font-bold text-primary dark:text-secondary border-b border-gray-100 dark:border-gray-800 shrink-0">
        {title}
      </DialogHeader>
      <DialogBody className="overflow-y-auto p-6 flex-1 custom-scrollbar">
        <div className="flex flex-col gap-6">
          {/* Detailed Description */}
          <div>
            <Typography variant="h6" className="text-primary dark:text-secondary font-medium mb-2">
              Overview
            </Typography>
            <Typography className="text-primary/80 dark:text-secondary/80 leading-relaxed text-sm md:text-base">
              {longDescription || desc}
            </Typography>
          </div>

          {/* Achievements */}
          {achievements && achievements.length > 0 && (
            <div>
              <Typography variant="h6" className="text-primary dark:text-secondary font-medium mb-2">
                Key Achievements
              </Typography>
              <ul className="list-disc pl-5 space-y-1.5 text-primary/80 dark:text-secondary/80 text-sm md:text-base">
                {achievements.map((achievement, idx) => (
                  <li key={idx} className="pl-1 leading-relaxed">
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technical Details */}
          {technicalDetails && (
            <div>
              <Typography variant="h6" className="text-primary dark:text-secondary font-medium mb-2">
                Technical Specifications
              </Typography>
              <Typography className="text-primary/80 dark:text-secondary/80 leading-relaxed text-sm md:text-base">
                {technicalDetails}
              </Typography>
            </div>
          )}

          {/* Technologies Full List */}
          {technologies.length > 0 && (
            <div>
              <Typography variant="h6" className="text-primary dark:text-secondary font-medium mb-2">
                Technologies Used
              </Typography>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <Chip
                    key={index}
                    value={tech}
                    size="md"
                    className="bg-primary/10 text-primary dark:bg-secondary/10 dark:text-secondary font-medium"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogBody>
      <DialogFooter className="border-t border-gray-100 dark:border-gray-800 gap-3 shrink-0">
        {liveLink && (
          <a href={liveLink} target="_blank" rel="noopener noreferrer">
            <Button variant="outlined" color="blue" className="flex items-center gap-2 normal-case">
              <ExternalLink className="w-4 h-4" /> Live Demo
            </Button>
          </a>
        )}
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <Button variant="outlined" className="flex items-center gap-2 border-gray-300 dark:border-gray-700 text-primary dark:text-secondary normal-case">
              <GithubIcon className="w-4 h-4" /> GitHub
            </Button>
          </a>
        )}
        <Button variant="text" onClick={handleOpenModal} className="text-gray-600 dark:text-gray-400 normal-case">
          Close
        </Button>
      </DialogFooter>
    </Dialog>
  );

  const renderActionLinks = () => (
    <div className="flex flex-wrap items-center justify-between gap-2 border-t border-gray-100 dark:border-gray-800 pt-4 mt-auto">
      <div className="flex items-center gap-3">
        {liveLink && (
          <a href={liveLink} target="_blank" rel="noopener noreferrer">
            <Button variant="outlined" size="sm" color="blue" className="flex items-center gap-1.5 py-1.5 px-3 normal-case rounded-md">
              <ExternalLink className="w-4 h-4" /> Live Demo
            </Button>
          </a>
        )}
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <Button variant="outlined" size="sm" className="flex items-center gap-1.5 border-gray-300 dark:border-gray-700 text-primary dark:text-secondary py-1.5 px-3 normal-case rounded-md">
              <GithubIcon className="w-4 h-4" /> GitHub
            </Button>
          </a>
        )}
      </div>

      {hasMoreInfo && (
        <button
          onClick={handleOpenModal}
          className="inline-flex items-center gap-1 text-sm font-medium text-primary/70 dark:text-secondary/70 hover:text-primary dark:hover:text-secondary transition-colors"
        >
          <Info className="w-4 h-4" />
          Click More
        </button>
      )}
    </div>
  );

  if (layout === 'horizontal') {
    return (
      <>
        <Card className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl group flex flex-col md:flex-row">
          {img && (
            <div className="w-full md:w-80 h-48 flex-shrink-0 overflow-hidden border-b md:border-b-0 md:border-r border-gray-100 dark:border-gray-800">
              <Image
                src={getImagePath(img)}
                alt={title}
                width={400}
                height={300}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>
          )}

          <div className="flex-1 p-5 flex flex-col">
            <div className="flex-grow mb-4">
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

              <Typography className="text-primary/70 dark:text-secondary/70 text-sm leading-relaxed mb-4 line-clamp-3">
                {desc}
              </Typography>

              {technologies.length > 0 && (
                <div className="flex flex-wrap gap-1 mb-2">
                  {technologies.slice(0, 5).map((tech, index) => (
                    <Chip
                      key={index}
                      value={tech}
                      size="sm"
                      className="text-xs px-2 py-1 bg-primary/10 text-primary dark:bg-secondary/10 dark:text-secondary"
                    />
                  ))}
                  {technologies.length > 5 && (
                    <Chip
                      value={`+${technologies.length - 5}`}
                      size="sm"
                      className="text-xs px-2 py-1 bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                    />
                  )}
                </div>
              )}
            </div>
            {renderActionLinks()}
          </div>
        </Card>
        {renderModal()}
      </>
    );
  }

  return (
    <>
      <Card className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl group max-w-sm mx-auto h-full flex flex-col">
        {img && (
          <div className="aspect-[3/2] overflow-hidden shrink-0 border-b border-gray-100 dark:border-gray-800">
            <Image
              src={getImagePath(img)}
              alt={title}
              width={400}
              height={267}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </div>
        )}

        <div className="p-5 flex flex-col flex-1">
          <div className="mb-4">
            <div className="flex justify-between items-start mb-3">
              <Typography variant="h5" className="text-lg font-semibold text-primary dark:text-secondary line-clamp-2">
                {title}
              </Typography>
              {inProgress && (
                <Chip
                  value="In Progress"
                  size="sm"
                  className="text-xs px-2 py-1 bg-red-500/10 text-red-600 dark:bg-red-500/20 dark:text-red-400 ml-2 shrink-0"
                />
              )}
            </div>

            <Typography className="text-primary/70 dark:text-secondary/70 text-sm leading-relaxed mb-4 line-clamp-3">
              {desc}
            </Typography>
          </div>

          <div className="mt-auto">
            {technologies.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mb-4 border-t border-transparent pt-2">
                {technologies.slice(0, 4).map((tech, index) => (
                  <Chip
                    key={index}
                    value={tech}
                    size="sm"
                    className="text-xs px-2 py-1 bg-primary/10 text-primary dark:bg-secondary/10 dark:text-secondary"
                  />
                ))}
                {technologies.length > 4 && (
                  <Chip
                    value={`+${technologies.length - 4}`}
                    size="sm"
                    className="text-xs px-2 py-1 bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                  />
                )}
              </div>
            )}

            {renderActionLinks()}
          </div>
        </div>
      </Card>
      {renderModal()}
    </>
  );
}

export default ProjectCard;