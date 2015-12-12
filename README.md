# eslint-config-codingsans
Sharable eslint config created and used by CodingSans

## Installation

```
npm install --save-dev eslint-config-codingsans
```

## Usage

Choose a config:

- `codingsans` - Default config, alias for argon.
- `codingsans/argon` - Config created for working with Node 4.2 (Argon).
- More to come...

Then add it into `extends` field.

### Examples

.eslintrc

  ```json
{
  "extends": ["codingsans/argon"]
}
  ```
