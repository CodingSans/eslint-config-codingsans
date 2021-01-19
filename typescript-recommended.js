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
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        bracketSpacing: true,
        trailingComma: 'all',
        singleQuote: true,
        semi: true,
        useTabs: false,
        tabWidth: 2,
        printWidth: 120,
      },
    ],
    eqeqeq: 'error',
    curly: 'error',
    'no-trailing-spaces': 'error',
    'eol-last': ['error', 'always'],
    'prefer-template': 'error',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-misused-promises': 'warn',
    '@typescript-eslint/require-await': 'off',
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/explicit-function-return-type': ['warn', { allowExpressions: true }],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/array-type': ['error', { array: true }],

    '@typescript-eslint/explicit-module-boundary-types': [
      'warn',
      {
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true,
        allowDirectConstAssertionInArrowFunctions: true,
        shouldTrackReferences: true,
      },
    ],
    '@typescript-eslint/naming-convention': [
      'warn',
      { selector: 'default', format: ['camelCase'] },

      { selector: 'variableLike', format: ['camelCase'] },
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: 'parameter',
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'allow',
      },
      { selector: 'enumMember', format: ['UPPER_CASE'] },
      { selector: 'memberLike', format: ['camelCase', 'PascalCase', 'UPPER_CASE'] },
      {
        selector: 'memberLike',
        modifiers: ['private'],
        format: ['camelCase'],
        leadingUnderscore: 'allow',
      },
      { selector: 'typeParameter', format: ['PascalCase'], prefix: ['T'] },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
        custom: { regex: '^[IT][A-Z]', match: false },
      },
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: { regex: '^[IT][A-Z]', match: false },
      },
    ],

    '@typescript-eslint/restrict-template-expressions': [
      'warn',
      {
        allowNumber: true,
        allowBoolean: false,
        allowAny: false,
        allowNullish: false,
      },
    ],
    '@typescript-eslint/prefer-optional-chain': ['warn'],

    '@typescript-eslint/prefer-ts-expect-error': ['error'],
    '@typescript-eslint/promise-function-async': ['warn'],
    '@typescript-eslint/prefer-string-starts-ends-with': ['error'],
    '@typescript-eslint/prefer-reduce-type-parameter': ['warn'],
    '@typescript-eslint/prefer-includes': ['error'],
    '@typescript-eslint/prefer-for-of': ['error'],
    '@typescript-eslint/prefer-enum-initializers': ['warn'],
    '@typescript-eslint/no-loop-func': ['warn'],
  },
};
