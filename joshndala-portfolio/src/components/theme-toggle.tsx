"use client";

import { useTheme } from "@/utils/themeContext";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { IconButton } from "@material-tailwind/react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <IconButton
      variant="text"
      className={`rounded-full w-8 h-8 flex items-center justify-center ${
        theme === 'dark' 
          ? 'text-secondary hover:bg-secondary/10' 
          : 'text-primary hover:bg-primary/10'
      }`}
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <MoonIcon className="h-5 w-5" />
      ) : (
        <SunIcon className="h-5 w-5" />
      )}
    </IconButton>
  );
}

export default ThemeToggle; 