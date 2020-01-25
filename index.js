module.exports = {
  extends: [
    'airbnb',
    'plugin:jest/recommended',
    'plugin:react-native/all',
  ],
  globals: {
    __DEV__: true,
    fetch: false,
  },
  parserOptions: {
    sourceType: 'module',
  },
  plugins: [
    'react',
    'jest',
    'flowtype',
    'react-hooks',
  ],
  overrides: [
    {
      files: [
        '*.js'
      ],
      parser: 'babel-eslint',
      plugins: [
        'flowtype'
      ],
      extends: [
        'plugin:flowtype/recommended'
      ],
    },
    {
      files: [
        '*.ts',
        '*.tsx'
      ],
      parser: '@typescript-eslint/parser',
      plugins: [
        '@typescript-eslint/eslint-plugin'
      ],
      rules: {
        '@typescript-eslint/no-unused-vars': [
          'error',
          {argsIgnorePattern: '^_'},
        ],
        'no-unused-vars': 'off',
      },
    },
    {
      files: [
        '*.{spec,test}.{js,ts,tsx}',
        '**/__{mocks,tests}__/**/*.{js,ts,tsx}',
      ],
      env: {
        jest: true,
        'jest/globals': true,
      },
    },
  ],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react-native/no-raw-text': 0,
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx', '.tsx'] }],
    'react/jsx-props-no-spreading': 0,
    'no-underscore-dangle': ['error', { 'allow': ['__DEV__'] }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        'js': 'never',
        'jsx': 'never',
        'ts': 'never',
        'tsx': 'never'
      }
   ]
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