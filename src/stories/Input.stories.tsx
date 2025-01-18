import { Input } from '@components';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Input.InputField> = {
  title: 'Components/InputField',
  component: Input.InputField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'text' },
    onChange: { action: 'changed' },
    placeholder: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: '',
    onChange: () => {},
    placeholder: '예: 01.03/금/16:30',
  },
};
