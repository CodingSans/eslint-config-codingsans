# eslint-config-codingsans
Sharable eslint config created and used by CodingSans

## ESLINT Version

This config created for eslint 2.7.*

## Installation

```
npm install --save-dev eslint@2.7 eslint-config-codingsans
```

## Usage

Choose a config:

- `codingsans` - Default config, alias for argon.
- `codingsans/argon` - Config created for working with Node 4 (Argon).
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
