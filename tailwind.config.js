/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Lato: ["Lato"],
      Satisfy: ["Satisfy"],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
