import TextButton from 'src/components/common/TextButton/TextButton';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  // 스토리북에 Common/Button 폴더 생성
  title: 'Components/TextButton',

  // Button 컴포넌트로 스토리 생성
  component: TextButton,
  parameters: {
    layout: 'centered',
  },

  // 문서 자동 생성
  tags: ['autodocs'],

  // Button 컴포넌트에서 쓰이는 props 값들의 타입 명시
  argTypes: {
    // radio 버튼
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
    },
    color: {
      control: { type: 'radio' },
      options: ['red', 'gray', 'stroke'],
    },
    // text 입력
    children: {
      control: { type: 'text' },
    },
    // true / false 선택
    // disabled: {
    //   control: { type: 'boolean' },
    // },
  },

  // 공통으로 쓰이는 props값 지정 || 기본값 지정
  args: {
    size: 'small',
    color: 'red',
    children: 'Button',
    // disabled: false,
  },
} satisfies Meta<typeof TextButton>;

// 이 meta 데이터로 스토리를 생성할거다 선언!
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    size: 'small',
    color: 'red',
    // disabled: false,
  },
};
