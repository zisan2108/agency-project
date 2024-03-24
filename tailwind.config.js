/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'neturalSilver' : '#F5F7FA',
        'neturalDGrey' :  '#4D4D4D',
        'brandPrimary' :  '#4CAF4F',
        'neturalGrey' :   '#717171',
        'gray900' :   '#18191F',
        'bg-green-600' : '#1E88E5',
        'text-green-600' : '#1E88E5'
      }
    },
  },
  plugins: [],
}