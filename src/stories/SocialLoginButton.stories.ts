import { fn } from '@storybook/test';

import type { Meta, StoryObj } from '@storybook/react';
import { SocialLoginButton } from '@components';
import { IcKakao } from '@svgs';

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
