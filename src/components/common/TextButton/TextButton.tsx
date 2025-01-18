import { ButtonHTMLAttributes } from 'react';

import { buttonStyle } from 'src/components/common/TextButton/TextButton.css';

export interface TextButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: 'small' | 'medium' | 'large' | 'xLarge';
  color?: 'red' | 'gray' | 'stroke';
  // isDisabled?: boolean;
}

const TextButton = ({
  size,
  color = 'red',
  // isDisabled = false,
  onClick,
  children,
}: TextButtonProps) => {
  return (
    <button
      className={buttonStyle({
        size,
        color,
        // isDisabled,
      })}
      onClick={onClick}
      // disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default TextButton;
