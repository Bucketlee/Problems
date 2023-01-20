// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 14,
    sourceType: 'module',
  },
  plugins: ['react-hooks', 'import', 'unused-imports', '@typescript-eslint'],
  rules: {
    'array-callback-return': 'off',
    'no-import-assign': 'off',
    'multiline-ternary': 'off',
    'prefer-regex-literals': 'off',
    'no-var': 'off',
    indent: 'off',
    'node/no-path-concat': 'off',
    'no-unneeded-ternary': 'off',
    'no-extra-semi': 'off',
    'no-use-before-define': 'off',
    'no-undef': 'error',
    'no-empty': 'off',
    'no-useless-escape': 'off',
    'comma-dangle': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-extra-semi': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/adjacent-overload-signatures': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'unused-imports/no-unused-imports': 2,
    'unused-imports/no-unused-vars': 1,
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'],
          ['index', 'sibling', 'parent', 'internal', 'object', 'type'],
        ],
      },
    ],
    '@typescript-eslint/member-ordering': [
      'error',
      {
        default: [
          'constructor',
          'public-instance-method',
          'private-instance-method',
        ],
      },
    ],
  },
  overrides: [
    {
      files: ['./src/domain/**'],
      rules: {
        'no-restricted-imports': ['error', { patterns: ['/**/data/**'] }],
      },
    },
    {
      files: ['./src/presentation/components/**'],
      rules: {
        'no-restricted-imports': ['error', { patterns: ['/**/data/**'] }],
      },
    },
  ],
}
