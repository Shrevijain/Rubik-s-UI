/** @type { import('@storybook/react').Preview } */
// .storybook/preview.js
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
  box-sizing: border-box;
}
  body {
    font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
`;

export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles // Adds your GlobalStyle component to all stories
  })
];

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
};

export default preview;
