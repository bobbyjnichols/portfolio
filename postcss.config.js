module.exports = {
  parser: false,
  syntax: 'postcss-scss',
  plugins: {
    stylelint: {},
    colorguard: {threshold: 5},
    autoprefixer: {}
  }
};