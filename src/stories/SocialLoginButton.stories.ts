import { fn } from '@storybook/test';

import { SocialLoginButton } from '@components';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/SocialLoginButton',
  component: SocialLoginButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    platform: {
      control: 'select',
      options: ['kakao'],
    },
    children: {
      control: 'text',
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof SocialLoginButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    platform: 'kakao',
  },
};
