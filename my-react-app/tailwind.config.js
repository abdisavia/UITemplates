/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "Auth":"url('./src/assets/bgAuth.JPG')"
      },
    },
  },
  plugins: [],
}

