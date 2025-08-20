/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",  // 👈 correct glob
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
