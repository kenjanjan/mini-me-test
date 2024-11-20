import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#0f70f0",
          hover: "#0c5ecb",
        },
        primary: "#212121",
        secondary: "#212121",
        neutral: "#616161",
        error: "#940000",
        borders: "#dcdcdc",
        terracota: "#b15126",
        beige: "#c2b59b",
        "terracota-purple": "#5f2167",
        denim: "#43617d",
        "background-light": "#f6f4f0",
        "background-highlight": "#fafafa",
        "background-dark": "#a8a8a8",
        "background-blue": "#42617C",
        "background-blue-2": "#2C3D4F",
        "footer-nav": "#e9e1d4",
        "legal-bar": "#c2b59b",
        "light-blue": "#F4F7F8",
        cream: "#EBE9D1",
      },
    },
  },
  plugins: [],
} satisfies Config;
