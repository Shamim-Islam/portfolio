/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: "#090b0f",
          surface: "#0f131a",
          card: "#131822",
          cardHover: "#171f2c",
          border: "#1e293b",
          borderLight: "rgba(255, 255, 255, 0.08)",
        },
        lime: {
          DEFAULT: "#ccff00",
          accent: "#ccff00",
          hover: "#b3e600",
          muted: "rgba(204, 255, 0, 0.12)",
          glow: "rgba(204, 255, 0, 0.25)",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "sans-serif",
        ],
        mono: [
          "'Fira Code'",
          "Consolas",
          "Monaco",
          "'Courier New'",
          "monospace",
        ],
      },
      boxShadow: {
        'lime-sm': '0 0 15px rgba(204, 255, 0, 0.15)',
        'lime-md': '0 0 25px rgba(204, 255, 0, 0.22)',
      },
    },
  },
  plugins: [],
};
