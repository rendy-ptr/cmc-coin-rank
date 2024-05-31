/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cyberpunk",
      "valentine",
      "forest",
      "aqua",
      "pastel",
      "wireframe",
      "luxury",
      "dracula",
      "autumn",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "sunset",
    ],
  },
};
