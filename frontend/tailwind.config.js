/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        lightTheme: {
          primary: "#0066FF", // F1 Blue - a professional, calming blue
          "primary-focus": "#0052CC",
          "primary-content": "#ffffff",

          secondary: "#15151E", // Dark charcoal for secondary elements
          "secondary-focus": "#2A2A3E",
          "secondary-content": "#ffffff",

          accent: "#00A651", // F1 Green - vibrant green for accents
          "accent-focus": "#008842",
          "accent-content": "#ffffff",

          neutral: "#E0E5EB", // Medium gray for better contrast with white
          "neutral-focus": "#C0C8D2",
          "neutral-content": "#15151E",

          "base-100": "#FFFFFF", // Clean white for the main background
          "base-200": "#F0F4F8", // More distinct off-white for cards and sections
          "base-300": "#E0E5EB", // Lighter gray for nested elements
          "base-content": "#15151E", // Dark charcoal for excellent readability

          info: "#0052CC", // Blue tone for info messages
          success: "#00A651", // Green for success messages
          warning: "#FFB81C", // F1 Yellow - warning color
          error: "#E10600", // Red for error messages
        },
      },
      {
        darkTheme: {
          primary: "#0066FF", // F1 Blue - keeping the blue for dark theme
          "primary-focus": "#3380FF",
          "primary-content": "#ffffff",

          secondary: "#2A2A3E", // Medium charcoal for secondary elements
          "secondary-focus": "#3A3A4E",
          "secondary-content": "#ffffff",

          accent: "#00CC66", // Brighter green for dark theme
          "accent-focus": "#00DD77",
          "accent-content": "#ffffff",

          neutral: "#1A1A1F", // Very dark charcoal for backgrounds
          "neutral-focus": "#2A2A2F",
          "neutral-content": "#E5E5E5",

          "base-100": "#0A0A0F", // The primary dark background color - very dark
          "base-200": "#15151E", // For cards and layered sections
          "base-300": "#1A1A2E",
          "base-content": "#E5E5E5", // Light grey for comfortable reading

          info: "#3380FF", // Brighter blue for dark theme
          success: "#00CC66", // Brighter green for dark theme
          warning: "#FFCC33", // Brighter yellow for dark theme
          error: "#FF3333", // Brighter red for dark theme
        },
      },
    ],
  },
};