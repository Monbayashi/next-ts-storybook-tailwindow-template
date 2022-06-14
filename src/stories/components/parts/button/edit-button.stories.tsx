import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { EditButton } from '@/components/parts/button/edit-button';

export default {
  title: 'Components/Parts/Button',
  component: EditButton,
} as ComponentMeta<typeof EditButton>;

export const Edit: ComponentStoryObj<typeof EditButton> = {};
