module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./packages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Lato: "'Lato' ,sans-serif",
      },
      textUnderlineOffset: {
        1: "1px",
      },
    },
    colors: {
       transparent: "transparent",
      black: "#000000",
      white: "#ffffff",
    skyblue:"#E5F0F9",
    orange:"#EF7E2B",
    // gray:"#adb5bd",
   green:"#32cd32",
   gray:"#C0C0C0",
   lightgray:"#f5f5f5"
     
    },
  },
  varients: {
    extend: {
      backgroundColor: ["checked"],
    },
    variants: {
      opacity: ["responsive", "hover"],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};