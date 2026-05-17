import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        stark: {
          bg: '#0a0a0f',
          card: '#111119',
          'card-hover': '#1a1a25',
          surface: '#15151f',
        },
        arc: {
          blue: '#3b82f6',
          'blue-light': '#60a5fa',
          'blue-glow': 'rgba(59,130,246,0.15)',
          gold: '#f59e0b',
          'gold-light': '#fbbf24',
          'gold-glow': 'rgba(245,158,11,0.15)',
        },
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'typewriter-blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(59,130,246,0.3), 0 0 60px rgba(59,130,246,0.1)' },
          '50%': { boxShadow: '0 0 30px rgba(59,130,246,0.5), 0 0 80px rgba(59,130,246,0.2)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
export default config