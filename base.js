module.exports = {
  extends: [
    './rules/import',
    './rules/unicorn',
    './rules/eslint',
  ],
  env: {
    browser: true,
    node: false,
    commonjs: false,
    es2020: true,
  },
  parserOptions: {
    sourceType: 'module',
  },
};
