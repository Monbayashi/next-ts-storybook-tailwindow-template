import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { rest } from 'msw';
import Home from '@/pages/index';

export default {
  title: 'Pages/Home',
  component: Home,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Home>;

export const HomePage: ComponentStoryObj<typeof Home> = {
  args: {
    book: {
      title: 'Loard of the Rings',
      imageUrl: '/book-cover.jpg',
      description:
        'The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien',
    },
  },
  parameters: {
    msw: {
      handlers: [
        rest.get('/api/reviews', (req, res, ctx) => {
          return res(
            ctx.json([
              {
                id: '60333292-7ca1-4361-bf38-b6b43b90cb16',
                author: 'John Maverick',
                text: 'Lord of The Rings, is with no absolute hesitation, my most favored and adored book by‑far. The triology is wonderful‑ and I really consider this a legendary fantasy series. It will always keep you at the edge of your seat‑ and the characters you will grow and fall in love with!',
              },
            ]),
          );
        }),
      ],
    },
  },
};
