module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:import/typescript',
    './rules/typescript',
    './rules/tsdoc',
  ],
  overrides: [
    {
      files: ['*.d.ts'],
      rules: {
        'max-lines': 'off',
        '@typescript-eslint/naming-convention': 'off',
        '@import/unambiguous': 'off',
        '@import/no-default-export': 'off',
      }
    }
  ]
};
