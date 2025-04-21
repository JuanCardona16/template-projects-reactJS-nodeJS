import { rules } from 'eslint-config-prettier';
import { env } from 'process';

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  env: {
    node: true,
    es2020: true,
  },
  plugins: ['@typescript-eslint', 'prettier', 'import'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // 👈 Activa prettier como una regla de ESLint
  ],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true, trailingComma: 'all' }], // 👈 Configuración de prettier
    'no-console': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'no-undef': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
};
