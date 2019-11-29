# eslint-config-intracto

## Introduction

This repository contains sample linting configs for, .js and .ts files. Currently they are all based on recommended configs.

## How to use

### Installing (automatic)

To install this repo, run:

```bash
yarn global add install-peerdeps
install-peerdeps --dev "@yulian.alexeyev/eslint-config-intracto"
```

And then create a file `.eslintrc.json`. Add this config if your codebase is based on VanillaJS/ES6:

```json
{
  "extends": ["@yulian.alexeyev/eslint-config-intracto/js"]
}
```

And this config if you are using TypeScript:

```json
{
  "extends": ["@yulian.alexeyev/eslint-config-intracto/ts"]
}
```
