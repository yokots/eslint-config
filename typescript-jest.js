module.exports = {
  extends: ['./jest'],
  rules: {
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-magic-numbers': 'off',
    '@typescript-eslint/dot-notation': ['error', {
      allowPrivateClassPropertyAccess: true,
      allowProtectedClassPropertyAccess: true,
    }],
  }
};
