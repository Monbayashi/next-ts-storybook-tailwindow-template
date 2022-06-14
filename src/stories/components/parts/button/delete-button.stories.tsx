import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { DeleteButton } from '@/components/parts/button/delete-button';

export default {
  title: 'Components/Parts/Button',
  component: DeleteButton,
} as ComponentMeta<typeof DeleteButton>;

export const Delete: ComponentStoryObj<typeof DeleteButton> = {};
