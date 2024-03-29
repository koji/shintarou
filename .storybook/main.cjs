module.exports = {
  framework: '@storybook/react-vite',
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  features: {
    storyStoreV7: false,
  },
  async viteFinal(config) {
    return config
  },
  docs: {
    autodocs: true,
  },
  typescript: { reactDocgen: false },
}
