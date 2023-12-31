/* eslint-disable import/no-extraneous-dependencies */
import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    './vendor/laravel/jetstream/**/*.blade.php',
    './storage/framework/views/*.php',
    './resources/views/**/*.blade.php',
    './resources/js/**/*.vue',
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          50: 'var(--color-primary-50)',
          100: 'var(--color-primary-100)',
          200: 'var(--color-primary-200)',
          300: 'var(--color-primary-300)',
          400: 'var(--color-primary-400)',
          500: 'var(--color-primary-500)',
          600: 'var(--color-primary-600)',
          700: 'var(--color-primary-700)',
          800: 'var(--color-primary-800)',
          900: 'var(--color-primary-900)',
          950: 'var(--color-primary-950)',
        },
        secondary: {
          50: 'var(--color-secondary-50)',
          100: 'var(--color-secondary-100)',
          200: 'var(--color-secondary-200)',
          300: 'var(--color-secondary-300)',
          400: 'var(--color-secondary-400)',
          500: 'var(--color-secondary-500)',
          600: 'var(--color-secondary-600)',
          700: 'var(--color-secondary-700)',
          800: 'var(--color-secondary-800)',
          900: 'var(--color-secondary-900)',
          950: 'var(--color-secondary-950)',
        },
        foreground: {
          50: 'var(--color-foreground-50)',
          100: 'var(--color-foreground-100)',
          200: 'var(--color-foreground-200)',
          300: 'var(--color-foreground-300)',
          400: 'var(--color-foreground-400)',
          500: 'var(--color-foreground-500)',
          600: 'var(--color-foreground-600)',
          700: 'var(--color-foreground-700)',
          800: 'var(--color-foreground-800)',
          900: 'var(--color-foreground-900)',
          950: 'var(--color-foreground-950)',
        },
        background: {
          50: 'var(--color-background-50)',
          100: 'var(--color-background-100)',
          200: 'var(--color-background-200)',
          300: 'var(--color-background-300)',
          400: 'var(--color-background-400)',
          500: 'var(--color-background-500)',
          600: 'var(--color-background-600)',
          700: 'var(--color-background-700)',
          800: 'var(--color-background-800)',
          900: 'var(--color-background-900)',
          950: 'var(--color-background-950)',
        },
        success: {
          50: 'var(--color-success-50)',
          100: 'var(--color-success-100)',
          200: 'var(--color-success-200)',
          300: 'var(--color-success-300)',
          400: 'var(--color-success-400)',
          500: 'var(--color-success-500)',
          600: 'var(--color-success-600)',
          700: 'var(--color-success-700)',
          800: 'var(--color-success-800)',
          900: 'var(--color-success-900)',
          950: 'var(--color-success-950)',
        },
        warning: {
          50: 'var(--color-warning-50)',
          100: 'var(--color-warning-100)',
          200: 'var(--color-warning-200)',
          300: 'var(--color-warning-300)',
          400: 'var(--color-warning-400)',
          500: 'var(--color-warning-500)',
          600: 'var(--color-warning-600)',
          700: 'var(--color-warning-700)',
          800: 'var(--color-warning-800)',
          900: 'var(--color-warning-900)',
          950: 'var(--color-warning-950)',
        },
        danger: {
          50: 'var(--color-danger-50)',
          100: 'var(--color-danger-100)',
          200: 'var(--color-danger-200)',
          300: 'var(--color-danger-300)',
          400: 'var(--color-danger-400)',
          500: 'var(--color-danger-500)',
          600: 'var(--color-danger-600)',
          700: 'var(--color-danger-700)',
          800: 'var(--color-danger-800)',
          900: 'var(--color-danger-900)',
          950: 'var(--color-danger-950)',
        },
      },
    },
  },

  plugins: [forms, typography],
};
