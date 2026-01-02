import { fontFamily } from "tailwindcss/defaultTheme";
import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // Brand Colors - Yellow as Primary
        primary: {
          50: '#fffbeb',
          100: '#fff3c4',
          200: '#ffe588',
          300: '#ffd149',
          400: '#ffd60a', // Primary yellow - your main brand color
          500: '#f59e0b',
          600: '#92400e', // FIXED: ~5.5:1 contrast on paper (was #d97706 ~2.9:1)
          700: '#78350f', // Shifted darker for gradient
          800: '#5c2a0c',
          900: '#451a03',
          950: '#2d1102',
          DEFAULT: '#ffd60a',
          foreground: '#0b0e14',
        },
        // Orange as Accent
        accent: {
          50: '#fef6ee',
          100: '#fff4eb', // FIXED: Lightened for better contrast with 700
          200: '#fad5ae',
          300: '#f6b67a',
          400: '#f18b44',
          500: '#f97316', // Orange accent
          600: '#9a3412', // FIXED: ~5.5:1 on paper (was #ea580c ~3.27:1)
          700: '#7c2d12', // Shifted darker for gradient
          800: '#6b2610',
          900: '#5a1f0e',
          950: '#431407',
          DEFAULT: '#f97316',
          foreground: '#ffffff',
        },
        // Black/Ink as secondary color for text and content
        secondary: {
          50: '#f7f5f2',
          100: '#ede8e1',
          200: '#ddd4c5',
          300: '#6b5c4d', // FIXED: ~4.8:1 contrast (was #a08660)
          400: '#4a3f35', // FIXED: higher contrast (was #654e3d)
          500: '#3a3a3a',
          600: '#2a2a2a',
          700: '#1a1a1a',
          800: '#141414',
          900: '#0b0e14', // Primary black/ink
          950: '#000000',
          DEFAULT: '#0b0e14',
          foreground: '#f7f5f2',
        },
        // Core brand colors
        ink: '#0b0e14', // Primary text
        paper: '#f7f5f2', // Background/parchment
        link: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0f766e', // Links - teal for links only
          700: '#0f5132',
          800: '#134e4a',
          900: '#134e4a',
          950: '#042f2e',
          DEFAULT: '#0f766e',
        },

        // Standard shadcn/ui colors
        border: '#e5e7eb',
        input: '#e5e7eb',
        ring: '#f97316', // Orange focus ring
        background: '#f7f5f2',
        foreground: '#0b0e14',
        destructive: {
          DEFAULT: '#ef4444',
          foreground: '#ffffff',
        },
        muted: {
          DEFAULT: '#ede8e1',
          foreground: '#6b7280',
        },
        card: {
          DEFAULT: '#f7f5f2',
          foreground: '#0b0e14',
        },
        popover: {
          DEFAULT: '#ffffff',
          foreground: '#0b0e14',
        },

        // Neutral scale based on parchment
        // WCAG AA compliant: 500+ colors have 4.5:1+ contrast on #f7f5f2
        neutral: {
          50: '#f7f5f2', // Parchment
          100: '#ede8e1',
          200: '#ddd4c5',
          300: '#bfb19a', // Adjusted for smoother gradient
          400: '#8f7d68', // Adjusted: ~4.0:1 (decorative use only)
          500: '#6b5c4d', // FIXED: ~4.8:1 contrast (was #a08660 ~3.17:1)
          600: '#5a4d40', // FIXED: ~5.8:1 contrast (was #937354 ~4.0:1)
          700: '#4a3f35', // Adjusted for gradient
          800: '#3a322b', // Adjusted for gradient
          900: '#2a2521',
          950: '#0b0e14', // Ink
        },
      },
      fontFamily: {
        sans: ["Manrope", ...fontFamily.sans],
        display: ["Manrope", ...fontFamily.sans],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-in-right': 'slideInRight 0.3s ease-out',
        'bounce-gentle': 'bounceGentle 3s infinite',
        'sloppy-sun-hover': 'sloppySunHover 3s infinite',
        'sloppy-sun-bounce-and-spin': 'sloppySunBounceAndSpin 3s infinite',
        'slow-rotation': 'slowRotation 6s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        bounceGentle: {
          '0%, 100%': {
            transform: 'translateY(-1%)',
            animationTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          },
          '50%': {
            transform: 'translateY(1%)',
            animationTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          },
        },
        sloppySunHover: {
          '0%': {
            transform: 'translateY(-1%) scale(1.25) rotate(0deg)',
            animationTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          },
          '50%': {
            transform: 'translateY(1%) scale(1.25) rotate(180deg)',
            animationTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          },
          '100%': {
            transform: 'translateY(-1%) scale(1.25) rotate(360deg)',
            animationTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          },
        },
        sloppySunBounceAndSpin: {
          '0%': {
            transform: 'translateY(-1%) rotate(0deg)',
            animationTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          },
          '50%': {
            transform: 'translateY(1%) rotate(180deg)',
            animationTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          },
          '100%': {
            transform: 'translateY(-1%) rotate(360deg)',
            animationTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          },
        },
        slowRotation: {
          '0%': {
            transform: 'scale(1.25) rotate(0deg)',
          },
          '100%': {
            transform: 'scale(1.25) rotate(360deg)',
          },
        },
      },
      // Off-kilter rotations from your brand system
      rotate: {
        '0.5': '0.5deg',
        '1.5': '1.5deg',
        '2.5': '2.5deg',
      },
      backdropBlur: {
        xs: '2px',
      },
      borderRadius: {
        lg: '12px',
        xl: '16px',
        '2xl': '24px',
      },
    },
  },
  plugins: [typography],
};