/** @type {import('tailwindcss').Config } */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        square: "1/1",
      },
      fontFamily: {
        poppins: ["poppins", "sans-serif"],
        open_sans: ["open-sans", "sans-serif"],
      },
      backgroundImage: {
        hero: "url('/img/hero-coffee.jpg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
