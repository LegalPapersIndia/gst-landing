/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#0A1428",
          900: "#0E1B33",
          800: "#16294F",
          700: "#1F3763",
          600: "#2C4A80",
        },
        gold: {
          300: "#E9D28A",
          400: "#D9BA5C",
          500: "#C9A227",
          600: "#A9841A",
        },
        paper: "#F6F3EA",
        ink: "#1A2030",
        slate: {
          500: "#6B7284",
          400: "#8A90A0",
        },
        seal: "#1F7A5C",
      },
      fontFamily: {
        display: ["Petrona", "serif"],
        body: ["Public Sans", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
      keyframes: {
        stampIn: {
          "0%": { transform: "scale(2.2) rotate(-18deg)", opacity: "0" },
          "60%": { transform: "scale(0.92) rotate(-10deg)", opacity: "1" },
          "100%": { transform: "scale(1) rotate(-8deg)", opacity: "1" },
        },
        rise: {
          "0%": { transform: "translateY(16px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        stamp: "stampIn 0.5s cubic-bezier(.2,1.4,.4,1) forwards",
        rise: "rise 0.6s ease forwards",
      },
    },
  },
  plugins: [],
};
