/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        netflix: "#e50914",
      },
      backgroundImage: {
        "netflix-background": "url('/netflixbackground.jpg')",
      },
    },
  },
  plugins: [],
};
