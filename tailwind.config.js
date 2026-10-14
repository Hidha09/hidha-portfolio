/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAFAFC",
        surface: "#FFFFFF",
        surfaceMuted: "#F4F4F8",
        charcoal: {
          900: "#121316",
          800: "#1E2024",
          700: "#2D3139",
          600: "#4B5162",
          500: "#6B7280",
          400: "#9CA3AF",
          300: "#CBD5E1",
          200: "#E2E8F0",
          100: "#F1F5F9",
          50: "#F8FAFC",
        },
        lavender: {
          50: "#F5F3FF",
          100: "#EDE9FE",
          200: "#DDD6FE",
          300: "#C4B5FD",
          400: "#A78BFA",
          500: "#8B5CF6",
          600: "#7C3AED",
          700: "#6D28D9",
        },
        accentBlue: {
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px 0 rgba(0, 0, 0, 0.02)',
        'card': '0 4px 20px -2px rgba(18, 19, 22, 0.04), 0 2px 6px -1px rgba(18, 19, 22, 0.02)',
        'card-hover': '0 12px 30px -4px rgba(18, 19, 22, 0.08), 0 4px 12px -2px rgba(18, 19, 22, 0.03)',
        'glow-lavender': '0 0 25px -5px rgba(124, 58, 237, 0.15)',
      },
      letterSpacing: {
        tightest: '-0.035em',
        tighter: '-0.02em',
      }
    },
  },
  plugins: [],
}
