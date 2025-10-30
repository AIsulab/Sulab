import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
    "./src/data/**/*.{js,ts,jsx,tsx}",
    "./src/utils/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        dark: "#0f172a",
        gray: "#6b7280"
      },
      fontFamily: {
        pretendard: ["var(--font-pretendard)", "system-ui", "sans-serif"]
      },
      backgroundImage: {
        "cta-gradient":
          "linear-gradient(90deg, rgba(37,99,235,0.85) 0%, rgba(59,130,246,0.85) 100%)"
      }
    }
  },
  plugins: []
};

export default config;
