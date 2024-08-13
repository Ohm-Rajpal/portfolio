/** @type {import('tailwindcss').Config} */
module.exports = {
  
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
 extend: {
      fontFamily: {
        display: ['Oswald'],
        body: ['"Open Sans"'],
        lato: ['Lato', 'sans-serif'],
        serif: ['monrope'],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
