import '../src/styles/globals.css';
import { initialize, mswDecorator } from 'msw-storybook-addon';
import { QueryClientProvider, QueryClient } from 'react-query';
import * as nextImage from 'next/image';

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => <img {...props} />,
});

// React-query
const queryClient = new QueryClient();

// MSW
initialize();

export const decorators = [
  (Story) => (
    <QueryClientProvider client={queryClient}>
      <Story />
    </QueryClientProvider>
  ),
  mswDecorator,
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
