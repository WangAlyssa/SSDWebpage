import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#000000',
        sblue: '#B3E5FC',
      },
      fontFamily: {
        serif: ['var(--font-dm-serif)', 'serif'],
        sans: ['var(--font-outfit)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-base': 'linear-gradient(135deg, #FAF9F6 0%, #EAE5DB 100%)',
      },
    },
  },
  plugins: [],
}
export default config