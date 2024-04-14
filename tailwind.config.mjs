const defaultTheme = require("tailwindcss/defaultTheme")
const scrollAnimt = require("@jeegscreator/scroll-view-animation")
const animations = require("@midudev/tailwind-animations")

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        innerf: "inset 0 0 16px #7f7cb888",
      },
      colors: {
        zinc: {
          border: "#434343",
          background: "#010101",
        },
        blue: {
          text: "#4D74FF",
          deep: "#0038FF",
        },
      },
      fontFamily: {
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [scrollAnimt, animations],
}
