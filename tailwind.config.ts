import headlessuiPlugin from '@headlessui/tailwindcss'
import formsPlugin from '@tailwindcss/forms'
import { type Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      'contrast-900': '#182744',
      'contrast-600': '#43566b',
      'primary-900': '#075ac7',
      'primary-800': '#378bf8',
      'secondary-800': '#f6f8fc',
      'secondary-900': '#e1e9f4',
    },
    textColor: {
      "white": "#fff",
    },
    screens: {
      "max-375px": {"max": "375px"},
      "min-375px": {"min": "376px"},
      "max-475px": {"max": "475px"},
      "max-400px": {"max": "400px"},
      "min-475px": {"min": "475px"},
      "max-680px": {"max": "680px"},
      "min-680px": {"min": "681px"},
      "min-768px": {"min": "769px"},
      "max-768px": {"max": "768px"},
      "max-834px": {"max": "834px"},
      "min-834px": {"min": "835px"},
      "max-1060px": {"max": "1060px"},
      "min-1060px": {"min": "1061px"},
      "max-1200px": {"max": "1200px"},
      "min-1200px": {"min": "1201px"},
      "min-1440px": {"min": "1441px"},
      "max-1440px": {"max": "1440px"},
      "max-1260px": {"max": "1260px"},
      "min-1260px": {"min": "1261px"},
      "max-1330px": {"max": "1330px"},
      "min-1330px": {"min": "1331px"},
    },
    fontSize: {
      // @ts-ignore
      "17.5px": "1.09375rem",
      "25px": "1.5625rem",
      "14px": ".875rem",
      "13px": ".75rem",
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '2rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['2rem', { lineHeight: '2.5rem' }],
      '4xl': ['2.5rem', { lineHeight: '3.5rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1.1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    extend: {
      borderRadius: {
        '4xl': '2rem',
      },
      maxWidth: {
        '2xl': '40rem',
      },
    },
  },
  plugins: [formsPlugin, headlessuiPlugin],
} satisfies Config
