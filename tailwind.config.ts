import headlessuiPlugin from '@headlessui/tailwindcss'
import formsPlugin from '@tailwindcss/forms'
import { type Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      xs: ['0.625rem', { lineHeight: '1rem' }], // 10px
      sm: ['0.75rem', { lineHeight: '1.5rem' }], // 12px
      base: ['1rem', { lineHeight: '1.75rem' }], // 16px
      lg: ['1.375rem', { lineHeight: '2rem' }], // 22px
      xl: ['1.25rem', { lineHeight: '2rem' }], // 20px
      '2xl': ['1.5rem', { lineHeight: '2rem' }], // 24px
      '3xl': ['1.75rem', { lineHeight: '2.5rem' }], // 28px
      '4xl': ['2rem', { lineHeight: '3.5rem' }], // 32px
      '5xl': ['2.25rem', { lineHeight: '3.5rem' }], // 36px
      '6xl': ['3.375rem', { lineHeight: '1' }], // 54px
      '7xl': ['4.5rem', { lineHeight: '1.1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    extend: {
      borderRadius: {
        md: '7px',
        '4xl': '2rem',
      },
      fontFamily: {
        sans: 'var(--font-inter)',
        display: 'var(--font-lexend)',
      },
      maxWidth: {
        '2xl': '40rem',
      },
      colors: {
        'contrast-900': '#182744',
        'contrast-600': '#43566b',
        'primary-900': '#075ac7',
        'primary-800': '#378bf8',
        'secondary-800': '#f6f8fc',
        'secodanry-900': '#e1e9f4',
      },
    },
  },
  plugins: [formsPlugin, headlessuiPlugin],
} satisfies Config
