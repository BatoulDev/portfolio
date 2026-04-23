/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        surface: '#FFF9ED',
        'surface-container-low': '#F9F3E7',
        'surface-container-lowest': '#FFFFFF',
        'surface-container-highest': '#F5EEE0',
        primary: '#795558',
        'primary-container': '#E2B4B7',
        'primary-fixed-dim': '#EABBBE',
        'on-surface': '#1D1C15',
        'on-primary': '#FFFFFF',
        'on-primary-container': '#3D1F22',
      },
      fontFamily: {
        display: ['Plus Jakarta Sans', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['3rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'body-lg': ['1rem', { lineHeight: '1.6' }],
      },
      borderRadius: {
        'xl': '1.5rem',
        'full': '9999px',
      },
      boxShadow: {
        'ambient': '0 12px 40px rgba(29, 28, 21, 0.04)',
        'ambient-hover': '0 12px 40px rgba(29, 28, 21, 0.06)',
      },
      spacing: {
        'section': '10rem',
        'section-lg': '12rem',
      },
      backgroundImage: {
        'signature-gradient': 'linear-gradient(135deg, #E2B4B7 0%, #EABBBE 100%)',
      },
    },
  },
  plugins: [],
}