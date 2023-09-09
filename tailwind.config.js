/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customDark: '#0A1126',
        customCyan: '#559BD9',
        customGreen: '#51718C',
        customOrange: '#F27B50',
        customSalmon: '#BF826B',
        customDarkBack: "#171E26",
      },
    },
  },
  plugins: [],
}

