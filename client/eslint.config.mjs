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
      "import/order": [
        "warn",
        {
          groups: [
            ["type"],
            ["builtin", "external"],
            ["internal"],
            ["sibling", "parent", "index"],
            ["object"]
          ],
          pathGroups: [
            {
              pattern: "~/**",
              group: "internal"
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
