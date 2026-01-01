module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        // Kiddio-inspired palette
        navy: {
          50: '#e6eef5',
          100: '#c0d4e6',
          200: '#96b8d6',
          300: '#6c9cc5',
          400: '#4d87b9',
          500: '#2f5f8e', // Primary navy
          600: '#2a5580',
          700: '#234870',
          800: '#1d3c5f',
          900: '#122843',
        },
        coral: {
          50: '#fef3f0',
          100: '#fce0d9',
          200: '#f9c9bd',
          300: '#f5b1a0',
          400: '#f29f8a',
          500: '#e07a5f', // Primary coral
          600: '#d86a4d',
          700: '#c95a3d',
          800: '#b54a2f',
          900: '#943a22',
        },
        cream: '#faf9f7',
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
        }
      },
      fontFamily: {
        display: ['Nunito', 'system-ui', 'sans-serif'],
        body: ['Quicksand', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
        'slide-up': 'slide-up 0.6s ease-out',
        'fade-in': 'fade-in 0.8s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      boxShadow: {
        'card': '0 4px 20px rgba(47, 95, 142, 0.15)',
        'card-hover': '0 8px 30px rgba(47, 95, 142, 0.25)',
        'coral': '0 4px 20px rgba(224, 122, 95, 0.4)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
