import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import Home from '@/pages/index';

export default {
  title: 'Pages/Home',
  component: Home,
} as ComponentMeta<typeof Home>;

export const HomePage: ComponentStoryObj<typeof Home> = {};