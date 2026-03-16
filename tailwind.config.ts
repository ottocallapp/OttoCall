import type { Config } from "tailwindcss";

const config: Config = {
  safelist: [
    "text-brand-text",
    "bg-brand-surface",
  ],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#2D3748",
          deep: "#1E293B",
          surface: "#F8FAFC",
          border: "#E2E8F0",
          muted: "#94A3B8",
          text: "#1E293B",
        },
        mint: {
          DEFAULT: "#4ADE80",
          soft: "#86EFAC",
          muted: "#22C55E",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "12px",
        button: "10px",
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgb(0 0 0 / 0.05)",
        card: "0 1px 3px 0 rgb(0 0 0 / 0.06), 0 1px 2px -1px rgb(0 0 0 / 0.04)",
      },
    },
  },
  plugins: [],
};

export default config;
