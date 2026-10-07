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
          DEFAULT: "#6366f1",
          foreground: "#ffffff",
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
        },
        secondary: "#a855f7",
        accent: "#06b6d4",
        background: {
          DEFAULT: "#0a0a0f",
          surface: "#13131a",
          surface2: "#1c1c27",
          card: "#16161f",
        },
        border: "#2a2a3a",
        muted: {
          DEFAULT: "#1e1e2e",
          foreground: "#8b8ba7",
        },
        input: "#1e1e2e",
        foreground: "#f0f0f5",
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
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        shimmer: "shimmer 2s infinite",
        "border-rotate": "borderRotate 4s ease infinite",
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
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(99, 102, 241, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(99, 102, 241, 0.6)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        borderRotate: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
