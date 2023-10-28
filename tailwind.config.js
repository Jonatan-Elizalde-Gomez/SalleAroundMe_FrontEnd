/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sw: {
          white: "#FFFFFF",
          "main-darker": "#F8FAFC", // Main White (Darker) - General background
          black: "#313131", // Main Black - Text base color
          "gray-border": "#E3E3E8", // Main Gray (Border)
          "main-lighter": "#F6F6F9", // Main Gray (Lighter) - Gray background
          gray: "#6F6F6F", // Main Gray - Text gray
          blue: "#0E8BD1", // Main Blue - Active states
          red: "#A51E21", // Main Red - Error states
          green: "#29B95F", // Main Green - Success states
          yellow: "#FBBF24", // Main Yellow - Warning states
          "gray-placeholder": "#D6D3D1", // Main Gray (Placeholder)
        },
      },
      fontFamily: {
        sans: ["Inter", "sans"], // Add the Inter font
      },
    },
  },
  plugins: [],
};
