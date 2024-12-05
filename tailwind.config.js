/** @type {import('tailwindcss').Config} */
import children from 'tailwind-children';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#A68921",
        secondary: "#bba53d",
      },
    },
  },
  plugins: [
    children,
  ],
};
