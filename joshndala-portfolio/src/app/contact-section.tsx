"use client";

import { Typography, Button } from "@material-tailwind/react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { getStaticFilePath } from '../utils/paths';

export function ContactSection() {
  return (
    <section className="px-8 py-16 bg-primary dark:bg-secondary text-secondary dark:text-primary transition-colors duration-300">
      <div className="container mx-auto text-center">
        <Typography variant="h2" className="mb-4 text-secondary dark:text-primary">
          Let's Connect
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full lg:w-6/12 text-secondary dark:text-primary mb-8"
        >
          I'm always open to new opportunities and collaborations. Feel free to reach out if you'd like to discuss a project or just say hello!
        </Typography>
        <div className="flex justify-center gap-6 mb-8">
          <a href="mailto:jndala246@gmail.com" className="flex items-center gap-2 text-secondary dark:text-primary hover:text-secondary/80 dark:hover:text-primary/80 transition-colors">
            <MdEmail className="h-6 w-6" />
            <Typography>Email</Typography>
          </a>
          <a href="https://www.linkedin.com/in/joshua-ndala" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-secondary dark:text-primary hover:text-secondary/80 dark:hover:text-primary/80 transition-colors">
            <FaLinkedin className="h-6 w-6" />
            <Typography>LinkedIn</Typography>
          </a>
          <a href="https://github.com/joshndala" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-secondary dark:text-primary hover:text-secondary/80 dark:hover:text-primary/80 transition-colors">
            <FaGithub className="h-6 w-6" />
            <Typography>GitHub</Typography>
          </a>
        </div>
        <a
          href={getStaticFilePath('Joshua_Ndala_Resume.pdf')}
          download="Joshua_Ndala_Resume.pdf"
        >
          <Button 
            className="bg-secondary dark:bg-primary text-primary dark:text-secondary hover:bg-secondary/90 dark:hover:bg-primary/90 transition-colors duration-300" 
            size="lg" 
          >
            Download Resume
          </Button>
        </a>
      </div>
    </section>
  );
}

export default ContactSection;