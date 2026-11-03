/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        night: '#0b1220',
        ink: {
          DEFAULT: '#172238',
          soft: '#1f2d49',
        },
        graphite: '#3d3e3f',
        estate: {
          DEFAULT: '#222f13',
          lift: '#2f4019',
        },
        cream: '#f4eee2',
        paper: '#ece5d6',
        parchment: '#f6f1e8',
        brass: {
          DEFAULT: '#b89a5e',
          light: '#d8c08a',
          deep: '#7a6230',
        },
        dusk: {
          peach: '#e8b98f',
          rose: '#c98f86',
        },
        'night-indigo': '#0e1630',
        'window-glow': '#f3c77a',
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Jost', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.24em',
        relaxed: '0.18em',
      },
    },
  },
  plugins: [],
}

