import eslintConfigPrettier from "eslint-config-prettier/flat"
import eslintPluginAstro from "eslint-plugin-astro"
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended"

export default [
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  eslintConfigPrettier,
  eslintPluginPrettierRecommended,
  {
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
    },
  },
]
