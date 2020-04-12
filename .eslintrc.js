module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  rules: {
    // "sort-imports": "error",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-var-requires": "off",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/order": [
      "error",
      {
        alphabetize: { order: "asc" },
        groups: ["builtin", "external", "internal", "parent", "sibling", "index", "unknown"],
      },
    ],
    "react/prop-types": "off",
  },
  settings: { 
    react: {
      version: "detect",
    },
    "import/resolver": {
      "babel-module": {},
      typescript: {},
    },
  },
};
