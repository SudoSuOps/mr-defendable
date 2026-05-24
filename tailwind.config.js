/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          900: '#0a0a0a',
          800: '#1a1a1a',
          700: '#2a2a2a',
          600: '#444444',
          500: '#5a5a5a',
        },
        gold: {
          DEFAULT: '#d4a017',
          50: '#fdf8e8',
          100: '#fbf1d0',
          200: '#f7e3a1',
          300: '#f0cf66',
          400: '#e3b73d',
          500: '#d4a017',
          600: '#a37b11',
          700: '#7a5b0d',
          800: '#5a3e00',
          900: '#3d2a00',
        },
        cream: {
          DEFAULT: '#f7f3e6',
          50: '#fdfcf7',
          100: '#faf8ed',
          200: '#f7f3e6',
          300: '#ede5c8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['Menlo', 'Monaco', 'Courier New', 'monospace'],
        serif: ['Georgia', 'Times New Roman', 'serif'],
      },
      maxWidth: {
        'reading': '68ch',
      },
    },
  },
  plugins: [],
};
