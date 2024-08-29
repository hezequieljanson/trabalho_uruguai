// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ['expo', 'prettier'],
  plugins: ['prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['tsconfig.json'],
  },
  settings: {
    'import/ignore': ['node_modules'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
  rules: {
    'prettier/prettier': [
      'warn',
      {
        tabWidth: 2,
        printWidth: 140,
        semi: true,
        singleQuote: true,
        endOfLine: 'auto',
        'no-bracket-spacing': false,
      },
    ],
  },
};
