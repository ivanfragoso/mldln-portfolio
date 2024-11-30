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
        low_opac: "#B5B4B4",
        super_low_opac: "#D2D2D2",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        blurweb: ['var(--font-blur-web)'],
        editorialNew: ['var(--font-editorial-new)'],
      },
      leading: {
        '3.5': '0.875rem', /* 14px */
      },
      height: {
        'slider': '750px'
      }
    },
  },
  plugins: [],
};
export default config;
