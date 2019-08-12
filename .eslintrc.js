// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-new': 0,
    'indent': 0,
    'no-unused-vars': 0,
    'semi': 0,
    'quotes': 0,
    'object-curly-spacing': 0,
    'standard/object-curly-even-spacing': 0,
    'standard/array-bracket-even-spacing': 0,
    'standard/computed-property-even-spacing': 0,
    'standard/no-callback-literal': 0,
    "space-before-function-paren": 0,
    "eslint padded-blocks": 0,
    "no-trailing-spaces": 0
    // 'semi-spacing': 0,
    // "eol-last": 0
  }
}
