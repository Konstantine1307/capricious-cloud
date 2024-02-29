
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'brown-dark': 'rgb(var(--accent-brown))',
        'brown-op95': 'rgba(var(--accent-brown), 0.95)',
        'beige-light': 'rgb(var(--accent-beige))',
        'beige-darker': 'rgb(var(--accent-darker-beige))',
      },
      fontFamily: {
        'serif-pro': ['Source Serif Pro', 'serif'],
      }
    },
  },
  plugins: [],
};
