import '!style-loader!css-loader!sass-loader!../stories/styles/main.scss'

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    html: {
      prettier: {
        tabWidth: 4,
        useTabs: false,
        htmlWhitespaceSensitivity: 'strict',
      },
    },
}