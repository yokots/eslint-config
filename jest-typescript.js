module.exports = {
  extends: ['./jest'],
  rules: {
    '@typescript-eslint/dot-notation': ['error', { allowPrivateClassPropertyAccess: true }],
    '@typescript-eslint/no-magic-numbers': 'off',
  }
}
