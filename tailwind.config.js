/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/rizzui/dist/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#e8c547",
          foreground: "#0f0e0d",
        },
        secondary: "#c4a882",
        accent: "#d4a853",
        background: {
          DEFAULT: "#0f0e0d",
          surface: "#171614",
          surface2: "#1e1c1a",
          card: "#151311",
        },
        border: "#2c2820",
        muted: {
          DEFAULT: "#1c1a17",
          foreground: "#8a8070",
        },
        input: "#1c1a17",
        foreground: "#f2ede8",
        card: "#151311",
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
        "container-sm": "640px",
        "container-md": "768px",
        "container-lg": "1024px",
        "container-xl": "1200px",
        "container-2xl": "1400px",
      },
      padding: {
        section: "1.5rem",
        "section-sm": "1rem",
        "section-lg": "2rem",
        "section-xl": "3rem",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.7s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2s infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
