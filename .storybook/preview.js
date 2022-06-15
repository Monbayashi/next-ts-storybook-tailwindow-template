import '../src/styles/globals.css';
import { initialize, mswDecorator } from 'msw-storybook-addon';
import { QueryClientProvider, QueryClient } from 'react-query';

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
