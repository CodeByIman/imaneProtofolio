const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', ...fontFamily.sans],
      },
      colors: {
        primary: {
          400: '#00E0F3',
          500: '#00c4fd',
        },
        dark: '#333333',
      },
      animation: {
        "twinkle": "twinkle 5s infinite ease-in-out",
      },
      keyframes: {
        twinkle: {
          "0%, 100%": { opacity: 0.2, transform: "scale(1)" },
          "50%": { opacity: 1, transform: "scale(1.2)" },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};