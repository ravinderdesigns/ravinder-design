import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        surface: "#0a070c",
        "surface-border": "rgba(255, 255, 255, 0.08)",
        burgundy: {
          950: "#0e0206",
          900: "#1b040d",
          800: "#2d0817",
          700: "#480c25",
        },
        crimson: {
          DEFAULT: "#e6005c",
          glow: "#ff0555",
          dark: "#880628",
          bright: "#ff2a6d",
        },
        zinc: {
          950: "#09090b",
          900: "#121215",
          800: "#1e1e24",
          700: "#2d2d35",
          400: "#a1a1aa",
          300: "#d1d1d6",
        },
        editorial: {
          white: "#f5f5f7",
          muted: "#86868b",
          dark: "#1d1d1f",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 8s ease-in-out infinite",
        "glow": "glow 4s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%": { opacity: "0.4", filter: "blur(40px)" },
          "100%": { opacity: "0.8", filter: "blur(60px)" },
        }
      },
      backgroundImage: {
        "radial-burgundy": "radial-gradient(circle at center, rgba(230, 0, 92, 0.15) 0%, rgba(27, 4, 13, 0.4) 40%, rgba(5, 5, 5, 0.95) 80%)",
        "gradient-vignette": "radial-gradient(ellipse at center, transparent 40%, rgba(5, 5, 5, 0.85) 80%, #050505 100%)",
      }
    },
  },
  plugins: [],
};
export default config;
