/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  corePlugins: {
    preflight: true,
  },
  theme: {
    extend: {
      transitionDuration: {
        DEFAULT: '500ms',
      },
      colors: {
        main: '#F97315',
        'main-dark': '#f66600',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
