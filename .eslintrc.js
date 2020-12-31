module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-param-reassign': [ 2, { 'props': false } ],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'computed-property-spacing': [ 'error', 'always' ],
    'array-bracket-spacing': [ 'error', 'always', {
      'singleValue': true,
      'objectsInArrays': false,
      'arraysInArrays': false,
    } ],
    'object-curly-spacing': [ 2, 'always' ],
    'no-multi-spaces': [ 'error', { exceptions: { 'ImportDeclaration': true } } ],
    'no-duplicate-imports': [ 'error', { 'includeExports': true } ],
    'object-curly-newline': [ 'error', { 'ImportDeclaration': 'never' } ],
    'import/prefer-default-export': 'off',
    'prefer-promise-reject-errors': 'off',
    'no-trailing-spaces': 'off',
    'indent': [ 'error', 2 ],
    'max-len': [ 'error', 200 ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        'js': 'never',
        'jsx': 'never',
        'ts': 'never',
        'tsx': 'never',
      },
    ],
    'no-shadow': 'off',
    '@typescript-eslint/no-empty-function': [ 'error', { 'allow': [ 'arrowFunctions' ] } ],
    "@typescript-eslint/no-unused-vars": ["warn", { "ignoreRestSiblings": true }],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'vue/max-attributes-per-line': [ 'error', {
      'singleline': 1,
      'multiline': {
        'max': 1,
        'allowFirstLine': true,
      },
    } ],
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
