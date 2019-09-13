module.exports = {
  extends: [
    'airbnb',
    'plugin:jest/recommended',
    'plugin:flowtype/recommended',
    'plugin:react-native/all',
  ],
  globals: {
    '__DEV__': true,
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
    'no-underscore-dangle': ['error', { 'allow': ['__DEV__'] }],
  },
  settings: {
    'import/resolver': {
      'node': {
        'extensions': [
          '.js',
          '.android.js',
          '.ios.js',
          '.ts',
          '.tsx',
        ]
      },
    },
  },
};
