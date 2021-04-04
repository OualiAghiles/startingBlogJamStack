module.exports = {
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
       colors: {
           brand: {
             base: 'var(--color-brand)',
             light: 'var(--color-brand-light)',
             medium: 'var(--color-brand-medium)',
             dark: 'var(--color-brand-dark)'
           },
           accent: {
             base: 'var(--color-accent)',
             light: 'var(--color-accent-light)',
             medium: 'var(--color-accent-medium)',
             dark: 'var(--color-accent-dark)',
             darken: 'var(--color-accent-darken)'
           },
           'body-color': 'var(--color-bg-body)'
         },
         fontFamily: {
         }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
  purge: ["./src/**/*.js", "./src/**/*.njk", "./src/**/*.svg"],
};
