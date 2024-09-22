"use client";

import { Typography, Button } from "@material-tailwind/react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export function ContactSection() {
  return (
    <section className="px-8 py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          Let's Connect
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full lg:w-6/12 !text-gray-500 mb-8"
        >
          I'm always open to new opportunities and collaborations. Feel free to reach out if you'd like to discuss a project or just say hello!
        </Typography>
        <div className="flex justify-center gap-6 mb-8">
          <a href="mailto:jndala246@gmail.com" className="flex items-center gap-2">
            <MdEmail className="h-6 w-6" />
            <Typography>Email</Typography>
          </a>
          <a href="https://www.linkedin.com/in/joshua-ndala" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <FaLinkedin className="h-6 w-6" />
            <Typography>LinkedIn</Typography>
          </a>
          <a href="https://github.com/joshndala" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <FaGithub className="h-6 w-6" />
            <Typography>GitHub</Typography>
          </a>
        </div>
        <a
          href="/Joshua_Ndala_Resume.pdf"
          download="Joshua_Ndala_Resume.pdf"
          >
          <Button 
            color="blue" 
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