import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          50: "#fdf8f2",
          100: "#faeddd",
          200: "#f4dcbb",
          300: "#ecc38f",
          400: "#e2a95f",
          500: "#d98f33",
          600: "#c27428",
          700: "#a05a25",
          800: "#804622",
          900: "#663a1d"
        }
      },
      fontFamily: {
        display: ["'Tajawal'", "sans-serif"],
        sans: ["'Tajawal'", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
