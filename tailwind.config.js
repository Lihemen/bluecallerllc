/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bluecaller: {
          50: '#F6F4FD',
          100: '#E5DDFA',
          200: '#C2B1F3',
          300: '#B5A0F1',
          400: '#7e6cb2',
          500: '#8672BE',
          600: '#6D5D9B',
          700: '#544877',
          800: '#322B47',
          900: '#170b33',
        },
        dark: {},
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
    },
  ],
};
