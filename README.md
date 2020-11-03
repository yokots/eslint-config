### [Style Guide](https://github.com/yokots/eslint-config/blob/master/CODE_STYLE_GUIDE.md)

### USAGE

- Install

  ```bash
  npm install eslint @yokots/eslint-config -D
  ```

- Config

  在项目目录下新建 `.eslintrc.json`

  ```json
  // for javascript web project
  {
    "extends": ["@yokots/eslint-config/base"],
    "ignorePatterns": [
      "docs/",
      "dist/",
      "coverage/",
      "node_modules/"
    ],
    "rules": {},
    "overrides": [
      {
        "files": ["*.spec.js", "*.test.js"],
        "extends": ["@yokots/eslint-config/jest"]
      }
    ]
  }

  // for javascript node project
  {
    "extends": [
      "@yokots/eslint-config/base",
      "@yokots/eslint-config/node"
    ],
    "ignorePatterns": [
      "docs/",
      "dist/",
      "coverage/",
      "node_modules/"
    ],
    "rules": {},
    "overrides": [
      {
        "files": ["*.spec.js", "*.test.js"],
        "extends": ["@yokots/eslint-config/jest"]
      }
    ]
  }

  // for typescript web project
  {
    "extends": [
      "@yokots/eslint-config/base",
      "@yokots/eslint-config/typescript"
    ],
    "ignorePatterns": [
      "docs/",
      "dist/",
      "coverage/",
      "node_modules/"
    ],
    "rules": {},
    "overrides": [
      {
        "files": ["*.spec.ts", "*.test.ts"],
        "extends": ["@yokots/eslint-config/typescript-jest"]
      }
    ]
  }

  // for typescript node project
  {
    "extends": [
      "@yokots/eslint-config/base",
      "@yokots/eslint-config/typescript",
      "@yokots/eslint-config/node"
    ],
    "ignorePatterns": [
      "docs/",
      "dist/",
      "coverage/",
      "node_modules/"
    ],
    "rules": {},
    "overrides": [
      {
        "files": ["*.spec.ts", "*.test.ts"],
        "extends": ["@yokots/eslint-config/typescript-jest"]
      }
    ]
  }
  ```

  [`eslint`配置参考](https://eslint.org/docs/user-guide/configuring);

  [`typescript-eslint/parse`配置参考](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser)

- Lint
  ```bash
  npx eslint --ext ts,js .
  ```
