const { link } = require("fs");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js}",
  ],
  screens: {
    sm: "640px",
    // => @media (min-width: 640px) { ... }

    md: "768px",
    // => @media (min-width: 768px) { ... }

    lg: "1024px",
    // => @media (min-width: 1024px) { ... }

    xl: "1280px",
    // => @media (min-width: 1280px) { ... }

    "2xl": "1536px",
    // => @media (min-width: 1536px) { ... }
  },
  darkMode: "class",
  theme: {
    extend: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
      colors: {
        primary: {
          50: "#838e9e",
          100: "#6a778b",
          200: "#516177",
          300: "#394a64",
          400: "#203450",
          500: "#071d3d",
          600: "#061a37",
          700: "#061731",
          800: "#05142b",
          900: "#041125",
        },
        dark: {
          50: "#F5F5F5",
          100: "#E1E1E1",
          200: "#B8B8B8",
          300: "#8F8F8F",
          400: "#5B6B86",
          500: "#374151",
          600: "#212731",
          700: "#313335",
          800: "#242526",
          900: "#131416",
        },
        "blue-ribbon": {
          50: "#e8f8ff",
          100: "#d5f2ff",
          200: "#b3e4ff",
          300: "#85cfff",
          400: "#56acff",
          500: "#2f88ff",
          600: "#0c5cff",
          700: "#0052ff",
          800: "#0649cd",
          900: "#10449f",
        },
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
        center: true,
      },
    },
  },

  plugins: [],
  variants: ["responsive"],
};
