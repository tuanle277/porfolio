// FILE: tailwind.config.mjs
// This file configures Tailwind CSS.
// You can customize theme settings (colors, fonts, etc.) here.

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'], // Files Tailwind should scan
  theme: {
    extend: {
      // Add custom theme extensions here (e.g., colors, fonts)
      fontFamily: {
        // Use 'Inter' font family (make sure to import it in Layout.astro)
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        // Simple fade-in animation
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [], // Add any Tailwind plugins here
}
