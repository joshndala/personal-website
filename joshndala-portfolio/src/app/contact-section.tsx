"use client";

import { Typography } from "@material-tailwind/react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export function ContactSection() {

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-secondary dark:bg-primary transition-colors duration-300">
      <div className="container mx-auto">
        
        {/* Main Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 sm:p-12 shadow-lg text-center">
            <Typography variant="h2" className="text-primary dark:text-secondary mb-6 text-3xl sm:text-4xl md:text-5xl font-bold">
              Let's Create Something Amazing Together
            </Typography>
            <Typography variant="lead" className="text-primary/80 dark:text-secondary/80 mb-8 max-w-4xl mx-auto text-lg sm:text-xl leading-relaxed">
              I'm passionate about creating innovative solutions that combine cutting-edge technology with intuitive design. Whether you need a full-stack web application, a machine learning model, or data analysis services, I'm excited to hear about your project and bring your vision to life.
            </Typography>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <a 
                href="mailto:jndala246@gmail.com"
                className="flex items-center gap-3 bg-primary dark:bg-secondary text-secondary dark:text-primary hover:shadow-lg transition-all duration-300 px-6 py-3 rounded-lg font-semibold text-lg"
              >
                <MdEmail className="h-6 w-6" />
                Email Me
              </a>
              <a 
                href="https://www.linkedin.com/in/joshua-ndala" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 border-2 border-primary text-primary dark:border-secondary dark:text-secondary px-6 py-3 rounded-lg font-semibold text-lg hover:bg-primary/10 dark:hover:bg-secondary/10 transition-all duration-300"
              >
                <FaLinkedin className="h-6 w-6" />
                Connect on LinkedIn
              </a>
              <a 
                href="https://github.com/joshndala" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 border-2 border-primary text-primary dark:border-secondary dark:text-secondary px-6 py-3 rounded-lg font-semibold text-lg hover:bg-primary/10 dark:hover:bg-secondary/10 transition-all duration-300"
              >
                <FaGithub className="h-6 w-6" />
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