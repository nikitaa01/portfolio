/** @type {import('prettier').Config} */
module.exports = {
  semi: false,
  trailingComma: 'all',
  tabWidth: 2,
  plugins: [require.resolve('prettier-plugin-astro'), require.resolve('prettier-plugin-tailwindcss')],
  overrides: [{ files: '*.astro', options: { parser: 'astro' } }],
  overrides: [{ files: ['*.json', '*.md', '*.toml', '*.yml'], options: { useTabs: false } }],
}