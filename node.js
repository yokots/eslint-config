module.exports = {
  extends: ["./rules/node"],
  env: {
    browser: false,
    node: true,
    commonjs: true,
    es2020: true,
  },
  parserOptions: {
    sourceType: 'script',
  },
};
