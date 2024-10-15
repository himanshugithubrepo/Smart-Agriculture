/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF',   // Custom blue
        secondary: '#F97316', // Custom orange
        accent: '#14B8A6',    // Custom teal
      },
    },
  },
  plugins: [],
}

