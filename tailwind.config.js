/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,ts,jsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        // Simple 8 row grid
        8: "repeat(8, minmax(0, 1fr))",

        // Complex site-specific row configuration
        layout: "200px minmax(900px, 1fr) 100px",
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
}

