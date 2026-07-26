/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      colors: {
        brand: {
          light: "var(--color-gold-light)",
          DEFAULT: "var(--color-gold-primary)",
          dark: "var(--color-gold-dark)",
          navy: "var(--color-navy)",
          red: "var(--color-red)",
        },
      },
    },
  },
  plugins: [],
};
