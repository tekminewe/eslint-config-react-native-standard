module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'plugin:jest/recommended',
    'plugin:flowtype/recommended',
    'plugin:react-native/all',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'jest',
    'flowtype',
    'react-hooks',
  ],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
  },
  settings: {
    'import/resolver': {
      'node': {
        'extensions': [
          '.js',
          '.android.js',
          '.ios.js'
        ]
      },
    },
  },
};