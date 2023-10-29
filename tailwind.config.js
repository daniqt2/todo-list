/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1D2125",
        secondary: "#B6C2CF",
        tertiary: "#569CFD",
        darkPuRPLE: "#2B263F",
        light: "#B3BAC5",
      },
    },
  },
  plugins: ["@atlaskit/design-system"],
  extends: ["plugin:@atlaskit/design-system/recommended"],
};
