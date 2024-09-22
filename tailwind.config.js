/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.vue',
    './src/**/*.jsx',
    './src/**/*.js',
    './index.html',
    './src/**/*.tsx',
    './src/**/*.ts',     
  ],
  theme: {
    extend: {
      colors: {
        // Define custom colors here
        primary: {
          DEFAULT: '#FF5733',
        },
      },
      fontFamily: {
        kode: ['Kode Mono', 'monospace'],
      },
    },
    
  },
  plugins: [],
}

