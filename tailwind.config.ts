import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFCFB',
          100: '#FBF9F6',
          200: '#F7F3ED',
          300: '#F2EBE0',
          400: '#EDE3D3',
          500: '#E8DBC6',
        },
        sage: {
          50: '#F5F7F5',
          100: '#E8EDE8',
          200: '#D4DED4',
          300: '#B8C9B8',
          400: '#9BB49B',
          500: '#7E9F7E',
          600: '#6B8A6B',
        },
        powder: {
          50: '#F9FAFB',
          100: '#F3F5F7',
          200: '#E5EAF0',
          300: '#D4DCE6',
          400: '#B8C5D6',
          500: '#9CAEC6',
        },
        terracotta: {
          50: '#FDF7F5',
          100: '#FAEDE8',
          200: '#F5DDD4',
          300: '#EFC4B5',
          400: '#E9AB96',
          500: '#E39277',
        },
        honey: {
          50: '#FFFBF5',
          100: '#FFF6E8',
          200: '#FFEDC7',
          300: '#FFE3A6',
          400: '#FFD985',
          500: '#FFCF64',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
