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
    lightgray:"#dee2e6",
    lightblack:"#465166",
      grey: "#ededed",
      Lgrey: "#d1d5db",
      Dgrey: "#868686",
      red: "#a91c1c",
      green: "#195618",
      neutral: "rgb(82 82 82)",
      stone: "rgb(168 162 158)",
      blue: "rgb(37 99 235)",
      LightGreen: "#c1f0c1",
      LightRed: "#E00000",
      gray: "#707070",
      lightred: "#ef4444",
      buttonGreen: "#286143",
      navy:"#202A44",
      sky:"#DBF5F0",
     
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