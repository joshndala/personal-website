"use client";

import { useTheme } from "@/utils/themeContext";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex items-center gap-2">
      <SunIcon className={`h-4 w-4 ${theme === 'light' ? 'text-primary' : 'text-secondary/70'}`} />
      
      {/* Custom toggle implementation */}
      <div 
        onClick={toggleTheme}
        className={`relative w-12 h-6 rounded-full cursor-pointer transition-colors duration-300 ${
          theme === 'dark' ? 'bg-secondary/30' : 'bg-primary/30'
        }`}
      >
        <div 
          className={`absolute w-5 h-5 rounded-full bg-white border-2 transform transition-transform duration-300 top-0.5 ${
            theme === 'dark' 
              ? 'translate-x-6 border-secondary' 
              : 'translate-x-0.5 border-primary'
          }`}
        />
      </div>
      
      <MoonIcon className={`h-4 w-4 ${theme === 'dark' ? 'text-secondary' : 'text-primary/70'}`} />
    </div>
  );
}

export default ThemeToggle; 