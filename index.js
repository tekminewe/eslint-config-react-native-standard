module.exports = {
  extends: [
    'airbnb',
    '@react-native-community',
  ],
  globals: {
    jest: true,
    shallow: true,
  },
  rules: {
    'prettier/prettier': ['error', { singleQuote: true, trailingComma: 'all' }],
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }]
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
