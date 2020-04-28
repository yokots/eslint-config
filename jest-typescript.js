module.exports = {
  extends: ['./jest'],
  rules:  {
    'dot-notation': ['error', { allowPrivateClassPropertyAccess: true }],
    '@typescript-eslint/no-magic-numbers': 'off',
  }
}