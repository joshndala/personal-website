import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Enable dark mode with class strategy
  theme: {
    extend: {
      animation: {
        'scroll': 'scroll 60s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      colors: {
        // Light mode colors
        primary: '#000000',    // Black
        secondary: '#FFFFFF',  // White
        accent: '#555555',     // Light gray
        
        // Dark mode colors will be handled by Tailwind's dark: modifier
      }
    },
  },
  plugins: [],
});

export default config;