/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist:[
    {pattern: /col-start-(1|2|3|4|5)/},
    {pattern: /row-start-(1|2|3|4|5|6)/},
  ],
  theme: {
    extend: {
      colors:{
        "highlight": "#6202FF",
      }, 
      screens:{
        "sm" : "520px",
        "lg" : "976px",
      },
      fontFamily:{
        popines : ["Poppins", "sans-serif"],
      },
      fontSize:{
        "4.5xl" : ["2.625rem", "1.15"],
        "5.5xl" :['3.375rem' , '1']
      }
    },
  },
  plugins: [],
};
