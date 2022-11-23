module.exports = {
  extends: ['./ts-recommended.js'],
  overrides: [
    {
      files: ['*.ts'],

      extends: [
        './ts-recommended.js',
        'plugin:@angular-eslint/recommended',
        'plugin:@angular-eslint/template/process-inline-templates',
      ],
    },
    {
      files: ['*.html'],
      extends: ['plugin:@angular-eslint/template/recommended'],
    },
  ],
};
