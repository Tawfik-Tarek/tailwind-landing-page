/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    { pattern: /col-start-(1|2|3|4|5)/ },
    { pattern: /row-start-(1|2|3|4|5|6)/ },
  ],
  theme: {
    extend: {
      colors: {
        highlight: "#6202FF",
      },
      screens: {
        sm: "520px",
        lg: "976px",
      },
      fontFamily: {
        popines: ["Poppins", "sans-serif"],
      },
      fontSize: {
        "4.5xl": ["2.625rem", "1.15"],
        "5.5xl": ["3.375rem", "1"],
      },
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(120px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        slideLeft: {
          "0%": { transform: "translateX(20px)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        } ,
        roal : {
          "0%": { transform: "rotate(12deg)" , scale : 0 , opacity : 0},
          "100%": { transform: "rotate(0deg)" , scale : 1 , opacity : 1},
        }
      },
      animation: {
        slideUp: "slideUp 0.5s ease-out",
        slideLeft: "slideLeft 0.5s ease-out",
        roal : "roal 0.11s cubic-bezier(.26,.74,.78,.75)"
      },
    },
  },
  plugins: [],
};
