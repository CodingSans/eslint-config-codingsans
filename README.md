[![npm version](http://img.shields.io/npm/v/@codingsans/eslint-config.svg?style=flat)](https://npmjs.org/package/@codingsans/eslint-config "View this project on npm")
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)
[![Status](http://img.shields.io/travis/CodingSans/eslint-config-codingsans/master.svg?style=flat)](https://travis-ci.org/CodingSans/eslint-config-codingsans "See test builds")

# eslint-config-codingsans
Sharable eslint config created and used by CodingSans

## ESLINT Version

This config created for eslint 6/7

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
  "extends": ["@codingsans/eslint-config/typescript-recommended"]
}
```

Run:
```
eslint . --ext .ts
```
