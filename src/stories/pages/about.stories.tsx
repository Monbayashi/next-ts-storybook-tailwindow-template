import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import About from '@/pages/about';

export default {
  title: 'Pages/About',
  component: About,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof About>;

export const AboutPage: ComponentStoryObj<typeof About> = {};
