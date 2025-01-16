import { Header } from '@components';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    bgColor: {
      control: { type: 'radio' },
      options: ['white', 'yellow'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    bgColor: 'white',
  },
};

export const Yellow: Story = {
  args: {
    bgColor: 'yellow',
  },
};
