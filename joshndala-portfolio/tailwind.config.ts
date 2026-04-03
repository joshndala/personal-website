import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      animation: {
        scroll: "scroll 60s linear infinite",
        grain: "grain 8s steps(10) infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        grain: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-5%, -10%)" },
          "20%": { transform: "translate(-15%, 5%)" },
          "30%": { transform: "translate(7%, -25%)" },
          "40%": { transform: "translate(-5%, 25%)" },
          "50%": { transform: "translate(-15%, 10%)" },
          "60%": { transform: "translate(15%, 0%)" },
          "70%": { transform: "translate(0%, 15%)" },
          "80%": { transform: "translate(3%, 35%)" },
          "90%": { transform: "translate(-10%, 10%)" },
        },
      },
      colors: {
        // Legacy tokens kept for component compatibility
        primary: "#1a1614",
        secondary: "#f5f0e8",
        accent: "#f5c518",

        // Cinema palette
        "cinema-black": "#0d0d0d",
        "cinema-warm": "#1a1614",
        "cinema-card": "#161410",
        "cinema-border": "#2e2a26",
        "cinema-amber": "#f5c518",
        "cinema-amber-dim": "#c9a227",
        "cinema-cream": "#f5f0e8",
        "cinema-cream-dim": "#b8b0a0",
        "cinema-muted": "#6b6560",
      },
    },
  },
  plugins: [],
});

export default config;
