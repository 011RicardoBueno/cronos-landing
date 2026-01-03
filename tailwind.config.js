/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#6366f1',
          secondary: '#8b5cf6',
          accent: '#10b981'
        }
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      }
    },
  },
  plugins: [],
  // Purge cores não usadas - apenas safelist dinâmicas
  safelist: [
    'bg-indigo-500',
    'bg-violet-500',
    'bg-emerald-500',
    'bg-rose-500',
    'bg-amber-500',
    'text-indigo-400',
    'text-violet-400',
    'text-emerald-400',
    'text-rose-400',
    'text-amber-400',
    'border-indigo-500',
    'border-violet-500',
    'from-indigo-500',
    'to-violet-500',
  ]
}