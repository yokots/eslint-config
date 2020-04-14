const prefixRules = require('./utils');

const offRules = {
  'max-lines-per-function': 'off',
  'no-magic-numbers': 'off',
  'unicorn/consistent-function-scoping': 'off',
};

const rules = {

};

const plugin = 'jest';

module.exports = {
  env: {
    jest: true,
  },
  plugins: [plugin],
  rules: Object.assign(offRules, prefixRules(rules, plugin)),
};
