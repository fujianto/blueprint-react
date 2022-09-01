module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
        ecmaFeatures: {
            jsx: true, // Allows for the parsing of JSX
        },
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    // eslint-disable-next-line prettier/prettier
    extends: [
        'plugin:react/recommended', 
        'plugin:@typescript-eslint/recommended', 
        'plugin:prettier/recommended'
    ],
    rules: {},
};
