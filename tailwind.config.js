/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "yellow":"#FFF67E",
        "green_one":"#BFEA7C",
        "green_two":"#9BCF53",
        "green_three":"#416D19",
        "white-one":"#FFFBDA"
      },
      fontFamily:{
        aclonica: ['Aclonica', 'sans-serif'],
        // alfa: ['Alfa Slab One', 'sans-serif']
      }
    },
  },
  plugins: [],
}

