/**
 * More strict rules for ESLint, for a better code quality.
 * @type import('@antfu/eslint-config').Rules
 */
const rules = {
  'jsdoc/check-indentation': 'error',
  'jsdoc/require-jsdoc': [
    'warn',
    {
      require: {
        ArrowFunctionExpression: true,
        ClassDeclaration: true,
        FunctionDeclaration: true,
        FunctionExpression: true,
        MethodDefinition: true,
      },
    },
  ],
  'max-depth': [
    'error',
    4,
  ],
  'max-lines': [
    'error',
    200,
  ],
  'max-lines-per-function': [
    'warn',
    40,
  ],
  'style/array-bracket-newline': [
    'error',
    {
      minItems: 2,
      multiline: true,
    },
  ],
  'style/array-element-newline': [
    'error',
    {
      consistent: true,
      minItems: 4,
    },
  ],
  'style/curly-newline': [
    'error',
    {
      consistent: true,
      minElements: 2,
    },
  ],
  'ts/max-params': [
    'error',
    { max: 3 },
  ],
}

export default rules
