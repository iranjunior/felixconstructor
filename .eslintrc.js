module.exports = {
  'env': {
    'commonjs': true,
    'es6': true,
    'node': true,
  },
  'extends': [
    'google', 'prettier'
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parserOptions': {
    'ecmaVersion': 2018,
  },
  'plugins':['prettier'],
  'rules': {
    'prettier/prettier': ['error']
  },
};
