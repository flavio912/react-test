module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  plugins: ['react', 'prettier', 'react-hooks'],
  extends: ['airbnb', 'plugin:prettier/recommended', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    React: true,
    document: true,
    window: true,
    localStorage: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'quote-props': ['error', 'as-needed', { keywords: true }],
    'react/prefer-stateless-function': 'warn',
    'react/self-closing-comp': [
      'warn',
      {
        component: true,
        html: false,
      },
    ],
    'react/sort-comp': [
      1,
      {
        order: ['static-methods', 'lifecycle', 'everything-else', 'rendering'],
        groups: {
          rendering: ['/^render.+$/', 'render'],
        },
      },
    ],
    'react/require-default-props': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'react/prop-types': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-key': 'error',
    'react/jsx-wrap-multilines': ['off'],
    'react/jsx-props-no-spreading': 0,
    'import/prefer-default-export': 0,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
    'no-underscore-dangle': 'off',
    'no-plusplus': 'off',
    'react/jsx-filename-extension': 0,
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'react/jsx-closing-bracket-location': 0,
    'react/no-unescaped-entities': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    quotes: ['warn', 'single', { avoidEscape: true }],
    camelcase: 'off',
    'react/no-array-index-key': 'off',
    'import/extensions': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
