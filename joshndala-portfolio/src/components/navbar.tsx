"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";

const NAV_MENU = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  {
    name: "Articles",
    href: "https://medium.com/@joshndala",
    external: true,
  },
];

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-cinema-cream/90 dark:bg-cinema-black/90 backdrop-blur-md border-b border-cinema-warm/10 dark:border-cinema-border transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between h-14">

        {/* Logo */}
        <Link href="/" className="font-playfair text-base font-bold italic text-cinema-warm dark:text-cinema-cream hover:text-cinema-amber dark:hover:text-cinema-amber transition-colors duration-200">
          Joshua Ndala
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {NAV_MENU.map(({ name, href, external }) => {
            const isActive = pathname === href;
            return (
              <li key={name}>
                {external ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cinema-label text-cinema-muted dark:text-cinema-cream-dim hover:text-cinema-amber transition-colors duration-200 tracking-[0.12em]"
                  >
                    {name}
                  </a>
                ) : (
                  <Link
                    href={href}
                    className={`cinema-label tracking-[0.12em] transition-colors duration-200 ${
                      isActive
                        ? "text-cinema-amber border-b border-cinema-amber pb-0.5"
                        : "text-cinema-muted dark:text-cinema-cream-dim hover:text-cinema-warm dark:hover:text-cinema-cream"
                    }`}
                  >
                    {name}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>

        {/* Desktop right */}
        <div className="hidden lg:flex items-center gap-5">
          <ThemeToggle />
          <Link
            href="/contact"
            className="cinema-label text-cinema-black dark:text-cinema-black bg-cinema-amber hover:bg-cinema-amber-dim px-4 py-1.5 transition-colors duration-200 tracking-[0.15em]"
          >
            Contact
          </Link>
        </div>

        {/* Mobile: theme + hamburger */}
        <div className="lg:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            className="text-cinema-warm dark:text-cinema-cream p-1"
            aria-label="Toggle menu"
          >
            {open ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-cinema-warm/10 dark:border-cinema-border bg-cinema-cream dark:bg-cinema-black px-6 py-5">
          <ul className="flex flex-col gap-5 mb-6">
            {NAV_MENU.map(({ name, href, external }) => {
              const isActive = pathname === href;
              return (
                <li key={name}>
                  {external ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setOpen(false)}
                      className="cinema-label text-cinema-muted dark:text-cinema-cream-dim tracking-[0.15em]"
                    >
                      {name}
                    </a>
                  ) : (
                    <Link
                      href={href}
                      onClick={() => setOpen(false)}
                      className={`cinema-label tracking-[0.15em] ${
                        isActive ? "text-cinema-amber" : "text-cinema-muted dark:text-cinema-cream-dim"
                      }`}
                    >
                      {name}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="block text-center cinema-label text-cinema-black bg-cinema-amber px-4 py-2 tracking-[0.15em]"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
