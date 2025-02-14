module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020, // Ensures modern JavaScript support
    sourceType: 'module', // Allows "import/export"
    requireConfigFile: false, // Prevents Babel from requiring a config file
    babelOptions: {
      presets: ['@babel/preset-env', '@babel/preset-react'], // Added @babel/preset-env for ES support
    },
    ecmaFeatures: {
      jsx: true, // Enables JSX parsing
    },
  },
  env: {
    jest: true,
    browser: true, // Required for React
    es2021: true, // Ensures ES2021 features are supported
    node: true, // Allows use in Node.js
  },
  extends: [
    '@react-native',
    'plugin:prettier/recommended',
    'plugin:react/jsx-runtime',
  ],
  plugins: ['prettier', 'simple-import-sort'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'avoid',
        bracketSameLine: true,
        singleQuote: true,
        trailingComma: 'all',
        bracketSpacing: true,
      },
    ],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      rules: {
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              ['^react', '^@?\\w'], // React and external packages first
              ['^(@|components)(/.*|$)'], // Internal packages
              ['^\\u0000'], // Side effect imports
              ['^\\.\\.(?!/?$)', '^\\.\\./?$'], // Parent imports
              ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'], // Same-folder imports
              ['^.+\\.?(css)$'], // Style imports
            ],
          },
        ],
      },
    },
  ],
};
