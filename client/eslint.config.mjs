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
      "simple-import-sort": require("eslint-plugin-simple-import-sort"),
    },
    rules: {
      "simple-import-sort/imports": [
        "warn",
        {
          groups: [
            ["^type:\\s*@?\\w", "^type:\\s@/"],

            ["^react$", "^next", "^@?\\w"],

            [".*hook.*"],

            [".*(lib|utils).*"],

            [".*components.*"],

            ["^.+\\.s?css$"],
            ["^\\."]
          ],
        },
      ],
      "simple-import-sort/exports": "warn",
    },
  },
];

export default eslintConfig;
