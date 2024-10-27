"use client";

import { Typography, Button } from "@material-tailwind/react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { getStaticFilePath } from '../utils/paths';

export function ContactSection() {
  return (
    <section className="px-8 py-16 bg-primary">
      <div className="container mx-auto text-center">
        <Typography variant="h2" className="mb-4 text-secondary">
          Let's Connect
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full lg:w-6/12 !text-secondary mb-8"
        >
          I'm always open to new opportunities and collaborations. Feel free to reach out if you'd like to discuss a project or just say hello!
        </Typography>
        <div className="flex justify-center gap-6 mb-8">
          <a href="mailto:jndala246@gmail.com" className="flex items-center gap-2 text-secondary">
            <MdEmail className="h-6 w-6" />
            <Typography>Email</Typography>
          </a>
          <a href="https://www.linkedin.com/in/joshua-ndala" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-secondary">
            <FaLinkedin className="h-6 w-6" />
            <Typography>LinkedIn</Typography>
          </a>
          <a href="https://github.com/joshndala" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-secondary">
            <FaGithub className="h-6 w-6" />
            <Typography>GitHub</Typography>
          </a>
        </div>
        <a
          href={getStaticFilePath('Joshua_Ndala_Resume.pdf')}
          download="Joshua_Ndala_Resume.pdf"
        >
          <Button 
            className="bg-secondary text-primary" 
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