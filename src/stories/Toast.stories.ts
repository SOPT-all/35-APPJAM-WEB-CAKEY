import { Toast } from '@components';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    icon: {
      control: { type: 'radio' },
      options: ['like', 'save', 'error', 'check'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: 'like',
    message: '케이크를 찜했어요',
    isButton: true,
  },
};

export const StoreLike: Story = {
  args: {
    icon: 'save',
    message: '스토어를 찜했어요',
    isButton: true,
  },
};

export const Error: Story = {
  args: {
    icon: 'error',
    message: '연결에 문제가 생겼어요',
  },
};

export const Copy: Story = {
  args: {
    icon: 'check',
    message: '주문서가 복사되었어요',
  },
};

export const Unlike: Story = {
  args: {
    icon: 'check',
    message: '찜을 취소했어요',
  },
};
