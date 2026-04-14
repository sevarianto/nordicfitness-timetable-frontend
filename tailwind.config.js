/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx}",
    ],
    theme: {
      extend: {
        colors: {
          nf: {
            mork:   "#1a2e44",
            aksent: "#e8a020",
            lys:    "#f5f7fa",
            kant:   "#dde3ea",
            tekst:  "#2c3e50",
            subtil: "#6b7c93",
          },
        },
        fontFamily: {
          sans: ["Segoe UI", "system-ui", "sans-serif"],
        },
      },
    },
    plugins: [],
  }