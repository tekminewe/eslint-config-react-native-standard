module.exports = {
  extends: [
    '@react-native-community',
  ],
  globals: {
    jest: true,
  },
  rules: {
    'prettier/prettier': ['error', { singleQuote: true, trailingComma: 'all' }]
  },
};
