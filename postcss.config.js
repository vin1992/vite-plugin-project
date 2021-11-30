const presetEnv = require('postcss-preset-env')
const generateTheme = require('@mf2e/postcss-generate-theme')

module.exports = {
  plugins: [
    presetEnv({
      stage: 0,
    }),
  ],
}
