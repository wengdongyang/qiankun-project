module.exports = {
  root: true,
  env: {node: true},
  parserOptions: {parser: 'babel-eslint'},
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  rules: {
    'no-empty': 0,
    'no-unused-vars': 0,
    'vue/no-multiple-template-root': 0,
  },
};
