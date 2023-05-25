/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './App.{js,jsx,ts,tsx}',
    './screens/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        head: ['Queensides-Medium', 'sans-serif'],
        main: ['Poppins', 'sans-serif'],
        log: ['Roboto Mono', 'monospace'],
      },
      colors: {
        primary: '#4503ad',
        'primary-color': '#01B0EE',
        background: '#121212',
        secondary: '#454c52',
        text: '#121212',
        white: '#ffffff',
        'primary-box': '#3E3E3E',
      },
      // boxShadow: {
      //   "light-shadow": "0px 4px 4px rgba(0, 0, 0, 0.25)",
      //   glass: "0 0 1rem 0 rgba(0, 0, 0, .2)",
      // },
      height: {
        card: '300px',
        button: '40px',
      },
      width: {
        card: '250px',
        button: '100px',
      },
    },
  },
  plugins: [],
};
