/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    screens: {
      'sm': {'max': '599px' },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': { 'min': '600px', 'max': '950px' },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': { 'min': '951px' },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }
    },
    colors: {
      // Colors
      "background-color": "#000000",
      'white': '#ffffff',
      'black': '#000000',
      'black-gray': '#262626',
      'black-light': '#1a1a1a',
      'navy': '#000080',
      'red': '#ff0000',
      'blue': '#00bfff',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'gray': '#8492a6', 
      'gray-light': '#cccccc',
      'gray-dark': '#404040',
      'blue_border': '#006dff',
      'yellow': '#ffff00',
      'project-icon': '#00bfff',
      'white-input-light': '#f2f2f2',
    },
    extend: {},
  },
  plugins: [],
}

