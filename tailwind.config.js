/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "2rem",
          sm: "1rem",
          md: "2rem",
          lg: "2.5rem",
          xl: "3rem",
          "2xl": "3.5rem",
        },
      },
      colors: {
        bluecaller: {
          50: "#F6F4FD",
          100: "#E5DDFA",
          200: "#C2B1F3",
          300: "#B5A0F1",
          400: "#7e6cb2",
          500: "#8672BE",
          600: "#6D5D9B",
          700: "#544877",
          800: "#322B47",
          900: "#030319",
        },
        dark: {},
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
    },
  ],
};
