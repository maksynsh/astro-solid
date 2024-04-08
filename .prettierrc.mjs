export default {
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss', 'prettier-plugin-classnames'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  endingPosition: 'absolute-with-indent',
  customAttributes: ['class'],
  singleQuote: true,
  printWidth: 100,
  semi: false,
  tabWidth: 2,
}
