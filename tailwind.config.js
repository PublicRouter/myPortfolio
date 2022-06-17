module.exports = {
  content: [
    "./src/App.js",
    "./src/components/NavContainer.js",
    "./src/components/HomeMainContent.js",
    "./src/components/Footer.js",
    "./src/components/About.js",
    "./src/components/Contact.js",
    "./src/components/Experience.js",
    "./src/components/Work.js",
    "./src/components/About.js",
    "./src/components/ProjectExports.js",
    "./src/components/Sphere.js",
    "./src/components/Hamburger.js",
    "./src/components/Header.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        Oswald: ["Oswald", "sans-serif"],
        OpenSans: ["Open Sans", "sans-serif"],
        Cursive1: ["La Belle Aurore", "cursive"],
        DancingScript: ["La Belle Aurore", "cursive"],
      },
      animation: {
        'pulse-slow': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 16s linear infinite',
        'spin-double-slow': 'spin 32s linear infinite',
        'reverse-spin': 'reverse-spin 16s linear infinite'
      },
      keyframes: {
        'reverse-spin': {
          from: {
            transform: 'rotate(360deg)'
          },
        }
      }
    },
  },
  plugins: [],
}
