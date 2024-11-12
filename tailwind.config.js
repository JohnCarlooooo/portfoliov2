/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ibmPlexMono: ["var(--font-ibmPlexMono)"],
      },
      colors: {
        orange: "#f94d0a",
        customGray: "#191919",
        customLightGray: "#373737",
        customWhite: "#dddddd",
      },
    },
  },
  plugins: [],
};
