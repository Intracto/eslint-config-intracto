module.exports = {
  extends: [
    "eslint:recommended",
    "eslint-config-airbnb-base",
    "plugin:prettier/recommended"
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  env: {
    browser: true,
    node: true,
    es6: true
  }
};
