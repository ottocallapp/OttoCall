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
        primary: {
          DEFAULT: "#059669",
          foreground: "#ffffff",
          dark: "#047857",
        },
        emerald: {
          50: "#ECFDF5",
          100: "#D1FAE5",
          600: "#059669",
        },
        background: "#ffffff",
        foreground: "oklch(0.145 0 0)",
        muted: {
          DEFAULT: "#ececf0",
          foreground: "#717182",
        },
        accent: "#e9ebef",
        secondary: "oklch(0.95 0.0058 264.53)",
        input: "#f3f3f5",
        destructive: {
          DEFAULT: "#d4183d",
          foreground: "#ffffff",
        },
        ring: "oklch(0.708 0 0)",
        "border-subtle": "rgba(0, 0, 0, 0.1)",
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "Outfit", "system-ui", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.625rem",
        lg: "0.625rem",
        xl: "0.75rem",
        "2xl": "0.875rem",
      },
      boxShadow: {
        soft: "0 1px 3px 0 rgb(0 0 0 / 0.05), 0 1px 2px -1px rgb(0 0 0 / 0.05)",
        card: "0 1px 3px 0 rgb(0 0 0 / 0.06)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-up": "slideUp 0.5s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
