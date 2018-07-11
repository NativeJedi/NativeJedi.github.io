module.exports = {
  extends: 'airbnb',
  rules: {
    'linebreak-style': 0,
    'global-require': 0,
    'no-plusplus': 0,
    'no-undef': 0,
    'eol-last': 0,
    'no-continue': 0,
    'func-names': 0,
    'prefer-arrow-callback': 0,
    'no-trailing-spaces': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
};
