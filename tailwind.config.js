/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/templates/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxHeight: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
        1000: "1000px",
      },
      height: {
        9.8: "2.4rem",
      },
      width: {
        "3/10": "30%",
        "7/10": "70%",
      },
      borderRadius: {
        "5px": "5px",
      },
      zIndex: {
        1000: "1000",
      },
      screens: {
        "700px": "700px",
      },
      fontFamily: {
        montserratBold: [
          "Montserrat Bold",
          "Arial Black",
          "Arial",
          "sans-serif",
        ],
        montserratRegular: ["Montserrat Regular", "Arial", "sans-serif"],
        averiaRegular: ["Averia Regular", "Georgia", "serif"],
        averiaLight: ["Averia Light", "Georgia", "serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
