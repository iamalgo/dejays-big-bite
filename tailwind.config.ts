import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#0a0a0a",
          cream: "#f5ead6",
          tan: "#d4b896",
          red: "#c03830",
          orange: "#ff6b35"
        }
      },
      fontFamily: {
        display: ["var(--font-bebas)", "Impact", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 20px 3px rgba(255, 107, 53, 0.4)",
        fire: "0 0 30px rgba(255, 107, 53, 0.6)"
      }
    }
  },
  plugins: []
};

export default config;
