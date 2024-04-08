module.exports = {
  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:astro/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    ecmaVersion: 'latest',
  },
  plugins: ['prettier', 'solid', '@typescript-eslint'],
  overrides: [
    {
      "files": ['*.js', '*.jsx', '*.ts', '*.tsx'],
      "extends": ['plugin:solid/typescript']
    },
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: {},
    },
    
  ],
}
