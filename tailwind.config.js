module.exports = {
  content: ["./src/**/*.{jsx, css}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        Bgcolor: "#F6EFE8",
        Purple: "#4A154B",
        Blue: "#1B72E8",
        Black: "#000000",
      },
    },
  },
  variants: {
    extend: { padding: ["last"] },
  },
  plugins: [],
};
