/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#FDF8F3',
          dark: '#EBE0D0',
          medium: '#F5EDE0',
        },
        blush: {
          light: '#FDE8EE',
          DEFAULT: '#F2C4CE',
          medium: '#E8A0B0',
        },
        rose: {
          soft: '#D48090',
          DEFAULT: '#C97080',
          deep: '#A8405A',
          darker: '#8A3048',
        },
        sage: {
          light: '#A8C5AC',
          DEFAULT: '#7A9E7E',
          dark: '#5F8565',
        },
        garnet: '#7A2C2A',
        warm: {
          brown: '#2C1810',
          muted: '#7B5E57',
          light: '#A08070',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Lato"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient':
          'linear-gradient(135deg, #FDF8F3 0%, #F9EEF3 40%, #F2C4CE 100%)',
        'section-gradient': 'linear-gradient(180deg, #FDF8F3 0%, #F9EEF3 100%)',
        'rose-gradient': 'linear-gradient(135deg, #A8405A 0%, #C97080 100%)',
      },
    },
  },
  plugins: [],
};
