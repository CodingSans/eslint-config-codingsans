# eslint-config-codingsans
Sharable eslint config created and used by CodingSans

## ESLINT Version

This config created for eslint 1.10.*
If you want to use eslint 2+ you must wait, or use a later version of this package.

## Installation

```
npm install --save-dev eslint@1.10 eslint-config-codingsans
```

## Usage

Choose a config:

- `codingsans` - Default config, alias for argon.
- `codingsans/argon` - Config created for working with Node 4.2 (Argon).
- `codingsans/babel` - Config created for babel ES6.
- `codingsans/mochaTestExt` - Config created for mocha test folders (this is an extension config).
- More to come...

Then add it into `extends` field.

### Examples

.eslintrc

  ```json
{
  "extends": ["codingsans/argon"]
}
  ```
