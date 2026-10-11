/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        site: {
          primary: '#EA580C',
          secondary: '#C2410C',
          accent: '#F97316',
          bg: '#18120C',
          surface: '#261C14',
          text: '#FFF7ED',
          muted: '#FDBA74',
        }
      }
    },
  },
  plugins: [],
}
