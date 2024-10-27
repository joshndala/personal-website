import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
        primary: '#00213F',    // Dark blue
        secondary: '#ACF0D1',  // Mint green
        "primary-dark": {
          DEFAULT: "#00213F",
        },
        "primary-light": {
          DEFAULT: "#ACF0D1",
        },
      }
    },
  },
  plugins: [],
});

export default config;