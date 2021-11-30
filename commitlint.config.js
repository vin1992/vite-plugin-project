module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['feature', 'optimize', 'fix', 'delete', 'chore', 'docs', 'test', 'style', 'refactor']],
    'type-case': [2, 'always', ['lower-case']],
    'scope-empty': [2, 'never'],
    'scope-case': [2, 'always', ['lower-case', 'upper-case', 'camel-case']],
    'subject-empty': [2, 'never'],
  },
}
