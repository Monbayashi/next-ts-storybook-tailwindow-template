import '../src/styles/globals.css';
import { initialize, mswDecorator } from 'msw-storybook-addon';

// MSW
initialize();
export const decorators = [mswDecorator];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
