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
    'prettier/prettier': ['error', { singleQuote: true, trailingComma: 'all' }]
  },
};
