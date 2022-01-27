module.exports = {
    "stories": [
      "../stories/**/*.stories.mdx",
      "../stories/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    "addons": [
    {
      name: '@storybook/preset-scss',
      options: {
        cssLoaderOptions: {
           modules: true,
        },
        sassLoaderOptions: {
          additionalData: (content) => {
            // paths are relative to root dir in this case
            return `
              @import '../main.scss';
            `
          }
        }
      }
    },
      "@storybook/addon-links",
      "@storybook/addon-essentials",
      '@whitespace/storybook-addon-html',
    ],
    "framework": "@storybook/html"
}