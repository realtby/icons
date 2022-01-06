module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    'storybook-css-modules-preset',
    '../addons/storybook-tsconfig-paths-addon',
  ],
  framework: '@storybook/react',
};
