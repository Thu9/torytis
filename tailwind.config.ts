import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx,css,scss}"],
  theme: {
    extend: {
      colors: {
        black: {
          700: "#333333",
        },
        gray: {
          400: "#b0b0b0",
        },
      },
      screens: {
        xl: "1680px",
        lg: "1200px",
        md: "960px",
        sm: "500px",
      },
    },
  },
  plugins: [],
} satisfies Config;
