/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0a0a0f',
        'bg-secondary': '#111118',
        'bg-tertiary': '#1a1a24',
        'bg-card': '#12121a',
        'text-primary': '#f0f0f5',
        'text-secondary': '#8888a0',
        'text-muted': '#55556a',
        'accent': '#6c63ff',
        'accent-hover': '#7b73ff',
        'accent-secondary': '#00d4aa',
        'border-custom': 'rgba(255, 255, 255, 0.06)',
        'border-hover': 'rgba(255, 255, 255, 0.12)',
        // Light mode
        'bg-primary-light': '#f8f8fc',
        'bg-secondary-light': '#ffffff',
        'bg-tertiary-light': '#eef0f6',
        'bg-card-light': '#ffffff',
        'text-primary-light': '#1a1a2e',
        'text-secondary-light': '#555570',
        'text-muted-light': '#8888a0',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-1': 'linear-gradient(135deg, #6c63ff, #00d4aa)',
        'gradient-2': 'linear-gradient(135deg, #6c63ff, #ff6b9d)',
      },
      boxShadow: {
        'card': '0 4px 30px rgba(0,0,0,0.3)',
        'glow': '0 0 40px rgba(108,99,255,0.15)',
        'glow-hover': '0 0 60px rgba(108,99,255,0.25)',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}

