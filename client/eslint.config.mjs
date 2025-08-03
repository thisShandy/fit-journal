import { FlatCompat } from "@eslint/eslintrc";
import { createRequire } from "node:module";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const require = createRequire(import.meta.url);

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  {
    plugins: {
      import: require("eslint-plugin-import"),
      "simple-import-sort": require("eslint-plugin-simple-import-sort"),
    },
    rules: {
      quotes: ["error", "double"],
      semi: ["error", "always"],
      "no-case-declarations": "off",
      indent: ["error", 2, { SwitchCase: 1 }],
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          "prefer": "type-imports"
        }
      ],
      "import/order": [
        "warn",
        {
          groups: [
            ["type"],
            ["builtin", "external"],
            ["internal"],
            ["object"],
            ["sibling"]
          ],
          pathGroups: [
            {
              pattern: ".*recoil.*",
              group: "internal",
              position: "after"
            },
            {
              pattern: ".*hook.*",
              group: "internal",
              position: "after"
            },
            {
              pattern: ".*(helper|util).*",
              group: "internal",
              position: "after"
            },
            {
              pattern: ".*(type|config).*",
              group: "internal",
              position: "after"
            },
            {
              pattern: "~/**",
              group: "internal",
              position: "after"
            },
            {
              pattern: "\".*(component|section|modal|kit|form|layout|view).*\"",
              group: "object",
              position: "after"
            },
            {
              pattern: "*.s?(a|c)ss",
              group: "sibling",
              position: "after"
            }
          ],
          pathGroupsExcludedImportTypes: ["type"],
          alphabetize: {
            order: "asc",
            caseInsensitive: true
          },
          "newlines-between": "always"
        }
      ],
    }
  }
];

export default eslintConfig;
