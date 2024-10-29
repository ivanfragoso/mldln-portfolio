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
        primary: "#2531d6",
        secondary: "#1c1c1c",
        low: "rgba(255, 253, 247, 0.60)",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        blurweb: ['var(--font-blur-web)'],
      },
    },
  },
  plugins: [],
};
export default config;
