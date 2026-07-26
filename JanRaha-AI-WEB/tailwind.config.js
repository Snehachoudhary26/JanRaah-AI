/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brandPrimary: "#1E3A8A",    // Deep Civic Blue
        brandSecondary: "#F97316",  // Action Amber/Saffron
        brandBg: "#F8FAFC"
      }
    },
  },
  plugins: [],
};
