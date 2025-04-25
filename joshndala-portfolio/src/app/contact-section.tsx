"use client";

import { Typography, Button } from "@material-tailwind/react";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { getStaticFilePath } from '../utils/paths';
import { motion } from "framer-motion";

export function ContactSection() {
  const contactInfo = [
    {
      icon: MdEmail,
      title: "Email",
      details: "jndala246@gmail.com",
      link: "mailto:jndala246@gmail.com"
    },
    {
      icon: FaLinkedin,
      title: "LinkedIn",
      details: "joshua-ndala",
      link: "https://www.linkedin.com/in/joshua-ndala"
    },
    {
      icon: FaGithub,
      title: "GitHub",
      details: "joshndala",
      link: "https://github.com/joshndala"
    },
    {
      icon: MdLocationOn,
      title: "Location",
      details: "Canada",
      link: null
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-secondary dark:bg-primary transition-colors duration-300">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <Typography className="mb-2 font-bold uppercase text-sm sm:text-base text-primary dark:text-secondary">
            get in touch
          </Typography>
          <Typography variant="h1" className="mb-4 text-3xl sm:text-4xl md:text-5xl font-bold text-primary dark:text-secondary">
            Contact Me
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto w-full lg:w-10/12 text-base sm:text-lg text-primary dark:text-secondary"
          >
            I'm always open to new opportunities and collaborations. Feel free to reach out through any of the channels below!
          </Typography>
        </div>

        {/* Contact Info Cards - Centered */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactInfo.map((info, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  {info.link ? (
                    <a 
                      href={info.link} 
                      target={info.title !== "Email" ? "_blank" : undefined} 
                      rel="noopener noreferrer"
                      className="h-12 w-12 rounded-full bg-primary dark:bg-secondary text-secondary dark:text-primary flex items-center justify-center hover:scale-110 transition-transform duration-300"
                      aria-label={`Contact via ${info.title}`}
                    >
                      <info.icon className="h-6 w-6" />
                    </a>
                  ) : (
                    <div className="h-12 w-12 rounded-full bg-primary dark:bg-secondary text-secondary dark:text-primary flex items-center justify-center">
                      <info.icon className="h-6 w-6" />
                    </div>
                  )}
                  <div>
                    <Typography variant="h6" className="text-primary dark:text-secondary mb-1">
                      {info.title}
                    </Typography>
                    {info.link ? (
                      <a 
                        href={info.link} 
                        target={info.title !== "Email" ? "_blank" : undefined} 
                        rel="noopener noreferrer"
                        className="text-primary/70 dark:text-secondary/70 hover:text-primary dark:hover:text-secondary transition-colors"
                      >
                        {info.details}
                      </a>
                    ) : (
                      <Typography className="text-primary/70 dark:text-secondary/70">
                        {info.details}
                      </Typography>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Resume Download */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md mt-8"
          >
            <Typography variant="h5" className="text-primary dark:text-secondary mb-4">
              Need my resume?
            </Typography>
            <Typography className="text-primary/70 dark:text-secondary/70 mb-4">
              You can download my up-to-date resume with all my experience and skills.
            </Typography>
            <a
              href={getStaticFilePath('Joshua_Ndala_Resume.pdf')}
              download="Joshua_Ndala_Resume.pdf"
              className="inline-block w-auto mx-auto bg-primary dark:bg-secondary text-secondary dark:text-primary hover:shadow-lg transition-shadow px-6 py-3.5 rounded-lg font-medium text-center"
            >
              Download Resume
            </a>
          </motion.div>
        </div>
        
        {/* Inspirational Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-16"
        >
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md text-center">
            <Typography variant="h5" className="text-primary dark:text-secondary mb-4">
              Let's Create Something Amazing Together
            </Typography>
            <Typography className="text-primary/70 dark:text-secondary/70 mb-6 max-w-3xl mx-auto">
              I'm passionate about creating innovative solutions that combine cutting-edge technology with intuitive design. Whether you need a full-stack web application, a machine learning model, or data analysis services, I'm excited to hear about your project and bring your vision to life.
            </Typography>
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href="mailto:jndala246@gmail.com"
                className="flex items-center gap-2 bg-primary dark:bg-secondary text-secondary dark:text-primary hover:shadow-lg px-4 py-2 rounded-lg font-medium"
              >
                <MdEmail className="h-5 w-5" />
                Email Me
              </a>
              <a 
                href="https://www.linkedin.com/in/joshua-ndala" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-primary text-primary dark:border-secondary dark:text-secondary px-4 py-2 rounded-lg font-medium hover:bg-primary/5 dark:hover:bg-secondary/5"
              >
                <FaLinkedin className="h-5 w-5" />
                Connect on LinkedIn
              </a>
              <a 
                href="https://github.com/joshndala" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-primary text-primary dark:border-secondary dark:text-secondary px-4 py-2 rounded-lg font-medium hover:bg-primary/5 dark:hover:bg-secondary/5"
              >
                <FaGithub className="h-5 w-5" />
                Follow on GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactSection; 