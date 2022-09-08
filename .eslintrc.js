// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const path = require('path');

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX
    },
    "project": "./tsconfig.json",
    "tsconfigRootDir": "./"
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      alias: {
        map: [
          ['@', path.resolve(__dirname, 'src')], 
          ['@pages', path.resolve(__dirname, 'src/pages')],
          ['@images', path.resolve(__dirname, 'src/assets/images')]
        ],
      },
    },
  },
  "plugins": [
    "@typescript-eslint",
    "import"
  ],
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier'
  ],
  rules: {}
};
