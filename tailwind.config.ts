import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "4.5": "3em",
      },
      colors: {
        "dark-brown": {
          100: "#f7f7f7",
          400: "#5f2e00",
        },
      },
      flexBasis: {
        "52/100": "52%",
        "48/100": "48%",
      },
    },
  },
  plugins: [],
};
export default config;
