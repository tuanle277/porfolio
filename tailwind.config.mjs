// FILE: tailwind.config.mjs
// This file configures Tailwind CSS.
// You can customize theme settings (colors, fonts, etc.) here.

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"], // Files Tailwind should scan
  theme: {
    extend: {
      // Add custom theme extensions here (e.g., colors, fonts)
      fontFamily: {
        // Use 'Inter' font family (make sure to import it in Layout.astro)
        sans: ["Inter", "sans-serif"],
      },
      animation: {
        // Simple fade-in animation
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "fade-in-left": "fadeInLeft 0.8s ease-out forwards",
        "fade-in-right": "fadeInRight 0.8s ease-out forwards",
        "fade-in-down": "fadeInDown 0.8s ease-out forwards",
        "fade-in-scale": "fadeInScale 0.8s ease-out forwards",
        "letter-reveal": "letterReveal 0.8s ease-out forwards",
        "spin-slow": "spinSlow 10s linear infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeInRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInScale: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        letterReveal: {
          "0%": {
            opacity: "0",
            transform: "translateY(10px) scale(0.8) rotate(-5deg)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0) scale(1) rotate(0deg)",
          },
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [], // Add any Tailwind plugins here
};
