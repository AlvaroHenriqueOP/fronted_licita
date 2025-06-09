/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#BE1E1F',
        primaryDark: '#9A1718',
        primaryLight: '#D13435',
        secondary: '#000000',
        secondaryLight: '#333333',
        accent: '#FFFFFF',
        accentDark: '#F0F0F0',
        red: {
          light: '#D13435',
          DEFAULT: '#BE1E1F',
          dark: '#9A1718',
        },
        gray: {
          light: '#F0F0F0',
          DEFAULT: '#CCCCCC',
          dark: '#333333',
        },
        black: {
          light: '#333333',
          DEFAULT: '#000000',
          dark: '#000000',
        },
      },
      boxShadow: {
        'soft': '0 4px 6px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1)',
        'card': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'glow': '0 0 15px rgba(190, 30, 31, 0.5)',
        'glow-accent': '0 0 15px rgba(0, 0, 0, 0.3)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #BE1E1F, #D13435)',
        'gradient-secondary': 'linear-gradient(to right, #000000, #333333)',
        'gradient-accent': 'linear-gradient(to right, #BE1E1F, #000000)',
      },
    },
  },
  plugins: [],
}

