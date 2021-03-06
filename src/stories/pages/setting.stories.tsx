import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import Setting from '@/pages/setting';

export default {
  title: 'Pages/Setting',
  component: Setting,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Setting>;

export const SettingPage: ComponentStoryObj<typeof Setting> = {};
