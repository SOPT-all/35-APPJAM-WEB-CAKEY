import { Input } from '@components';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    inputLabel: { control: 'text' },
    value: { control: 'text' },
    onChange: { action: 'changed' },
    placeholder: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    inputLabel: '픽업 날짜/요일/시간(30분 단위로)',
    value: '',
    onChange: () => {},
    placeholder: '예: 01.03/금/16:30',
  },
};
