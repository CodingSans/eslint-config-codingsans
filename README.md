[![npm version](http://img.shields.io/npm/v/@codingsans/eslint-config.svg?style=flat)](https://npmjs.org/package/@codingsans/eslint-config 'View this project on npm')
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

# eslint-config-codingsans

Sharable eslint config created and used by CodingSans

## ESLINT Version

This config created for eslint 8

## Installation

```
yarn add -D eslint prettier @codingsans/eslint-config
```

or

```
npm install --save-dev eslint prettier @codingsans/eslint-config
```

## Usage

Add `.eslintrc.json`:

```
{
  "extends": ["@codingsans/eslint-config/ts-recommended"]
}
```

Run:

```
eslint . --ext .ts
```

### Included Configurations

- `@codingsans/eslint-config/ts-recommended`: Recommended base configuration for typescript projects
- `@codingsans/eslint-config/next-recommended`: Recommended configuration for NextJS apps
- `@codingsans/eslint-config/angular-recommended`: Recommended configuration for Angular 12+ apps

## VSCode settings

Add the [dbaeumer.vscode-eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) extension to the vscode, and thats all.

You could add this to your settings, to have auto-format, and auto import organize.

```
{
  "[typescript]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "eslint.enable": true,
  "editor.codeActionsOnSave": [
    "source.organizeImports",
    "source.fixAll"
  ],
}
```
