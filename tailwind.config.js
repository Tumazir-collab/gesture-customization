module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: { 900: "#000000", "900_4f": "#0000004f" },
        gray: { 50: "#fafbff", "900_e5": "#222222e5", "900_cc": "#1f1f1fcc" },
        indigo: { 900: "#1e2875" },
        blue_gray: { "900_b2": "#1c274cb2" },
        white: { A700: "#ffffff" },
        amber: { A400: "#ffcb00" },
      },
      fontFamily: { outfit: "Outfit", montserrat: "Montserrat" },
      boxShadow: { bs: "-3px 12px  11px 0px #0000004f" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
