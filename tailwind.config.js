/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 'primary': '#005897',
        'primary': 'rgb(41 129 193)',
        // 'primary': '#0258BA',
      }
    }
  },
  plugins: [],
};
