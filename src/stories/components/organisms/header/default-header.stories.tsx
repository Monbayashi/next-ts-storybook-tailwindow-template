import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { DefaultHeader } from '@/components/organisms/header/default-header.organism';

export default {
  title: 'Components/Organisms/Header',
  component: DefaultHeader,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof DefaultHeader>;

export const Default: ComponentStoryObj<typeof DefaultHeader> = {};
