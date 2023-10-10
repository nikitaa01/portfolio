/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        main: '#0170b8',
      },
      screens: {
        mobile: { 'max': '640px' },
        tablet: { 'min': '641px', 'max': '1200px' },
        standard: { 'min': '1201px' },
        noMobile: { 'min': '641px' },
      },
    },
  },
  plugins: [],
}
