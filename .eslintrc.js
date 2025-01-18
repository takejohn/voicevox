/** @type {import('@typescript-eslint/utils').TSESLint.Linter.ConfigType} */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: ["import"],
  parser: "@typescript-eslint/parser",
  ignorePatterns: ["dist/**/*", "dist_*/**/*", "node_modules/**/*"],
  rules: {
    "import/order": "error",
  },
};
