import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        nunito: ["var(--font-nunito)"],
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "992px",
      lg: "1200px",
      xl: "1400px",
      xxl: "1992px",
    },
    fontSize: {
      xs: "15px",
      sm: "17px",
      md: "24px",
      xl: "56px",
    },
    colors: {
      white: "#fff",
      "blue-dark": "#1B264F",
      blue: "#506BCA",
      black: "#353844",
      gold: "#D2AD81",
      gray: "#F5F5F8",
    },
    fontWeight: {
      semibold: "600",
      bold: "700",
    },
  },
  plugins: [],
};
export default config;
