# Eslint Config for React Native project
A hussle free eslint config setup for standard React Native project

## What is included
1. [Airbnb Javascript config](https://www.npmjs.com/package/eslint-config-airbnb)
2. [Eslint plugin for React](https://github.com/yannickcr/eslint-plugin-react)
3. [Eslint plugin for React Native](https://www.npmjs.com/package/eslint-plugin-react-native)
4. [Eslint plugin for React Hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
5. [Eslint plugin for Jest](https://www.npmjs.com/package/eslint-plugin-jest)
6. [Eslint plugin for Flowtype](https://www.npmjs.com/package/eslint-plugin-flowtype)

## Installation
1. Install all dependencies
```
yarn add -D eslint babel-eslint eslint-config-airbnb eslint-plugin-flowtype eslint-plugin-import eslint-plugin-jest eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-native eslint-config-react-native-standard
```

2. Use the config in `.eslintrc.js`
```
module.exports = {
  extends: [
    'eslint-config-react-native-standard',
  ],
}
```
3. Update scripts in `package.json`
```
"scripts": {
  ...
  "eslint": "node_modules/.bin/eslint \"./**/*.js\""
},
```
4. Run `yarn eslint` to lint your codes
