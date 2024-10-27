"use client";

import { Typography } from "@material-tailwind/react";
import { getSectionLink } from "../utils/paths";

const LINKS = [
  { name: "Home", href: getSectionLink("hero") },
  { name: "About", href: getSectionLink("about") },
  { name: "Skills", href: getSectionLink("skills") },
  { name: "Projects", href: getSectionLink("projects") },
  { name: "Contact", href: getSectionLink("contact-section") },
];

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center bg-primary md:justify-between">
      <Typography className="font-normal text-secondary">
        &copy; {CURRENT_YEAR} Joshua Ndala
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        {LINKS.map((link) => (
          <li key={link.name}>
            <Typography
              as="a"
              href={link.href}
              className="font-normal text-secondary transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              {link.name}
            </Typography>
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;