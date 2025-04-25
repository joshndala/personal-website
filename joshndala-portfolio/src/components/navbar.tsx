import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  HomeIcon,
  CodeBracketIcon,
  DocumentTextIcon,
  UserCircleIcon,
  XMarkIcon,
  Bars3Icon,
  WrenchScrewdriverIcon
} from "@heroicons/react/24/solid";
import { getSectionLink } from "../utils/paths";
import { ThemeToggle } from "./theme-toggle";

const NAV_MENU = [
  {
    name: "Home",
    icon: HomeIcon,
    href: getSectionLink("hero"),
  },
  {
    name: "About",
    icon: UserCircleIcon,
    href: getSectionLink("about"),
  },
  {
    name: "Skills",
    icon: WrenchScrewdriverIcon,
    href: getSectionLink("skills"),
  },
  {
    name: "Projects",
    icon: CodeBracketIcon,
    href: getSectionLink("projects"),
  },
  {
    name: "Resume",
    icon: DocumentTextIcon,
    href: getSectionLink("resume"),
  },
];

interface NavItemProps {
  children: React.ReactNode;
  href: string;
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href}
        variant="paragraph"
        className="flex items-center gap-2 font-medium text-primary dark:text-secondary hover:text-primary/80 dark:hover:text-secondary/80 transition-colors"
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (href) {
      const targetId = href.split("#")[1];
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
    setOpen(false); // Close the mobile menu after clicking
  };

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <MTNavbar shadow={false} fullWidth className="border-0 sticky top-0 z-50 bg-secondary dark:bg-primary transition-colors duration-300">
      <div className="container mx-auto flex items-center justify-between">
        <Typography className="text-lg font-bold text-primary dark:text-secondary">
          Joshua Ndala
        </Typography>
        <ul className="ml-10 hidden items-center gap-8 lg:flex">
          {NAV_MENU.map(({ name, icon: Icon, href }) => (
            <NavItem key={name} href={href}>
              <Icon className="h-5 w-5" />
              {name}
            </NavItem>
          ))}
        </ul>
        <div className="hidden items-center gap-4 lg:flex">
          <ThemeToggle />
          <a href="#contact-section" onClick={handleClick}>
            <Button className="rounded-full bg-primary text-secondary dark:bg-secondary dark:text-primary hover:bg-primary/90 dark:hover:bg-secondary/90 transition-colors duration-300">
              Contact Me
            </Button>
          </a>
        </div>
        <IconButton
          variant="text"
          className="ml-auto inline-block lg:hidden text-primary dark:text-secondary"
          onClick={handleOpen}
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-3 border-t border-primary/20 dark:border-secondary/20 px-2 pt-4">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map(({ name, icon: Icon, href }) => (
              <NavItem key={name} href={href}>
                <Icon className="h-5 w-5" />
                {name}
              </NavItem>
            ))}
          </ul>
          <div className="mt-6 mb-4 flex flex-col gap-2">
            <div className="flex justify-center mb-2">
              <ThemeToggle />
            </div>
            <a href="#contact-section" onClick={handleClick} className="w-full">
              <Button className="rounded-full w-full bg-primary text-secondary dark:bg-secondary dark:text-primary hover:bg-primary/90 dark:hover:bg-secondary/90">
                Contact Me
              </Button>
            </a>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;