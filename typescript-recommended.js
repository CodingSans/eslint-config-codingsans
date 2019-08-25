module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: '.',
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    eqeqeq: 'error',
    'prefer-template': 'error',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-misused-promises': 'warn',
    '@typescript-eslint/require-await': 'warn',
    '@typescript-eslint/camelcase': 'warn',
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/explicit-function-return-type': ['warn', { allowExpressions: true }],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
      },
    ],
  },
};
