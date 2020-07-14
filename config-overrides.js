/* eslint-disable import/no-extraneous-dependencies */
const { addWebpackAlias, override, useEslintRc } = require('customize-cra')
const path = require('path')

module.exports = override(
  useEslintRc(path.resolve(__dirname, '.eslintrc')),
  addWebpackAlias({
    '@src': path.resolve(__dirname, 'src'),
    '@views': path.resolve(__dirname, 'src/views'),
    '@components': path.resolve(__dirname, 'src/components'),
    '@services': path.resolve(__dirname, 'src/services'),
    '@utils': path.resolve(__dirname, 'src/utils'),
    '@validations': path.resolve(__dirname, 'src/validations'),
    '@constants': path.resolve(__dirname, 'src/constants'),
  }),
)
