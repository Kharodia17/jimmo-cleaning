/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary — bright teal, clean & professional
        primary: '#007A87',
        'primary-container': '#A0E8F0',
        'surface-tint': '#007A87',
        'on-primary': '#FFFFFF',
        'on-primary-container': '#001F24',
        'on-primary-fixed': '#001F24',
        'on-primary-fixed-variant': '#005660',
        'primary-fixed': '#D0F6FF',
        'primary-fixed-dim': '#4ECDD8',
        'inverse-primary': '#4ECDD8',

        // Tertiary — deeper teal/blue for contrast
        tertiary: '#005B66',
        'tertiary-fixed': '#B0EEF8',
        'tertiary-container': '#5ABFCC',
        'tertiary-fixed-dim': '#2EAABB',
        'on-tertiary': '#FFFFFF',
        'on-tertiary-container': '#001C20',
        'on-tertiary-fixed': '#001C20',
        'on-tertiary-fixed-variant': '#003E47',

        // Secondary — olive green, natural complement to teal
        secondary: '#526522',
        'secondary-fixed': '#d4ec99',
        'secondary-fixed-dim': '#b8d07f',
        'secondary-container': '#d1e996',
        'on-secondary': '#ffffff',
        'on-secondary-container': '#566a25',
        'on-secondary-fixed': '#151f00',
        'on-secondary-fixed-variant': '#3b4d0a',

        // Surfaces — very slight teal tint, crisp and clean
        'surface-bright': '#F4FEFF',
        'surface-dim': '#DDF0F2',
        'inverse-surface': '#1A2D2F',
        'surface-container': '#E8F8FA',
        'on-background': '#0A1C1E',
        'outline-variant': '#B0CDD0',
        background: '#F4FEFF',
        outline: '#4A6E72',
        'surface-container-lowest': '#FFFFFF',
        'surface-container-highest': '#D8F0F2',
        'surface-container-high': '#E0F4F6',
        'surface-container-low': '#F0FCFE',
        surface: '#F4FEFF',
        'on-surface': '#0A1C1E',
        'on-surface-variant': '#2C4A4D',
        'surface-variant': '#D8EDEF',
        'inverse-on-surface': '#E8F8FA',

        // Error
        error: '#ba1a1a',
        'error-container': '#ffdad6',
        'on-error': '#ffffff',
        'on-error-container': '#93000a',
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1.5rem',
        full: '9999px',
      },
      fontFamily: {
        headline: ['Plus Jakarta Sans', 'sans-serif'],
        body: ['Work Sans', 'sans-serif'],
        label: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
