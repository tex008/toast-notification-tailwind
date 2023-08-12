/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "Arial", "sans-serif"],
      },
      animation: {
        "notification-in": "notification-enter 0.2s linear" 
      },
      keyframes: {
        "notification-enter": {
          "0%": { transform: "translateX(18rem)", opacity: 0, },
          "100%": { transform: "translateX(0rem)", opacity: 100, },
        },
      },
    },
  },
  plugins: [],
};
