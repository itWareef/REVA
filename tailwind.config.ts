import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#082843",
          950: "#05192B",
          900: "#071F35",
          800: "#0A2E4B",
          700: "#103A5C",
          600: "#17496E",
          500: "#205A83",
        },
        gold: {
          DEFAULT: "#826E39",
          light: "#BE9F55",
          soft: "#9E8547",
          dark: "#635026",
          deep: "#4A3C1D",
        },
        teal: {
          DEFAULT: "#033A42",
          light: "#0A5560",
        },
        sand: {
          DEFAULT: "#F7F4EF",
          50: "#FBFAF7",
          100: "#F4F0E8",
          200: "#EAE4D8",
          300: "#DBD3C3",
          400: "#B9AF9C",
        },
        concrete: {
          DEFAULT: "#5C6873",
          light: "#7B8792",
          dark: "#38434D",
        },
      },
      fontFamily: {
        ar: ["var(--font-ar)", "system-ui", "sans-serif"],
        en: ["var(--font-en)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-ar)", "sans-serif"],
      },
      maxWidth: { "8xl": "88rem" },
      letterSpacing: { tightest: "-0.04em" },
      boxShadow: {
        gold: "0 20px 60px -20px rgba(130,110,57,0.55)",
        soft: "0 24px 60px -30px rgba(11,12,14,0.35)",
        card: "0 2px 8px rgba(11,12,14,0.04), 0 20px 50px -30px rgba(11,12,14,0.25)",
      },
      backgroundImage: {
        "grid-fade": "linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      keyframes: {
        "fade-up": { "0%": { opacity: "0", transform: "translateY(24px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        "marquee": { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
        "shimmer": { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both",
        "marquee": "marquee 32s linear infinite",
        "shimmer": "shimmer 6s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
