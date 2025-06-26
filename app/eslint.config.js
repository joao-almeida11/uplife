import js from "@eslint/js";
import tanstackQuery from "@tanstack/eslint-plugin-query";
import vitest from "@vitest/eslint-plugin";
import perfectionist from "eslint-plugin-perfectionist";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      ...tanstackQuery.configs["flat/recommended"],
    ],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "@tanstack/query": tanstackQuery,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "@tanstack/query/exhaustive-deps": "error",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
  storybook.configs["flat/recommended"],
  {
    files: [".storybook/main.ts"],
    rules: {
      "storybook/no-uninstalled-addons": "off",
    },
  },
  perfectionist.configs["recommended-natural"],
  {
    files: ["**/*.test.ts", "**/*.spec.ts"],
    plugins: {
      vitest,
    },
    rules: {
      ...vitest.configs.recommended.rules,
    },
  },
);
