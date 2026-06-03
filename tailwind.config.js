/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'monospace'],
        rajdhani: ['Rajdhani', 'sans-serif'],
      },
      colors: {
        neon: {
          cyan: '#00f5ff',
          pink: '#ff00ff',
          green: '#39ff14',
          purple: '#bf00ff',
          red: '#FF0000',
        },
        dark: {
          DEFAULT: '#030810',
          2: '#060f1e',
          3: '#0a1628',
          4: '#0d1f3c',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'pulse-neon': 'pulse-neon 2s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 4s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { left: '-100%' },
          '100%': { left: '100%' },
        },
        'pulse-neon': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        'gradient-shift': {
          '0%, 100%': { filter: 'drop-shadow(0 0 20px rgba(0,245,255,0.5))' },
          '50%': { filter: 'drop-shadow(0 0 30px rgba(255,0,255,0.6))' },
        },
        glow: {
          'from': { 'box-shadow': '0 0 10px #00f5ff, 0 0 20px #00f5ff, 0 0 40px #00f5ff' },
          'to': { 'box-shadow': '0 0 20px #00f5ff, 0 0 40px #00f5ff, 0 0 80px #00f5ff' },
        },
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(rgba(0,245,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,255,0.03) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
    },
  },
  plugins: [],
}
