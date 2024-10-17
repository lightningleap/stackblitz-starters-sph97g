import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'matte-green': '#7BAA69',
        'matte-green-dark': '#659A53',
        'off-white': '#F9F7F0',
        'warm-brown': '#8B5E3C',
        'warm-brown-light': '#A47556',
        'dark-gray': '#4D4D4D',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'lato': ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;