module.exports = {
  extends: [
    './typescript',
    './jest',
  ],
  rules: {
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-magic-numbers': 'off'
  }
};
