import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
import { ThemeToggle } from "./theme-toggle";

const NAV_MENU = [
  {
    name: "Home",
    icon: HomeIcon,
    href: "/",
  },
  {
    name: "About",
    icon: UserCircleIcon,
    href: "/about",
  },
  {
    name: "Skills",
    icon: WrenchScrewdriverIcon,
    href: "/skills",
  },
  {
    name: "Projects",
    icon: CodeBracketIcon,
    href: "/projects",
  },
  {
    name: "Resume",
    icon: DocumentTextIcon,
    href: "/resume",
  },
];

interface NavItemProps {
  children: React.ReactNode;
  href: string;
  isActive: boolean;
}

function NavItem({ children, href, isActive }: NavItemProps) {
  return (
    <li>
      <Link href={href} passHref>
      <Typography
          as="span"
        variant="paragraph"
          className={`flex items-center gap-2 font-medium text-primary dark:text-secondary hover:text-primary/80 dark:hover:text-secondary/80 transition-colors cursor-pointer ${
            isActive ? "border-b-2 border-primary dark:border-secondary" : ""
          }`}
      >
        {children}
      </Typography>
      </Link>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <MTNavbar shadow={false} fullWidth className="border-0 sticky top-0 z-50 bg-secondary dark:bg-primary transition-colors duration-300">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" passHref>
          <Typography className="text-lg font-bold text-primary dark:text-secondary cursor-pointer">
          Joshua Ndala
        </Typography>
        </Link>
        <ul className="ml-10 hidden items-center gap-8 lg:flex">
          {NAV_MENU.map(({ name, icon: Icon, href }) => (
            <NavItem key={name} href={href} isActive={pathname === href}>
              <Icon className="h-5 w-5" />
              {name}
            </NavItem>
          ))}
        </ul>
        <div className="hidden items-center gap-4 lg:flex">
          <ThemeToggle />
          <Link href="/contact" passHref>
            <Button className="rounded-full bg-primary text-secondary dark:bg-secondary dark:text-primary hover:bg-primary/90 dark:hover:bg-secondary/90 transition-colors duration-300">
              Contact Me
            </Button>
          </Link>
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
              <NavItem key={name} href={href} isActive={pathname === href}>
                <Icon className="h-5 w-5" />
                {name}
              </NavItem>
            ))}
          </ul>
          <div className="mt-6 mb-4 flex flex-col gap-2">
            <div className="flex justify-center mb-2">
              <ThemeToggle />
            </div>
            <Link href="/contact" className="w-full" passHref>
              <Button className="rounded-full w-full bg-primary text-secondary dark:bg-secondary dark:text-primary hover:bg-primary/90 dark:hover:bg-secondary/90">
                Contact Me
              </Button>
            </Link>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;