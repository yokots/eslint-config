module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:import/typescript',
    './rules/typescript',
    './rules/tsdoc',
  ],
};
