import importPlugin from "eslint-plugin-import";
import { fixupPluginRules } from "@eslint/compat";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";

export default [
  {
    plugins: {
      import: fixupPluginRules(importPlugin),
    },
    languageOptions: {
      globals: globals.node,
      parser: tsParser,
    },
    files: ["**/*.ts", "**/*.mts"],
    ignores: ["dist/**/*", "dist_*/**/*", "node_modules/**/*"],
    rules: {
      "import/order": "error",
    },
  }
];
