module.exports = {
  plugins: [
    require("postcss-import"),
    require("@tailwindcss/jit")("./tailwind.config.js"),
    require("autoprefixer"),
  ],
};
