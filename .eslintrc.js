module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'comma-dangle': ['error', 'never'],
    'space-before-function-paren': ["error", {
      "anonymous": "never",
      "named": "never",
      "asyncArrow": "always"
    }],
    'no-multi-spaces': 'error',
    'no-useless-escape': 0,
    'no-empty': ['error', {
      'allowEmptyCatch': true
    }]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
