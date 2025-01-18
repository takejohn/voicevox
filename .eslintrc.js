const vueEslintParser = "vue-eslint-parser";
const vueEslintParserOptions = {
  ecmaVersion: 2020,
  parser: "@typescript-eslint/parser",
};

/** @type {import('@typescript-eslint/utils').TSESLint.Linter.ConfigType} */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: ["import"],
  parser: vueEslintParser,
  parserOptions: vueEslintParserOptions,
  ignorePatterns: ["dist/**/*", "dist_*/**/*", "node_modules/**/*"],
  rules: {
    "import/order": "error",
  },
};
