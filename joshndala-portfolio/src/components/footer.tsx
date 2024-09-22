"use client";

import { Typography } from "@material-tailwind/react";

const LINKS = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/#projects" },
  { name: "Skills", href: "/#skills" },
  // { name: "About", href: "/about" },
  { name: "Contact", href: "/#contact-section" },
];

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">
      <Typography color="blue-gray" className="font-normal">
        &copy; {CURRENT_YEAR} Joshua Ndala
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        {LINKS.map((link) => (
          <li key={link.name}>
            <Typography
              as="a"
              href={link.href}
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
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