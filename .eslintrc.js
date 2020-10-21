// https://eslint.org/docs/user-guide/configuring
module.exports = {
  env: {
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    "eslint:recommended"
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-new': 0,
    'no-undef': 0,
    'no-empty': 0,
    'no-unused-vars': 1,
    'no-dupe-keys': 0,
    'no-redeclare': 1,
    'no-sparse-arrays': 0,
    'no-prototype-builtins': 1,
    'no-useless-escape': 1,
    'vue/valid-v-for': 1,
    'vue/no-parsing-error': 0,
    'vue/no-use-v-if-with-v-for': 0,
  }
}
