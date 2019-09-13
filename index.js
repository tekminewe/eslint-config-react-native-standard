module.exports = {
  extends: [
    'airbnb',
    '@react-native-community',
  ],
  globals: {
    jest: true,
  },
  rules: {
    'prettier/prettier': ['error', { 'singleQuote': true }]
  },
};
